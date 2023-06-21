import { defineStore } from "@pinia/nuxt/dist/runtime/composables";

export const useUser = defineStore("user", {
    state: () => ({
        isLogin: false
    })
})