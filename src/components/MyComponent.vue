<script setup
        lang="ts">

defineProps<{ name: string, project: any }>()

</script>

<template>
	<h1>hello {{ name || 'no name' }}</h1>
	<p v-if="project">Project: {{ project?.name }}</p>
	<p v-if="project">Client: {{ project?.client?.name }}</p>
</template>

<style scoped>

</style>