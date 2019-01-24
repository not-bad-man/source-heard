<template>
   <div class="init">
      <transition name="nextEnter">
         <enter-stage :text="'可曾记得年少模样'" :target="'./show'"></enter-stage>
      </transition>
   </div>   
</template>

<script>
import enterStage from './enterStage';

export default {
   components: {
      enterStage
   }
}
</script>

<style>
   .welcome {
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
   }
</style>
