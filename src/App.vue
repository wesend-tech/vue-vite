<script setup
        lang="ts">
import { HelloWorld, MyComponent } from './components'
import { ref, onMounted, Ref, UnwrapRef } from 'vue'
import { Project } from './api/handler.ts'
const apiProject = new Project()

const project: Ref<UnwrapRef<{ name?: string, client?: { name: string } } | undefined>> = ref( undefined )
onMounted( async () => {
	const readProject = await apiProject.getProject('65b7f3beff13af54c431910b')
	if (readProject) project.value = readProject
	// @note: testing deep-reactivity
	// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity
	setTimeout( () => {
		project!.value = {
			...project?.value,
			client: {
				name: 'updated client name'
			}
		}
	}, 2000 )
} )
</script>

<template>
	<HelloWorld msg="Vite + Vue"/>
	<MyComponent name="shawn"
	             :project="project"/>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
