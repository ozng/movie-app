export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const convertMinutesToHour = (minute: number) => {
  return Math.floor(minute / 60) + "h " + (minute % 60) + "m";
};
