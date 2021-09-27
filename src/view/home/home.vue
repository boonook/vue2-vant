<template>
    <div>123123
        <div>
            <vant-button type="info" @click="onPlayMp3">播放失败时的音乐</vant-button>
        </div>
        <div>
            <vant-button type="info" @click="onPlaySuccessMp3">播放成功时的音乐</vant-button>
        </div>
        <div>
            <vant-button type="info" @click="onPlayGoMp3">点击一次播放一次</vant-button>
        </div>
        <div class="wrapper">
            <div class="inner">
                <span></span>
            </div>
        </div>
        <audio controls="controls" hidden id="fail">
          <source src="./audio/fail.mp3" type="audio/mp3" />
        Your browser does not support this audio format.
        </audio>
        <audio controls="controls" hidden id="success">
          <source src="./audio/success.mp3" type="audio/mp3" />
        Your browser does not support this audio format.
        </audio>
        <audio controls="controls" hidden id="go">
          <source src="./audio/go.mp3" type="audio/mp3" />
        Your browser does not support this audio format.
        </audio>
    </div>
</template>
<script>
import {Button} from 'vant'
 export default {
     components:{
         'vant-button':Button
     },
     data(){
        return {
            
        }
     },
     methods:{
      onPlayMp3(){
        let audio = document.getElementById('fail'); //必须用原生js获取id，jquery无效
        audio.currentTime = 0;
        audio.play();
      },
      onPlaySuccessMp3(){
        let audio = document.getElementById('success'); //必须用原生js获取id，jquery无效
        audio.currentTime = 0;
        audio.play();
      },
      onPlayGoMp3(){
        let audio = document.getElementById('go'); //必须用原生js获取id，jquery无效
        // audio.currentTime = 0;
        audio.play();
      }
     },
     mounted(){

     }
 }
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  background: #4e5d74;
  background: linear-gradient(#54647d, #313946);
  height: 100%;
}

.wrapper {
  width: 150px;
  height: 150px;
  margin: 60px auto;
  border-radius: 50%;
  background: #b25244;
  background: linear-gradient(#b25244, #5e1912);
  position: relative;
  cursor: pointer;
  padding: 20px;
  box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.13), 0 5px 8px rgba(0, 0, 0, 0.5), 0 10px 10px 4px rgba(0, 0, 0, 0.3);
}

.wrapper:after {
  content: "";
  position: absolute;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  z-index: -2;
  border-radius: inherit;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.15);
}

.wrapper:before {
  content: "";
  position: absolute;
  left: -10px;
  right: -10px;
  top: -10px;
  bottom: -10px;
  z-index: -1;
  border-radius: inherit;
  box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.13);
  -webkit-filter: blur(1px);
  filter: blur(1px);
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(#8a2c20, #9e4235);
  display: block;
  box-shadow: 0 -2px 5px rgba(255, 255, 255, 0.05), 0 2px 5px rgba(255, 255, 255, 0.1);
}

.inner:after {
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  background: linear-gradient(#eaeceb, #8d8d8d);
  left: 50%;
  top: 50%;
  content: "";
  border-radius: inherit;
  margin: -25px 0 0 -25px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.inner:before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  border-radius: inherit;
  background: inherit;
  margin: -20px 0 0 -20px;
  z-index: 2;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.3), 0 1px 2px white;
}

.inner span {
  display: block;
  width: 20px;
  height: 20px;
  background: #8f3327;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  top: 25px;
  z-index: 3;
  position: relative;
}

.inner span:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 25px;
  background: linear-gradient(#ffffff, #cbcbcd);
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  left: 50%;
  margin-left: -3px;
}
</style>