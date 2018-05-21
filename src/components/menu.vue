<template>
	<div id="menu" v-show="showMenu">
		<div class="tologin"><i class="iconfont loginicon">&#xe6b0;</i>登录</div>
		<ul>
			<li><router-link :to="{'name':'Home',query:{tab:'all'}}"><i class="iconfont allicon">&#xe664;</i>全部</router-link></li>
			<li><router-link :to="{'name':'Home',query:{tab:'good'}}"><i class="iconfont creamicon">&#xe62d;</i>精华</router-link></li>
			<li><router-link :to="{'name':'Home',query:{tab:'share'}}"><i class="iconfont shareicon">&#xe605;</i>分享</router-link></li>
			<li><router-link :to="{'name':'Home',query:{tab:'ask'}}"><i class="iconfont askicon">&#xe655;</i>问答</router-link></li>
			<li><router-link :to="{'name':'Home',query:{tab:'job'}}"><i class="iconfont recruiticon">&#xe631;</i>招聘</router-link></li>
		</ul>
		<ul class="second-ul">
			<li><router-link :to="{'name':'Message'}"><i class="iconfont allicon">&#xe664;</i>消息</router-link></li>
			<li><router-link :to="{'name':'About'}"><i class="iconfont creamicon">&#xe62d;</i>关于</router-link></li>
		</ul>
	</div>
</template>
<script>
export default {
	computed: {
		showMenu () {
			return this.$store.state.isShowMenu
		}
	}
}
</script>
<style lang="less" scoped>
	#menu{
		width: 50%;
		height: 100%;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0 20px;
		z-index: 11;
		.tologin{
			border-bottom: 1px solid #ccc;
			height: 70px;
			line-height: 70px;
			.loginicon{
				padding: 0 10px;
				color: #fd590b;
				font-size:  22px;
			}
		}
		ul{
			li{
				font-weight: bold;
				height: 50px;
				line-height: 50px;
				a{
					color: #333;
				}
				i{
					margin-right: 30px;
					font-size: 20px;
				}
				.allicon{
					font-size: 12px;
					margin-left: 4px;
				}
			}
		}
		.second-ul{
			border-top: 1px solid #ccc;
		}
	}
</style>
