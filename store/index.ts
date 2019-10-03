import { RootState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";
import { getUserInfo } from "~/req/user"

export const state = (): RootState => ({
  people: [],
  isLogin: 0
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  },
  setIsLogin(state: RootState, isLogin: Number): void {
    state.isLogin = isLogin
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    // people = context.isStatic ?
    //   localRandomData :
    //   // await context.app.$axios.$get("./random-data.json")

    // commit("setPeople", people.slice(0, 10))
  },
  async getIsLogin({ commit }, context) {
    let isLogin = 0
    const res = await getUserInfo()
    if (res.code == 200) {
      isLogin = 1
    }
    else {
      isLogin = 0
    }
    commit("setIsLogin", isLogin)
  }
}
