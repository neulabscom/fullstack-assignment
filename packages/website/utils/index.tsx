import moment from 'moment';

import { Post, PostWithUser, User } from '../types';

export const addUserInfo = (users: User[], posts: Post[]): PostWithUser[] => {
  const result = posts.map(post => {
    const user = users.find(user => user.id === post.userId);
    return { post, user };
  });

  return result;
};

export const formatDate = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};

export const generateRandomTimeLecture = (): string => {
  const time = Math.floor(Math.random() * 5) + 1;
  return `${time} min.`;
};

export const findShortestTriplet = (posts: PostWithUser[]): PostWithUser[] => {
  // time complexity O(n)
  // space complexity 0(1)
  let minSum = Number.MAX_VALUE;
  let triplet = [];
  for (let i = 0; i < posts.length - 2; i += 3) {
    const sum =
      posts[i].post.title.length +
      posts[i + 1].post.title.length +
      posts[i + 2].post.title.length;

    if (sum < minSum) {
      minSum = sum;
      triplet = [posts[i], posts[i + 1], posts[i + 2]];
    }
  }
  return triplet;
};
