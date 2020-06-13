const getAge = (birthDate) => {
  const YearInMs = 31536000000;
  return Math.floor((new Date() - new Date(birthDate)) / YearInMs);
};

export default getAge;
