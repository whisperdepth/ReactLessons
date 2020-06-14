export default (dateString) => {
  const formatter = new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  });

  /* return `${new Date(dateString).getDate()} ${formatter.format(
    new Date(dateString)
  )}`; */

  return formatter.format(new Date(dateString));
};
