import axios from 'axios'

export const getAccounts = (page = 1) => {
  return axios.get(`http://192.168.178.26/boehmAPI/public/accounts?page=${page}`)
} 

export const getSortedAccounts = (page = 1, property = 'id', order = 'desc') => {
  return axios.get(`http://192.168.178.26/boehmAPI/public/accounts/${property}/${order}?page=${page}`)
} 

