import axios from 'axios'

class Base {
	env: any = import.meta.env
	apiUrl: string = this.env.VITE_API_URL
}

export class Project extends Base {
	async getHelloWorld() {
		try {
			const { data } = await axios.get( `${ this.apiUrl }` )
			return data
		} catch (err) {
			throw err
		}
	}

	async getProjects() {
		try {
			return [
				{
					_id: '1234',
					message: 'project one message'
				},
				{
					_id: '5678',
					message: 'project two message'
				},
				{
					_id: '9012',
					message: 'project three message'
				},
			]
		} catch (err) {
			throw err
		}
	}

	async getProject(id: string) {
		return {
			_id: id,
			name: 'project name',
			client: {
				name: 'client name'
			}
		}
		// try {
		// 	const { data } = await axios.get( `${ this.apiUrl }/project/${ id }` )
		// 	return data
		// } catch (err: any) {
		// 	if (err?.message.includes( 'Network' )) {
		// 		const mockedObj: any = {
		// 			name: 'mocked project',
		// 			client: {
		// 				name: 'mocked client name'
		// 			}
		// 		}
		// 		console.log( 'returning mocked object' )
		// 		return mockedObj
		// 	}
		// 	throw err
		// }
	}
}