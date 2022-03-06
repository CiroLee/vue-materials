export const weekMapZh = ['日', ' 一', '二', '三', '四', '五', '六'];
const calendarGrid = 42; // 7 * 6宫格;
export interface CalendarItem {
  year: number;
  month: number;
  day: number;
  isCurrentMonth: boolean;
}
// 是否为闰年
const isLeap = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 100 === 0;
};

// 获取[month]月有几天
const getDays = (year: number, month: number): number => {
  const day31 = [1, 3, 5, 7, 8, 10, 12];
  const day30 = [4, 6, 9, 11];

  if (day31.includes(month)) {
    return 31;
  } else if (day30.includes(month)) {
    return 30;
  }
  return isLeap(year) ? 29 : 28;
};
// 根据日期获取月份和对应天数
const getMonth = (year: number, month: number) => {
  return {
    month,
    days: getDays(year, month),
  };
};
// 获取下个月/上个月有多少天
const getNextOrLastMonthDays = (date: Date, type: 'next' | 'last') => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (type === 'last') {
    const lastMonth = month === 1 ? 12 : month - 1;
    const lastYear = lastMonth === 12 ? year - 1 : year;
    return {
      year: lastYear,
      month: lastMonth,
      days: getDays(lastYear, lastMonth),
    };
  }
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = nextMonth === 1 ? year + 1 : year;
  return {
    year: nextYear,
    month: nextMonth,
    days: getDays(nextYear, nextMonth),
  };
};

export const generateCalendar = (date: Date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  // 当月天数
  const { days } = getMonth(currentYear, currentMonth);
  // 获取上月末尾天数和下月开头的天数，用于填补当月日历空白
  const { days: lastMonthDays, year: lastMonthYear, month: lastMonth } = getNextOrLastMonthDays(date, 'last');
  const { days: nextMonthDays, year: nextMonthYear, month: nextMonthMonth } = getNextOrLastMonthDays(date, 'next');
  // 1号是星期几
  const weekIndex = new Date(`${currentYear}, ${currentMonth}, 1`).getDay();
  // 显示在当月末尾的下月天数
  const trailDays = calendarGrid - weekIndex - days;
  let trailVal = 0;
  const calendarTable: CalendarItem[] = [];
  for (let i = 0; i < calendarGrid; i++) {
    // 补充上月天数
    if (i < weekIndex) {
      calendarTable[i] = {
        year: lastMonthYear,
        month: lastMonth,
        day: lastMonthDays - weekIndex + i + 1,
        isCurrentMonth: false,
      };
      // 补充下月天数
    } else if (i >= days + weekIndex) {
      if (trailVal < trailDays) {
        trailVal += 1;
      }
      calendarTable[i] = {
        year: nextMonthYear,
        month: nextMonthMonth,
        day: trailVal,
        isCurrentMonth: false,
      };
    }
  }
  // 填充当月日期
  for (let d = 1; d <= days; d++) {
    calendarTable[weekIndex + d - 1] = {
      year: currentYear,
      month: currentMonth,
      day: d,
      isCurrentMonth: true,
    };
  }

  return calendarTable;
};
