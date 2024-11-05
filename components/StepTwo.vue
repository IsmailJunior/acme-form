<script setup>
import Input from '@/components/ui/Input.vue';
import Selector from '@/components/ui/Selector.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import Button from '@/components/ui/Button.vue';
import { useFirstStepFormStore, useFormStagesStore } from '@/stores/form';
import {PlayIcon} from 'lucide-vue-next'
import { z } from 'zod';

const { t, locale } = useI18n();
const stepStore = useFirstStepFormStore();
const stageStore = useFormStagesStore();
const errors = ref( null )

const formSchema = z.object({
	workStatus: z.string().min( 2, {message: t('error_work_status')}),
	workSector: z.string().min(2, {message: t('error_type_employment')}),
	jobTitle: z.string().min(4, {message: t('error_job_title')}),
	servicePeriod: z.string().min(1, {message: t('length_of_functional_service')}),
} )

const form = ref( {
	workStatus: '',
	workSector: '',
	jobTitle: '',
	servicePeriod: '',
})

const handleForm = () =>
{
	const valid = formSchema.safeParse( form.value )
	if ( !valid.success )
	{
		errors.value = valid.error.format()
	} else
	{
		errors.value = null;
		stepStore.storeFirstStepForm( form.value )
		stageStore.stages.at(2).active = true;
	}
}
</script>

<template>
	<div class="space-y-8" v-show="stageStore.stages.at(1).active && !stageStore.stages.at(2).active">
	<div class="space-y-4">
		<h1>{{ $t("work_status") }}</h1>
		<div class="flex gap-4">
			<Checkbox
				id="id"
				:label="$t('employee')"
				v-model="form.workStatus"
			/>
			<Checkbox
				id="status"
				:label="$t('unemployed')"
				v-model="form.workStatus"
			/>
		</div>
	</div>
	<div class="space-y-4">
		<h1>{{ $t("type_employment") }}</h1>
		<div class="flex gap-4">
			<Checkbox
				id="id"
				:label="$t('government_sector')"
				v-model="form.workSector"
			/>
			<Checkbox
				id="status"
				:label="$t('private_sector')"
				v-model="form.workSector"
			/>
		</div>
	</div>
	<Input
		id="id"
		:label="$t('job_title')"
		v-model="form.jobTitle"
		:error="errors?.jobTitle"
	/>
	<Selector
		:label="$t('length_of_functional_service')"
		v-model="form.servicePeriod"
		:error="errors?.servicePeriod"
	>
		<option>3</option>
		<option>5</option>
		<option>10</option>
		<option>15</option>
		<option>20</option>
		<option>25</option>
	</Selector>
	<div class="flex flex-row-reverse">
		<Button @click="handleForm" :class-name="{'rotate-180': locale === 'ar-EG'}">
		<PlayIcon />
	</Button>
	</div>
	</div>
</template>
