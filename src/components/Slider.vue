<script setup
        lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
	tasks: { message: string, link?: string }[],
	interval: number,
	autoTransition?: { type: Boolean, default: false }
}>()

let activeState = 0
const templateMessage: any = ref( {} )
// const easeInClass = 'easeIn'
// const easOutClass = 'easeOut'
const easeInOutClass = ref( '' )
let slotInterval: any

const updateMessage = () => {
	if (props.tasks && props.tasks.length) {
		// easeInOutClass.value = easeInClass
		if (activeState === props.tasks.length) activeState = 0
		templateMessage.value = props.tasks[activeState]
		activeState++
		// easeInOutClass.value = easOutClass
	}
}

const goBack = () => {
	switch (activeState) {
		case 0:
			activeState = 2
			break
		case 1:
			activeState = 0
			break
		case 2:
			activeState = 1
			break
		default:
			activeState = 0
	}
	templateMessage.value = props.tasks[activeState]
}

const goForward = () => {
	switch (activeState) {
		case 0:
			activeState = 1
			break
		case 1:
			activeState = 2
			break
		case 2:
			activeState = 0
			break
		default:
			activeState = 0
	}
	templateMessage.value = props.tasks[activeState]
}

onMounted( () => {
	if (props.tasks.length) templateMessage.value = props.tasks[activeState]
	if (props.autoTransition) slotInterval = setInterval( updateMessage, props.interval )
} )

onUnmounted( () => {
	clearInterval( slotInterval )
} )
</script>

<template>
	<slot name="default">
		<div class="d-flex justify-content-center w-100" :class="easeInOutClass">
			<button class="btn btn-link mx-auto" @click="goBack"><-</button>
			<span class="mx-auto" v-if="!templateMessage.link"
			      v-html="templateMessage.message"></span>
			<a class="mx-auto" v-if="templateMessage.link"
			   :href="templateMessage.link"
			   v-html="templateMessage.message"></a>
			<button class="btn btn-link mx-auto" @click="goForward">-></button>
		</div>
	</slot>
</template>

<style scoped>
.easeIn {
	animation: opac .5s;
	animation-name: AnimateIn;
}

.easeOut {
	animation: opac .5s;
	animation-name: AnimateOut;
}

/*animation: move 8s infinite ease-in-out;*/

@keyframes move {
	100% {
		opacity: 0;
	}
	90% {
		opacity: 1;
	}
	10% {
		opacity: 1;
	}
	0% {
		opacity: 0;
	}
}

@keyframes AnimateIn {
	0% {
		opacity: 0;
	}
	50% {
		opacity: .5%;
	}
	100% {
		opacity: 1%;
	}
}

@keyframes AnimateOut {
	100% {
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
	0% {
		opacity: 0;
	}
}
</style>