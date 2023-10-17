import { intervalToDuration } from 'date-fns';

const convertDuration = (seconds: number | undefined) => {
  if (!seconds) return '';

  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  let formatted = '';

  if (duration.hours && duration.hours > 0) formatted = `${duration.hours} h `;
  if (duration.minutes && duration.minutes > 0)
    formatted += `${duration.minutes} ${duration.minutes === 1 ? 'min' : 'mins'}`;

  return formatted;
};

const dateTool = {
  convertDuration,
};

export default dateTool;
