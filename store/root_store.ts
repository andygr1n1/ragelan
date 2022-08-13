import { GetterTree, /* ActionTree, */ MutationTree } from 'vuex'
import { IAdvertisingBoardShopData } from '~/localdb/advertising_board_shop_data'

export const state = () => ({
    event_of_the_year_timer: 0,
    loading: false,
    advertising_board_shop_data: [] as IAdvertisingBoardShopData[],
})

export type IRootStore = ReturnType<typeof state>

export const getters: GetterTree<IRootStore, IRootStore> = {
    yearEventTimer: (state) => state.event_of_the_year_timer,
}

export const mutations: MutationTree<IRootStore> = {
    setEventTime(state, time): void {
        state.event_of_the_year_timer = time
    },
    eventOfTheYearTimer(_state, $store) {
        const intervalId = setInterval(() => {
            const start = Date.now()
            const finish = new Date('September 15, 2022 00:00:00')
            const timer = finish.getTime() - start

            const days = Math.floor(timer / (1000 * 60 * 60 * 24))
            // const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            // const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
            // const seconds = Math.floor((timer % (1000 * 60)) / 1000)
            $store.commit('root_store/setEventTime', days)

            if (timer <= 0) {
                clearInterval(intervalId)
            }
        }, 1000)
    },
    setAdvertisingBoardShopData(state, advertisingBoardShopData: IAdvertisingBoardShopData[]): void {
        state.advertising_board_shop_data = advertisingBoardShopData
    },
}

// export const actions: ActionTree<IRootStore, IRootStore> = {
//     async fetch({ commit }) {
//         const res = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
//         commit('setUsers', res)
//     },
// }
