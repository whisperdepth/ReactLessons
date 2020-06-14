export default (dateString) => {
  const formatter = new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: 'short',
  });

  const birthDate = formatter.format(new Date(dateString));
  return birthDate;
};
