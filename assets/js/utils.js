const monthsToWords = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const getRelativeTime = (updatedAt) => {
  const now = Date.now();
  const then = Date.parse(updatedAt);

  const [nowWeekday, nowMonth, nowDay, nowYear] = new Date(now)
    .toString()
    .split(' ');

  const [thenWeekday, thenMonth, thenDay, thenYear] = new Date(then)
    .toString()
    .split(' ');

  const elapsed = now - then;

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;

  if (elapsed < msPerMinute) {
    const time = Math.round(elapsed / 1000);
    return time + ' seconds ago';
  } else if (elapsed < msPerHour) {
    const time = Math.round(elapsed / msPerMinute);
    return time + ' minutes ago';
  } else if (elapsed < msPerDay) {
    const time = Math.round(elapsed / msPerHour);
    return `${time} ${time > 1 ? 'hours' : 'hour'} ago'`;
  } else if (elapsed < msPerMonth) {
    const time = Math.round(elapsed / msPerDay);
    return `${time} ${time > 1 ? 'days' : 'day'} ago'`;
  } else {
    return `on ${thenMonth} ${thenDay}${
      thenYear < nowYear ? ', ' + thenYear : ''
    }`;
  }
};

const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat().format(number);

  return formattedNumber;
};
