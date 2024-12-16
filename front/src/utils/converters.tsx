export const renderDate = (date: string) => {
    if (!date) {
      return "";
    }
    const dateObject = new Date(date);
    return `${dateObject.getDate()} - ${dateObject.getMonth()} - ${dateObject.getFullYear()}`;
  };