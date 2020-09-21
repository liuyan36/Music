<template>
  <div class="category-scenery">
    <scroll class="centent">
      <div class="centent-list">
        <div v-for="(item, index) in acg.items" :key="index">
          <img :src="item.picUrl" alt />
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Scroll from "../../../components/common/scroll/Scroll";
export default {
  name: "CategoryScenery",
  components: {
    Scroll
  },
  mounted() {
    this.$store.dispatch("getShopAcg");
  },
  computed: {
    ...mapState(["acg"])
  }
};
</script>


<style scoped>
.category-scenery {
  width: 100%;
  height: 100%;
}
.centent {
  overflow: hidden;
  position: absolute;
  top: 76px;
  bottom: 43px;
  left: 0;
  right: 0;
}
.centent-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.centent img {
  width: 135px;
  height: 148px;
  margin-bottom: 5%;
}
</style>
