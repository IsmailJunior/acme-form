<script setup>
const props = defineProps(['id', 'label'])
</script>

<template>
		<div class="flex flex-col justify-center space-y-3">
		<label :for="id">{{label}}</label>
		<input :id="id" type="date" class="bg-slate-200 rounded-md p-2 border-none">
		</div>
</template>