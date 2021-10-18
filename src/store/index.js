// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)
// 响应组件中的动作 dispatch
const actions = {
    // addTodo没有处理数据,可以短路它
    addTodo(context,todo){
        console.log('actions addTodo excuted.')
        context.commit('ADD',todo)
        // console.log(this)
        // console.log(context)
        // false this和context本身是不一样的
        // console.log(this === context)
        // true this和context的commit是一样的
        // console.log(this.commit === context.commit)
    },
    // 全选反选
    // selectAll(context,value){
    //     console.log('actions selectAll excuted.')
    //     context.state.todos.forEach(todo => {
    //         todo.done = value
    //     })
    //     context.commit('SELECTALL',value)
    // },
    itemDelete(context,id){
        // 直接传值 这里为练习用
        context.commit('ITEMDELETE',id)
        // this.$store.state.todos = this.$store.state.todos.filter(todo => todo.id != id)
    }
    

}

const mutations = {
    ADD(state,todo){
        console.log('mutations ADD excuted.')
        state.todos.unshift(todo)

    },
    // 将所有item checked值和footer的checked值同步
    SELECTALL(state,value){
        state.todos.forEach(todo => {
            todo.done = value
        })
    },
    // 只保留未选中的item 清除以完成任务
    CHECKEDLIST(state){
        state.todos = state.todos.filter(todo => todo.done === false)
        // console.log(state.done)
        // 一开始的值是false 由于是单向绑定所以框的值变为了true但是没改变done值，所以done还是false
        // 再写一行done=false数据不变,所以不刷新
        // 解决方法：双向绑定v-model
        // 单向绑定：done值变 刷新页面 页面的勾勾选与否，传达不到done
        // 只有当数据变了 value才会刷新页面
        state.done = false
        // console.log(state.done)
    },
    // 删除item
    ITEMDELETE(state,id){
        // 留下选中item以外的item
        state.todos = state.todos.filter(todo => todo.id != id)
    },
    SETDONE(state,val){
        state.done = val
    }
}
// 存储状态
const state = {
    todos:[],
    done:false
}
// 类似computed 所以需要return返回一个值
const getters = {
    // 这里需要传入一个state
    checkedListLength(state){
        return state.todos.filter(todo => todo.done === true).length
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
