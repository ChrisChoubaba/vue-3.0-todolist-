<template>
	<div>
		<input  v-model="inputValue" @keyup.enter="onSubmit(inputValue)" type="text" />
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'TodoHeader',
	// props:['todoAdd'],
	setup: (props, context) => {
		const inputValue = ref('')
		const onSubmit = (value) => {
			if (value) {
				let addItem = {
					name: value,
					id: new Date().getTime(),
					isCheckd: false
				}
				//  context.emit 用于触发事件（父组件传递得事件）
				context.emit('todoAdd',addItem)
			}
			inputValue.value = ''
		}
		return {
			inputValue,
			onSubmit
		}
	}
})
</script>

<style>
</style>
