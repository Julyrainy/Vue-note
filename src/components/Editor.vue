<template>
  <div id="note-editor" v-show='noteContent'>
    <textarea :value="noteContent" @input="noteChange" class="form-control editorarea"></textarea><!-- form-control，可以使得表单宽度占满-->
  </div>
</template>

<script>
  export default {
    computed:{
      noteContent(){
        return this.$store.getters.activeNote.text
      }
    },
    methods:{
    noteChange(e){
        this.$store.dispatch('action_updateNote',e.target.value)
    }
}
  }
</script>

<style type="text/css">
  #note-editor{
    margin-left:380px;
    padding-left: 20px;
    height:100%;
  }

  #note-editor textarea{
    height:100%;
    border:0;
    border-radius: 0;
    box-shadow: 0 0 ;
    font-size:20px;
  }
  .editorarea::first-line{
    font-size:24px;
    font-weight:bold;
    line-height: 48px;
  }
</style>
