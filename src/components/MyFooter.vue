<template>
                                <!-- 当total为0时 不显示footer -->
    <div class="todo-footer" v-show='total'>
        <label>
        <input type="checkbox" @change="selectAll"/>
        </label>
        <span>
        <span>已完成{{checkedListLength}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        // tudos是对象
        props:["todos"],
        computed: {
            // 计算已完成的条目的数目
            checkedListLength(){
                return this.todos.filter(todo => todo.done === true).length
            },
            total(){
                return this.todos.length
            }
        },
        // methods:{
        //     change(){
        //         selectAll()
        //     }
        // }
        methods:{
            clear(){
                // 调用app组件的checkList方法
                // this.checkedList()
                this.$emit("checkedList")
                
            },
            selectAll(e){
                this.$emit("selectAll",e.target.checked)
            }
        }
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }

</style>