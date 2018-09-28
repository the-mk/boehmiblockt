<template>
    <section>
        <b-field>
            <div class="select">
                <select v-model="selected" @change="executeStateChange" placeholder="Sortierung">
                      <option v-for="option in element.options" :value="option.value">
                        {{ option.text }}
                      </option>
                </select>       
            </div>
        </b-field>
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
            selected: null
        }
    },
    mounted () {
        this.selected = this.element.selected
    },
    methods: {
        executeStateChange () {
            this.$store.dispatch('accounts/set' + this.element.method, this.selected)
            this.$store.dispatch('accounts/getAccounts')
        },
    }
}
</script>