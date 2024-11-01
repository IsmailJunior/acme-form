<script setup>
const props = defineProps(['id', 'label', 'modelValue', 'error'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
		<div class="flex flex-col justify-center space-y-3">
		<label :for="id">{{label}}</label>
		<input @input="event => emit('update:modelValue', event.target.value)" 
		:id="id" type="text" 
		:placeholder="label" 
		:value="modelValue" 
		class="bg-slate-200 rounded-md p-2 border-none placeholder:text-gray-400">
		<div v-if="error" class="text-red-800">
			<span v-for="error in error?._errors">{{error}}</span>
		</div>
		</div>
</template>