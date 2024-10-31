<script setup>
import Button from '@/components/ui/Button.vue';
</script>

<template>
	<div class="mt-16 px-24">
	<div>
	<div class="text-4xl my-12 space-y-4 text-white">
	<h1>{{$t('headline_first')}}</h1>
	<h1>{{$t('headline_second')}}</h1>
	</div>
	<div class="flex flex-col gap-6">
		<Button :label="$t('step_one_form_button')"/>
		<Button :label="$t('step_two_form_button')"/>
		<Button :label="$t('step_three_form_button')"/>
		<Button :label="$t('step_four_form_button')"/>
	</div>
	</div>
	</div>
</template>