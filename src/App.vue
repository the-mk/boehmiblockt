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
          <SwitchElement property="onlyVerified" description="Nur verifizierte Accounts" v-on:changeProperty="changeProperty" />
        </div>
        <div class="column">
          <SwitchElement property="excludeZero" description="Excludiere Accounts ohne Follower" v-on:changeProperty="changeProperty" />
        </div>
        <div class="column">
          <DropdownElement class="is-pulled-right" />
        </div>
      </div>
      </div>
      <div v-if="accounts" class="columns is-multiline">
        <Card class="animated fadeIn" v-if="evaluateShow(account)" v-for="(account,index) in accounts" :details=showDetails :account="account" />
      </div>
      <div v-else class="has-text-centered">
        <i class="fas fa-spinner fa-spin fa-3x"></i>
      </div>
      </div>
    </div>
</template>

<script>
import Card from './components/Card.vue'
import SwitchElement from './components/SwitchElement.vue'
import DropdownElement from './components/DropdownElement.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      accounts: null,
      onlyVerified: false,
      excludeZero: false,
      showDetails: false
    }
  },
  mounted () {
    axios
      .get('http://192.168.178.26/boehmAPI/public/accounts')
      .then(response => (this.accounts = response.data.data))
  },
  methods: {
    accountVerified (account) {
      if (this.onlyVerified) {
        if (account === true) {
          return true
        }
        return false;
      }
      return false;
    },
    changeProperty(value) {
      this.$data[value] = !this.$data[value];
    },
    evaluateShow(account) {
      if (this.onlyVerified && !account.verified) {
        return false
      }
      if (this.excludeZero && (account.followers_count == 0)) {
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
}
</style>
