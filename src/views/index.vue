<template>
  <div>
    <Header></Header>
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
import utils from '../libs/utils.js'
export default {
	data () {
		return {
			searchObj: {
				page: 0,
				limit : 20
			},
			listData:[]
		}
	},
	components: {
		Header,
		Menu
	},
	mounted () {
		let self = this
		console.log(self.searchObj)
		axios.get('https://cnodejs.org/api/v1/topics',{
			params: self.searchObj
		})
		.then(function(data){
			self.dealTopicData(data.data)
		})
		.catch(function(error){
			console.log(error)
		})
	},
	filters: {
        getLastTimeStr(time, isFromNow) {
            return utils.getLastTimeStr(time, isFromNow)
        }
    },
	methods: {
		dealTopicData (data) {
			if(data.success){
				this.listData = data.data
			}
		},
		getTabInfo (tab, good, top, isClass) {
			return utils.getTabInfo(tab, good, top, isClass)
		}
	}
}
</script>
<style lang="less" scoped>
	#list{
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
