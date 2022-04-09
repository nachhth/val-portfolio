<script setup>

defineProps({
    essay: Object
})

</script>

<template>
    <Card class="article-container">
        <template #content>
            <h3>{{ essay.title }}</h3>
            <ScrollPanel style="width: 100%; height: 200px">
                <div class="text-xs">
                {{ essay.abstract }}
                </div>
                <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" />
            </ScrollPanel>
        </template>
    </Card>
</template>

<style >
.p-scrollpanel-content {
    text-align: left;
}

.p-scrolltop-sticky {
    width: 25px !important;
    height: 25px !important;
}

.p-scrolltop-icon {
    font-size: 15px !important;
}
</style>
