export function useFormattedDate(event_date: string) {
  const date = new Date(event_date);
  const formattedDate = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "short",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  return formattedDate;
}
