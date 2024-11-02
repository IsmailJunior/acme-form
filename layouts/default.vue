<script setup>
import { Moon, Sun, Computer} from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const head = useLocaleHead({
	 addDirAttribute: true,
	addSeoAttributes: true,
} )
const htmlAttrs = computed( () => head.value.htmlAttrs )

</script>
<template>
	<Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
	<div :class="['bg-[#005479] text-white flex gap-4 items-center flex-row-reverse p-4', {'bg-[#181818]': $colorMode.value === 'dark'}]">
		<div :class="['bg-[#005479] text-white flex gap-4 flex-row-reverse', {'bg-[#181818]': $colorMode.value === 'dark'}]">
		<Button @click="$colorMode.value = 'dark'">
		<Moon />
	 </Button>
		<Button @click="$colorMode.value = 'light'">
		<Sun />
	 </Button>
		<Button @click="$colorMode.preference = 'system'">
		<Computer />
	 </Button>
	</div>
	<div :class="['bg-[#005479] text-white p-4', {'bg-[#181818]': $colorMode.value === 'dark'}]">
		<NuxtLink 
		class="border py-2 px-14 mx-16 rounded-[16px] hover:text-slate-400 hover:border-slate-400 transition-all cursor-pointer"
		v-for="locale in availableLocales" 
		:key="locale.code" 
		:to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink>
	</div>
  </div>

	<main :class="['bg-[#005479]', {'bg-[#181818]': $colorMode.value === 'dark'}]">
		<slot />
	</main>
</Html>
</template>