export interface DesignItem {
  id: number;
  title: string;
  category: string;
  img: string;
}

export const DESIGN_CATEGORIES = [
  'All',
  'Event Design',
  'Branding',
  'Print',
  'Typography',
  'Illustration',
  'Digital Art',
  'Photography',
  'Mixed Media',
  'Concept Art',
  'Environmental',
  'Lighting Study',
  'Character Design'
];

// This is a helper to generate placeholder data for the user to replace
const generatePlaceholderDesigns = (count: number): DesignItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Design Project ${i + 1}`,
    category: DESIGN_CATEGORIES[Math.floor(Math.random() * (DESIGN_CATEGORIES.length - 1)) + 1],
    img: `https://picsum.photos/seed/design${i + 1}/800/1200`,
  }));
};

// Start with some initial data, but user can expand this
export const ALL_DESIGNS: DesignItem[] = [
  { id: 1, title: 'Poster 1', category: 'Graphic Design', img: 'newposters/01.png' },
  { id: 2, title: 'Poster 2', category: 'Graphic Design', img: 'newposters/02.png' },
  { id: 3, title: 'Poster 3', category: 'Graphic Design', img: 'newposters/03.png' },
  { id: 4, title: 'Poster 4', category: 'Graphic Design', img: 'newposters/04.png' },
  { id: 5, title: 'Poster 5', category: 'Graphic Design', img: 'newposters/05.png' },
  { id: 6, title: 'Poster 6', category: 'Graphic Design', img: 'newposters/06.jpg' },
  { id: 7, title: 'Poster 7', category: 'Graphic Design', img: 'newposters/07.png' },
  { id: 8, title: 'Poster 8', category: 'Graphic Design', img: 'newposters/08.png' },
  { id: 9, title: 'Poster 9', category: 'Graphic Design', img: 'newposters/09.png' },
  { id: 10, title: 'Poster 10', category: 'Graphic Design', img: 'newposters/10.png' },
  { id: 11, title: 'Poster 11', category: 'Graphic Design', img: 'newposters/11.jpg' },
  { id: 12, title: 'Poster 12', category: 'Graphic Design', img: 'newposters/12.jpg' },
  { id: 13, title: 'Poster 13', category: 'Graphic Design', img: 'newposters/13.jpg' },
  { id: 14, title: 'Poster 14', category: 'Graphic Design', img: 'newposters/14.png' },
  { id: 15, title: 'Poster 15', category: 'Graphic Design', img: 'newposters/15.png' },
  { id: 16, title: 'Poster 16', category: 'Graphic Design', img: 'newposters/16.png' },
  { id: 17, title: 'Poster 17', category: 'Graphic Design', img: 'newposters/17.png' },
  { id: 18, title: 'Poster 18', category: 'Graphic Design', img: 'newposters/18.png' },
  { id: 19, title: 'Poster 19', category: 'Graphic Design', img: 'newposters/19.png' },
  { id: 20, title: 'Poster 20', category: 'Graphic Design', img: 'newposters/20.png' },
  { id: 21, title: 'Poster 21', category: 'Graphic Design', img: 'newposters/21.png' },
  { id: 22, title: 'Poster 22', category: 'Graphic Design', img: 'newposters/22.png' },
  { id: 23, title: 'Poster 23', category: 'Graphic Design', img: 'newposters/23.png' },
  { id: 24, title: 'Poster 24', category: 'Graphic Design', img: 'newposters/24.png' },
  { id: 25, title: 'Poster 25', category: 'Graphic Design', img: 'newposters/25.png' },
  { id: 26, title: 'Poster 26', category: 'Graphic Design', img: 'newposters/26.png' },
  { id: 27, title: 'Poster 27', category: 'Graphic Design', img: 'newposters/27.png' },
  { id: 28, title: 'Poster 28', category: 'Graphic Design', img: 'newposters/28.jpeg' },
  ...generatePlaceholderDesigns(100)
];
