import * as yup from 'yup';

export const addNewGameSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  date: yup.string().required('Date is required'),
  type: yup.string().required('Type is required'),
  players: yup.string().required('Players are required'),
});
