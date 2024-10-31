<script setup>
import Input from '@/components/ui/Input.vue';
import DateInput from '@/components/ui/DateInput.vue';
import Selector from '@/components/ui/Selector.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import Button from '@/components/ui/Button.vue';
import { useFormStore } from '@/stores/form';
import { z } from 'zod';

const store = useFormStore()
const isShow = ref(false)
const form = ref(z.object({
	name: z.string(),
	id: z.boolean(),
	status: z.boolean(),
	birth: z.date(),
	gender: z.string(),
	socialStatus: z.string()
} ) )
</script>

<template>
				<Input id="name" :label="$t('name')"/>
					<div class="space-y-4">
						<h1>{{$t('id_label')}}</h1>
					<div class="flex gap-4">
					<Checkbox id="id" :label="$t('id_checkbox')"/>
					<Checkbox id="status" :label="$t('status_checkbox')"/>
					</div>
					</div>
					<Input id="id" :label="$t('id_input')"/>
					<DateInput id="birth" :label="$t('birth_input')" />
					<Selector :label="$t('gender_input')">
						<option>{{$t('gender_input')}}</option>
						<option>{{$t('gender_input_male')}}</option>
						<option>{{$t('gender_input_female')}}</option>
					</Selector>
					<Selector :label="$t('status_input')">
						<option>{{$t('status_input')}}</option>
						<option>{{$t('status_input_single')}}</option>
						<option>{{$t('status_input_engaged')}}</option>
					</Selector>
					<h1 v-show="isShow">Hello, World</h1>
					<Button label="Next" @click="isShow = !isShow"/>
</template>