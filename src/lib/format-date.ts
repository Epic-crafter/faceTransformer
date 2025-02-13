import { parseISO, format, isToday, isYesterday, isThisWeek } from 'date-fns';

export function formatDate(dateString: string) {
  const date = parseISO(dateString); // Convert the ISO string to a Date object

  // Check if the date is today
  if (isToday(date)) {
    return `Today at ${format(date, 'h:mm a')}`; // Format time as 9:30 AM
  }

  // Check if the date is yesterday
  if (isYesterday(date)) {
    return `Yesterday at ${format(date, 'h:mm a')}`;
  }

  // Check if the date is within this week
  if (isThisWeek(date)) {
    // Return the day of the week and time
    return `${format(date, 'EEEE')} at ${format(date, 'h:mm a')}`;
  }

  // If the date is older, return the formatted date with time
  return `${format(date, 'yyyy-MM-dd')} at ${format(date, 'h:mm a')}`; // Customize the format as you like
}
