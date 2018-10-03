import axios from 'axios'

export const getAccounts = (page = 1) => {
  return axios.get(`http://localhost/boehmapi/public/accounts?page=${page}`)
} 

export const getSortedAccounts = (page = 1, property = 'id', order = 'desc') => {
  return axios.get(`http://localhost/boehmapi/public/accounts/${property}/${order}?page=${page}`)
} 

