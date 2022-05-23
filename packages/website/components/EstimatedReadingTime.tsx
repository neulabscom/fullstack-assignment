import { ClockIcon } from './ClockIcon';

import { getDuration } from '../helpers/post';

export const EstimatedReadingTime = () => {
  const mockDuration = getDuration();

  return (
    <div className="relative -right-1 flex items-center text-xs font-bold">
      <ClockIcon
        className={`
          relative
          -top-1
          h-10
          w-10
          fill-current
          text-greenDark
        `}
      />
      <p className="min-w-[40px]">{`${mockDuration} min.`}</p>
    </div>
  );
};
