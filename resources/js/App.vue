<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <router-view></router-view>
        <router-link to="/app/">Home</router-link>
        <router-link to="/app/about">About</router-link>
        <router-link to="/app/contact">Contact</router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Welcome To My Site'
    }
  }
}
</script>
