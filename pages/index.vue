<script lang="ts">
import Vue from 'vue'
import AnnonceBoard from '~/components/home/body/AnnonceBoard.vue'
import BrandsSlickCarousel from '~/components/home/body/BrandsSlickCarousel.vue'
import AdvertisingDashboard from '~/components/home/body/AdvertisingDashboard.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { AnnonceBoard, BrandsSlickCarousel, AdvertisingDashboard },
})
</script>

<template>
    <main>
        <AnnonceBoard />

        <BrandsSlickCarousel />

        <AdvertisingDashboard />
    </main>
</template>
