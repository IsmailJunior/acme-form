export const useFormStagesStore = defineStore( 'stage', {
	state: () => ( {
		stages:
			[
				{ active: true, name: 'firstStage' } ,
				 { active: false , name: 'secondStage'} ,
				{ active: false, name: 'thirdStage' },
				{ active: false, name: 'fourthStage' } ]
	} ),
	actions: {
		activateStage (stageName)
		{
			const foundStage = this.stages.find( ( stage ) => stageName === stage.name );
			const foundStageIndex = this.stages.indexOf( foundStage );

			const unActivatedStages = this.stages.filter( ( stage ) =>
			(
				this.stages.indexOf( stage ) > foundStageIndex
			))
			const activatedStages = this.stages.filter( ( stage ) =>
			(
				this.stages.indexOf( stage ) <= foundStageIndex
			) )
			unActivatedStages.forEach((stage) => stage.active = false)
			activatedStages.forEach((stage) => stage.active = true)
			const newStages = activatedStages.concat( unActivatedStages );
			this.stages = newStages
		},
	}
})

export const useFirstStepFormStore = defineStore( 'form', {
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
