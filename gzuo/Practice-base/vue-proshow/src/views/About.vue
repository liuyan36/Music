<template>
  <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-2049.14px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 4</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 5</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 6</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="6" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 7</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="7" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 8</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="8" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 9</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="9" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 10</div>
      <div class="swiper-slide" data-swiper-slide-index="0" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 1</div>
      <div class="swiper-slide" data-swiper-slide-index="1" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 2</div>
      <div class="swiper-slide" data-swiper-slide-index="2" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 3</div>
      <div class="swiper-slide" data-swiper-slide-index="3" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 4</div>
      <div class="swiper-slide" data-swiper-slide-index="4" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 5</div>
      <div class="swiper-slide" data-swiper-slide-index="5" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 6</div>
      <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="6" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 7</div>
      <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="7" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 8</div>
      <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="8" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 9</div>
      <div class="swiper-slide" data-swiper-slide-index="9" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 10</div>

    <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 1</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 2</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 3</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 4</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 5</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 6</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="6" style="width: 156.286px; transition-duration: 0ms; margin-right: 30px;">Slide 7</div></div>

    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div>
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 8"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 9"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 10"></span></div>
  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
</template>

<script>
import './script'
export default {
  name: 'About',
  mech: {
    var mySwiper = new Swiper('.swiper-container',{
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
    })
  }
}
</script>

<style lang="scss" scoped>
    body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}
    .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
    .swiper-container {
      width: 100%;
      height: auto;
      padding: 90px 0;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 200px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition-property: all;
}
.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}
.swiper-button-prev {
    left: 10px;
    right: auto;
}
.swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none!important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
}
.swiper-button-prev:after {
    content: 'prev';
}
.swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}
.swiper-button-next {
    right: 10px;
    left: auto;
}
.swiper-button-next:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none!important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
}
.swiper-button-next:after {
    content: 'next';
}
.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s opacity;
    transform: translate3d(0,0,0);
    z-index: 10;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
}
.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--swiper-pagination-color,var(--swiper-theme-color));
}
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}


</style>