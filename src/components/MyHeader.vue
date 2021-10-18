<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
</template>

<script>
    export default {
        name:'MyHeader',
        // props:[],
        methods:{
            add(e){
                // 下个钩子把下面的数据吊上去
                // this.addButton(e.target.value)

                // 当有值的时候才插入新条目
                if (e.target.value) {
                    // 点击时触发自定义事件 并传递数值
                    this.$emit('addButton',e.target.value)
                    e.target.value = ''
                }else{
                    alert("请输入内容")
                }
            }
        }

}
</script>

<style scoped>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>