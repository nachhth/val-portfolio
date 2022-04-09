<script setup>
  // json with essays
  import essays from "../data/essays.json";

  // Components
  import Article from "../components/Article.vue";

  const { data } = essays;
</script>

<template>
  <p class="about-me">
    Literature and writing have been a passion for so long sometimes I think I
    might have been born with a book in my hand. This passion is what brought me
    to study my BA in Language and Literature at University of A Coruña, where I
    am currently working on my Master’s degree. I’m a highly detailed-oriented
    person and I enjoy working on projects that involve creative writing and
    critical thinking.
  </p>

  <div class="articles-container">
    <Article v-for="essay in data" :key="essay.id" :essay="essay"></Article>
  </div>
</template>
