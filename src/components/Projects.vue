<script setup
        lang="ts">

// import { computed } from 'vue'

const props = defineProps(['projects', 'message'])
const emit = defineEmits(['update:message'])

// const value = computed({
// 	// getter
// 	get() {
// 		return props.message
// 	},
// 	// setter
// 	set(newValue) {
// 		// Note: we are using destructuring assignment syntax here.
// 		// [firstName.value, lastName.value] = newValue.split(' ')
// 		emit("update:message", newValue);
// 	}
// })

const updateMessage = (message: any) => {
	console.log('messages', props.message)
	emit('update:message', 'new message?')
	return `${message} + another one`
}

</script>

<template>
	<slot v-for="(project, key) in projects" :key="key">
		<div>
			<button @click="updateMessage(message)">update project {{ key + 1 }}</button>
			<textarea v-bind:value="project?.message"></textarea>
		</div>
	</slot>
<!--	<p>Message is: {{ value }}</p>-->
<!--	<input v-model="value" placeholder="edit me" />-->
</template>

<style scoped>

</style>