<script>
export default {
    name: 'FooterComponent',
}
</script>

<template>
    <!-- footer-area -->
    <footer
        class="footer-bg tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-20 tw-px-20 tw-py-14 md:tw-flex-row md:tw-gap-0 lg:tw-px-48"
        :style="{ backgroundImage: `url(` + require(`~/assets/brand_bg.jpg`) + `)` }"
    >
        <div class="tw-ml-2">
            <NuxtLink to="/"
                ><img src="@/img/logo/logo.png" alt="Logo" class="tw-pointer-events-none tw-select-none"
            /></NuxtLink>
        </div>
        <ul class="tw-flex tw-select-none tw-items-center tw-justify-center tw-gap-8 tw-text-base">
            <li class="footer-menu-link">
                <NuxtLink to="/">Hjem</NuxtLink>
            </li>
            <li class="footer-menu-link">
                <NuxtLink to="/contacts">Om oss</NuxtLink>
            </li>
        </ul>

        <a
            class="tw-group tw-flex tw-cursor-pointer tw-select-none tw-items-center tw-justify-center tw-gap-5 tw-text-base"
            href="mailto: andy.grini@gmail.com"
        >
            <span class="tw-transition-colors group-hover:tw-text-beta-500">Kontak oss</span
            ><span><v-icon size="24"> mdi-email </v-icon></span></a
        >
    </footer>
    <!-- footer-area-end -->
</template>

<style lang="scss">
.footer-menu-link {
    a:hover {
        @apply tw-text-beta-500 tw-transition-colors;
    }

    /* exact link will show the primary color for only the exact matching link */
    a.nuxt-link-exact-active {
        @apply tw-text-beta-500;
    }
}

.footer-bg {
    background-position: center;
    background-size: cover;
    position: relative;
}
</style>
