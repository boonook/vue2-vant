<template>
    <div class="not_found">
        <h1>活动未开始或已结束</h1>
    </div>
</template>
<script>
    export default {
        name: "not_found",
        ///跨组件属性
        inject: [],
        ///子组件
        components: {},
        ///组件属性
        props: {
            value: {
                state: {
                    type: String,
                    default: 'add'
                },
                data: {
                    type: Object,
                    default: {}
                }
            }
        },
        ///组件数据(状态)
        data() {
            return {}
        },
        ///组件的计算属性
        computed: {},

        ///组件方法
        methods: {},
        ///组件生命周期 挂载到了父节点上
        mounted() {

        },
        ///组件属性或数据的监听
        watch: {},

        ///组件生命周期 组件被销毁
        destroyed() {
        },

    }
</script>


<style lang="less" scoped>
    .not_found{
        text-align: center;
        margin-top:30%;
        h1{
            font-size:40px;
        }
    }
</style>
