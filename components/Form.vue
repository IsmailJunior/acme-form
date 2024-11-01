<script setup>
import Card from '@/components/ui/Card.vue';

</script>

<template>
		<div class="relative">
			<Card>
				<form @submit.prevent class="w-full text-gray-400">
						<StepOne/>
						<StepTwo />
						<StepThree />
						<StepFour />
				</form>
			</Card>
		</div>
</template> 