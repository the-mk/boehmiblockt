export default {
  onlyVerified: false,
  includeZero: true,
  showDetails: false,
  accounts: [],
  loaded: false,
  page: {
    current: 1,
    max: null,
    hasMore () {
      return this.currentPage < this.max
    }
  },
  search: {
    property: 'followers_count',
    order: 'desc'
  }

}