<script>
export default {
    name: 'BetaButton',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            description: 'alpha button',
        }
    },
    metaInfo() {
        return {
            title: this.title,
            meta: [{ vmid: 'description', name: 'description', content: this.description }],
        }
    },
    computed: {
        styles() {
            return styles
        },
    },
}
</script>

<template>
    <v-btn :class="$style['nuxt-button']" elevation="2" large>{{ title }}</v-btn>
</template>

<style lang="scss" module>
.nuxt-button {
    @apply tw-h-[46px] tw-min-w-[125px] tw-bg-beta-500 tw-font-poppins tw-text-sm tw-font-bold tw-capitalize #{!important};

    &:focus {
        @apply tw-outline-none;
    }
}
</style>
