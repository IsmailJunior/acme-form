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
		<Selector
		:label="$t('city')"
		v-model="form.gender"
		:error="errors?.gender"
	>
		<option>{{ $t("baghdad") }}</option>
		<option>{{ $t("bassra") }}</option>
		<option>{{ $t("erbil") }}</option>
		<option>{{ $t("mousl") }}</option>
	</Selector>
		<Input
		id="name"
		:label="$t('place_you_live')"
		v-model="form.name"
		:error="errors?.name"
	/>
	<Input
		id="id"
		:label="$t('phone_no')"
		v-model="form.nationalty"
		:error="errors?.nationalty"
	/>
	<Input
		id="id"
		:label="$t('email')"
		v-model="form.nationalty"
		:error="errors?.nationalty"
	/>
	<div class="flex flex-row-reverse">
		<Button @click="handleForm" :class-name="{'rotate-180': locale === 'ar-EG'}">
		<PlayIcon />
	</Button>
	</div>
	</div>
</template>
