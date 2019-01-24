<template>
   <div class="story">
      <div class="title">
         <div class="story-text">{{$store.state.storyList[index].title}}</div>
         <div class="return" @click="turnBack"></div>
      </div>
      <div class="column">
         <div @click="active" class="column-item" :class="{active: which==index}" :data-index='index' v-for="(item, index) in story" :key='index'>
            {{index}}
         </div>
      </div>
      <div class="picBox">
         <img draggable="false" @animationend="isChange=false" :class="{fadein: isChange}" :src="src" alt="">
         <div class="expression">{{text}}</div>
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         index: this.$route.query.index,
         story: null,
         isActive: false,
         which: 0,
         src: null,
         text: '',
         timer: null,
         isChange: false
      }
   },
   created () {
      this.story = this.$store.state.storyList[this.index].content;
      this.src = this.story[this.which].itemSrc;
      this.write(this.story[this.which].item, 0);
   },
   methods: {
      active (e) {
         clearTimeout(this.timer);

         var target = e.target;
         this.isActive = true;
         this.which = target.dataset.index;
         this.text = '';

         this.src = this.story[this.which].itemSrc;
         this.isChange = true;
         this.write(this.story[this.which].item, 0);
      },
      write (text,index) {
         if(index < text.length) {
            this.timer = setTimeout(() => {
               this.text += text[index];
               this.write(text, index+1)
            }, 50)
         }
      },
      start () {
         // console.log('start')
      },
      end () {
         // console.log('end')
      },
      turnBack () {
         var _index = this.index;
         this.$router.push({path: 'show', query: {index: _index}});
         // console.log('story', this.index)
      }
   }
}
</script>

<style>
   .story {
      height: 80%;
      width: 80%;
      margin: 50px auto;
   }
   .story .title {
      position: relative;
      margin: 0 auto;
      width: 75%;
      height: 30px;
      border-radius: 15px;
      background: orange;
   }
   .story .title .story-text {
      width: 100%;
      height: 100%;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      font-family: '楷体';
      font-weight: bold;
   }
   .story .title .return {
      position: absolute;
      top: 3px;
      right: 10px;
      height: 24px;
      width: 42px;
      opacity: 0.6;
   }
   .story .title .return:hover{
      cursor: pointer;
      opacity: 1;
   }
   .story .title .return::before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      left: 0;
      top: 0;
      border: 12px solid transparent;
      border-right-color: #ccc;
   }
   .story .title .return::after {
      content: "";
      position: absolute;
      right: 0;
      top: 6px;
      width: 18px;
      height: 12px;
      background: #ccc;
   }

   .story .column{
      width: 75%;
      margin: 30px auto;
      display: flex;
      justify-content: space-around;
   }
   .story .column .column-item{
      position: relative;
      width: 50px;
      height: 50px;
      background: orange;
      transition: all 1.5s ease;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
   }
   .story .column .column-item:before {
      content: '';
      position: absolute;
      top: -31px;
      left: 23px;
      width: 0px;
      height: 55px;
      border: 2px solid orange;
      background: orange;
      transition: all 1.5s ease;
      z-index: -1;
   }
   .story .column .column-item.active{
      transform: translateY(20px);
   }
   .story .column .column-item.active::before{
      height: 75px;
      top: -51px;
   }
   .story .column .column-item:hover {
      background: rgb(204, 124, 20);
   }
   .story .column .column-item:hover:before{
      background: rgb(204, 124, 20);
      border-color: rgb(204, 124, 20);
   }
   .picBox {
      padding: 20px 50px;
      margin: 50px auto;
      height: 430px;
      width: 75%;
      line-height: 30px;
      box-sizing: border-box;
   }
   .picBox img {
      height: 200px;
      width: 280px;
      border-radius: 5px;
      margin: 20px;
   }
   .picBox img.fadein {
      animation: fadein .5s ease;
   }
   .picBox .expression {
      font-size: 20px;
      color: #088;
      text-align: left;
      font-weight: bolder;
      font-family: '楷体'
   }
   @keyframes fadein {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

</style>
