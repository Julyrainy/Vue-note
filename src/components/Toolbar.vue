<template>
  <div id="toolbar">
    <i @click="addOne" class="glyphicon glyphicon-plus"></i>
    <i @click="favoriteOne" class="glyphicon glyphicon-star" :class="{starred:isStar.favorite}"></i>
    <i @click="deleteOne" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  export default {
    computed:{
      isStar(){
        return this.$store.getters.activeNote
      }
    },
    methods:{
      //添加新笔记
      addOne:function(){
        this.$store.dispatch('action_newNote');
      },
      //添加收藏
      favoriteOne:function(){
        this.$store.dispatch('action_favorateNote');
      },
      //删除笔记
      deleteOne:function(){
        this.$store.dispatch('action_deleteNote');
      }
    }
  }
</script>

<style type="text/css">
  #toolbar{
    float:left;
    width:80px;
    height:100%;
    background-color:#30414D;
    color:#767676;
    padding:35px 25px 25px 25px;
  }

  #toolbar i{
    font-size:30px;
    margin-bottom:35px;
    cursor:pointer;
    opacity:0.8;
    transition:opacity 0.5s ease;
  }

  #toolbar i:hover{
    opacity:1;
  }

  #toolbar i:active{
    color:#ffffff;
  }

  .starred{
    color:#F7AE4F;
  }
</style>
