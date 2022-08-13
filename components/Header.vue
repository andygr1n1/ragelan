<script>
import HeaderTopBar from './home/header/HeaderTopBar.vue'
import HeaderMenu from './home/header/HeaderMenu.vue'
export default {
    name: 'HeaderTemplate',
    components: { HeaderMenu, HeaderTopBar },
}
</script>

<template>
    <header>
        <HeaderTopBar />
        <HeaderMenu />
    </header>
</template>
