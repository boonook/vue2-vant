<template>
    <div>
        <h1>登录界面</h1>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    import nativeEnv from '@/utils/nativeEnv'
    export default {
        name:'login',
        props:[],
        components:{},
        data(){
            return{
                msg:nativeEnv.isSupportXcx
            }
        },
        methods:{

        },
        mounted(){
            
        }
    }
</script>
