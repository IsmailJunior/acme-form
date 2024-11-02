<script setup>
import { CheckIcon } from 'lucide-vue-next';
import { cn } from "@/utils";
const props = defineProps(["className", "isActive"]);
</script>

<template>
	<button
		type="button"
		:class=" [ cn( 'h-16 flex justify-between transition-all items-center cursor-pointer shadow-xl rounded-full text-start px-5 text-xl bg-[#0D79A8] text-white',
			{ 'bg-white': isActive, 'text-slate-600': isActive},
			className ) ] "
	>
		<slot />
		<CheckIcon v-show="isActive" stroke-width="5" />
	</button>
</template>
