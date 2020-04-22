<template>
  <div class="main-container" v-touch:start="startHandler" v-touch:end="endHandler" v-touch:moving="movingHandler">
    <div class="bgImg" :style="{'background-position': offset+'px', 'transition' : transistionTime + 's ease-out' }">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index">Slide {{index}}</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
  export default {
    name: "swiper-example-free-mode",
    title: "Free mode / No fixed positions",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        slides: 15,
        mouseClicked: false,
        dragEnd: false,
        currentPos: 0,
        offset: 0,
        elapsedTime: 0,
        transistionTime: 0.1,
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 100,
          loop:true,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        }
      }
    },
    methods: {
        movingHandler (pos) {
          this.elapsedTime ++;
          if(this.elapsedTime > 4){
            if(this.mouseClicked){
              this.offset += (this.currentPos - pos.x) / 4
              this.currentPos = pos.x
              this.transistionTime = 0.1
            }else {
              if(this.dragEnd == false){
                this.offset += (this.currentPos - pos.x) * 5
                this.currentPos = pos.x
                this.dragEnd = true
                this.transistionTime = 1
              }
              
            }
            this.elapsedTime = 0
          }
        },
        startHandler (pos) {
          this.mouseClicked = true
          this.dragEnd = false
          this.currentPos = pos.x
        },
        endHandler () {
            this.mouseClicked = false
        }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./base.scss";
</style>