<!-- Please remove this file from your project -->
<template>
    <div id="preloader" class="hidden">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <img src="@/img/icon/preloader.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreloadComponent',
    data() {
        return { is_loading: true }
    },
    mounted() {
        this.timer = setTimeout(() => (this.is_loading = false), 1000)
    },
}
</script>
