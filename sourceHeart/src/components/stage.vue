<template>
   <div class="wrapper">
      <div class="content">
         <ul @click="large" :style="getRotate">
            <li v-for="(items, index) in messages" :data-id="index" :key="index"
            :url="items.imgUrl" :style='getStyle(index, items.imgUrl)'></li>
         </ul>
      </div>
      <div class="control">
         <div class="prev">
            <i class="icon-arrow-left" @click="!isShowing && changeRotate('left')"></i>
         </div>
         <div class="add">
            <div @click="!isShowing && toShare()">share</div>
         </div>
         <div class="next">
            <i class="icon-arrow-right" @click="!isShowing && changeRotate('right')"></i>
         </div>
      </div>

      <transition name="fadeImg">
         <div class="showImg" @click="back" v-show="isShowing"> 
            <img :src="showUrl">
            <div class="text">{{text}}</div>
         </div>
      </transition>

      <transition name="fadeShare">
         <share @written="addMessages" @canceled="cancel" class="share" v-show="isShare"
         :style="{backgroundImage:'url(' + randomSrc + ')'}"></share>  
      </transition>
   </div>
</template>

<script>
import share from './share'
import {mapState} from 'vuex'

export default {
   name: 'stage',
   created() {
      
   },
   data () {
      return {
         showUrl: undefined,
         isShowing: false,
         text:'',
         timer: null,
         rotateDeg: 0,
         isShare: false,
         randomSrc: null,
         imgAmount: 26
      }
   },
   computed: {
      ...mapState({messages: state => state.messages}),
      getRotate () {
         return `transform: rotateY(${this.rotateDeg}deg)`
      }
   },
   methods: {
      write (text,index) {
         if(index < text.length) {
            this.timer = setTimeout(() => {
               this.text += text[index];
               this.write(text, index+1)
            }, 200)
         }
      },
      large (e) {
         var url = e.target.getAttribute('url');
         var index = e.target.dataset.id;
         this.showUrl = '../../static' + url.split('static')[1];
         this.isShowing = true;
         var text = this.messages[index].text;
         this.timer = setTimeout(() => {
            this.write(text, 0);
         }, 150)
      }, 
      getStyle (index, items) {
         var rotate = 360 / this.messages.length;
         return `background-image: url(${items}); 
                  background-size: 100% 100%;
                  transform:rotateY(${index*rotate}deg) translateZ(200px);
               `
      },
      changeRotate (direction) {
         var rotate = 360 / this.messages.length;
         direction == 'left' ? this.rotateDeg -= rotate : this.rotateDeg += rotate;
      },
      back () {
         this.isShowing = false;
         this.text = '';
         clearTimeout(this.timer);
      },
      toShare () {
         this.isShare = true;
         this.isShowing = true;
         this.randomSrc = `../../static/img/bgImg/${Math.floor(Math.random()*this.imgAmount)}.jpg`;
      },
      addMessages (message) {
         if(this.messages.length >= 8){
            this.$store.state.messages.pop();
         }
         this.$store.state.messages.unshift({
            text: message,
            imgUrl: this.randomSrc
         })
      },
      cancel () {
         this.isShare = false;
         this.isShowing = false;
         this.rotateDeg = 0;
      }
   },

   components: {share}
}
</script>


<style>
@import url('../css/style.css');

.wrapper {
   position: absolute;
   top: 0px;
   height: 0px;
   font-size: 20px;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.content{
   height: 100px;
   width: 100px;
   transform: translateY(-50%) rotateX(-15deg);
   transform-style: preserve-3d;
   perspective: 1000px;
}
.content ul{
   transform-style: preserve-3d;
   width: 100%;
   height: 100%;
   position: relative;
   transition: 0.3s ease-in-out;
}
.content ul li {
   transition: all 0.5s;
   position: absolute;
   width: 100%;
   height: 100%;
   border-radius: 5px;
   cursor: pointer;
}
.control{
   position: absolute;
   transform: translateY(150px);
   width: 200px;
   height: 50px;
   display: flex;
   justify-content: space-between;
}
.control div{
   height: 50px;
   vertical-align: center;
}
.control div>i{
   font-size: 30px;
   line-height: 50px;
   cursor: pointer;
   text-shadow: -4px -4px 2px #333;
   color: rgb(221, 157, 68);
}
.control div>i:hover{
   color:rgb(222, 184, 135);
   text-shadow: none;
}
.control .add {
   height: 100%;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
}

.control .add>div {
   position: relative;
   height: 40px;
   width: 40px;
   border-radius: 50%;
   display: block;
   border: 0;
   background: rgb(19, 209, 19);
   transition: all 0.5s;
}
.control .add>div:hover {
   cursor: pointer;
   box-shadow:inset 0 0 8px 4px rgb(53, 136, 132);
}
.control .add>div:before {
   content: "";
   position: absolute;
   left: 18px;
   top: 5px;
   height: 30px;
   width: 4px;
   background: skyblue;
   border-radius: 2px;
}
.control .add>div:after {
   content: "";
   position: absolute;
   left: 5px;
   top: 18px;
   height: 4px;
   width: 30px;
   background: skyblue;
   border-radius: 2px;
}
.showImg, .share{
   position: absolute;
   transform: translateY(-100px);
   height: 400px;
   width: 400px;
   border: 1px solid black;
   z-index: 9999;
   border-radius: 3%;
   overflow: hidden;
}

.showImg img{
   width: 100%;
   height: 100%;
   cursor: pointer;
}
.showImg .text {
   padding: 30px;
   position: absolute;
   top: 35px;
   text-align: left;
   line-height: 40px;
   font-size: 22px;
   color:#33FFFF;
   text-shadow: 1px 1px 2px rgb(51, 36, 134);
   width: 100%;
   font-family: '楷体';
   opacity: 0.9;
   box-sizing: border-box;
}
.fadeImg-enter,
.fadeImg-leave-to,
.fadeShare-enter,
.fadeShare-leave-to {
   opacity: 0;
   transform: translateY(0);
   height: 100px;
   width: 100px;
}

.fadeImg-enter-to,
.fadeImg-leave,
.fadeShare-enter-to,
.fadeShare-leave {
   opacity: 1;
   transform: translateY(-100px);
   height: 400px;
   width: 400px;
}

.fadeImg-enter-active,
.fadeImg-leave-active,
.fadeShare-enter-active,
.fadeShare-leave-active {
   transition: .2s all linear;
}

</style>

