<script setup>
import 'primeicons/primeicons.css';

</script>

<template>
  <div class="header-image"></div>
  <div class="header-container">
    <div class="portfolio">PORTFOLIO</div>
    <div>Valentina Corbalán Labora</div>
    <div>
      <i class="pi pi-linkedin margin-right-4"></i>
      <a href="https://www.linkedin.com/in/valentina-corbalan-labora/" target="_blank">LinkedIn</a>
    </div>
  </div>
</template>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
  color: var(--primary-color);
}
.header-container {
  font-family: "Fredoka", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.1rem 1rem 1.1rem 1rem;
}

.header-image {
  height: 300px;
  background: url("../assets/cropped-background.jpg");
  background-size: cover;
}
.portfolio {
  font-family: "Prompt", sans-serif;
  font-weight: bolder;
  font-size: 1.1rem;
}

@media (max-width: 700px) {
  .header-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .header-container > div {
    padding: 10px;
  }
}
</style>
