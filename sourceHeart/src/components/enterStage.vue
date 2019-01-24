<template>
  <div class="enter">
     <p>{{text}}</p>
     <div>
        <i class="icon-arrow-right" @click="toStage"></i>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  },
  props: ['text', 'target'],
  name: "enterStage",
  methods: {
     toStage () {
        this.$router.push({path: this.target});
     }
  }
};
</script>

<style scoped>
@import url('../css/style.css');

.enter {
   padding: 20px;
   height: 80px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}
.enter p {
   font-size: 40px;
   height: 40px;
   color: #ccc;
   font-family: '楷体';
   font-weight: bold;
}

.enter div {
   margin-top: 20px;
   height: 40px;
}

.enter div>i {
   line-height: 40px;
   font-size: 40px;
   color: rgb(192, 177, 37);
   animation: fade 2s linear infinite ;
}
.enter div>i:hover {
   opacity: 1;
   animation: none;
}
@keyframes fade {
   0% {
      opacity: 1;
   }
   50% {
      opacity: .5;
   }
   100% {
      opacity: 1;
   }

}

</style>
