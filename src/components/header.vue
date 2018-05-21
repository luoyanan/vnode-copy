<template>
    <div id="header">
        <div class="page-cover" v-show="isShowMenu" @click="hideMenu"></div>
        <header>
            <div class="iconfont menu-icon" @click="showMenu">&#xe637;</div>
            <div class="title">{{pageTitle}}</div>
            <div class="tologin iconfont">&#xe608;</div>
        </header>
    </div>
</template>
<script>
import {mapState,mapMutations } from 'vuex'
export default {
    props: {
        pageTitle : {
            type: String,
            require: true
        }
    },
    data () {
        return {
            // showMenu: false
        }
    },
    computed: {
        ...mapState([
             'isShowMenu'
        ])
        // isShowMenu () {
        //     return this.$store.state.isShowMenu
        // }
    },
    methods: {
        ...mapMutations([
            'showMenu',
            'hideMenu'
        ])
    }
}
</script>
<style lang="less" scoped>
    #header {
        .page-cover{
            width: 100%;
            height: 100%;
            background-color: #000;
            position: fixed;
            left: 0;
            top: 0;
            opacity: .5;
            z-index: 10;
        }
        header{
            height: 40px;
            line-height: 40px;
            display: flex;
            position: fixed;
            background-color: #fff;
            width: 100%;
            border-bottom: 1px solid #ccc;
            .menu-icon,.tologin{
                padding: 0 10px;
            }
            .tologin{
                color: #42b983;
            }
            .title{
                width: 100%;
                text-align: center;
            }
        }
    }
</style>
