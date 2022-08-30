import { russianMonths } from "../constants/russian-months.js";

const dateConverter = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = russianMonths[dateObject.getMonth() - 1];
  const year = 1900 + dateObject.getYear();
  const dateString = `${day} ${month}, ${year}`;

  return dateString;
};

export { dateConverter };
