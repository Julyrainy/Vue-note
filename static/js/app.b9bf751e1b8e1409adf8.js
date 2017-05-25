webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(21);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])//在模块化打包系统中需要添加这句话

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
    state.activeNote = newnote //这句之前忘记了
  },
  //删除笔记
  deleteNote(state){
    for(var i=0;i<state.notes.length;i++){
      if(state.notes[i] === state.activeNote){
        state.notes.splice(i,1)
      }
    }
    state.activeNote = state.notes[0]?state.notes[0]:{text:'',favorite:false};
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


 /* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
     state,
     mutations,
     actions,
     getters
 }));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NoteList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NoteList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_NoteList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Editor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Editor__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_0__components_Toolbar___default.a,
    NoteList: __WEBPACK_IMPORTED_MODULE_1__components_NoteList___default.a,
    Editor: __WEBPACK_IMPORTED_MODULE_2__components_Editor___default.a
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    noteContent: function noteContent() {
      return this.$store.getters.activeNote.text;
    }
  },
  methods: {
    noteChange: function noteChange(e) {
      this.$store.dispatch('action_updateNote', e.target.value);
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: 'all'
    };
  },

  computed: {
    noteItems: function noteItems() {
      if (this.show === 'all') return this.$store.getters.notes;else return this.$store.getters.notes.filter(function (note) {
        return note.favorite;
      });
    },
    activeNote: function activeNote() {
      return this.$store.getters.activeNote;
    }
  },
  methods: {
    setActive: function setActive(item) {
      this.$store.dispatch('action_setActiveNote', item);
    },
    firstLine: function firstLine(text) {
      console.log('haha');
      return text.trim().split('\n')[0];
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    isStar: function isStar() {
      return this.$store.getters.activeNote;
    }
  },
  methods: {
    addOne: function addOne() {
      this.$store.dispatch('action_newNote');
    },

    favoriteOne: function favoriteOne() {
      this.$store.dispatch('action_favorateNote');
    },

    deleteOne: function deleteOne() {
      this.$store.dispatch('action_deleteNote');
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuex_store__ = __webpack_require__(3);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_2__vuex_store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "toolbar"
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-plus",
    on: {
      "click": _vm.addOne
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "glyphicon glyphicon-star",
    class: {
      starred: _vm.isStar.favorite
    },
    on: {
      "click": _vm.favoriteOne
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "glyphicon glyphicon-remove",
    on: {
      "click": _vm.deleteOne
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.noteContent),
      expression: "noteContent"
    }],
    attrs: {
      "id": "note-editor"
    }
  }, [_c('textarea', {
    staticClass: "form-control editorarea",
    domProps: {
      "value": _vm.noteContent
    },
    on: {
      "input": _vm.noteChange
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('toolbar'), _vm._v(" "), _c('note-list'), _vm._v(" "), _c('editor')], 1)
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "note-list"
    }
  }, [_c('div', {
    attrs: {
      "id": "note-title"
    }
  }, [_c('h2', [_vm._v("NOTES | COLIGO")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group btn-group-justified",
    attrs: {
      "role": "group",
      "aria-label": "..."
    }
  }, [_c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = 'all'
      }
    }
  }, [_vm._v("All Notes")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = 'favorite'
      }
    }
  }, [_vm._v("Favorites")])])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.noteItems), function(item) {
    return _c('a', {
      staticClass: "list-group-item",
      class: {
        active: _vm.activeNote === item
      },
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.setActive(item)
        }
      }
    }, [_c('h4', {
      staticClass: "list-group-item-heading"
    }, [_vm._v(_vm._s(_vm.firstLine(item.text)))])])
  }))])])
},staticRenderFns: []}

/***/ })
],[8]);
//# sourceMappingURL=app.b9bf751e1b8e1409adf8.js.map