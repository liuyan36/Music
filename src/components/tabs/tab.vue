<script>
export default {
    name:"Tab",
    data(){
        return{

        }
    },
    props:{
        label:{
            type:[String,Number],
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:"1"
        }
    },
    computed: {
        /**
         * 高亮比对
         */
        active(){
            return this.index == this.$parent.currentIndex;
        }
    },
    methods:{
        clickTabHandler(){
            // this.$emit("onChangeIndex",this.index);
            this.$parent.onChangeIndex(this.index);
        }
    },
    mounted() {
        // this -> 当前组件(tab)
        this.$parent.panes.push(this)
    },
    render(){
        const currentClass={
            tab:true,
            active:this.active
        }
        return(
            <li class={ currentClass } onClick={ this.clickTabHandler }>{ this.label }</li>
        )
    }
}
</script>
<style scoped>
    
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}

</style>