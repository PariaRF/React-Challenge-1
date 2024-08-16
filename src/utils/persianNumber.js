export default function persianNumbers(num) {
  const formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const map = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  let result = "";
  if (num >= 10) {
    for (let char of formattedNum) {
      if (!isNaN(char)) {
        result += map[char];
      } else {
        result += char;
      }
    }

    return result;
  }

  while (num > 0) {
    result = map[num % 10] + result;
    num = Math.floor(num / 10);
  }
  return result;
}
