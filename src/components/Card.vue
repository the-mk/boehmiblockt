<template>
  <div class="column is-one-mobile is-one-third-tablet is-one-quarter-widescreen is-one-sixth-fullhd">
  <a target="_blank" :href="profileLink(account.screen_name)">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by1">
          <img v-if="account.profile_use_background_image" :src="account.urls.banner_image + '/300x100'" :alt="'Banner image of @' + account.screen_name">
          <img v-else class="banner image is-3by1" src="https://www.toptal.com/designers/subtlepatterns/patterns/bananas.png" />
        </figure>
      </div>
      <div class="card-content">
        <div id="profile_image" class="media is-vcentered">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" :src="account.urls.profile_image" :alt="'Profile image of @' + account.screen_name">
            </figure>
          </div>
          <div class="media-right is-pulled-right">
            <figure class="image">
              <span class="tag is-info is-vcentered"><i style="margin-right: .6em" class="fas fa-user-friends fa-1x"></i> {{numberFormatted(account.followers_count)}}</span>
            </figure>
          </div>
        </div>
        <div id="info" class="media is-vcentered">
          <div class="media-content">
            <p class="title is-6">
              {{ account.name }}
              <span v-if="account.verified"><img class="verified" src="../assets/verified.svg"></span>
            </p>
            <p class="subtitle is-6 is-vcentered">@{{ account.screen_name }}</p>
          </div>
        </div>
        <div id="details" v-if="showDetails" class="content">
          <p v-if="account.description" class="has-text-weight-bold has-text-centered">{{account.description}}</p>
          <p v-else class="is-italic has-text-centered">Kein Status</p>
          <br>
          <p class="is-size-7 has-text-centered is-uppercase">Twitter beigetreten: {{account.created_at}}</p>
        </div>
      </div>
    </div>

  </a> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'card',
  props: {
    account: {
      type: Object
    },
  },
  computed: {
    ...mapGetters({
      showDetails: 'accounts/getShowDetails'
    }),
  },
  methods: {
    profileLink (screen_name) {
      return 'https://twitter.com/' + screen_name;
    },
    numberFormatted (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
}
</script>

<style scoped lang="scss">
.banner {
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/bananas.png)
}

.verified {
  width: .8em;
}

#profile_image {
  align-items: center;
  margin-top: -3em;
  justify-content: space-between;
}

#info {
  border: none;
  padding-top: 0; 
}

#details {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  padding-top: 1em;
  margin-top: 1.5em;
}
</style>
