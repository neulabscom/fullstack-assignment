
import { css } from '@emotion/css';
import type { NextPage } from 'next';
import { Author } from '../../interfaces/authors';
import { Post, PostWithData } from '../../interfaces/posts';
import PostBody from '../post-body/post-body';
import PostCoverImage from '../post-cover-image/post-cover-image';
import PostFooter from '../post-footer/post-footer';


const PostArticle = (props) => {
  const { 
    id, 
    title,
    author,
    body,
    isShortest,
  } = props;

  const borderIfShortest = isShortest ? 'border: 3px solid red;' : '';
  
  const articleStyle = `
    display: flex;
    flex-direction: column;
    border-radius: 35px;
    margin: 0 40px 40px 0;
    max-width: 304px;
    box-shadow: 0 4px 2px -2px #80808061;

    position: relative;
    top: 0;
    transition: top ease 0.5s;

    &:hover {
      top: -5px;
    }

    ${borderIfShortest}
  `;

  return (
      <article className={css`${articleStyle}`} key={id}>
        <PostCoverImage postId={id} ></PostCoverImage>
        <PostBody title={title} body={body} email={author?.email}></PostBody>
        <PostFooter author={author}></PostFooter>
      </article>
  );
};

export default PostArticle;
