require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["address", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onButtonTapAddress: function onButtonTapAddress(args) {
      this.$navigateTo(_Address__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          address: this.selectedhouse.address,
          $delegate: this
        }
      });
    },
    onButtonTapCorent: function () {
      var _onButtonTapCorent = _asyncToGenerator(function* (args) {
        var r = yield confirm("Confirm Co-rent?");

        if (r) {
          var response = yield fetch(global.rootURL + "/user/rentfrom/add/" + this.selectedhouse.id, {
            method: "POST",
            credentials: "same-origin"
          });

          if (response.ok) {
            var data = yield response.json();
            confirm(data);
          } else if (response.status == 401) {
            var data = yield response.text();
            confirm(data);
          } else {
            confirm(response.statusText);
          }
        }
      });

      function onButtonTapCorent(_x) {
        return _onButtonTapCorent.apply(this, arguments);
      }

      return onButtonTapCorent;
    }(),
    onButtonTapMove: function () {
      var _onButtonTapMove = _asyncToGenerator(function* (args) {
        var r = yield confirm("Confirm Move-Out?");

        if (r) {
          var response = yield fetch(global.rootURL + "/user/rentfrom/remove/" + this.selectedhouse.id, {
            method: "POST",
            credentials: "same-origin"
          });

          if (response.ok) {
            var data = yield response.json();
            confirm(data);
          } else if (response.status == 401) {
            var data = yield response.text();
            confirm(data);
          } else {
            confirm(response.statusText);
          }
        }
      });

      function onButtonTapMove(_x2) {
        return _onButtonTapMove.apply(this, arguments);
      }

      return onButtonTapMove;
    }()
  },
  props: ["selectedhouse", "$delegate"],

  data() {
    return {};
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _HouseList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HouseList.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Detail.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onNavigatedTo: function onNavigatedTo() {
      this.username = global.username;
    },
    onButtonTapMyrental: function () {
      var _onButtonTapMyrental = _asyncToGenerator(function* (args) {
        if (global.username) {
          var response = yield fetch(global.rootURL + "/user/rentfrom", {
            method: "GET",
            credentials: "same-origin"
          });

          if (response.ok) {
            this.houselist = yield response.json();
            console.log(JSON.stringify(this.houselist.rentto));
            this.$navigateTo(_HouseList__WEBPACK_IMPORTED_MODULE_0__["default"], {
              transition: {},
              transitionIOS: {},
              transitionAndroid: {},
              props: {
                houselist: this.houselist.rentto,
                $delegate: this
              }
            });
          } else {
            yield confirm("Please Login!");
          }
        } else {
          confirm({
            title: "Please Login",
            message: "",
            okButtonText: "Yes "
          });
        }
      });

      function onButtonTapMyrental(_x) {
        return _onButtonTapMyrental.apply(this, arguments);
      }

      return onButtonTapMyrental;
    }(),
    onButtonTapUser: function () {
      var _onButtonTapUser = _asyncToGenerator(function* (args) {
        if (!global.username) {
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
            transition: {},
            transitionIOS: {},
            transitionAndroid: {},
            props: {}
          });
        } else {
          var result = yield confirm({
            title: "",
            message: "Confirm to Logoff?",
            okButtonText: "Yes ",
            cancelButtonText: "Cancel "
          });

          if (result) {
            global.username = "";
          }
        }
      });

      function onButtonTapUser(_x2) {
        return _onButtonTapUser.apply(this, arguments);
      }

      return onButtonTapUser;
    }(),
    onItemTapDetail: function onItemTapDetail(args) {
      this.$navigateTo(_Detail__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedhouse: args.item,
          $delegate: this
        }
      });
    },
    onItemTapEstate: function onItemTapEstate(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("house selected: " + args.item.name);

      if (args.index == 0) {
        this.houselist = this.feeds.filter(function (p) {
          return p.name == "City One Shatin";
        });
      } else if (args.index == 1) {
        this.houselist = this.feeds.filter(function (p) {
          return p.name == "Festival City";
        });
      } else if (args.index == 2) {
        this.houselist = this.feeds.filter(function (p) {
          return p.name == "Whampoa Garden";
        });
      } else if (args.index == 3) {
        this.houselist = this.feeds.filter(function (p) {
          return p.name == "Island Resort";
        });
      }

      this.$navigateTo(_HouseList__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          houselist: this.houselist,
          $delegate: this
        }
      });
    },
    onItemTapBedroom: function onItemTapBedroom(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("house selected: " + args.item);

      if (args.index == 0) {
        this.houselist = this.feeds.filter(function (p) {
          return p.bedrooms <= 2;
        });
      } else if (args.index == 1) {
        this.houselist = this.feeds.filter(function (p) {
          return p.bedrooms >= 3;
        });
      }

      this.$navigateTo(_HouseList__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          houselist: this.houselist,
          $delegate: this
        }
      });
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.username = global.username;
      console.log("0000");
      var response = yield fetch(global.rootURL + "/house/json", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.feeds = yield response.json();
        console.log(JSON.stringify(_this.feeds));
      } else {
        console.log(response.statusText);
      }
    })();
  },

  data() {
    return {
      username: "",
      feeds: [],
      houselist: [],
      estates: ["City One Shatin", "Festival City", "Whampoa Garden", "Island Resort"],
      bedrooms: ["bedrooms <= 2 ", "bedroom >= 3"]
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HouseList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    console.log(this.houselist);
  },

  methods: {
    onItemTapDetail: function onItemTapDetail(args) {
      this.$navigateTo(_Detail__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedhouse: args.item,
          $delegate: this
        }
      });
    }
  },
  props: ["houselist", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onButtonTapLogin() {
      var _this = this;

      return _asyncToGenerator(function* () {
        console.log(_this.username + _this.password);
        var response = yield fetch(global.rootURL + "/user/login", {
          method: "POST",
          credentials: "same-origin",
          // body: new FormData(oFormElement),
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body: "username=" + encodeURIComponent(_this.username) + "&password=" + encodeURIComponent(_this.password)
        });
        console.log(response.statusText);

        if (response.ok) {
          // var data = await response.json();
          yield confirm({
            title: "Login success",
            message: "",
            okButtonText: "Yes "
          });
          global.username = _this.username;

          _this.$navigateBack(); // location.replace('/');

        } else if (response.status == 401) {
          var data = yield response.text();
          yield confirm(data);
        } else {
          yield confirm(response.statusText);
        }
      })();
    }

  },

  data() {
    return {};
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.left[data-v-67410f3a] {\n    text-align: left;\n}\n.home-panel[data-v-67410f3a] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-67410f3a] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=template&id=ba634b2e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Page", [_c("WebView", { attrs: { src: _vm.address } })], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=template&id=66f864ec&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "House Detail" } }),
      _c(
        "StackLayout",
        { attrs: { orientation: "vertical" } },
        [
          _c("Image", {
            attrs: {
              src: _vm.selectedhouse.URL,
              stretch: "aspectFill",
              height: "350"
            }
          }),
          _c("Label", {
            staticClass: "h1",
            attrs: { text: _vm.selectedhouse.title, margin: "10" }
          }),
          _c(
            "StackLayout",
            [
              _c("Label", {
                attrs: { text: "Estate:" + _vm.selectedhouse.name }
              }),
              _c("Label", {
                attrs: { text: "Bedrooms:" + _vm.selectedhouse.bedrooms }
              })
            ],
            1
          ),
          _c(
            "TextView",
            { attrs: { editable: "false" } },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: "Estate: " }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedhouse.name, margin: "10" }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: ", Bedrooms: " }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedhouse.bedrooms, margin: "10" }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: " Rent:$ " }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedhouse.rent, margin: "10" }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: ", Tenants: " }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedhouse.tenants, margin: "10" }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: ", Area: " }
                  }),
                  _c("Span", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedhouse.gross_area, margin: "10" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c("Button", {
            attrs: { text: "Button" },
            on: { tap: _vm.onButtonTap }
          }),
          _c("Button", {
            attrs: { text: "Co-Rent" },
            on: { tap: _vm.onButtonTapCorent }
          }),
          _c("Button", {
            attrs: { text: "Move-Out" },
            on: { tap: _vm.onButtonTapMove }
          }),
          _c("Button", {
            attrs: { text: "Address" },
            on: { tap: _vm.onButtonTapAddress }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { navigatedTo: _vm.onNavigatedTo } },
    [
      _c("ActionBar", { attrs: { title: "Home" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            { attrs: { height: "400px" } },
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Home" } }),
                      _c("Image", { attrs: { src: "res://home" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Estate" } }),
                      _c("Image", { attrs: { src: "res://settings" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Bedroom" } }),
                      _c("Image", { attrs: { src: "res://search" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "User" } }),
                      _c("Image", { attrs: { src: "res://browse" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.feeds, "+alias": "feed" },
                      on: { itemTap: _vm.onItemTapDetail }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var feed = ref.feed
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                { attrs: { orientation: "vertical" } },
                                [
                                  _c("Image", {
                                    attrs: { src: feed.URL, height: "300" }
                                  }),
                                  _c("Label", {
                                    staticClass: "h1",
                                    attrs: { text: feed.title }
                                  }),
                                  _c("Label", {
                                    staticClass: "h3",
                                    attrs: { text: feed.name }
                                  }),
                                  _c(
                                    "TextView",
                                    { attrs: { editable: "false" } },
                                    [
                                      _c("Span", {
                                        staticClass: "h3",
                                        attrs: { text: "Rent:$ " }
                                      }),
                                      _c("Span", {
                                        staticClass: "h3",
                                        attrs: { text: feed.rent }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.estates, "+alias": "estate" },
                      on: { itemTap: _vm.onItemTapEstate }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var estate = ref.estate
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "h1",
                                    attrs: { text: estate, height: "100" }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.bedrooms, "+alias": "bedroom" },
                      on: { itemTap: _vm.onItemTapBedroom }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var bedroom = ref.bedroom
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "h1",
                                    attrs: { text: bedroom, height: "100" }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "StackLayout",
                    [
                      _c(
                        "FlexboxLayout",
                        { attrs: { flexDirection: "row" } },
                        [
                          _c("Image", {
                            attrs: {
                              src:
                                "http://attachment.mcbbs.net/forum/201708/19/122213b40344qf15170aqe.png",
                              width: "150",
                              height: "150"
                            }
                          }),
                          _c("Label", {
                            staticClass: "h1",
                            staticStyle: { padding: "20p" },
                            attrs: {
                              text: _vm.username,
                              width: "200",
                              height: "150"
                            }
                          })
                        ],
                        1
                      ),
                      _c("Button", {
                        staticClass: "h1 left",
                        attrs: { text: "Login/Logoff" },
                        on: { tap: _vm.onButtonTapUser }
                      }),
                      _c("Button", {
                        staticClass: "h1 left",
                        attrs: { text: "My Rentals" },
                        on: { tap: _vm.onButtonTapMyrental }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HouseList.vue?vue&type=template&id=6b881213&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "HouseList" } }),
      _c(
        "ListView",
        {
          staticStyle: { height: "1250px" },
          attrs: { items: _vm.houselist, "+alias": "house" },
          on: { itemTap: _vm.onItemTapDetail }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var house = ref.house
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [
                      _c("Label", {
                        staticClass: "t-12",
                        staticStyle: { width: "60%" },
                        attrs: { text: house.title }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Login" } }),
      _c(
        "ScrollView",
        { attrs: { orientation: "horizontal" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "form",
              attrs: { orientation: "vertical", height: "400", margin: "10" }
            },
            [
              _c("TextField", {
                staticClass: "input input-border",
                attrs: { hint: "username", text: _vm.username },
                on: {
                  textChange: function($event) {
                    _vm.username = $event.value
                  }
                }
              }),
              _c("TextField", {
                staticClass: "input input-border",
                attrs: { hint: "password", text: _vm.password },
                on: {
                  textChange: function($event) {
                    _vm.password = $event.value
                  }
                }
              }),
              _c("Button", {
                staticClass: "btn btn-primary btn-rounded-lg",
                attrs: { text: "Login" },
                on: { tap: _vm.onButtonTapLogin }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.rootURL = "https://39cda204.ngrok.io";
global.username = "";
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Home />\n        </Frame>",
  components: {
    Home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Address.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue?vue&type=template&id=ba634b2e&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ba634b2e')) {
      api.createRecord('ba634b2e', component.options)
    } else {
      api.reload('ba634b2e', component.options)
    }
    module.hot.accept("./components/Address.vue?vue&type=template&id=ba634b2e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue?vue&type=template&id=ba634b2e&");
(function () {
      api.rerender('ba634b2e', {
        render: _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Address.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Address.vue?vue&type=template&id=ba634b2e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=template&id=ba634b2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue?vue&type=template&id=66f864ec&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('66f864ec')) {
      api.createRecord('66f864ec', component.options)
    } else {
      api.reload('66f864ec', component.options)
    }
    module.hot.accept("./components/Detail.vue?vue&type=template&id=66f864ec&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue?vue&type=template&id=66f864ec&");
(function () {
      api.rerender('66f864ec', {
        render: _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Detail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Detail.vue?vue&type=template&id=66f864ec&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=template&id=66f864ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/HouseList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HouseList.vue?vue&type=template&id=6b881213&");
/* harmony import */ var _HouseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HouseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HouseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6b881213')) {
      api.createRecord('6b881213', component.options)
    } else {
      api.reload('6b881213', component.options)
    }
    module.hot.accept("./components/HouseList.vue?vue&type=template&id=6b881213&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HouseList.vue?vue&type=template&id=6b881213&");
(function () {
      api.rerender('6b881213', {
        render: _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HouseList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HouseList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HouseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HouseList.vue?vue&type=template&id=6b881213&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HouseList.vue?vue&type=template&id=6b881213&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseList_vue_vue_type_template_id_6b881213___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BZGRyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EZXRhaWwudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvdXNlTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/MmQxYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHJlc3MudnVlPzEyYzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWwudnVlP2NjODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT80OTlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG91c2VMaXN0LnZ1ZT84NjA5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2VmYzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkcmVzcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRyZXNzLnZ1ZT9hMmQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkcmVzcy52dWU/OTA4MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWwudnVlP2JhYjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWwudnVlPzc0NWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT85MzliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/MmMzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdXNlTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib3VzZUxpc3QudnVlPzg0MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib3VzZUxpc3QudnVlP2E5MGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT85YzNjIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3R0b20tbmF2aWdhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiIl0sIm5hbWVzIjpbIkhvbWUiLCJnbG9iYWwiLCJyb290VVJMIiwidXNlcm5hbWUiLCJWdWUiLCJ0ZW1wbGF0ZSIsIiRzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0EsaUNBREE7O0FBR0E7QUFDQTtBQUNBOztBQUxBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUNBLDZDQURBO0FB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LHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsa0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsd0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxxRjs7Ozs7OztBQ0FBLDhFOzs7Ozs7O0FDQUEsbUY7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cblxuICAgICAgICA8V2ViVmlldyAgOnNyYz1cImFkZHJlc3NcIiAvPlxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXCJhZGRyZXNzXCIsIFwiJGRlbGVnYXRlXCJdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXG4gICAgPFBhZ2U+XG5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvdXNlIERldGFpbFwiIC8+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cblxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJzZWxlY3RlZGhvdXNlLlVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNTBcIiAvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRob3VzZS50aXRsZVwiIG1hcmdpbj1cIjEwXCIgY2xhc3M9XCJoMVwiIC8+XG5cblxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0VzdGF0ZTonKyBzZWxlY3RlZGhvdXNlLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidCZWRyb29tczonICsgc2VsZWN0ZWRob3VzZS5iZWRyb29tc1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRXN0YXRlOiBcIiBjbGFzcz1cInQtMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInNlbGVjdGVkaG91c2UubmFtZVwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidC0yMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiwgQmVkcm9vbXM6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2VsZWN0ZWRob3VzZS5iZWRyb29tc1wiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidC0yMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiBSZW50OiQgXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJzZWxlY3RlZGhvdXNlLnJlbnRcIiBtYXJnaW49XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInQtMjBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIsIFRlbmFudHM6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2VsZWN0ZWRob3VzZS50ZW5hbnRzXCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LTIwXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiLCBBcmVhOiBcIiBjbGFzcz1cInQtMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInNlbGVjdGVkaG91c2UuZ3Jvc3NfYXJlYVwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidC0yMFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgPC9UZXh0Vmlldz5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cIm9uQnV0dG9uVGFwXCIgLz5cblxuXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDby1SZW50XCIgQHRhcD1cIm9uQnV0dG9uVGFwQ29yZW50XCIgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTW92ZS1PdXRcIiBAdGFwPVwib25CdXR0b25UYXBNb3ZlXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZHJlc3NcIiBAdGFwPVwib25CdXR0b25UYXBBZGRyZXNzXCIgLz5cblxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi9BZGRyZXNzXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uQnV0dG9uVGFwQWRkcmVzczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQWRkcmVzcywge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc2VsZWN0ZWRob3VzZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uQnV0dG9uVGFwQ29yZW50OiBhc3luYyBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhd2FpdCBjb25maXJtKFwiQ29uZmlybSBDby1yZW50P1wiKTtcbiAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvcmVudGZyb20vYWRkL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRob3VzZS5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0ocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkJ1dHRvblRhcE1vdmU6IGFzeW5jIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGNvbmZpcm0oXCJDb25maXJtIE1vdmUtT3V0P1wiKTtcbiAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvcmVudGZyb20vcmVtb3ZlL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRob3VzZS5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0ocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IFtcInNlbGVjdGVkaG91c2VcIiwgXCIkZGVsZWdhdGVcIl0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgQG5hdmlnYXRlZFRvPVwib25OYXZpZ2F0ZWRUb1wiPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSG9tZVwiIC8+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVwiNDAwcHhcIj5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2hvbWVcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRXN0YXRlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZXR0aW5nc1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJCZWRyb29tXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJVc2VyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9icm93c2VcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cblxuICAgICAgICAgICAgICAgIDwvVGFiU3RyaXA+XG5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJmZWVkIGluIGZlZWRzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBEZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiZmVlZC5VUkxcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImZlZWQudGl0bGVcIiBjbGFzcz1cImgxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5uYW1lXCIgY2xhc3M9XCJoM1wiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFZpZXcgZWRpdGFibGU9XCJmYWxzZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiUmVudDokIFwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJmZWVkLnJlbnRcIiBjbGFzcz1cImgzXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRWaWV3PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImVzdGF0ZSBpbiBlc3RhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwRXN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJlc3RhdGVcIiBjbGFzcz1cImgxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiYmVkcm9vbSBpbiBiZWRyb29tc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcEJlZHJvb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJiZWRyb29tXCIgY2xhc3M9XCJoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cblxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9hdHRhY2htZW50Lm1jYmJzLm5ldC9mb3J1bS8yMDE3MDgvMTkvMTIyMjEzYjQwMzQ0cWYxNTE3MGFxZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VybmFtZVwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMVwiIHN0eWxlPVwicGFkZGluZzoyMHBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpbi9Mb2dvZmZcIiBjbGFzcz1cImgxIGxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvbkJ1dHRvblRhcFVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTXkgUmVudGFsc1wiIGNsYXNzPVwiaDEgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uQnV0dG9uVGFwTXlyZW50YWxcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cblxuXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuXG5cblxuICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvdXNlTGlzdCBmcm9tIFwiLi9Ib3VzZUxpc3RcIjtcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbiAgICBpbXBvcnQgRGV0YWlsIGZyb20gXCIuL0RldGFpbFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbk5hdmlnYXRlZFRvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gZ2xvYmFsLnVzZXJuYW1lO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25CdXR0b25UYXBNeXJlbnRhbDogYXN5bmMgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9yZW50ZnJvbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VsaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5ob3VzZWxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW50dG8pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb3VzZUxpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91c2VsaXN0OiB0aGlzLmhvdXNlbGlzdC5yZW50dG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShcIlBsZWFzZSBMb2dpbiFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBsZWFzZSBMb2dpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXMgXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25CdXR0b25UYXBVc2VyOiBhc3luYyBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWwudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29uZmlybSB0byBMb2dvZmY/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uSXRlbVRhcERldGFpbDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRGV0YWlsLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRob3VzZTogYXJncy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uSXRlbVRhcEVzdGF0ZTogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJob3VzZSBzZWxlY3RlZDogXCIgKyBhcmdzLml0ZW0ubmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJncy5pbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VsaXN0ID0gdGhpcy5mZWVkcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAubmFtZSA9PSBcIkNpdHkgT25lIFNoYXRpblwiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlbGlzdCA9IHRoaXMuZmVlZHMuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLm5hbWUgPT0gXCJGZXN0aXZhbCBDaXR5XCI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5pbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VsaXN0ID0gdGhpcy5mZWVkcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAubmFtZSA9PSBcIldoYW1wb2EgR2FyZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5pbmRleCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VsaXN0ID0gdGhpcy5mZWVkcy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAubmFtZSA9PSBcIklzbGFuZCBSZXNvcnRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb3VzZUxpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3VzZWxpc3Q6IHRoaXMuaG91c2VsaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uSXRlbVRhcEJlZHJvb206IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG91c2Ugc2VsZWN0ZWQ6IFwiICsgYXJncy5pdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZWxpc3QgPSB0aGlzLmZlZWRzLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5iZWRyb29tcyA8PSAyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlbGlzdCA9IHRoaXMuZmVlZHMuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmJlZHJvb21zID49IDM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG91c2VMaXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91c2VsaXN0OiB0aGlzLmhvdXNlbGlzdCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGdsb2JhbC51c2VybmFtZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMDAwMFwiKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvaG91c2UvanNvblwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZlZWRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZlZWRzOiBbXSxcbiAgICAgICAgICAgICAgICBob3VzZWxpc3Q6IFtdLFxuXG4gICAgICAgICAgICAgICAgZXN0YXRlczogW1xuICAgICAgICAgICAgICAgICAgICBcIkNpdHkgT25lIFNoYXRpblwiLFxuICAgICAgICAgICAgICAgICAgICBcIkZlc3RpdmFsIENpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJXaGFtcG9hIEdhcmRlblwiLFxuICAgICAgICAgICAgICAgICAgICBcIklzbGFuZCBSZXNvcnRcIlxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgICAgICBiZWRyb29tczogW1wiYmVkcm9vbXMgPD0gMiBcIiwgXCJiZWRyb29tID49IDNcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmxlZnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxQYWdlPlxuXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJIb3VzZUxpc3RcIiAvPlxuXG5cblxuICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaG91c2UgaW4gaG91c2VsaXN0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBEZXRhaWxcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MTI1MHB4XCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaG91c2UudGl0bGVcIiBjbGFzcz1cInQtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgIDwvTGlzdFZpZXc+XG5cblxuXG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEZXRhaWwgZnJvbSBcIi4vRGV0YWlsXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhvdXNlbGlzdCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uSXRlbVRhcERldGFpbDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRGV0YWlsLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRob3VzZTogYXJncy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczogW1wiaG91c2VsaXN0XCIsIFwiJGRlbGVnYXRlXCJdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJMb2dpblwiIC8+XG5cbiAgICAgICAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG5cblxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjQwMFwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInVzZXJuYW1lXCIgaGludD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBpbnB1dC1ib3JkZXJcIiAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicGFzc3dvcmRcIiBoaW50PVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0IGlucHV0LWJvcmRlclwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ2luXCIgQHRhcD1cIm9uQnV0dG9uVGFwTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFzeW5jIG9uQnV0dG9uVGFwTG9naW4oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VybmFtZSArIHRoaXMucGFzc3dvcmQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICBcIi91c2VyL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9keTogbmV3IEZvcm1EYXRhKG9Gb3JtRWxlbWVudCksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogXCJ1c2VybmFtZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXNlcm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZwYXNzd29yZD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllcyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnVzZXJuYW1lID0gdGhpcy51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmxlZnRbZGF0YS12LTY3NDEwZjNhXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5ob21lLXBhbmVsW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTY3NDEwZjNhXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJQYWdlXCIsIFtfYyhcIldlYlZpZXdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hZGRyZXNzIH0gfSldLCAxKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJIb3VzZSBEZXRhaWxcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBfdm0uc2VsZWN0ZWRob3VzZS5VUkwsXG4gICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRob3VzZS50aXRsZSwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVzdGF0ZTpcIiArIF92bS5zZWxlY3RlZGhvdXNlLm5hbWUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCZWRyb29tczpcIiArIF92bS5zZWxlY3RlZGhvdXNlLmJlZHJvb21zIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGV4dFZpZXdcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZWRpdGFibGU6IFwiZmFsc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVzdGF0ZTogXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zZWxlY3RlZGhvdXNlLm5hbWUsIG1hcmdpbjogXCIxMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiwgQmVkcm9vbXM6IFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRob3VzZS5iZWRyb29tcywgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiIFJlbnQ6JCBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UucmVudCwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiLCBUZW5hbnRzOiBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UudGVuYW50cywgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiLCBBcmVhOiBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UuZ3Jvc3NfYXJlYSwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQnV0dG9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNvLVJlbnRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBDb3JlbnQgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTW92ZS1PdXRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBNb3ZlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZHJlc3NcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBBZGRyZXNzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgb246IHsgbmF2aWdhdGVkVG86IF92bS5vbk5hdmlnYXRlZFRvIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGhlaWdodDogXCI0MDBweFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9ob21lXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJFc3RhdGVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2V0dGluZ3NcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkJlZHJvb21cIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2VhcmNoXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJVc2VyXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBcInJlczovL2Jyb3dzZVwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZmVlZHMsIFwiK2FsaWFzXCI6IFwiZmVlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcERldGFpbCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZWVkID0gcmVmLmZlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGZlZWQuVVJMLCBoZWlnaHQ6IFwiMzAwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGZlZWQudGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGZlZWQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRleHRWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGVkaXRhYmxlOiBcImZhbHNlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZW50OiQgXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGZlZWQucmVudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5lc3RhdGVzLCBcIithbGlhc1wiOiBcImVzdGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcEVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc3RhdGUgPSByZWYuZXN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogZXN0YXRlLCBoZWlnaHQ6IFwiMTAwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uYmVkcm9vbXMsIFwiK2FsaWFzXCI6IFwiYmVkcm9vbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcEJlZHJvb20gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVkcm9vbSA9IHJlZi5iZWRyb29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogYmVkcm9vbSwgaGVpZ2h0OiBcIjEwMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vYXR0YWNobWVudC5tY2Jicy5uZXQvZm9ydW0vMjAxNzA4LzE5LzEyMjIxM2I0MDM0NHFmMTUxNzBhcWUucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIyMHBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMSBsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luL0xvZ29mZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcFVzZXIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxIGxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTXkgUmVudGFsc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcE15cmVudGFsIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiSG91c2VMaXN0XCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTI1MHB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmhvdXNlbGlzdCwgXCIrYWxpYXNcIjogXCJob3VzZVwiIH0sXG4gICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcERldGFpbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBob3VzZSA9IHJlZi5ob3VzZVxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0xMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNjAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGhvdXNlLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJMb2dpblwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGhlaWdodDogXCI0MDBcIiwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGlucHV0LWJvcmRlclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwidXNlcm5hbWVcIiwgdGV4dDogX3ZtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0udXNlcm5hbWUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaW5wdXQtYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJwYXNzd29yZFwiLCB0ZXh0OiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcExvZ2luIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5nbG9iYWwucm9vdFVSTCA9IFwiaHR0cHM6Ly8zOWNkYTIwNC5uZ3Jvay5pb1wiO1xuZ2xvYmFsLnVzZXJuYW1lID0gXCJcIjtcblxubmV3IFZ1ZSh7XG5cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8L0ZyYW1lPmAsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWVcbiAgICB9XG59KS4kc3RhcnQoKTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhNjM0YjJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3h4Yi9wcm9qMDMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmE2MzRiMmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmE2MzRiMmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmE2MzRiMmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhNjM0YjJlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JhNjM0YjJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FkZHJlc3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkcmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkcmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmE2MzRiMmUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmODY0ZWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3h4Yi9wcm9qMDMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjZmODY0ZWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjZmODY0ZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjZmODY0ZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmODY0ZWMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjZmODY0ZWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2Zjg2NGVjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc0MTBmM2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveHhiL3Byb2owMy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib3VzZUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiODgxMjEzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvdXNlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvdXNlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy94eGIvcHJvajAzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZiODgxMjEzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZiODgxMjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZiODgxMjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib3VzZUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiODgxMjEzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiODgxMjEzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvdXNlTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG91c2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvdXNlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG91c2VMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Yjg4MTIxMyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveHhiL3Byb2owMy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JlwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9