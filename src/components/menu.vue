<template>
	<div id="menu" v-show="showMenu">
		<div class="tologin"><i class="iconfont loginicon">&#xe6b0;</i>登录</div>
		<ul>
			<li><i class="iconfont allicon">&#xe664;</i>全部</li>
			<li><i class="iconfont creamicon">&#xe62d;</i>精华</li>
			<li><i class="iconfont shareicon">&#xe605;</i>分享</li>
			<li><i class="iconfont askicon">&#xe655;</i>问答</li>
			<li><i class="iconfont recruiticon">&#xe631;</i>招聘</li>
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
	}
</style>
