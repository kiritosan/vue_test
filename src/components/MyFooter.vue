<template>
                                <!-- 当total为0时 不显示footer -->
    <div class="todo-footer" v-show='total'>
        <label>
            <!-- 这里checked值（done）需要双向绑定 -->
        <input type="checkbox" @change="selectAll" v-model='done'/>
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
        // props:["todos"],
        computed: {
            // 计算已完成的条目的数目
            checkedListLength(){
                // 读state可以,改就需要dispatch或commit了
                // 但是getters方法得到的数据不再state里 在getters里
                // return this.$store.state.checkedListLength
                return this.$store.getters.checkedListLength
            },
            total(){
                return this.$store.state.todos.length
            },
            // 直接改值没有getter和setter
            // computed原本的写法是getter和setter都带的
            done:{
                get(){
                    return this.$store.state.done
                },
                set(val){
                    this.$store.commit('SETDONE',val)
                }
            }
        },
        methods:{
            clear(){
                // 调用app组件的checkList方法
                // this.checkedList()
                this.$emit("checkedList")
                
            },
            // 触发事件并传递全选的值给事件设置者
            selectAll(e){
                this.$emit("selectAll",e.target.checked)
            }
        },
        // 生命周期钩子是一个函数
        mounted(){
            console.log(this.$store)
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