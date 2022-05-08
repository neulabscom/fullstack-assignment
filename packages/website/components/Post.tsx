import Image from 'next/image';
import React from 'react'
import styles from "../css/post.module.css";

type Props = {
  category: string;
  author: string;
  title: string;
  authorID: number;
  postID: number;
}

const Post = ({ category, author, title, authorID, postID }: Props) => {
  return (
    <article className={styles.post} key={postID}>
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
            <div className={styles.row}>
              <Image
                src={"https://randomuser.me/api/portraits/men/" + authorID + ".jpg"}
                objectFit="cover"
                height="40px"
                width="40px"
                className={styles.avatar}
              />
              <p className={styles.author}>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post