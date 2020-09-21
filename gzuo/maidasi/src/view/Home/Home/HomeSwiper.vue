<template>
  <div>
    <swiper>
      <swiper-item>
        <a>
          <img style="width: 100%; height: 300px" src="../../../assets/main_scene1.jpg" alt />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img style="width: 100%; height: 300px" src="../../../assets/main_scene2.jpg" alt />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img style="width: 100%; height: 300px" src="../../../assets/main_scene5.jpg" alt />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img style="width: 100%; height: 300px" src="../../../assets/main_scene6.jpg" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  }
};
</script>