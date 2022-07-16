
import { css } from '@emotion/css';
import type { NextPage } from 'next';
import { Author } from '../../interfaces/authors';
import { Post, PostWithData } from '../../interfaces/posts';
import PostCoverImage from '../post-cover-image/post-cover-image';


const PostFooter = (props) => {
  const { 
    author,
  } = props;

  const { name, email, id } = author;

  const userAvatarUrl: string = `https://randomuser.me/api/portraits/men/${id}.jpg`;
  
  const footerStyle = `
    padding: 0 15px 15px 15px;
    overflow: hidden;
    border-radius: 0 0 30px 30px;
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    margin-top: auto;

    .author {
      display: flex;
      align-items: center;
      font-size: 14px;

      .avatar {
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    .email {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  `;

  return (
      <div className={css`${footerStyle}`}>
        <div className='author'>
          <div>
            <img className='avatar' src={userAvatarUrl}/>
          </div>
          <div>
            {name}
          </div>
        </div>
        {/* <div className='email'>
          {email}
        </div> */}
      </div>
  );
};

export default PostFooter;
