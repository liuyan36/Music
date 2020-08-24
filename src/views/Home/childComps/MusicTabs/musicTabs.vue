<template>
    <div class="tabs" v-if="total_song_list.length>0">
        <tabs :currentIndex="currentIndex" @changeIndex="changeIndexHandler">
            <tab
                v-for="(item,index) in total_song_list"
                :key="index"
                :label="item.billboard.name"
                :index="index+1"
            >
                <div class="panel hotsongs on">
                    <ul class="list">
                        <router-link tag="li" :to="'/player/'+childItem.song_id" v-for="(childItem,index) in item.song_list" :key="index" class="item">
                            <div class="poster">
                                <img :src="childItem.pic_big" :alt="childItem.title" />
                            </div>
                            <div class="info">
                                <div class="name">{{ childItem.title }}</div>
                                <div class="author">{{ childItem.artist_name }}</div>
                            </div>
                        </router-link>
                    </ul>
                </div>
            </tab>
        </tabs>
    </div>
</template>
<script>
/**
 *
 * total_song_list:[
 *      {
 *          song_list:[
 *              {},{},{},{},{}
 *          ],
 *          billboard:{
 *              name:"新歌榜"
 *          }
 *      },
 *      {
 *          song_list:[
 *              {},{},{},{},{}
 *          ],
 *          billboard:{
 *              name:"热歌榜"
 *          }
 *      },
 *      {
 *          song_list:[
 *              {},{},{},{},{}
 *          ],
 *          billboard:{
 *              name:"经典老歌榜"
 *          }
 *      }
 * ]
 *
 */
export default {
    name: "MusicTabs",
    data() {
        return {
            total_song_list: [],
            currentIndex: "1"
        };
    },
    methods: {
        changeIndexHandler(index) {
            this.currentIndex = index;
        }
    },
    mounted() {
        /**
         * 获取数据
         */
    setTimeout(() => {
         this.$api
            .getMusicList({
                method: "baidu.ting.billboard.billList",
                type: 1,
                size: 5,
                offset: 0
            })
            .then(res => {
                this.total_song_list.push(res.data);
            });

        this.$api
            .getMusicList({
                method: "baidu.ting.billboard.billList",
                type: 2,
                size: 5,
                offset: 0
            })
            .then(res => {
                this.total_song_list.push(res.data);
            });

        this.$api
            .getMusicList({
                method: "baidu.ting.billboard.billList",
                type: 11,
                size: 5,
                offset: 0
            })
            .then(res => {
                this.total_song_list.push(res.data);
            });
        },100)
       }
};
</script>
<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 375px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>