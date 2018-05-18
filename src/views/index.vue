<template>
  <div>
    <Header></Header>
	<Menu></Menu>
    <div>我是主页面</div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Menu from '../components/menu.vue'
export default {
	data () {
		return {
			// showMenu : false
		}
	},
	components: {
		Header,
		Menu
	}
}
</script>
