export const useFormStore = defineStore( 'form', {
	state: () => ( { name: '', id: false, status: false, birth: null, gender: '', socialStatus: '' } ),
	actions: {
		storeFirstStepForm (data)
		{
			this.name = data.name
			this.id = data.id
			this.status = data.status
			this.birth = data.birth
			this.gender = data.gender
			this.socialStatus = data.socialStatus
		}
	}
})
