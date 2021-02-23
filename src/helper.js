const getDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  let date;

  if (m < 10) {
    date = yyyy + "-" + "0" + m + "-" + d;
  } else {
    date = yyyy + "-" + m + "-" + d;   
  }

  return date
};

export { getDate };
