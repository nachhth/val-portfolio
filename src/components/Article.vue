<script setup>
import 'primeicons/primeicons.css';

</script>

<template>
    <div class="header-container">
        <div class="portfolio">PORTFOLIO</div>
        <div>Valentina Corbalán Labora</div>
        <div>
            <i class="pi pi-linkedin margin-right-4"></i>
            <a
                href="https://www.linkedin.com/in/valentina-corbalan-labora/"
                target="_blank"
            >LinkedIn</a>
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
    background: url("https://media-exp1.licdn.com/dms/image/C4E16AQFCo-3KvfDOMA/profile-displaybackgroundimage-shrink_200_800/0/1644249478599?e=1651708800&v=beta&t=nW9knYV8_ROCphTo5oB6hvzIMyhHJBE6gQwd93iMaAE")
        no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1.1rem 1rem 1.1rem 1rem;
    height: 200px;
}
.header-container > div {
    text-shadow: 1px 1px 4px var(--background-color),
        1px 1px 3px var(--secondary-color);
}
.portfolio {
    font-family: "Prompt", sans-serif;
    font-weight: bolder;
    font-size: 1.1rem;
}
</style>
