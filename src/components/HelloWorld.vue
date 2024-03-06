<script setup
        lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string, helloWorld: any }>()
const greetingMessage = 'hello'

const count = ref( 0 )
</script>

<template>
	<h1>{{ msg }}</h1>
	<div><slot name="header"></slot></div>
	<div>Slot: <slot :text="greetingMessage" :count="1"></slot></div>
	<div class="card">
		<button type="button"
		        @click="count++">count is {{ count }}
		</button>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>