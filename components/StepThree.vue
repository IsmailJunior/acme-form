<script setup>
import Input from '@/components/ui/Input.vue';
import DateInput from '@/components/ui/DateInput.vue';
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
	chronicDiseases: z.string().min( 3, {message: t('error_name')}),
	nameOfDisease: z.string().min(3, {message: t('error_id_input')}),
} )

const form = ref( {
	chronicDiseases: '',
	nameOfDisease: '',
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
		stageStore.stages.at(1).active = true;
	}
}
</script>

<template>
	<div class="space-y-8" v-show="stageStore.stages.at(2).active && !stageStore.stages.at(3).active">
	<div class="space-y-4">
		<h1>{{ $t("chronic_diseases") }}</h1>
		<div class="flex gap-4">
			<Checkbox
				id="id"
				:label="$t('yes')"
				v-model="form.chronicDiseases"
			/>
			<Checkbox
				id="status"
				:label="$t('no')"
				v-model="form.chronicDiseases"
			/>
		</div>
	</div>
	<Input
		id="id"
		:label="$t('name_of_disease')"
		v-model="form.nameOfDisease"
		:error="errors?.nameOfDisease"
	/>
	<div class="flex flex-row-reverse">
		<Button @click="handleForm" :class-name="{'rotate-180': locale === 'ar-EG'}">
		<PlayIcon />
	</Button>
	</div>
	</div>
</template>
