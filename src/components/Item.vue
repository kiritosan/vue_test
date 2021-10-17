<template>
    <li>
        <label>
            <!-- 状态改变时候 改变自己的复选框的布尔值 -->
        <input type="checkbox" :checked='todo.done' @change='change'/>
        <span>{{todo.title}}</span>
        </label>
        <!-- 传入需要删除的todo的id -->
        <button class="btn btn-danger" @click="itemDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'Item',
        props:['todo'],
        methods: {
            change(){
                // 改变了传来数据的值 而vue看不出来
                // 因为在对象里面
                this.todo.done = !this.todo.done
            },
            // 把id传给app 让app筛选
            itemDelete(id){
                this.$bus.$emit('itemDelete',id)
            }
        },

    }
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>