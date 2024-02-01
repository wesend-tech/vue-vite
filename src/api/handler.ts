import axios from 'axios'

class Base {
	env: any = import.meta.env
	apiUrl: string = this.env.VITE_API_URL
}

export class Project extends Base {
	async getProject(id: string) {
		const { data } = await axios.get( `${ this.apiUrl }/project/${ id }` )
		return data
	}
}