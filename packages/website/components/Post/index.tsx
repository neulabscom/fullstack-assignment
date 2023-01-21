/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

import SvgTimeIcon from '../../images/Time';
import { PostWithUser } from '../../types';
import { formatDate, generateRandomTimeLecture } from '../../utils';
import {
  container,
  paragraphLight,
  stylesDiv,
  stylesPostImg,
  stylesTitle,
  stylesUserDiv,
  stylesUserImg,
  stylesUserInfoContainer,
  timeSpan,
  userName,
} from './styles';

const Post = ({
  data,
  border,
}: {
  data: PostWithUser;
  border?: boolean;
}): JSX.Element => {
  return (
    <div
      css={css`
        ${container}
        ${border && 'border: 3px solid red'}
      `}
    >
      <img
        css={stylesPostImg}
        width={300}
        height={140}
        alt="post"
        src={`https://picsum.photos/300/140/?random&t=${data.post.id}`}
      />
      <div css={stylesDiv}>
        <p css={paragraphLight}>{data.post.category}</p>
        <h1 css={stylesTitle}>{data.post.title}</h1>
        <p css={paragraphLight}>{`Pubblicato il: ${formatDate(
          data.post.date
        )}`}</p>
        <div css={stylesUserInfoContainer}>
          <div css={stylesUserDiv}>
            <img
              css={stylesUserImg}
              src={`https://randomuser.me/api/portraits/men/${data.user.id}.jpg`}
              alt="user profile"
            />
            <span css={userName}>{data.user.name}</span>
          </div>
          <div css={stylesUserDiv}>
            <SvgTimeIcon />
            <span css={timeSpan}>{generateRandomTimeLecture()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
