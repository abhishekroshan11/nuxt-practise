<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- Hello Nuxt from BarneY -->
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
