export const handleHourChange = (text: string) => {
  const formattedTime = text.replace(/^(\d{0,2})(\d{0,2})/, (match, p1, p2) => {
    if (p1 && p2) {
      const hour = parseInt(p1);
      const minute = parseInt(p2);
      if (hour > 23) {
        p1 = '23';
      }
      if (minute > 59) {
        p2 = '59';
      }
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
  let formattedDate = text;

    if (text.length === 3 && !text.includes('/')) {
      // Insere a barra após o dia
      formattedDate = text.slice(0, 2) + '/' + text.slice(2);
    } else if (text.length === 6 && !text.includes('/', 2)) {
      // Insere a barra após o mês
      formattedDate = text.slice(0, 5) + '/' + text.slice(5);
    }

    const day = parseInt(formattedDate.slice(0, 2));
    const month = parseInt(formattedDate.slice(3, 5));

    if (day > 31) {
      formattedDate = '31' + formattedDate.slice(2);
    }

    if (month > 12) {
      formattedDate = formattedDate.slice(0, 3) + '12' + formattedDate.slice(5);
    }
  return(formattedDate);
};