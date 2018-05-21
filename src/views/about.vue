<template>
	<div id="about">
		<Header pageTitle="关于"></Header>
		<Menu></Menu>
		<div class="about">
			关于关于关于关于
		</div>
	</div>
</template>
<script>
import Header from '../components/header.vue'
import Menu from '../components/menu.vue' 
export default {
	components: {
		Header,
		Menu
	},
	beforeRouteUpdate(to,from,next) {
		this.$store.commit('hideMenu')
		next()
	}
}
</script>
<style lang="less">
	#about{
		.about{
			padding-top:40px;
		}
	}
</style>