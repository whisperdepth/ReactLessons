import moment from 'moment';

export default (dateString) => {
  return moment(new Date(dateString)).format('DD MMM YY');
};
