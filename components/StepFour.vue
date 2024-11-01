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
	name: z.string().min( 3, {message: t('error_name')}),
	nationalty: z.string().min(3, {message: t('error_id_input')}),
	id: z.string(),
	status: z.string(),
	birth: z.string().min(2, {message: t('error_birth_input')}),
	gender: z.string().min(3, {message: t('error_gender_input')}),
	socialStatus: z.string().min(3, {message: t('error_status_input')})
} )

const form = ref( {
	name: '',
	nationalty: '',
	id: 'on',
	status: 'on',
	birth: '',
	gender: '',
	socialStatus: ''
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
	<div class="space-y-8" v-show="stageStore.stages.at(3).active">
		<h1>Fourth Stage</h1>
		<Input
		id="name"
		:label="$t('name')"
		v-model="form.name"
		:error="errors?.name"
	/>
	<div class="space-y-4">
		<h1>{{ $t("id_label") }}</h1>
		<div class="flex gap-4">
			<Checkbox
				id="id"
				:label="$t('id_checkbox')"
				v-model="form.id"
			/>
			<Checkbox
				id="status"
				:label="$t('status_checkbox')"
				v-model="form.status"
			/>
		</div>
	</div>
	<Input
		id="id"
		:label="$t('id_input')"
		v-model="form.nationalty"
		:error="errors?.nationalty"
	/>
	<DateInput
		id="birth"
		:label="$t('birth_input')"
		v-model="form.birth"
		:error="errors?.birth"
	/>
	<Selector
		:label="$t('gender_input')"
		v-model="form.gender"
		:error="errors?.gender"
	>
		<option>{{ $t("gender_input_male") }}</option>
		<option>{{ $t("gender_input_female") }}</option>
	</Selector>
	<Selector
		:label="$t('status_input')"
		v-model="form.socialStatus"
		:error="errors?.socialStatus"
	>
		<option>{{ $t("status_input_single") }}</option>
		<option>{{ $t("status_input_engaged") }}</option>
	</Selector>
	<div class="flex flex-row-reverse">
		<Button @click="handleForm" :class-name="{'rotate-180': locale === 'ar-EG'}">
		<PlayIcon />
	</Button>
	</div>
	</div>
</template>
