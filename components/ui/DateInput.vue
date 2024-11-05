<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

const date = ref( null );
const props = defineProps( [ 'id', 'label', 'modelValue', 'error' ] )
const emit = defineEmits(['update:modelValue'])
</script>

<template>
		<div class="flex flex-col justify-center space-y-3">
		<VueDatePicker v-model="date" :enable-time-picker="false"/>
		<div v-if="error" class="text-red-800">
			<span v-for="error in error?._errors">{{error}}</span>
		</div>
		</div>
</template>