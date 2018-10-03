import axios from 'axios'

export const getAccounts = (page = 1) => {
  return axios.get(`http://www.boehmiblockt.dx.am/public/accounts?page=${page}`)
} 

export const getSortedAccounts = (page = 1, property = 'id', order = 'desc') => {
  return axios.get(`http://www.boehmiblockt.dx.am/public/accounts/${property}/${order}?page=${page}`)
} 

