const useDate = () => {
  let actualDate = new Date();

  let month = "Július ";
  if (actualDate.getMonth === 8) {
    month = "Augusztus ";
  }
  let actualDay = month + actualDate.getDate() + ".";
  let year = actualDate.getFullYear();

  let mins = [];
  let hours = [];
  let days = [];
  for (let i = 0; i <= 59; i++) {
    if (i < 10) {
      i = "0" + i;
    }
    mins.push(i);
  }
  for (let i = 0; i <= 23; i++) {
    if (i < 10) {
      i = "0" + i;
    }
    hours.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    days.push("Július " + i + ".");
  }
  for (let i = 1; i <= 31; i++) {
    days.push("Augusztus " + i + ".");
  }
  return { mins, hours, days, actualDay, year };
};

export default useDate;
