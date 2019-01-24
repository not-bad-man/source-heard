<template>
   <div class="box">
      <div class="cancel" @click="cancel"></div>
      <div class="write">
         <label for="input">{{title}}</label>
         <textarea autofocus type="text" id="input" v-model="value" :placeholder="placeholder"></textarea>
      </div>
      <div class="ensure" @click="ensure">确定</div>
   </div>   
</template>

<script>
export default {
   data () {
      return {
         title: '分享您的点滴',
         value: '',
         placeholder: ""
      }
   },
   methods: {
      cancel () {
         this.$emit('canceled');
         this.value = "";
         this.placeholder = "";
      },
      ensure () {
         if(this.value != ""){
            this.$emit('written', this.value);
            this.cancel();
         }else {
            this.placeholder = "请输入正确的内容，谢谢"
         }
      }
   }
}
</script>


<style>
.box {
   /* position: relative; */
}
.share {
   padding: 50px;
   font-size: 20px;
   color: #0ff;
   background-size: 100% 100%;
   box-sizing: border-box;
}
.cancel {
   position: absolute;
   height: 20px;
   width: 20px;
   right: 8px;
   top: 8px;
}
.cancel:hover {
   cursor: pointer;
}
.cancel::before,
.cancel::after{
   content: "";
   position: absolute;
   height: 20px;
   width: 4px;
   border-radius: 2px;
   background: #222;
   top: 0;
   left: 8px;
}
.cancel::before{
   transform: rotate3d(0,0,1,45deg);
}
.cancel::after{
   transform: rotate3d(0,0,-1,45deg);
}
.write {
   margin-top: 20px;
}
.write label{
   font-size: 20px;
}
#input {
   box-sizing: border-box;
   padding: 15px 20px;
   height: 170px;
   width: 80%;
   margin-top: 15px;
   font-size: 20px;
   font-family: '楷体';
   border-radius: 5px;
   resize: none;
   background-color:rgba(44, 255, 255, 0.1);
   font-weight: bolder;
   color: #33FFFF;
}
.ensure {
   margin: 20px auto 0;
   height: 50px;
   width: 50px;
   border-radius: 50%;
   background:rgba(44, 234, 232, 0.6);
   font-size: 15px;
   line-height: 50px;
   text-align: center;
   cursor: pointer;
   color: rgb(70, 56, 197);
}
</style>
