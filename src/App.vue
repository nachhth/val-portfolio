<script setup>
  // json with essays
  import essays from "./data/essays.json";

  // Components
  import Header from "./components/Header.vue";

  const { data } = essays;

  // TODO set vue-router
</script>

<template>
  <Header></Header>
  <div class="foto-title-container">
    <img src="./assets/profile.png" alt="profile" />
    <h1>Hello there!</h1>
  </div>
  <router-view />
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Fredoka&display=swap");

  :root {
    --my-background-color: whitesmoke;
    --my-background-color-secondary: #2b2b2b;
    --my-primary-color: #121212c;
    --my-secondary-color: pink;
    --primary-color: pink !important;
    --focus-ring: pink !important;
  }

  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--my-background-color);
    color: var(--my-primary-color);
    font-size: 1.2rem;
  }

  #app {
    text-align: center;
  }

  img {
    margin-top: 10px;
    height: 120px;
    border-radius: 10px;
    /* border-radius: 50%; */
    border: 2px solid var(--my-secondary-color);
  }

  .about-me {
    margin: 0 auto;
    max-width: 75vw;
    font-family: "Fredoka", sans-serif;
  }

  .margin-right-4 {
    margin: 4px;
  }

  .foto-title-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 550px;
    margin: 0 auto;
    padding: 25px;
  }

  .articles-container {
    max-width: 90vw;
    margin: 10px auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  h3 {
    margin-top: 0;
  }

  .p-link:focus {
    box-shadow: 0 0 0 0.2rem pink !important;
  }

  @media (max-width: 700px) {
    .foto-title-container {
      padding-top: 0px;
    }

    .articles-container {
      grid-template-columns: 1fr;
    }
  }
</style>
