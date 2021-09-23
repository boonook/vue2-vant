<template>
 <div id="app">
    <keep-alive :include="keepAliveInclude">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
    import Vue from 'vue';
    import router from './router';
    export default {
        name: 'App',
        data() {
            return {
                keepAliveInclude: []
            };
        },

        watch: {
            $route(val) {
                this.updateKeepAliveInclude(val);
            }
        },

        created() {
            // XXX: 临时
            const pruneKeepAliveCache = name => {
                const idx = this.keepAliveInclude.indexOf(name);
                if (idx >= 0) {
                    this.keepAliveInclude.splice(idx, 1);
                }
            };

            Vue.prototype.$pushPage = function(loc, ...args) {
                const matchedComponents = router.getMatchedComponents(loc);
                const component = matchedComponents && matchedComponents[0];

                if (component && component.keepAlive && component.name) {
                    pruneKeepAliveCache(component.name);
                }

                // 等待prune更新结束(清理缓存组件)
                this.$nextTick(function() {
                    this.$router.push(loc, ...args);
                });
            };

            Vue.prototype.$replacePage = function(loc, ...args) {
                const matchedComponents = router.getMatchedComponents(loc);
                const component = matchedComponents && matchedComponents[0];

                if (component && component.keepAlive && component.name) {
                    pruneKeepAliveCache(component.name);
                }

                // 等待prune更新结束(清理缓存组件)
                this.$nextTick(function() {
                    this.$router.replace(loc, ...args);
                });
            };
            this.updateKeepAliveInclude(this.$route);
        },

        methods: {
            updateKeepAliveInclude(route) {
                const matchedComponents = router.getMatchedComponents(route);
                const component = matchedComponents && matchedComponents[0];
                if (component && component.keepAlive && component.name) {
                    if (this.keepAliveInclude.indexOf(component.name) < 0) {
                        this.keepAliveInclude.push(component.name);
                    }
                }
            }
        }
    };
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin:0;
    padding: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
  }
  .card_div{
      div{
        color:red;
      }
  }
</style>
