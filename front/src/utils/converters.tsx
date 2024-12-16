export const renderDate = (date: string) => {
  if (!date) {
    return "";
  }

  const dateObject = new Date(date);

  if (isNaN(dateObject.getTime())) {
    // check if the actual value can be converted to a date
    return "";
  }

  return `${dateObject.getDate()} / ${
    dateObject.getMonth() + 1
  } / ${dateObject.getFullYear()}`;
  //getMonth is 0 based, so it needs a +1 on it
};
