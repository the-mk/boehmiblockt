<template>
  <div id="app">
<section class="hero is-info is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Böhmi Blockt
      </p>
    </div>
  </div>
</section>
    <div class="container">
      <div style="margin-top: -2em" class="box">
      <div class="columns is-vcentered">
        <div class="column">
          <SwitchElement class="switchElement" :element=elementSwitch v-for="elementSwitch in switches" />
        </div>
        <div class="column" >
          <ul>
          <template v-for="dropdownElement in dropdowns" >
            <li><DropdownElement  :element="dropdownElement" /></li>
          </template>
          </ul>

        </div>
      </div>
      </div>
      <template>
        <div class="columns is-multiline">
          <Card 
            class="animated fadeIn" 
            v-for="account in accounts" 
            v-if="evaluateShow(account)" 
            :key="account.id" 
            :account="account" 
          />
        </div>
        <div class="has-text-centered">
          <a @click.prevent="getMoreAccounts" v-if="page.hasMore" class="button">
            Zeige weitere Accounts
            <i v-if="!loaded" style="margin-left: 15px" class="fas fa-spinner fa-spin fa-1x"></i>
          </a>
        </div>
      </template>
      </div>
    </div>
</template>

<script>
import Card from './components/Card.vue'
import SwitchElement from './components/SwitchElement.vue'
import DropdownElement from './components/DropdownElement.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      dropdowns: {
        SearchPropertyElement: {
          "options": [
            {"text": "Followers", "value": "followers_count"},
            {"text": "Twitterbeitritt", "value": "id"}
          ],
          selected: null,
          method: 'SearchProperty'
        },
        SearchOrderElement: {
          "options": [
            {"text": "Absteigend", "value": "DESC"},
            {"text": "Aufsteigend", "value": "ASC"}
          ],
          selected: null,
          method: 'SearchOrder'
        }, 
      },
      switches: {
        switchVerifiedElement: {
          description: "Nur verifizierte Accounts",
          method: 'OnlyVerified',
          property: "onlyVerified",
        },
        switchIncludeZeroElement: {
          description: "Accounts ohne Follower",
          method: "IncludeZero",
          property: "includeZero"
        },
        switchShowDetailsElement: {
          description: "Details",
          method: 'ShowDetails',
          property: "showDetails"
        }
      }
    }
  },
  mounted () {
    this.getAccounts()
  },
  computed: {
    ...mapGetters({
      accounts: 'accounts/getAccounts',
      page: 'accounts/getPage',
      loaded: 'accounts/getLoaded',
      searchProperty: 'accounts/getSearchProperty',
      searchOrder: 'accounts/getSearchOrder',
      onlyVerified: 'accounts/getOnlyVerified',
      includeZero: 'accounts/getIncludeZero',
      showDetails: 'accounts/getShowDetails'
    }),
  },
  methods: {
    ...mapActions({
      getAccounts: 'accounts/getAccounts',
      getMoreAccounts: 'accounts/getMoreAccounts',
      setSearchProperty: 'accounts/setSearchProperty',
      setSearchOrder: 'accounts/setSearchOrder'
    }),
    evaluateShow(account) {
      if (this.onlyVerified && !account.verified) {
        return false
      }
      if (!this.includeZero && (account.followers_count == 0)) {
        return false
      }
      return true
    }
  },
  components: {
    Card,
    SwitchElement,
    DropdownElement
  }
}
</script>

<style lang="scss">
html {
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/geometry2.png);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 2em;
}

.switchElement {
  margin: .3em 0;
}
</style>
