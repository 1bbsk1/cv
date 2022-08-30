import { russianShortWeekDays } from "../constants/russian-short-week-days.js";

const getLastNDays = (daysNumber) => {
  const nLastDaysArray = Array.from(Array(daysNumber).keys())
    .reverse()
    .map((daysAgo) => {
      const day = new Date();
      day.setDate(day.getDate() - daysAgo);
      return {
        date: day.getDate(),
        weekDay: russianShortWeekDays[day.getDay()],
      };
    });

  return nLastDaysArray;
};

export { getLastNDays };
