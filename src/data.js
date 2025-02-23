export const rateLimitMins = [
  1, 1, 1, 1, 6, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
  60, 60, 60, 60, 0.6, 0.6, 0.6, 0.6, 6, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
  60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
];
// import { rateLimitMins } from "./data";

export const hourDay = [
  "2024/01/01 0:00",
  "2024/01/01 1:00",
  "2024/01/01 2:00",
  "2024/01/01 3:00",
  "2024/01/01 4:00",
  "2024/01/01 5:00",
  "2024/01/01 6:00",
  "2024/01/01 7:00",
  "2024/01/01 8:00",
  "2024/01/01 9:00",
  "2024/01/01 10:00",
  "2024/01/01 11:00",
  "2024/01/01 12:00",
  "2024/01/01 13:00",
  "2024/01/01 14:00",
  "2024/01/01 15:00",
  "2024/01/01 16:00",
  "2024/01/01 17:00",
  "2024/01/01 18:00",
  "2024/01/01 19:00",
  "2024/01/01 20:00",
  "2024/01/01 21:00",
  "2024/01/01 22:00",
  "2024/01/01 23:00",
  "2024/01/02 0:00",
  "2024/01/02 1:00",
  "2024/01/02 2:00",
  "2024/01/02 3:00",
  "2024/01/02 4:00",
  "2024/01/02 5:00",
  "2024/01/02 6:00",
  "2024/01/02 7:00",
  "2024/01/02 8:00",
  "2024/01/02 9:00",
  "2024/01/02 10:00",
  "2024/01/02 11:00",
  "2024/01/02 12:00",
  "2024/01/02 13:00",
  "2024/01/02 14:00",
  "2024/01/02 15:00",
  "2024/01/02 16:00",
  "2024/01/02 17:00",
  "2024/01/02 18:00",
  "2024/01/02 19:00",
  "2024/01/02 20:00",
  "2024/01/02 21:00",
  "2024/01/02 22:00",
  "2024/01/02 23:00",
  "2024/01/03 0:00",
  "2024/01/03 1:00",
];

export const dataObject = [
  { rateLimit: 1, day: "2024/01/01", hour: "19:00" },
  { rateLimit: 1, day: "2024/01/01", hour: "20:00" },
  { rateLimit: 6, day: "2024/01/01", hour: "21:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "22:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "23:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "0:00" },
  { rateLimit: 1, day: "2024/01/02", hour: "1:00" },
  { rateLimit: 1, day: "2024/01/02", hour: "2:00" },
  { rateLimit: 1, day: "2024/01/02", hour: "3:00" },
];

export const combinedData = [
  { rateLimit: 1, day: "2024/01/01", hour: "0:00" },
  { rateLimit: 1, day: "2024/01/01", hour: "1:00" },
  { rateLimit: 1, day: "2024/01/01", hour: "2:00" },
  { rateLimit: 1, day: "2024/01/01", hour: "3:00" },
  { rateLimit: 6, day: "2024/01/01", hour: "4:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "5:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "6:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "7:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "8:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "9:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "10:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "11:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "12:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "13:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "14:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "15:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "16:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "17:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "18:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "19:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "20:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "21:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "22:00" },
  { rateLimit: 60, day: "2024/01/01", hour: "23:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "0:00" },
  { rateLimit: 0.6, day: "2024/01/02", hour: "1:00" },
  { rateLimit: 0.6, day: "2024/01/02", hour: "2:00" },
  { rateLimit: 0.6, day: "2024/01/02", hour: "3:00" },
  { rateLimit: 0.6, day: "2024/01/02", hour: "4:00" },
  { rateLimit: 6, day: "2024/01/02", hour: "5:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "6:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "7:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "8:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "9:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "10:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "11:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "12:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "13:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "14:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "15:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "16:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "17:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "18:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "19:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "20:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "21:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "22:00" },
  { rateLimit: 60, day: "2024/01/02", hour: "23:00" },
  { rateLimit: 60, day: "2024/01/03", hour: "0:00" },
  { rateLimit: 60, day: "2024/01/03", hour: "1:00" },
];
