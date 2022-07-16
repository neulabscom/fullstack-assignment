
import { css } from '@emotion/css';
import type { NextPage } from 'next';
import { Author } from '../../interfaces/authors';
import { Post, PostWithData } from '../../interfaces/posts';


const PostCoverImage = (props: any) => {

  
  const { postId } = props;
  const coverStyle = `
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 30px 30px 0 0;
    max-height: 140px;

    img {
      display: flex;
      position: relative;
      width: 100%;
    }
  `;
  const randomCoverUrl = `https://picsum.photos/seed/${postId}/600/280`
  return (
      <div className={css`${coverStyle}`}>
        <img src={randomCoverUrl}/>
      </div>
  );
};

export default PostCoverImage;
