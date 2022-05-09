import { Post } from "../types/post";

export const getIndexOfShortestTripletTitle = (posts: Post[]) => {
  let checkSum = -1;
  let resIndex = 0;
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    const post2 = posts[index + 1];
    const post3 = posts[index + 2];
    if (!post2 || !post3) break;

    const post2TitleLength = post2.title.length;
    const post3TitleLength = post3.title.length;

    if (post3TitleLength > checkSum && checkSum !== -1) index += 2;
    else if (post2TitleLength > checkSum && checkSum !== -1) index += 1;
    else {
      const adjacentChecksum = post.title.length + post2.title.length + post3.title.length;
      if (checkSum > adjacentChecksum || checkSum === -1) {
        checkSum = adjacentChecksum
        resIndex = index
      }
    }
  }
  return resIndex
}