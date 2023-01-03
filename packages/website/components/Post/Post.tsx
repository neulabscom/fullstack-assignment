import { css } from '@emotion/react'
import { IPost } from '../../models/IPosts.model';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

interface PostProps {
  post: IPost;
  highlighted: boolean;
}

const wrapperStyle = (highlight: boolean) => css`
  border: ${highlight ? '3px solid red' : 'none'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 304px;
  border-radius: 25px;
  box-shadow: 0px 5px 6px -6px black;
  overflow: hidden;
  cursor: pointer;
  animation-duration: 0.5s;
  animation-name: reset;
  :hover {
    animation-name: move;
    animation-timing-function: ease;
    animation-fill-mode: forwards;  
  }
  @keyframes move {
    0%   { transform: translateY(0); }
    100%  { transform: translateY(-3px); }
  }
  @keyframes reset {
    100%   { transform: translateY(0); }
    0%  { transform: translateY(-3px); }
  }
`;

const categoryStyle = css`
  padding: 0 16px; 
  margin-top: 12px;
  font-size: 15px;
  line-height: 23px;
  font-weight: 300;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  padding: 0 16px;
  margin: 4px 0;
  :first-letter {
    text-transform: uppercase;
  }
`;

const dateStyle = css`
  line-height: 20px;
  padding: 0 16px;
`;

const bottomStyle = css`
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const userStyle = css`
  display: flex;
  align-items: center;
`;

const avatarStyle = css`
  border-radius: 100%;
  margin-right: 4px;
  width: 40px;
  height: 40px;
`;

const timeStyle = css`
  margin-left: 4px;
  font-size: 13px;
`;

const Post: React.FC<PostProps> = ({ post, highlighted }) => {
  const {
    userId,
    id,
    title,
    category,
    body,
    date,
  } = post;
  return (
    <div css={wrapperStyle(highlighted)}>
      <div>
        <img src={`https://picsum.photos/id/${id}/304/140`} />
        <div css={categoryStyle}>{category}</div>
        <h3 css={titleStyle}>{title}</h3>
      </div>
      <div>
        <div css={dateStyle}>Pubblicato il: {new Intl.DateTimeFormat('it-IT').format(new Date(date))}</div>
        <div css={bottomStyle}>
          <div css={userStyle}>
            <img css={avatarStyle} src={`https://randomuser.me/api/portraits/men/${userId}.jpg`} />
            <div>Nome Cognome</div>
          </div>
          <div css={userStyle}>
            <AccessAlarmIcon fontSize='large' />
            <span css={timeStyle}>5 min.</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post;