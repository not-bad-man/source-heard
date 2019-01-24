<template>
   <div class="show">
      <div class="book" @transitionend="bookHandler" :class="{rotateBack: isClose, rotateleave: isClosed}">
         <div class="cover" :class="{active: isClose}" @click="!isClose && prevPage()" @transitionend="isClosed = true"></div>
         <div class="move" v-show="!isClosed" :class="{toPrevPage: isToLeft===false, toNextPage: isToLeft===true}"
            @animationend="end" @animationstart="start">
            <div class="text">
               {{index > 0 ? storyList[index-1].title : 'this is move'}}   
            </div>   
            <img class="storyImg" draggable="false" :src="index > 0 ? storyList[index-1].src : null" alt="">
            <div class="enter">详情</div>
         </div>
         <div class="display" v-if="index < storyList.length" @click="nextPage">
            <div class="text">{{storyList[index].title}}</div>
            <img class="storyImg" draggable="false" :src="storyList[index].src">
            <router-link class="enter" :to="'/story?index=' + index" tag="div">详情</router-link>
         </div>
         <div class="display close" v-show="index == storyList.length && !isClose">
            <div class="close-text">他们矢志不渝，你呢？</div>
            <div class="close-btn" @click="closeBook">关闭</div>
         </div>
      </div>
      <div class="summary" @transitionend="rotateIn" :class="{textRotateIn: isLeft, textFadeOut: isExist}">初心易得，始终难守</div>
      <transition name="nextEnter">
         <enter-stage v-if="isCanEnter" :text="'若有所感悟，请与我一同分享'" :target="'./stage'"></enter-stage>
      </transition>
   </div>
</template>

<script>
import enterStage from './enterStage'
export default {
   name: 'show',
   created () {
      var index = parseInt(this.$route.query.index);
      if(!Number.isNaN(index)){
         this.index = index;
      } 
   }, 
   data () {
      return {
         cover: 'this is a nice book from yinjie',
         index: 0,
         isMoving: false,
         isToLeft: null,
         isClose: false,
         isClosed: false,
         isLeft: false,
         isExist: false,
         isCanEnter: false,
         storyList: this.$store.state.storyList
      }
   },
   components: {
      enterStage
   },
   methods: {
      prevPage () {
         if(this.index > 0 && this.isMoving === false) {
            this.isMoving = true;
            this.isToLeft = false;
         }
      },
      nextPage () {
         if(this.index < this.storyList.length && this.isMoving == false){
            this.isMoving = true;
            this.index ++;
            this.isToLeft = true;
         }
      },
      start (e) {
      },
      end (e) {
         this.isMoving = false;
         if(this.isToLeft===false){
            this.index--;
         }
         this.isToLeft = null;

      },
      closeBook () {
         this.isClose = true;
      },
      bookHandler (e) {
         var target = e.target;
         var classList = target.classList;
         if(classList.contains('rotateBack')){
            classList.remove('rotateBack');
         }
         if(classList.contains('rotateleave')){
            classList.remove('rotateleave')
            target.style.display = 'none';
            this.isLeft = true;
         }
      },
      rotateIn (e) {
         this.isExist = true;
         var target = e.target;
         var classList = target.classList;
         if(classList.contains('textRotateIn')){
            classList.remove('textRotateIn')
         }
         if(classList.contains('textFadeOut')){
            classList.remove('textFadeOut');
            target.style.display = 'none'
            this.isCanEnter = true;
         }
      }
   }
}
</script>

<style scoped>
@import url('../css/style.css');

   .show{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
      perspective: 1000px;
   }
   .book{
      position: relative;
      width: 200px;
      height: 300px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #888;
      transform-style: preserve-3d;
      box-shadow: 8px 5px 2px #333;
      transform: rotate3d(1, 0, 0, 15deg) rotate3d(0,-1,0,15deg) translate(50%);
      background-image: url('../../static/img/book1.jpg');
      transition: all .5s ease-out;
   }
   .book.rotateBack {
      transform: rotate3d(0,0,0,0);
   }
   .book.rotateleave {
      transition-duration: 2s;
      transform: rotate3d(0,0,1,720deg);
      width: 100px; 
      height: 100px;
      opacity: 0;
   }
   .book>div{
      position: absolute;
      padding: 20px 10px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url('../../static/img/book3.jpg');
      background-size: cover;
      overflow: hidden;
      transition: all .5s ease;
      box-shadow: 1px 1px 1px #888;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-left: 1px solid #444;
   }
   .book .cover{
      transform-origin: right;
      transform: translateX(-100%) rotate3d(0, 1, 0, 30deg);
      transition: all .5s ease-out;
      background-image: url('../../static/img/book3.png');
      border-right: 2px solid #444;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
   }
   .book .cover.active {
      transform: translateX(-100%) rotate3d(0, 1, 0, 179deg);
   }
   .book .move {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform-origin: left;
   }
   .toPrevPage {
      animation: prev 2s ease;
   }
   .toNextPage {
      animation: next 2s ease;
   }
   @keyframes prev {
      from {
         transform: rotate3d(0, 1, 0, -150deg);
      }
      to {
         transform: rotate3d(0, 1, 0, 0deg);
      }
   }
   @keyframes next {
      from {
         transform: rotate3d(0, 1, 0, 0deg);
      }
      to {
         transform: rotate3d(0, 1, 0, -150deg);
      }
   }
   .book .display {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      font-size: 20px;
   }
   .book .text {
      font-size: 20px;
      font-family: '楷体';
   }
   .book .storyImg {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      margin-top: 20px;
   }
   .book .enter {
      display: block;
      height: 30px;
      width: 40px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 18px;
      font-family: '楷体';
      line-height: 30px;
      text-align: center;
      background: rgb(197, 196, 121);
   }
   .book .enter:hover {
      box-shadow: inset 2px 2px 1px #888;
   }

   .close {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
   }
   .close-text {
      font-size: 20px;
      text-align: center;
      font-family: '楷体';
      line-height: 40px;
   }
   .close-btn {
      width: 40px;
      height: 28px;
      font-size: 18px;
      font-family: '楷体';
      border-radius: 10%;
      line-height: 28px;
      text-align: center;
      box-shadow: 2px 2px 4px #888;
      background: rgb(197, 196, 121); 
   }
   .close-btn:hover {
      box-shadow: none;
      cursor: pointer;
   }
   .summary {
      height: 40px;
      font-size: 0;
      font-weight: bolder;
      color: skyblue;
      font-family: '楷体';
      text-align: center;
      line-height: 40px;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: rotate3d(0,0,0,0);
      opacity: 1;
   }
   .textRotateIn {
      font-size: 40px;
      transform: rotate3d(0,0,1,720deg);
   }
   .textFadeOut {
      transition-delay: 3s;
      opacity: 0;
   }
   .nextEnter-enter, .nextEnter-leave-to {
      opacity: 0;
      transform: scale(.1, .1);
   }
   .nextEnter-enter-to, .nextEnter-leave {
      opacity: 1;
      transform: scale(1, 1);
   }
   .nextEnter-enter-active, .nextEnter-leave-active {
      transition: all .5s cubic-bezier(0.55, 0.655, 0.675, 0.19)
   }

</style>
