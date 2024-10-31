<script setup>
	const props = defineProps(['id', 'label'])
</script>

<template>
	<div class="mb-6 md:mb-0">
      <label class="block mb-2" for="grid-state">
      {{label}}
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-slate-200 border rounded-md border-none text-gray-400 py-3 px-6 pr-8 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500" id="grid-state">
          <slot />
        </select>
      </div>
    </div>
</template>