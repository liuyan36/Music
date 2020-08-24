<template>
    <div>
        <music-list-view :songlist="hot_song_list" title="热门榜单" />
        <music-list-view :songlist="new_song_list" title="热门推荐" />
        <music-list-view :songlist="rock_song_list" title="摇滚榜单" />
        <music-list-view :songlist="Western_song_list" title="欧美金曲榜" />
        <music-list-view :songlist="oldie_song_list" title="经典老歌榜" />
    </div>
</template>

<script>
import MusicListView from './../MusicListView/musicListView'

export default {
    name: "musicList",
    components: {
        MusicListView
    },
    data() {
        return {
            hot_song_list: [],
            new_song_list: [],
            rock_song_list: [],
            Western_song_list: [],
            oldie_song_list: []
        }
    },
    mounted() {
        // 热门榜单
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type: 1,
            size: 6,
            offset: 0
        }).then(res => {
            console.log(res.data)
            // this.hot_song_list = res.data.song_list
            this.hot_song_list = res.data.song_list
        })

        // 热门推荐
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type: 2,
            size: 6,
            offset: 0
        }).then(res => {
            console.log(res.data)
            // this.hot_song_list = res.data.song_list
            this.new_song_list = res.data.song_list
        })

        //摇滚榜单
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type: 11,
            size: 3,
            offset: 0
        }).then(res => {
            console.log(res.data)
            // this.hot_song_list = res.data.song_list
            this.rock_song_list = res.data.song_list
        })

        //欧美金曲榜单
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type: 21,
            size: 6,
            offset: 0
        }).then(res => {
            console.log(res.data)
            // this.hot_song_list = res.data.song_list
            this.Western_song_list = res.data.song_list
        })
        
        // //经典老歌榜单
        // this.$api.getMusicList({
        //     method:"baidu.ting.billboard.billList",
        //     type: 25,
        //     size: 6,
        //     offset: 0
        // }).then(res => {
        //     console.log(res.data)
        //     // this.hot_song_list = res.data.song_list
        //     this.oldie_song_list = res.data.song_list
        // })
    }
}
</script>

<style lang="less" scoped>

</style>