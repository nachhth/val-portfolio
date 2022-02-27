<script setup>

defineProps({
    essay: Object
})

</script>

<template>
    <div class="article-container">
        <h3>{{ essay.title }}</h3>
        <ScrollPanel style="width: 100%; height: 200px">
            {{ essay.abstract }}
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<style >
.p-scrollpanel-content {
    text-align: left;
}

.p-scrolltop-sticky {
    width: 25px !important;
    height: 25px !important;
    border-color: pink !important;
}

.p-scrolltop-icon {
    font-size: 15px !important;
}
</style>
