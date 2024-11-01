<script setup>
import { useFormStagesStore } from '@/stores/form';
import Button from '@/components/ui/Button.vue';

const stageStore = useFormStagesStore();

</script>

<template>
	<div class="mt-16 px-24">
	<div>
	<div class="text-4xl my-12 space-y-4 text-white">
	<h1>{{$t('headline_first')}}</h1>
	<h1>{{$t('headline_second')}}</h1>
	</div>
	<div class="flex flex-col gap-6">
		<Button @click="stageStore.activateStage('firstStage')" 
		class-name="w-96" 
		:is-active="stageStore.stages.at(0).active">
		{{$t('step_one_form_button')}}
	</Button>
		<Button @click="stageStore.activateStage('secondStage')" 
		class-name="w-96" 
		:is-active="stageStore.stages.at(1).active">
		{{$t('step_two_form_button')}}
	</Button>
		<Button @click="stageStore.activateStage('thirdStage')" 
		class-name="w-96" 
		:is-active="stageStore.stages.at(2).active">
		{{$t('step_three_form_button')}}
	</Button>
		<Button @click="stageStore.activateStage('fourthStage')" 
		class-name="w-96" 
		:is-active="stageStore.stages.at(3).active">
		{{$t('step_four_form_button')}}
	</Button>
	</div>
	</div>
	</div>
</template>