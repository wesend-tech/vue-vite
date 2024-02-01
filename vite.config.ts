import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import mix from 'vite-plugin-mix'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig( {
	plugins: [
		basicSsl(),
		vue()
		// mix({
		//   handler: './apis/handler.ts'
		// })
	]
} )
