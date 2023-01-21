/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const container = `
  width: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: -1px 5px 16px -6px rgba(0, 0, 0, 0.57);
  border-radius: 32px;
  &:hover {
    top: -1px;
  }
`;

export const stylesTitle = css`
  font-weight: 400;
  font-size: 18px;
`;
export const paragraphLight = css`
  font-size: 14px;
  line-height: 1.5rem;
  font-weight: 300;
`;
export const userName = css`
  font-size: 14px;
  line-height: 1.5rem;
`;

export const stylesPostImg = css`
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
  object-fit: fit-content;
`;

export const stylesDiv = css`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
`;
export const stylesUserImg = css`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100px;
  margin-right: 10px;
`;

export const stylesUserInfoContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const stylesUserDiv = css`
  display: flex;
  align-items: center;
`;

export const timeSpan = css`
  font-weight: 400;
  font-size: 13px;
  margin-left: 5px;
`;
