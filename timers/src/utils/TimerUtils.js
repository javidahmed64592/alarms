export const getTimeRemaining = (deadline) => {
  const total = (Date.parse(deadline) - Date.parse(new Date())) / 1000;
  const { hours, minutes, seconds } = parseTime(total);
  return {
    total,
    hours,
    minutes,
    seconds,
  };
};

export const parseTime = (total) => {
  const seconds = Math.floor(total % 60);
  const minutes = Math.floor((total / 60) % 60);
  const hours = Math.floor((total / 60 / 60) % 24);
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
