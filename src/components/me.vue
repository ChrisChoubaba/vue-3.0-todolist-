<template>
	<h1>我是主页</h1>
	<TodoHeader @todoAdd="todoAdd" />
	<hr/>
	<TodoList @todoDel="todoDel" :list="list" />
	<hr/>
	<TodoFooter @DelChecked="DelChecked" :list="list" />
	<button style="margin-top:50px" @click="getList">点击</button>
</template>

<script>
import TodoHeader from './Header'
import TodoList from './List'
import TodoFooter from './Footer'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
	name:'me',
	components: {
		TodoHeader,
		TodoList,
		TodoFooter
	},
	setup: () => {
		const state = reactive({
			list:[
				{name: '苹果', id:1241241241, isCheckd:false},
				{name: '梨', id:45646546454, isCheckd:false},
				{name: '香蕉', id:153456456, isCheckd:false},
				{name: '桃子', id:22315454, isCheckd:true}
			]
		})
		const todoAdd = (value) => { // 添加一个项
			state.list.unshift(value)
		}
		const todoDel = (index) => { // 删去一个项
			state.list.splice(index, 1)
		}		
		const DelChecked = () => {
			state.list = state.list.filter((item) => {
				return item.isCheckd === false
			})
		}
		const getList = () => {
			console.log(state.list)
		}
		return {
			 ...toRefs(state),
			 todoAdd,
			 todoDel,
			 DelChecked,
			 getList
		}
	}	
})
</script>

<style lang="scss">
	button{
		cursor: pointer;
	}
</style>
