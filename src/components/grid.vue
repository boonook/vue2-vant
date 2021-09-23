<template>
    <div class="layout">
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapActions } from 'vuex'
    import screenfull from 'screenfull'
    export default {
        name: "grid",
        ///跨组件属性
        inject: [],
        ///子组件
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
            return {
                isFullscreen:false,
                status:0
            }
        },
        ///组件的计算属性
        computed: {
            showFullScreenBtn () {
                return window.navigator.userAgent.indexOf('MSIE') < 0
            }
        },

        ///组件方法
        methods: {
            ...mapActions([
                'logout'
            ]),
            handleFullscreen () {
                let main = document.body;
                if (this.isFullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen()
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen()
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    }
                } else {
                    if (main.requestFullscreen) {
                        main.requestFullscreen()
                    } else if (main.mozRequestFullScreen) {
                        main.mozRequestFullScreen()
                    } else if (main.webkitRequestFullScreen) {
                        main.webkitRequestFullScreen()
                    } else if (main.msRequestFullscreen) {
                        main.msRequestFullscreen()
                    }
                }
            },
            handleChange (value) {
                switch(value + ''){
                    case '1':break;
                    case '2':{this.handleFullscreen()}break;
                    case '3':{this.$store.dispatch('logout').then(()=>this.$router.push({name:'index'}))}break;
                }
            },
            _onDropOut(){
                this.logout().then(res=>{
                    this.$router.push({
                        name: 'login'
                    })
                    console.log(res)
                })
            },
            OnGoPageHome(){
                this.$router.push({
                    name: 'home'
                })
            },
            screen(){
                if (!screenfull.isEnabled) {
                    return false
                }
                this.$set(this,'isFullscreen',!this.isFullscreen);
                screenfull.toggle();
            }
        },
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


<style scoped lang="less">
    .layout {
        display: flex;
        width: 100%;
        height: 100%;
        background-color:#000c17;
        flex-direction: column;  /* 子元素横向排列 */
        .logo{
            float: left;
        }
        .menu{
            float: right;
            background-color: transparent;
            color:#fff;
            li{
                float: left;
                padding:0 10px;
                list-style: none;
                cursor: pointer;
            }
        }
        #menu::-webkit-scrollbar {/*滚动条整体样式*/
            width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        #menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 10px;
        }
        #menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
            border-radius: 10px;
        }
    }
</style>
