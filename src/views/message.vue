<template>
	<div id="message">
		<Header pageTitle="消息"></Header>
		<Menu></Menu>
		<div class="message">
			消息消息
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
	#message{
		.message{
			padding-top:40px;
		}
	}
</style>