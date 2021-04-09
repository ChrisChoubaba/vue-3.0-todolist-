<template>
	<p class="todo_item" @mouseenter="deleteShow(true)" @mouseleave="deleteShow(false)">
	<input type="checkbox" v-model="todo.isCheckd" style="margin-right:30px"><span class="list_text">{{ todo.name }}</span>
	<button class="clear_button" @click="todoDel" :style="styleObj" >删除</button>
	</p>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
	name: 'ListItem',
	props:{
		todo: {
			type: Object,
			defalut: 'required'
		},
		todoIndex: {
			type: Number
		}
	},
	setup: (props, context) => {
		const deleteShow = (value) => {
			if (value) {
				state.styleObj.display = 'inline-block'
			}else {
				state.styleObj.display = 'none'
			}
		}
		const state = reactive({
			styleObj: {
				display: 'none'
			}
		})
		const todoDel = () => { // 删去一个项
			context.emit('todoDel', props.todoIndex)
		}			
		return {
			 ...toRefs(state),
			 deleteShow,
			 todoDel
		}
	}
})
</script>

<style lang="scss" scoped>
.todo_item:hover {
	background: rgb(126, 121, 121);
}
.list_text {
	display: inline-block;
	width: 300px;
}
.clear_button {
	color: red;
	background-color: rgb(235, 186, 186);
	border-color: rgb(235, 186, 186);			
}
</style>
