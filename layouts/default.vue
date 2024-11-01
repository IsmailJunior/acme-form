<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const head = useLocaleHead({
	 addDirAttribute: true,
	addSeoAttributes: true,
} )
const htmlAttrs = computed(() => head.value.htmlAttrs)
</script>
<template>
	<Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
		<div class="bg-[#005479] text-white p-4">
		<NuxtLink 
		class="border py-2 px-14 mx-16 rounded-[16px] hover:text-slate-400 hover:border-slate-400 transition-all cursor-pointer"
		v-for="locale in availableLocales" 
		:key="locale.code" 
		:to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink>
	</div>
	<main class="bg-[#005479]">
		<slot />
	</main>
</Html>
</template>