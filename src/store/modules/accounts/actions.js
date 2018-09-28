import * as api from '@/api/accounts'

export const getAccounts = ({ commit, state }, page = 1) => {
  commit('setLoaded', false)
  api.getSortedAccounts(page, state.search.property, state.search.order).then((response) => {
    commit('setAccount', response.data.data)
    commit('setPageData', {
      current: page,
      max: response.data.meta.pagination.total_pages
    })
    commit('setLoaded', true)
  })
}

export const getMoreAccounts = ({ commit, state }, page = 1) => {
  commit('setLoaded', false)
  api.getSortedAccounts(state.page.current + 1, state.search.property, state.search.order).then((response) => {
    commit('appendToAccounts', response.data.data)
    commit('setPageData', {
      current: state.page.current + 1
    })
    commit('setLoaded', true)
  })
}

export const setOnlyVerified = ({ commit }, onlyVerified) => {
  commit('setOnlyVerified', onlyVerified)
}

export const setIncludeZero = ({ commit }, includeZero) => {
  commit('setIncludeZero', includeZero);
}

export const setShowDetails = ({ commit }, showDetails) => {
  commit('setShowDetails', showDetails);
}

export const setSearchProperty = ({ commit }, property) => {
  commit('setSearchProperty', property)
}

export const setSearchOrder = ({ commit }, order) => {
  commit('setSearchOrder', order)
}
