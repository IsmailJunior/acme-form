<script setup>
import Input from '@/components/ui/Input.vue';
import DateInput from '@/components/ui/DateInput.vue';
import Selector from '@/components/ui/Selector.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import Button from '@/components/ui/Button.vue';
import { useFormStore } from '@/stores/form';
import { z } from 'zod';

const store = useFormStore()

const formSchema = z.object({
	name: z.string().min(3),
	id: z.boolean(),
	status: z.boolean(),
	birth: z.string(),
	gender: z.string().min(3),
	socialStatus: z.string().min(3)
} )

const form = ref( {
	name: '',
	id: false,
	status: false,
	birth: '',
	gender: '',
	socialStatus: ''
})

const handleForm = () =>
{
	console.log(form.value)
	const valid = formSchema.safeParse( form.value )
	if ( !valid.success ) return console.log('error')
	console.log(form.value)
}
</script>

<template>
				<Input id="name" :label="$t('name')" v-model="form.name"/>
					<div class="space-y-4">
						<h1>{{$t('id_label')}}</h1>
					<div class="flex gap-4">
					<Checkbox id="id" :label="$t('id_checkbox')" v-model="form.id"/>
					<Checkbox id="status" :label="$t('status_checkbox')" v-model="form.status"/>
					</div>
					</div>
					<Input id="id" :label="$t('id_input')"/>
					<DateInput id="birth" :label="$t('birth_input')" v-model="form.birth"/>
					<Selector :label="$t('gender_input')" v-model="form.gender">
						<option>{{$t('gender_input')}}</option>
						<option>{{$t('gender_input_male')}}</option>
						<option>{{$t('gender_input_female')}}</option>
					</Selector>
					<Selector :label="$t('status_input')" v-model="form.socialStatus">
						<option>{{$t('status_input')}}</option>
						<option>{{$t('status_input_single')}}</option>
						<option>{{$t('status_input_engaged')}}</option>
					</Selector>
					<Button label="Next" @click="handleForm"/>
</template>