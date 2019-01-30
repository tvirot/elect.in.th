const ThaiLocale = d3.timeFormatLocale({
  dateTime: "%A, %e %B %Y г. %X",
  date: '%d %m %Y',
  time: '%H:%M:%S',
  periods: ['', ''],
  days: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัส", "วันศุกร์", "วันเสาร์"],
  shortDays: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
  shortMonths: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
});

function formatThaiDate(t){
  return `${ThaiLocale.format('%a %_d %b')(t)} ${t.getFullYear() + 543}`;
}

export {
  ThaiLocale,
  formatThaiDate,
};
