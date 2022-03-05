function getDayInfo(date) {
  const dateArr = date.split(".");
  const newDateStr = new Date(`${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`);
  const day = new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(
    newDateStr
  );
  const weekOfMonth = Math.ceil(
    (newDateStr.getDate() + newDateStr.getDay() - 1) / 7
  );
  const month = new Intl.DateTimeFormat("ru-RU", { month: "long" }).format(
    newDateStr
  );
  const year = newDateStr.getFullYear();

  return console.log(
    `${capitalize(day)}, ${weekOfMonth} неделя ${capitalize(
      month
    )} ${year} года.`
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

getDayInfo("01.01.2022"); // Суббота, 1 неделя Январь 2022 года
getDayInfo("15.12.2021"); // Среда, 3 неделя Декабрь 2021 года
