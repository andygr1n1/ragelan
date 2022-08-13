<script>
import BetaButton from '~/components/reusable/BetaButton.vue'
export default {
    name: 'AnnonceBoard',
    components: { BetaButton },
    data() {
        return {
            title: 'Påmelding',
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
    <section
        :class="$style['board-bg']"
        :style="{ backgroundImage: `url(` + require(`~/assets/announce-board_bg.jpg`) + `)` }"
    >
        <div class="container">
            <div class="justify-content-center">
                <div :class="$style['announce-board']" class="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <h6 class="tw-max-w-fit tw-text-beta-500" data-wow-delay=".2s">15-18 september</h6>
                    <h2 :class="$style['h2']" data-in-effect="fadeInLeft">
                        Ragelan <span class="tw-text-beta-500">2022</span>
                    </h2>
                    <p class="tw-text-center">
                        Hvem blir årets gamer? Hvem vinner gokart konkurransen? Bli med på Norges “Eldste” LAnparty og
                        finn ut
                    </p>
                    <BetaButton :title="title" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" module>
.h2 {
    @apply tw-mb-8 tw-text-center tw-font-oxanium tw-text-5xl tw-font-extrabold tw-text-white xs:tw-text-8xl;
}

.board-bg {
    background-position: center;
    background-size: cover;
    padding: 180px 0;
}

.announce-board p {
    font-weight: 600;
    color: #ffffff;
    width: 73%;
    margin: 0 auto 40px;
    font-size: 18px;
    line-height: 1.6;
}

.announce-board h6 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 25px;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 0 18px;
}

@media (min-width: 1280px) {
    .announce-board h6::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 50%;
        display: inline-block;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 135px 5px 0;
        border-color: transparent #fff transparent transparent;
    }
    .announce-board h6::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 50%;
        display: inline-block;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 0 5px 135px;
        border-color: transparent transparent transparent #fff;
    }
}
</style>
