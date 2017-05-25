iimport Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//在模块化打包系统中需要添加这句话

const state = {
  /*
      activeNote={
      text:
      favorite:false
    }
    notes数组里保存若干该对象
  */
  notes:[],
  activeNote:{}
}

const mutations = {
  //编辑笔记
  updateNote(state,text){
    state.activeNote.text = text
  },
  //新建笔记
  newNote(state){
    const newnote = {
      text:"New note",
      favorite:false
    }
    state.notes.push(newnote)
    state.activeNote = newnote//这句之前忘记了
  },
  //删除笔记
  deleteNote(state){
    for(var i=0;i<state.notes.length;i++){
      if(state.notes[i] === state.activeNote){
        state.notes.splice(i,1)
      }
    }
    state.activeNote = state.notes[0]
  },
 //点击和取消喜欢
  favoriteNote(state){
    state.activeNote.favorite = state.activeNote.favorite?false:true
  },

  //设置激活笔记
  setActiveNote(state,note){
    state.activeNote = note
  }
}

const actions = {
  action_updateNote({commit},text){
    commit('updateNote',text)
  },
  action_newNote({commit}){
    commit('newNote')
  },
  action_deleteNote({commit}){
    commit('deleteNote')
  },
  action_favorateNote({commit}){
    commit('favoriteNote')
  },
  action_setActiveNote({commit},note){
    commit('setActiveNote',note)
  }
}

 const getters = {
  notes(state){
    return state.notes
  },
  activeNote(state){
    return state.activeNote
  }
 }


 export default new Vuex.Store({
     state,
     mutations,
     actions,
     getters
 })
