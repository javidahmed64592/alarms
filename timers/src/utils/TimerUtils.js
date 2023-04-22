export const HMSToTotal = (hours, minutes, seconds) => {
  return parseInt(seconds) + parseInt(minutes) * 60 + parseInt(hours) * 3600;
};

const totalToHMS = (total) => {
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
  const { hours, minutes, seconds } = totalToHMS(total);
  const hoursText = zeroFill(hours);
  const minutesText = zeroFill(minutes);
  const secondsText = zeroFill(seconds);
  return {
    hoursText: hoursText,
    minutesText: minutesText,
    secondsText: secondsText,
  };
};

export const zeroFill = (value) => {
  value = parseInt(value);
  value = value > 9 ? value : "0" + value;
  return value;
};

export const setMaxValue = (value, maxValue) => {
  return zeroFill(Math.min(value, maxValue));
};

export const sortListByTime = (listToSort) => {
  const newList = listToSort.sort(
    (timerA, timerB) => timerA.setTime - timerB.setTime
  );
  return newList;
};
