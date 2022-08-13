<script>
export default {
    name: 'HeaderTopBar',
    computed: {
        timer() {
            return this.$store.state.root_store.event_of_the_year_timer
        },
        styles() {
            return styles
        },
    },
    mounted() {
        this.$store.commit('root_store/eventOfTheYearTimer', this.$store)
    },
}
</script>

<template>
    <div class="tw-f-full tw-hidden tw-h-[56px] tw-min-h-[56px] tw-justify-between tw-bg-[#191F2C] sm:tw-flex">
        <div class="tw-mx-6 tw-flex tw-h-full tw-items-center tw-gap-3 tw-text-xs">
            <div class="tw-font-bold tw-text-[#a5a5a5]">Event of the year!</div>
            <div :class="$style['show-days']">
                <span>{{ timer }}</span>
            </div>
            <div class="tw-font-bold tw-text-[#a5a5a5]">Days</div>
        </div>
        <!--   <div class="tw-flex tw-gap-3 tw-items-center tw-h-full">
            <div>twitch</div>
            <div>shop</div>
            <div>login</div>
        </div> -->
    </div>
</template>

<style lang="scss" module>
.show-days {
    @apply tw-flex
        tw-h-full
        tw-skew-x-[-10deg]
        tw-items-center
        tw-justify-center
        tw-bg-beta-500
        tw-px-4
        tw-text-base
        tw-font-bold
        tw-text-black;

    & > span {
        @apply tw-skew-x-[10deg];
    }
}
</style>
