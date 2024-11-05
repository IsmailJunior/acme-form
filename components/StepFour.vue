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
	city: z.string().min( 3, {message: t('error_city')}),
	live: z.string().min(3, {message: t('erorr_place_you_live')}),
	phoneNo: z.string().min(5, {message: t('error_phone_no')}),
	email: z.string().min(3, {message: t('error_email')}),
} )

const form = ref( {
	city: '',
	live: '',
	phoneNo: '',
	email: '',
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
		v-model="form.city"
		:error="errors?.city"
	>
		<option>{{ $t("baghdad") }}</option>
		<option>{{ $t("bassra") }}</option>
		<option>{{ $t("erbil") }}</option>
		<option>{{ $t("mousl") }}</option>
	</Selector>
		<Input
		id="name"
		:label="$t('place_you_live')"
		v-model="form.live"
		:error="errors?.live"
	/>
	<Input
		id="id"
		:label="$t('phone_no')"
		v-model="form.phoneNo"
		:error="errors?.phoneNo"
	/>
	<Input
		id="id"
		:label="$t('email')"
		v-model="form.email"
		:error="errors?.email"
	/>
	<div class="flex flex-row-reverse">
		<Button @click="handleForm" :class-name="{'rotate-180': locale === 'ar-EG'}">
		<PlayIcon />
	</Button>
	</div>
	</div>
</template>
