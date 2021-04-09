<template>
	<div class="footer_wrap" >
		<input type="checkbox" :disabled="list.length == 0" @change="checkChange()" v-model="isAllCheckd" style="margin-right:30px">
		选中<span>{{checkdNum}}</span>个/共{{allNum}}个
		<span class="clear_item">
			<button @click="DelChecked" class="clear_button">删除选中</button>
		</span>
	</div>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'
export default defineComponent({
	name: 'TodoFooter',
	props:{
		list:{
			type: Array
		}
	},
	data() {
		return {
			
		}
	},
	setup: (props, context) => {
		const isAllCheckd = computed({
			get() {
				if (allNum.value === checkdNum.value && allNum.value != 0) {
					return true
				} else {
					return false
				}
			},
			set(value) { // 全选或者全不选
				if (value) {
					props.list.forEach(ele => {
						ele.isCheckd = true
					});
				} else {
					props.list.forEach(ele => {
						ele.isCheckd = false
					});
				}
			}
		})
		const checkdNum = computed(() => {
			return props.list.reduce((pre,item,index) => pre + (item.isCheckd ? 1: 0),0)
		})
		const allNum = computed(() => {
			return props.list.length
		})
		const DelChecked = () => {
			context.emit('DelChecked', true)
		}
		const checkChange = (() => {
			// console.log(isAllCheckd.value)
		})
		return {
			isAllCheckd,
			checkdNum,
			allNum,
			DelChecked,
			checkChange
		}
	}
})
</script>
<style lang="scss" scoped>
.footer_wrap{
	width: 500px;
	margin: 0 auto;
	text-align: start;
	.clear_item {
		display: inline-block;
		margin-left: 200px;
		.clear_button {
			color: red;
			background-color: rgb(235, 186, 186);
			border-color: rgb(235, 186, 186);
		}
	}
}

</style>
