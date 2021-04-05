export const calculateTimeLeft = (ms) => {
  return {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
    mins: Math.floor((ms / 1000 / 60) % 60),
    secs: Math.floor((ms / 1000) % 60),
  };
};

export const checkTwoDigits = (number) => {
  return (number < 10 ? "0" : "") + number;
};
