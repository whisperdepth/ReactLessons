export default (dateString) => {
  const formatter = new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: 'short',
  });

  return `${new Date(dateString).getDate()} ${formatter.format(
    new Date(dateString)
  )}`;
};
