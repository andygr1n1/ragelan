<script>
import { advertisingBoardShopData } from '~/localdb/advertising_board_shop_data'
import RageButton from '~/components/reusable/RageButton.vue'

export default {
    name: 'AdvertisingDashboard',
    components: { RageButton },
    computed: {
        shopData() {
            return this.$store.state.root_store.advertising_board_shop_data
        },
        styles() {
            return styles
        },
    },
    mounted() {
        this.$store.commit('root_store/setAdvertisingBoardShopData', advertisingBoardShopData)
    },
}
</script>

<template>
    <div
        class="area-bg-one tw-flex tw-flex-auto tw-flex-col tw-pb-24"
        :style="{ backgroundImage: `url(` + require(`~/assets/area_bg01.jpg`) + `)` }"
    >
        <div class="tw-flex tw-flex-col tw-justify-center tw-gap-16 tw-p-12 lg:tw-flex-row">
            <div class="tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-2 tw-text-3xl xs:tw-text-5xl">
                <span class="tw-font-bold tw-text-white">Følg vår</span
                ><span class="tw-font-bold tw-text-beta-500">livestream!</span>
            </div>
            <v-img
                class="tw-pointer-events-none !tw-max-w-[615px]"
                :src="require(`../../../img/advertising/livestream_event.png`)"
                alt=""
            />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
            <div
                class="tw-flex tw-w-min tw-flex-wrap tw-gap-20 md:tw-justify-start lg:tw-w-auto lg:tw-max-w-[950px] xl:tw-max-w-[1300px]"
            >
                <div
                    v-for="data in shopData"
                    :key="data.id"
                    class="tw-flex tw-flex-col tw-items-start tw-bg-[#221927] tw-p-2 tw-shadow-base"
                >
                    <!-- <img :src="require.context('../../../img/advertising/' + data.image)" :alt="selectedDog" /> -->
                    <div class="tw-flex tw-justify-center tw-bg-white tw-pb-5 xs:tw-w-[356px]">
                        <v-img
                            :src="require(`../../../img/advertising/${data.image}`)"
                            class="tw-h-[256px] tw-w-[256px] !tw-flex-initial"
                        ></v-img>
                    </div>
                    <div class="tw-px-5 tw-pt-4 tw-text-2xl tw-font-bold tw-text-white">{{ data.title }}</div>
                    <div class="tw-flex tw-w-full tw-justify-end tw-px-8 tw-py-5">
                        <RageButton :title="`Kr ${data.price},-`" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.area-bg-one {
    background-position: center;
    background-size: cover;
}
</style>
