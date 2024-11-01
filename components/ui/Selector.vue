<script setup>
const props = defineProps( [ 'id', 'label', 'modelValue', 'error'] )
const emit = defineEmits( [ 'update:modelValue' ] );
</script>

<template>
	<div class="mb-6 md:mb-0">
      <label class="block mb-2" :for="id">
      {{label}}
      </label>
      <div class="relative">
        <select @change="event => emit('update:modelValue', event.target.value)" 
          :value="modelValue"
          class="block appearance-none w-full bg-slate-200 border rounded-md border-none text-gray-400 py-3 px-6 pr-8 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500" 
          :id="id">
          <slot />
        </select>
      </div>
      <div v-if="error" class="text-red-800">
			<span v-for="error in error?._errors">{{error}}</span>
		</div>
    </div>
</template>