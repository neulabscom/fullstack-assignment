import { Author } from './Author';
import { EstimatedReadingTime } from './EstimatedReadingTime';

import { formatDate } from '../helpers/post';

import { PostProps } from '../types/post';

export const Post = (
  {
    post: {
      author,
      category,
      coverUrl,
      date,
      hasRedBorder,
      title
    },
  }: PostProps
) => {
  const formatedDate = formatDate(date);

  return (
    <article
      className={`
        relative
        h-[400px]
        cursor-pointer
        overflow-hidden
        rounded-postCard
        bg-white
        shadow-postCard
        duration-300
        ease-in-out
        hover:-translate-y-0.5
        lg:max-w-[360px]
        ${hasRedBorder && 'border-[3px] border-red-300'}
      `}
    >
      <img src={coverUrl} className="w-full h-[140px]" />

      <p
        className={`
          relative
          flex
          font-comfortaa
          font-light
          text-md
          text-black
          mt-3
          px-4
        `}
      >
        {category}
      </p>

      <p
        className={`
          my-1
          px-4
          text-left
          font-comfortaa
          font-bold
          text-1xl
          text-greenDark
          first-letter:uppercase
          line-clamp-4
        `}
      >
        {title}
      </p>

      <p
        className={`
          absolute
          bottom-[70px]
          left-0
          px-4
          font-comfortaa
          text-sm
          text-black
        `}
      >
        {`Publicato il: ${formatedDate}`}
      </p>

      <div
        className={`
          absolute
          bottom-0
          left-0
          flex
          w-full
          items-center
          justify-between
          p-4
        `}
      >
        <Author author={author} />
        <EstimatedReadingTime />
      </div>
    </article>
  );
};
