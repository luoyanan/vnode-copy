<template>
  <div class="wrapper">
    <Header :pageTitle="searchObj.tab | getPageTitle"></Header>
	<Menu></Menu>
    <section id="list">
    	<ul>
    		<li v-for="item in listData">
    			<h3><span :class="['typeicon mr10',getTabInfo(item.tab,item.good,item.top,true)]" v-text="getTabInfo(item.tab,item.good,item.top,false)"></span>{{item.title}}</h3>
    			<div class="content mb10">
    				<img class="avatar mr10" :src="item.author.avatar_url">
    				<div class="info">
                        <p>
                            <span class="name">
                                {{item.author.loginname}}
                            </span>
                            <span class="status">
                                <b>{{item.reply_count}}</b>
                                /{{item.visit_count}}
                            </span>
                        </p>
                        <p>
                            <time>{{item.create_at | getLastTimeStr(true)}}</time>
                            <time>{{item.last_reply_at | getLastTimeStr(true)}}</time>
                        </p>
                    </div>
    			</div>
    		</li>
    	</ul>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../components/header.vue'
import Menu from '../components/menu.vue'
import * as utils from '../libs/utils.js'
export default {
	data () {
		return {
			searchObj: {
				page: 0,
				limit : 20,
				tab: 'all'
			},
			listData:[]
		}
	},
	computed: {
		pageTitle:function(){
			// let pageTitle
			// if(this.$route.query && this.$route.query.tab){

			// }
			// return 
		}
	},
	components: {
		Header,
		Menu
	},
	mounted () {
		this.getTopics()
		// console.log(this.searchObj)
		// this.getTopics()
	},
	filters: {
        getLastTimeStr(time, isFromNow) {
            return utils.getLastTimeStr(time, isFromNow)
        },
        getPageTitle(tab) {
        	let pageTitle = ''
			switch(tab) {
    			case 'good':
    				pageTitle = '精华'
    				break
    			case 'share':
    				pageTitle = '问答'
    				break
    			case 'ask':
    				pageTitle = '问答'
    				break
    			case 'job':
    				pageTitle = '招聘'
    				break
    			default :
        			pageTitle = '全部'
        			break
        	}
 			return pageTitle
        }
    },
    // beforeRouteUpdate (to,from,next) {
    	
    // 	next()
    // },
    // beforeRouteEnter (to,from,next) {
    // 	console.log('bfrtenter')
    // 	next()
    // },
    // beforeRouteLeave (to,from,next) {
    // 	console.log('bfrtleave')
    // 	next()
    // },
	methods: {
		dealTopicData (data) {
			if(data.success){
				this.listData = data.data
			}
		},
		getTabInfo (tab, good, top, isClass) {
			return utils.getTabInfo(tab, good, top, isClass)
		},
		getTopics () {
			let self = this;
			axios.get('https://cnodejs.org/api/v1/topics',{
				params: self.searchObj
			})
			.then(function(data){
				self.dealTopicData(data.data)
			})
			.catch(function(error){
				console.log(error)
			})
		}
	},
	watch: {
		'$route' (to,from) {
			if(to.query && to.query.tab){
				this.$store.commit('hideMenu')
				this.searchObj.tab = this.$route.query.tab
    			this.getTopics()
			}
		}
	}
}
</script>
<style lang="less" scoped>
	#list{
	    padding-top: 40px;
	    overflow: scroll;
		li{
	    	border-bottom: 1px solid #999;
			padding: 0 15px;
			h3{
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    height: 40px;
			    line-height: 40px;
				.typeicon{
				    padding: 4px 5px;
				    color: #fff;
				    border-radius: 4px 4px 0 0;
				}
				.top {
	            	background: #E74C3C;
		        }
		        .ask {
		            background: #3498DB;
		        }
		        .good {
		            background: #E67E22;
		        }
		        .job {
		            background: #9B59B6;
		        }
		        .share {
		            background: #1ABC9C;
		        }
			}
			.content{
				display: flex;
				.avatar{
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				.info{
					flex: 1;
					p{
						display: flex;
					    justify-content: space-between;
					}
				}	
			}
			
		}
	}
</style>
