<template>
	<div class="relative h-[1000px] w-[560px]">
		<div class="w-[560px] h-[800px] p-12 bg-white rounded-[20px] absolute top-10 rtl:right-[160px] z-10">
		<slot />
	</div>
	<div class="w-[560px] h-[800px] bg-slate-300 opacity-15 rounded-[20px] scale-75 absolute top-10 rtl:right-4 ltr:left-36"></div>
			<div class="w-[560px] h-[800px] bg-slate-300 opacity-35 rounded-[20px] scale-90 absolute top-10 rtl:right-[80px] ltr:left-20"></div>
			<div class="w-[560px] h-[800px] bg-slate-300 opacity-60 rounded-[20px] scale-95 absolute top-10 rtl:right-[120px] ltr:left-10"></div>
	</div>
</template>