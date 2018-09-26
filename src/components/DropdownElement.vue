<template>
    <section>
        <b-field>
            <b-select placeholder="Sortierung">
                <option v-for="option in options"
                    :value="option.key"
                    :key="option.key">
                    {{ option.name }}
                </option>
            </b-select>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return { 
                "options": [
                  {"name": "Followers", "key": "followers"},
                  {"name": "Twitterbeitritt", "key": "joined"},
                  {"name": "Alphabet", "key": "alphabet"}
                ]
            }
        }
    }
</script>