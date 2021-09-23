<template>
    <div class="container">
        <img src="@images/rotatebg.png" style="width:100%" alt="">
        <div class="body">
            <div class="title">
                <div class="titleImgBox">
                    <img src="@images/title.png" style="width:176px" alt="">
                    <div class="huojiangname">
                        获奖名单
                    </div>
                </div>
            </div>
            <div class="kuang">
                <div class="kuangImgBox">
                    <img src="@images/kuang2.png" style="width:320px" alt="">
                    <div class="kuangBody">
                        <div class="tableHeader">
                            <div class="th">
                                奖品名称
                            </div>
                            <div class="th">
                                中奖时间
                            </div>
                            <div>
                                状态
                            </div>
                        </div>
                        <div class="tableBodyBox">
                            <div class="tableBody" v-for="(item,index) in list" :key="index">
                                <div class="th">
                                    {{item.prizeName||'神秘礼物'}}
                                </div>
                                <div class="th">
                                    {{item.date||'0000-00-00'}}
                                </div>
                                <div>
                                    {{item.shipmentsType==1?'待发货':(item.shipmentsType==2?'已发货':'完成')}}
                                </div>
                            </div>
                            <div @click="onMore" v-if="total<this.list.length" class="more">加载更多</div>
                            <div v-else class="more">我也是有底线的～</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {logs} from '../../api/data';
    import {Toast} from 'vant'
    import moment from 'moment'
    export default {
        name: "userList",
        data(){
            return{
                token:'',
                page:1,
                limit:10,
                total:0,
                list:[]
            }
        },
        methods:{
            getdata(){
                let params={
                    page:this.page,
                    limit:this.limit
                }
                logs(params).then(res=>{
                    if(res && res.code===200){
                        let data = res.data||{};
                        this.total = data.total||0;
                        let list =data.data||[];
                        list.forEach(item=>{
                            item.date = moment(item.date).format('YYYY-MM-DD');
                        })
                        this.list = list;
                    }
                })
            },
            onMore(){
               this.page =  this.page+1;
            }
        },
        mounted() {
            let query = this.$route.query||{};
            if(query.token==undefined||query.token==''||query.token==null){
                Toast('token不能为空！');
            }else{
                this.token = query.token||'';
            }
            this.getdata();
        }
    }
</script>

<style scoped>
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .body{
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .titleImgBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 999;
    }
    .huojiangname{
        position: absolute;
        top:0;
        left:0;
        z-index:2;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title{
        text-align: center;
        z-index:3;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin-top:55px;
    }
    .kuangImgBox{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:-19px;
    }
    .kuangBody{
        position: absolute;
        top:0;
        left:0;
        z-index:9;
        width:100%;
        height:100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        /*background-color:#fff;*/
    }
    .tableHeader{
        background-color:#02265A;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:15px;
        margin:15px;
        margin-top:30px;
    }
    .tableHeader .th{
        flex:1;
        text-align: center;
    }
    .tableBody{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:5px 15px;
        margin:0 15px;
    }
    .tableBodyBox{
        flex:1;
        overflow-y: auto;
    }
    .tableBody .th{
        flex:1;
        text-align: center;
    }
    .more{
        margin-top:30px;
        padding-bottom:30px;
        text-align: center;
        color:#FFB205;
    }
</style>
