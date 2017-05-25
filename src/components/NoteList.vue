<template>
  <div id="note-list">
    <div id="note-title">
      <h2>NOTES | COLIGO</h2>

      <div class="btn-group btn-group-justified" role="group" aria-label="...">
        <div class="btn-group" role="group">
          <!-- all notes button -->
          <button type="button" class="btn btn-default" @click ="show='all'">All Notes</button>
        </div>
        <div class="btn-group" role="group">
          <!-- favorite button -->
          <button type="button" class="btn btn-default" @click ="show='favorite'">Favorites</button>
        </div>
      </div>

    </div>

    <div class="container">
      <div class="list-group">
        <a href=# class="list-group-item" v-for="item in noteItems" @click="setActive(item)" :class="{active:activeNote === item}">
          <h4 class="list-group-item-heading">{{item.text}}</h4>
        </a>
      </div>
    </div>
<!--这是我写的，暂时不用
    <ul v-if="show === 'all'">
      <li v-for="item in noteItems" @click="setActive(item)">{{item.text | formatName}}</li>
    </ul>
    <ul v-else>
      <li v-for="item in noteItems" @click="setActive(item)" v-if="item.favorite">{{item.text | formatName}}</li>
    </ul>
-->
  </div>
</template>

<script>
  export default {
    data(){
    return {
      show:'all'
    }
  },
    computed:{
      noteItems(){
        if(this.show === 'all')
          return this.$store.getters.notes;
        else
          return this.$store.getters.notes.filter(note=>note.favorite);//这一步很妙啊
      },
      activeNote(){
        return this.$store.getters.activeNote;
      }
    },
    methods:{
      setActive:function(item){
        this.$store.dispatch('action_setActiveNote',item);
      }
    }
    /*这个FIFA那个不用过滤器，是怎么保持标题就那么长的呢
    filters:{
      formatName:function(value){
        value = value.slice(0,30);
      }
    }
    */
  }
</script>

<style>
  #note-list{
    float:left;
    width:300px;
    height:100%;
    background-color:#F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  #note-title{
    padding:5px 25px 25px 25px;
  }

  #note-title h2{
    font-weight:300;
    text-transform:uppercase;
    text-align:center;
    font-size:22px;
    padding-bottom:8px;
  }

  #note-list .container{
    height:calc(100%-137px);
    max-height:calc(100%-137px);
    overflow:auto;
    width:100%;
    padding:0;
  }

  #note-list .container .list-group-item{
    border:0;
    border-radius:0;
  }

  .list-group-item-heading{
    font-weight:300;
    font-size:15px;
    min-height:21px;
  }
</style>
