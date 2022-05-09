import Image from 'next/image';
import React from 'react'
import styles from "../css/post.module.css";
import Avatar from './Avatar';

type Props = {
  category: string;
  author: string;
  title: string;
  authorID: number;
  postID: number;
  highlight: boolean;
}

const Post = ({ category, author, title, authorID, postID, highlight }: Props) => {
  return (
    <article className={styles.post + " " + (highlight ? styles.redBorder : "")} key={postID}>
      <Image
        src="https://picsum.photos/200/300"
        objectFit="cover"
        height="140px"
        width="100%"
      />
      <div className={styles.articleBody}>
        <div>
          <h3 className={styles.subTitle}>{category}</h3>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div>
          <p className={styles.published}>Pubblicato il: 5/5/2022</p>
          <div className={styles.credits}>
            <Avatar userID={authorID} name={author} />
            <p className={styles.time}>5 min.</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post