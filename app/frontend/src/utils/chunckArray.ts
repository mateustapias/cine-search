import { Movie } from '../../types';

const chunkArray = (arr: Movie[], chunkSizee: number, maxGroupss: number): Movie[][] => {
  const chunkedArray = [];
  let groupsCount = 0;

  for (let i = 0; i < arr.length; i += chunkSizee) {
    if (groupsCount < maxGroupss) {
      chunkedArray.push(arr.slice(i, i + chunkSizee));
      groupsCount += 1;
    }
  }

  return chunkedArray;
};

export default chunkArray;
