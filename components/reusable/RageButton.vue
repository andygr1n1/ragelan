<script>
export default {
    name: 'RageButton',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            description: 'rage button',
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
    <v-btn :class="$style['nuxt-button']" elevation="2" large>
        <div :class="$style['nuxt-button-title']">{{ title }}</div>
    </v-btn>
</template>

<style lang="scss" module>
.nuxt-button {
    @apply tw-left-2 tw-max-w-fit -tw-skew-x-12
    tw-rounded-none
    tw-bg-beta-500 tw-p-2 tw-font-poppins tw-text-xl tw-font-bold tw-capitalize tw-text-white #{!important};

    &:focus {
        @apply tw-outline-none;
    }

    .nuxt-button-title {
        @apply tw-block  tw-skew-x-12 #{!important};
    }
}
</style>
