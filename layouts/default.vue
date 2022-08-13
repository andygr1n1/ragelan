<template>
    <div class="tw-flex tw-h-full tw-flex-col">
        <Preload />
        <Header />
        <div class="tw-flex tw-flex-auto tw-flex-col">
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
export default {
    name: 'DefaultLayout',
}
</script>
