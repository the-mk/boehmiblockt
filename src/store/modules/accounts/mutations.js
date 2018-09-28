export const setAccount = (state, accounts) => {
  state.accounts = accounts
}

export const setLoaded = (state, loaded) => {
  state.loaded = loaded
}

export const setPageData = (state, { current, max }) => {
  state.page.current = current
  state.page.max = max || state.page.max
}

export const appendToAccounts = (state, accounts) => {
  state.accounts.push(...accounts)
}

export const setOnlyVerified = (state, onlyVerified) => {
  state.onlyVerified = onlyVerified
}

export const setIncludeZero = (state, includeZero) => {
  state.includeZero = includeZero
}

export const setShowDetails = (state, showDetails) => {
  state.showDetails = showDetails
}

export const setSearchProperty = (state, property) => {
  state.search.property = property
}

export const setSearchOrder = (state, order) => {
  state.search.order = order
}