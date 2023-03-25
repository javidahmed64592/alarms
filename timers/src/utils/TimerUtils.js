export const getTotalTime = (seconds, minutes, hours) => {
  return seconds + minutes * 60 + hours * 3600;
};

const parseTime = (total) => {
  const hours = Math.floor(total / 3600);
  const remainingSeconds = total % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};

export const parseTimeText = (total) => {
  const { hours, minutes, seconds } = parseTime(total);
  const hoursText = zeroFill(hours);
  const minutesText = zeroFill(minutes);
  const secondsText = zeroFill(seconds);
  return {
    hoursText: hoursText,
    minutesText: minutesText,
    secondsText: secondsText,
  };
};

export const zeroFill = (value) => (value > 9 ? value : "0" + value);
