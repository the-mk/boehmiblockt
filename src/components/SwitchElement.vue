<template>
    <section>
        <div class="field">
          <input v-model="isSwitched" v-on:click="$emit('changeProperty', property)" :id="property" type="checkbox" :name="property" class="switch is-rounded is-info">
          <label :for="property">{{ description }}</label>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            property: {
                type: String
            },
            description: {
                type: String
            }
        },
        data() {
            return {
                isSwitched: false
            }
        }
    }
</script>