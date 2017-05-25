<template>
  <div id="note-editor">
    <textarea :value="noteContent" @input="noteChange" class="form-control"></textarea><!-- form-control，可以使得表单宽度占满-->
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
    height:100%;
  }

  #note-editor textarea{
    height:100%;
    border:0;
    border-radius: 0;
  }
</style>
