<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'BrandsSlickCarousel',
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3500,
                pauseOnDotsHover: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                centerMode: false,
                centerPadding: '10px',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            },
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
    <div
        class="slider-bg tw-select-none tw-px-20 tw-py-14"
        :style="{ backgroundImage: `url(` + require(`~/assets/brand_bg.jpg`) + `)` }"
    >
        <VueSlickCarousel v-bind="settings">
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo01.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo02.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo03.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo04.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo05.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo01.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo02.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo03.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo04.png" alt="" />
            </div>
            <div>
                <img class="tw-pointer-events-none !tw-h-20 !tw-w-[170px]" src="@/img/brand/brand_logo05.png" alt="" />
            </div>
        </VueSlickCarousel>
    </div>
</template>

<style lang="scss">
.slider-bg {
    background-position: center;
    background-size: cover;
    position: relative;
}
.slick-slide {
    div {
        @apply tw-flex tw-items-center tw-justify-center #{!important};
    }
}
</style>
