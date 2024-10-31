<script setup>
	const props = defineProps(['id', 'label'])
</script>

<template>
<div class="flex items-center justify-center">
	<input :id="id" type="checkbox" class="peer relative appearance-none w-5 h-5 border rounded-full border-slate-400 cursor-pointer checked:bg-slate-200">
	<label :for="id" class="ms-2 text-sm font-medium">{{label}}</label>
	</div>
</template>