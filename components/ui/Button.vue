<script setup>
const props = defineProps(['label'])

</script>

<template>
 <button type="button"
  class="w-96 h-16 cursor-pointer shadow-xl rounded-full text-start px-5 text-xl bg-[#0D79A8] text-white">{{ label }}</button>
</template>