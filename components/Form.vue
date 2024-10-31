<script setup>
import Card from '@/components/ui/Card.vue';

</script>

<template>
		<div class="relative">
			<Card>
				<form @submit.prevent class="space-y-8 text-gray-400">
					<StepOne />
				</form>
			</Card>
		</div>
</template> 