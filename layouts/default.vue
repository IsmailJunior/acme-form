<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const head = useLocaleHead({
	 addDirAttribute: true,
	addSeoAttributes: true,
} )
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>
<template>
	<Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
		<div>
		<NuxtLink 
		v-for="locale in availableLocales" 
		:key="locale.code" 
		:to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink>
	</div>
	<main class="bg-[#005479]">
		<slot />
	</main>
</Html>
</template>