export const formatDate = (date: string) =>
  date.split('T')[0].split('-').reverse().join('/');

export const getDuration = (min: number = 1, max: number = 15) =>
  Math.floor(Math.random() * (max - min) + min);
