export function getDate(dateString) {
  const date = new Date(dateString);

  // Options for formatting like: "June 21, 2025 2:07 am"
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}
