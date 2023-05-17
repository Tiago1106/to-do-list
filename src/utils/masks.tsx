export const handleHourChange = (text: string) => {
  const formattedTime = text.replace(/^(\d{0,2})(\d{0,2})/, (match, p1, p2) => {
    if (p1 && p2) {
      return p1 + ':' + p2;
    } else if (p1) {
      return p1;
    } else {
      return '';
    }
  });
  return(formattedTime);
};

export const handleDateChange = (text: string) => {
  const formattedTime = text.replace(/^(\d{0,2})(\d{0,2})/, (match, p1, p2) => {
    if (p1 && p2) {
      return p1 + '/' + p2;
    } else if (p1) {
      return p1;
    } else {
      return '';
    }
  });
  return(formattedTime);
};