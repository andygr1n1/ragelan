<script>
export default {
    name: 'HeaderMenu',
    // computed: {
    //     styles() {
    //         return styles
    //     },
    // },
}
</script>

<template>
    <div
        class="tw-flex tw-justify-between tw-px-2"
        :style="{ backgroundImage: `url(` + require(`~/assets/header_bg.jpg`) + `)` }"
    >
        <div class="tw-m-2">
            <NuxtLink to="/"><img src="@/img/logo/logo.png" alt="Logo" /></NuxtLink>
        </div>
        <nav>
            <div class="navbar-wrap">
                <ul>
                    <li class="menu-link">
                        <NuxtLink to="/"><span>Hjem</span></NuxtLink>
                    </li>
                    <li class="menu-link">
                        <NuxtLink to="/contacts"><span>Om oss</span></NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="scss">
.navbar-wrap {
    display: flex;
    flex-grow: 1;
}
.navbar-wrap ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
}

.menu-link {
    a.nuxt-link-active,
    a.nuxt-link-exact-active,
    a {
        transform: skewX(-8deg);
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: #edeaea;
        padding: 43px 26px;
        display: block;
        line-height: 1;
        position: relative;
        z-index: 1;

        & > span {
            transform: skewX(8deg);
            display: block;
        }
    }

    a {
        @apply tw-border-b-2 tw-border-b-beta-500;
    }

    a:hover {
        @apply tw-bg-beta-500 tw-text-black;
    }

    /* exact link will show the primary color for only the exact matching link */
    a.nuxt-link-exact-active {
        @apply tw-bg-beta-500 tw-text-black;

        transform: skewX(-8deg);

        & > span {
            transform: skewX(8deg);
            display: block;
        }
    }

    .main-header {
        background-position: right center;
        background-size: cover;
        position: relative;
    }
}
</style>
