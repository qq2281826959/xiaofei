import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Register from '@/page/Register'
import HomeItem from '@/page/Home/HomeItem'
import Login from '@/page/Login'
import LoginItem from '@/page/Login/LoginItem'
import RegisterItem from '@/page/Login/RegisterItem'
import Detail from '@/page/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
	  redirect:{name:'Login'},
	  children:[
		  {
			  path:'homeitem',
			  name:'HomeItem',
			  component:HomeItem
		  },
		  {
			  path:'login',
			  name:'Login',
			  component:Login,
			  redirect:{name:'LoginItem'},
			  children:[
				  {
					  path:'loginitem',
					  name:'LoginItem',
					  component:LoginItem
				  },
				  {
					  path:'registeritem',
					  name:'RegisterItem',
					  component:RegisterItem
				  }
			  ]
		  },
		  {
			  path:'homeitem/detail',
			  name:'Detail',
			  component:Detail
		  }
	  ]
    },
	{
		path:'/register',
		name:'Register',
		component:Register
	},
	{
		path:'/',
		redirect:'/home/Login/LoginItem'
	}
  ]
})
