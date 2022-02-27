<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Card from 'primevue/card';


const title = "Hi!"


</script>

<template>
  <Header></Header>
  <div class="foto-title-container">
    <img
      src="https://media-exp1.licdn.com/dms/image/C5603AQHpJjcfkreNvg/profile-displayphoto-shrink_200_200/0/1637426848749?e=1651708800&v=beta&t=_q9at10tHJfBOwrgPA7bmxLmNZm1zHG8SPOPAo0CgfY"
      alt="profile"
    />
    <h1>{{ title }}</h1>
  </div>

  <Card>
    <template #content>
      Literature and writing have been a passion for so long sometimes I think I might have been born with a book in my hand. This passion is what brought me to study my BA in Language and Literature at University of A Coruña, where I am currently working on my Master’s degree.
      I’m a highly detailed-oriented person and I enjoy working on projects that involve creative writing and critical thinking.
    </template>
  </Card>

  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />-->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredoka&display=swap");

:root {
  --background-color: #121212;
  --background-color-secondary: #2b2b2b;
  --primary-color: whitesmoke;
  --secondary-color: pink;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--primary-color);
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
  border: 2px solid var(--secondary-color);
}

.p-card-content {
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
</style>
