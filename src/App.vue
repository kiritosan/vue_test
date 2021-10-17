<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
			<MyHeader @addButton="addButton"/>
			<List :todos="todos"/>
			<!-- 自定义事件 -->
			<MyFooter :todos="todos" @selectAll="selectAll" @checkedList="checkedList"/>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	// 这里的Header和html5的语义化标签重复不能使用
	import MyHeader from './components/MyHeader'
	import MyFooter from './components/MyFooter'
	import List from './components/List'
	// 引入唯一uuid
	import { nanoid } from 'nanoid'
	// 引入消息订阅
	// import pubsub from 'pubsub-js'

	// 引入vuex
	import Vuex from Veux

	export default {
		name:'App',
		components:{
			MyHeader,
			MyFooter,
			List
		},
		data(){
            return{
                todos:[
                    // 这里false是字符串，不是布尔值
                    {id:'0001',title:'吃饭',done:true},
                    {id:'0002',title:'睡觉',done:false},
                    {id:'0003',title:'打代码',done:true}
                ]
            }
        },
		methods:{
			addButton(value){
				// 包装一个条目
				let itemInfo = {id:nanoid(),title:value,done:false}
				// 新条目生成于上方
				this.todos.unshift(itemInfo)

			},
			// todo MyFooter的全选键?
			selectAll(done){
				
				this.todos.forEach(todo => {
					todo.done = done
				})
			},
			// 只保留未选中的item
			checkedList(){
                this.todos = this.todos.filter(todo => todo.done === false)
            },
			itemDelete(id){
				this.todos = this.todos.filter(todo => todo.id != id)
			}
		},
		mounted(){
			this.$bus.$on('itemDelete',this.itemDelete)
		},
		// 销毁前取消绑定到总线的事件
		beforeDestroy(){
			this.$bus.$off('itemDelete')
		}
	}
</script>

<style>
	/*base*/
	body {
	background: #fff;
	}

	.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	}

	.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
	}

	.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
	}

	.btn:focus {
	outline: none;
	}

	.todo-container {
	width: 600px;
	margin: 0 auto;
	}
	.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	}
</style>
