<template>
    <section>
        <div class="field">
          <input v-model="isSwitched" :id="element.property" type="checkbox" :name="element.property" class="switch is-rounded is-info" @change="executeStateChange">
          <label :for="element.property">{{ element.description }}</label>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        element: {
            type: Object
        }
    },
    data() {
        return {
            isSwitched: null
        }
    },
    methods: {
        executeStateChange () {
            this.$store.dispatch('accounts/set' + this.element.method, this.isSwitched)
        },
    },
    mounted () {
        this.isSwitched = this.$store.getters['accounts/get' + this.element.method]
    }
}
</script>