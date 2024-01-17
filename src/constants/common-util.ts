const dateFilterType = [
  {
    value: 1,
    label: "Full Year(FY)",
  },
  {
    value: 2,
    label: "Monthly",
  },
  {
    value: 3,
    label: "Quartely",
  },
  {
    value: 4,
    label: "Year To Date(YTD)",
  },
];

interface MonthObject {
  value: number;
  label: string;
}

const months: MonthObject[] = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

interface Quartely {
  value: number;
  label: string;
}

const quartelyList: Quartely[] = [
  { value: 1, label: "First (Jan-Apr)" },
  { value: 2, label: "Second (May-Aug)" },
  { value: 3, label: "Third (Sep-Dec)" },
];

export { dateFilterType, months, quartelyList };
