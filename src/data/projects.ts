export interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
  tags: string[];
  github?: string;
  demo?: string;
  img: string;
  color?: 'cyan' | 'purple' | 'amber' | 'default';
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Pokerun',
    desc: 'This game was created to compete in GAME FORGE by IEEE WIE AG MITS.',
    icon: '🎮',
    tags: ['Scratch'],
    demo: 'https://scratch.mit.edu/projects/1298143660',
    img: '/project/project1.png',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Obstacle Detection Rover',
    desc: 'An obstacle detection rover I built for my college exhibition.',
    icon: '🤖',
    tags: ['Arduino'],
    img: '/project/project2.jpeg',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Mone Happy Ano',
    desc: 'A small project inspired by Speedometer, a stress-detection webpage created by OPPAM.',
    icon: '🧠',
    tags: ['HTML', 'CSS', 'JS'],
    demo: 'https://christy-basil-anil.github.io/mentalhealthday/',
    img: '/project/project3.png',
    color: 'amber',
  },
  {
    id: 4,
    title: 'FEARFORGE',
    desc: 'A game I developed in the FearForge Gaming Hackathon.',
    icon: '⚔️',
    tags: ['Scratch'],
    demo: 'https://scratch.mit.edu/projects/1304513915',
    img: '/project/project4.jpg',
    color: 'default',
  },
  {
    id: 5,
    title: 'Netflix Clone',
    desc: 'Netflix clone I built in a bootcamp.',
    icon: '🎬',
    tags: ['HTML', 'CSS', 'JS'],
    demo: 'https://netflixclone-tan-one.vercel.app/',
    img: '/project/project5.png',
    color: 'default',
  },
];
