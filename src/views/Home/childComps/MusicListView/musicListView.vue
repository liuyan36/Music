<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>{{ title }}</h3>
                <a>更多</a>
            </div>
            <div class="list clearfix" v-if="songlist.length > 0">
               <a href="#" 
                    v-for="(item,index) in songlist" 
                    :key="index" 
                    :class="{'clear-padding': index%3 !== 1}"
                    class="item">
                    <!--绑定class里面先定义一个class，然后使用除3余1来判断是否第二行-->
                    <div class="img-wrapper">
                        <img :src="item.pic_radio" alt />
                    </div>
                    <div class="main">{{ cutTitle(item.title) }}</div>
                    <div class="gray">{{ cutTitle(item.author) }}</div>
                </a>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: "musicListView",
    props: {
        songlist: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            default:'榜单'
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        cutTitle(title) {
            if(length >= 8) {
                return title.substring(0,8) + "..."
            } else {
                return title
            }
        }
    }
}
</script>

<style lang="less" scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>