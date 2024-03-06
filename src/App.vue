<script setup
        lang="ts">
import { HelloWorld, MyComponent, Projects } from './components'
import { ref, onMounted, Ref, UnwrapRef } from 'vue'
import { Project } from './api/handler.ts'
import Slider from './components/Slider.vue'

const apiProject = new Project()

const project: Ref<UnwrapRef<{ name?: string, client?: { name: string } } | undefined>> = ref( undefined )
const projectsRef: Ref = ref( [] )
const helloWorld: Ref = ref( {} )
const tasks = [
	{
		message: `<b>hi</b>`,
		link: 'https://shawnnolan.com'
	},
	{
		message: `<a href='https://wesend.tech' target="_blank">bye</a>`
	},
	{
		message: 'what ${content}'
	}
]

onMounted( async () => {
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
	project.value = await apiProject.getProject( '1234' )
	projectsRef.value = await apiProject.getProjects()
	helloWorld.value = await apiProject.getHelloWorld()
} )
const slotProps = { text: 'my override', count: 3, myName: 'wtf' }
const message = 'asdf'
const save = () => {
	console.log( 'projectsRef', projectsRef )
	console.log( 'message', message )
}

// function batchTimeouts(callbacks: any, delays: any) {
// 	const timeouts: any = []
// 	for (let i = 0; i < callbacks.length; i++) {
// 		console.log( 'callbacks[i]', callbacks[i] )
// 		setInterval( () => {
// 			timeouts.push( callbacks[i] )
// 		}, delays )
// 	}
// 	return timeouts
// }
//
// // const sayHello = 'hi'
// // const sayGoodbye = () => 'bye'
// // const shout = () => 'what'
// // const tasks = [ sayHello, sayGoodbye, shout ]
// // const delays = [ 500, 200, 900 ]
//
// const timeoutObjs = batchTimeouts( ['hi', 'bye', 'what'], 1000 )
// console.log( 'timeoutObjs', timeoutObjs )

</script>

<template>
	<div class="w-auto">
		<slider #default :v-slot="slotProps" :tasks="tasks" :interval="4000" auto-transition="true"/>
	</div>
	<HelloWorld
		msg="Vite + Vue"
		:hello-world="helloWorld">
		<template #header>
			Header stuff
		</template>
		{{ slotProps.text }} {{ slotProps.count }}
	</HelloWorld>
	<MyComponent name="shawn"
	             :project="project"/>
	<Projects v-model:projects="projectsRef"
	          v-model="message"/>
	<button @click="save">save</button>
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