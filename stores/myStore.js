//Vue 2 Options API

// export const useCounterStore = defineStore('counter', {
//     state: () => ({count: 0, name: 'Barney'}),
//     getters: {
//         doubleCount: (state) => state.count *2,
//     },
//     actions: {
//         increment(){
//             this.count++;
//         },
//     },
// })

//Vue 3 Composition API

export const useCounterStore = defineStore('counter', ()=> {
    const count = ref(0);
    const name = ref("Barney");
    const doubleCount = computed(() => count.value*2)
    function increment() {
        count.value++;
    }

    return {count, name, doubleCount, increment}
})