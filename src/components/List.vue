<template>
	<div class="list_wrap">
		<!-- <input  v-model="inputValue" type="text" /> -->

		<div class="list" v-for="(item, index) in list" :key="item.id">
			<ListItem :todo="item" @todoDel="todoDel" :todoIndex="index" />
		</div>
	</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import ListItem from './ListItem'
export default defineComponent({
	name: 'TodoList',
	components: {
		ListItem
	},
	props:{
		list: {
			type: Array,
			defalut: 'required'
		}
	},
	setup: (props, context) => {
		const todoDel = (index) => { // 删去一个项
			context.emit('todoDel',index)
		}			
		return {
			todoDel
		}
	}
})
</script>

<style lang="scss" scoped>
.list_wrap{
	width: 500px;
	margin: 0 auto;
	.list {
		text-align: start;
		line-height: 30px;
		.list_text {
			display: inline-block;
			width: 400px;
		}
		.clear_button {
			color: red;
			background-color: rgb(235, 186, 186);
			border-color: rgb(235, 186, 186);			
		}
	}
}

</style>
