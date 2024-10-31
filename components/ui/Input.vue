<script setup>
const props = defineProps(['id', 'label'])

</script>

<template>
		<div class="flex flex-col justify-center space-y-3">
		<label :for="id">{{label}}</label>
		<input :id="id" type="text" :placeholder="label" class="bg-slate-200 rounded-md p-2 border-none placeholder:text-gray-400">
		</div>
</template>