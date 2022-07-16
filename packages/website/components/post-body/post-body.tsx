
import { css } from '@emotion/css';
import type { NextPage } from 'next';
import { Author } from '../../interfaces/authors';
import { Post, PostWithData } from '../../interfaces/posts';
import PostCoverImage from '../post-cover-image/post-cover-image';
import PostFooter from '../post-footer/post-footer';


const PostBody = (props) => {
  const { 
    title,
    body,
    email,
  } = props;
  
  const articleStyle = `
    padding: 0 15px;

    h1 {
      color: rgb(18 71 52 / 1);
      font-size: 20px;
      margin-top: 0px;
    }

    p {
      font-size: 14px;

      &.email {
        margin: 15px 0 5px 0;
        font-size: 15px;
      }
    }
  `;

  return (
      <div className={css`${articleStyle}`}>
        <p className='email'>
          {email}
        </p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
  );
};

export default PostBody;
