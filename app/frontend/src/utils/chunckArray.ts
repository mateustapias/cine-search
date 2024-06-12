import { Movie } from '../../types';

const array = Array(30).fill(0);

const chunkArray = (chunkSizee: number, maxGroupss: number, arr: any[] = array)
: Movie[][] | Number[][] => {
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
