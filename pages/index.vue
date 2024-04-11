<!-- <template>
    <div>
         <Header />
        <Alert />
        <Profile />
        <ProfileHeader/> 
        Hello Nuxt
    </div>
</template>

<script setup>

// const {sayHello} = useUtils();
// sayHello()



</script>  -->

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>