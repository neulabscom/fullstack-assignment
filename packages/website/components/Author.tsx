import { AuthorProps } from '../types/author';

export const Author = ({ author: { avatarUrl, email, name } }: AuthorProps) => (
  <div className="flex items-center">
    <img src={avatarUrl} className="mr-1 h-10 w-10 rounded-full" />
    <p className="text-sm">
      {name}
      <p className="text-xs">{email}</p>
    </p>
  </div>
);
