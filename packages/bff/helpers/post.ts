import axios from 'axios';

import { Author, Post } from '../types';

export const getAuthors = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data }: { data: Author[] } = await axios.get(url);
  
  return data;
};

const MINIMUM_ADJACENT_POSTS = 2;

/**
 * Extract IDs of adjacent posts with the smallest sum of their title lengths.
 *  - default number of adjacent posts: 2,
 *  - min number of adjacent posts: 2,
 *  - max number of adjacent posts: length of posts - 1
 *
 * @param posts
 * @param numberOfAdjacentPosts
 * @returns
 */
export const getIdsOfPostsWithRedBorder = (
  posts: Post[],
  numberOfAdjacentPosts = MINIMUM_ADJACENT_POSTS
) => {
  const idsOfPostsWithRedBorder: number[] = [];
  const isPossibleToExtractIds =
    numberOfAdjacentPosts >= MINIMUM_ADJACENT_POSTS &&
    numberOfAdjacentPosts < posts.length - 1;

  if (isPossibleToExtractIds) {
    let firstPosition = 0;
    let minimumLenghtsSum = 0;

    for (let i = 0; i < numberOfAdjacentPosts; ++i) {
      minimumLenghtsSum += posts[i].title.length;
    }

    let previousLengthsSum = minimumLenghtsSum;

    for (let i = 0; i < posts.length - numberOfAdjacentPosts; ++i) {
      const actualLengthsSum =
        previousLengthsSum -
        posts[i].title.length +
        posts[i + numberOfAdjacentPosts].title.length;

      if (actualLengthsSum < minimumLenghtsSum) {
        firstPosition = i + 1;
        minimumLenghtsSum = actualLengthsSum;
      }

      previousLengthsSum = actualLengthsSum;
    }

    for (let i = 0; i < numberOfAdjacentPosts; ++i) {
      idsOfPostsWithRedBorder.push(posts[firstPosition + i].id);
    }
  }

  return idsOfPostsWithRedBorder;
};
