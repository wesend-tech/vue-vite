import axios from 'axios'

class Base {
	env: any = import.meta.env
	apiUrl: string = this.env.VITE_API_URL
}

export class Project extends Base {
	async getProject(id: string) {
		try {
			const { data } = await axios.get( `${ this.apiUrl }/project/${ id }` )
			return data
		} catch (err: any) {
			if(err?.message.includes('Network')) {
				const mockedObj: any = {
					name: 'mocked project',
					client: {
						name: 'mocked client name'
					}
				}
				console.log('returning mocked object')
				return mockedObj
			}
			throw err
		}
	}
}