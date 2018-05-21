import Home from '../views/index.vue'
import Message from '../views/message.vue'
import About from '../views/about.vue'
const routers = [{
  path: '/',
  name: 'Home',
  component: Home
},{
	path: '/message',
	name: 'Message',
	component: Message
},{
	path: '/about',
	name: 'About',
	component: About
}]

export default routers
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     }
//   ]
// })
