const min_animation_time = 6;
const max_animation_time = 8;

const particlesData = [
  {
    path: 'https://github.com/hionjk/podarok_dlia_mileni/blob/main/images/snowflake-6.png',
    minWidth: 24,
    maxWidth: 32,
  },
  {
    path: 'https://github.com/hionjk/podarok_dlia_mileni/blob/main/images/snowflake-5.png?raw=true',
    minWidth: 24,
    maxWidth: 32,
  },
];

function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );

  if (isMobile) {
    return 'mobile';
  } else {
    return 'desktop';
  }
}

const LIMIT_PARTICLES = getDeviceType() == 'mobile' ? 25 : 30;

const checkLimit = () => {
  return (
    Array.from(document.querySelectorAll('.particle')).length >= LIMIT_PARTICLES
  );
};

const randomParticle = () => {
  const randData =
    particlesData[Math.floor(Math.random() * particlesData.length)];
  return randData;
};

const createParticle = ({ path, minWidth, maxWidth }) => {
  const particle = document.createElement('img');
  particle.src = path;
  particle.style.width =
    Math.random() * (maxWidth - minWidth) + minWidth + 'px';
  particle.style.left =
    Math.random() * document.documentElement.clientWidth + 'px';
  particle.className = 'particle';
  particle.style.animationDuration =
    Math.random() * (max_animation_time - min_animation_time) +
    min_animation_time +
    's';

  particle.style.zIndex = Math.random() > 0.5 ? 3 : 1;

  particle.onclick = (e) => {
    e.target.style.scale = '0';
    particle.ontransitionend = (e) => {
      e.target.remove();
    };
  };
  particle.onanimationend = (e) => {
    e.target.remove();
  };

  return particle;
};

setInterval(() => {
  console.log(checkLimit());
  if (checkLimit()) return;

  const particleData = randomParticle();
  const particle = createParticle(particleData);
  document.body.appendChild(particle);
}, 600);
