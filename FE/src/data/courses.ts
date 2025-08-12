export type Course = 'math' | 'cs' | 'algo' | 'cloud';

// id- db, name- for the user
export const courses: { id: Course; name: string }[] = [
  { id: 'math', name: 'Mathematics 1' },
  { id: 'cs', name: 'Introduction to CS' },
  { id: 'algo', name: 'Algorithms' },
  { id: 'cloud', name: 'Cloud Services' },
];
