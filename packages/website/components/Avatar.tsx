import Image from 'next/image';
import React from 'react'
import styles from "../css/post.module.css";

type Props = {
  userID: number;
  name: string;
}

const Avatar = ({ userID, name }: Props) => {
  return (
    <div className={styles.row}>
      <Image
        src={"https://randomuser.me/api/portraits/men/" + userID + ".jpg"}
        objectFit="cover"
        height="40px"
        width="40px"
        className={styles.avatar}
      />
      <p className={styles.author}>{name}</p>
    </div>
  )
}

export default Avatar