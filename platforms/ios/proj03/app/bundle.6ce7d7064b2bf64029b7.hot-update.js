webpackHotUpdate("bundle",{

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
            attrs: { text: "ButtonChange" },
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EZXRhaWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsLnZ1ZT9jYzgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx5QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFDQSw2Q0FEQTtBQUVBO0FBRkE7QUFKQTtBQVNBLEtBWEE7QUFhQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQSxxQ0FDQSxpQkFDQSxxQkFEQSxHQUVBLHFCQUhBLEVBR0E7QUFDQSwwQkFEQTtBQUdBO0FBSEEsV0FIQTs7QUFTQTtBQUNBO0FBRUE7QUFFQSxXQUxBLE1BS0E7QUFDQTtBQUVBO0FBQ0EsV0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F6QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FiQTtBQXdDQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQSxxQ0FDQSxpQkFDQSx3QkFEQSxHQUVBLHFCQUhBLEVBR0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsV0FIQTs7QUFRQTtBQUNBO0FBRUE7QUFFQSxXQUxBLE1BS0E7QUFDQTtBQUVBO0FBQ0EsV0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F6QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF4Q0EsR0FEQTtBQXFFQSx1Q0FyRUE7O0FBdUVBO0FBQ0E7QUFDQTs7QUF6RUEsRzs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsd0JBQXdCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLFNBQVMsU0FBUywwQkFBMEIsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsb0JBQW9CLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjZjZTdkNzA2NGIyYmY2NDAyOWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgICA8UGFnZT5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSG91c2UgRGV0YWlsXCIgLz5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuXG4gICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInNlbGVjdGVkaG91c2UuVVJMXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1MFwiIC8+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzZWxlY3RlZGhvdXNlLnRpdGxlXCIgbWFyZ2luPVwiMTBcIiBjbGFzcz1cImgxXCIgLz5cblxuXG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInRXN0YXRlOicrIHNlbGVjdGVkaG91c2UubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0JlZHJvb21zOicgKyBzZWxlY3RlZGhvdXNlLmJlZHJvb21zXCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8VGV4dFZpZXcgZWRpdGFibGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJFc3RhdGU6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2VsZWN0ZWRob3VzZS5uYW1lXCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LTIwXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiLCBCZWRyb29tczogXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJzZWxlY3RlZGhvdXNlLmJlZHJvb21zXCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LTIwXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiIFJlbnQ6JCBcIiBjbGFzcz1cInQtMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInNlbGVjdGVkaG91c2UucmVudFwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidC0yMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiwgVGVuYW50czogXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJzZWxlY3RlZGhvdXNlLnRlbmFudHNcIiBtYXJnaW49XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInQtMjBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIsIEFyZWE6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwic2VsZWN0ZWRob3VzZS5ncm9zc19hcmVhXCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LTIwXCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICA8L1RleHRWaWV3PlxuXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25DaGFuZ2VcIiBAdGFwPVwib25CdXR0b25UYXBcIiAvPlxuXG5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNvLVJlbnRcIiBAdGFwPVwib25CdXR0b25UYXBDb3JlbnRcIiAvPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJNb3ZlLU91dFwiIEB0YXA9XCJvbkJ1dHRvblRhcE1vdmVcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkcmVzc1wiIEB0YXA9XCJvbkJ1dHRvblRhcEFkZHJlc3NcIiAvPlxuXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBBZGRyZXNzIGZyb20gXCIuL0FkZHJlc3NcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25CdXR0b25UYXBBZGRyZXNzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhBZGRyZXNzLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zZWxlY3RlZGhvdXNlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25CdXR0b25UYXBDb3JlbnQ6IGFzeW5jIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGNvbmZpcm0oXCJDb25maXJtIENvLXJlbnQ/XCIpO1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9yZW50ZnJvbS9hZGQvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZGhvdXNlLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybShyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uQnV0dG9uVGFwTW92ZTogYXN5bmMgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciByID0gYXdhaXQgY29uZmlybShcIkNvbmZpcm0gTW92ZS1PdXQ/XCIpO1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9yZW50ZnJvbS9yZW1vdmUvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZGhvdXNlLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybShyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczogW1wic2VsZWN0ZWRob3VzZVwiLCBcIiRkZWxlZ2F0ZVwiXSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJIb3VzZSBEZXRhaWxcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBfdm0uc2VsZWN0ZWRob3VzZS5VUkwsXG4gICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRob3VzZS50aXRsZSwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVzdGF0ZTpcIiArIF92bS5zZWxlY3RlZGhvdXNlLm5hbWUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCZWRyb29tczpcIiArIF92bS5zZWxlY3RlZGhvdXNlLmJlZHJvb21zIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGV4dFZpZXdcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZWRpdGFibGU6IFwiZmFsc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVzdGF0ZTogXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zZWxlY3RlZGhvdXNlLm5hbWUsIG1hcmdpbjogXCIxMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiwgQmVkcm9vbXM6IFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRob3VzZS5iZWRyb29tcywgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiIFJlbnQ6JCBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UucmVudCwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiLCBUZW5hbnRzOiBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UudGVuYW50cywgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiLCBBcmVhOiBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkaG91c2UuZ3Jvc3NfYXJlYSwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQnV0dG9uQ2hhbmdlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNvLVJlbnRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBDb3JlbnQgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTW92ZS1PdXRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBNb3ZlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZHJlc3NcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25CdXR0b25UYXBBZGRyZXNzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9