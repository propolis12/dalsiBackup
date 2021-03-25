(self["webpackChunk"] = self["webpackChunk"] || []).push([["vuePage"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
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
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/services/users-service.js":
/*!******************************************!*\
  !*** ./assets/services/users-service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers),
/* harmony export */   "fetchUsersToken": () => (/* binding */ fetchUsersToken),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser),
/* harmony export */   "authenticateUser": () => (/* binding */ authenticateUser),
/* harmony export */   "refreshToken": () => (/* binding */ refreshToken)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/**
 *
 * @returns {Promise}
 */

function fetchUsers() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/users');
}
function fetchUsersToken()
/*token*/
{
  //return axios.get('/api/users',  { headers: { 'Authorization' : 'Bearer ' + token } } );
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/users', {
    withCredentials: true
  });
}
function deleteUser(id) {
  console.log(id);
  return axios__WEBPACK_IMPORTED_MODULE_2___default().delete('/api/users/' + id);
}
/**
 *
 * @returns {Promise}
 */

function authenticateUser(username, password) {
  var headers = {
    'Content-Type': 'application/json'
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/login_check', {
    username: username,
    password: password
  }, {
    headers: headers,
    withCredentials: true
  });
}
function refreshToken() {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("/").then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}

/***/ }),

/***/ "./assets/vuePage.js":
/*!***************************!*\
  !*** ./assets/vuePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_vuePage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/vuePage.css */ "./assets/styles/vuePage.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users */ "./assets/pages/users.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/services/users-service */ "./assets/services/users-service.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







//import Vue from 'vue';

 //import Dropzone from 'dropzone';
//Dropzone.autoDiscover = false;

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");





var isRefreshing = false;
var subscribers = [];
axios__WEBPACK_IMPORTED_MODULE_11___default().interceptors.response.use(function (response) {
  return response;
}, function (err) {
  var config = err.config,
      _err$response = err.response,
      status = _err$response.status,
      data = _err$response.data;
  var originalRequest = config;

  if (originalRequest.url.includes('/api/login_check')) {
    return Promise.reject(err);
  }

  if (status === 401 && data.message === "JWT Token not found") {
    if (!isRefreshing) {
      isRefreshing = true;
      (0,_services_users_service__WEBPACK_IMPORTED_MODULE_12__.refreshToken)().then(function (_ref) {
        var status = _ref.status;

        if (status === 200 || status === 204) {
          isRefreshing = false;
        }

        subscribers = [];
      })["catch"](function (error) {
        console.error(error);
      });
    }

    var requestSubscribers = new Promise(function (resolve) {
      subscribeTokenRefresh(function () {
        resolve(axios__WEBPACK_IMPORTED_MODULE_11___default()(originalRequest));
      });
    });
    onRefreshed();
    return requestSubscribers;
  }
});
subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed() {
  subscribers.map(function (cb) {
    return cb();
  });
}

(0,vue__WEBPACK_IMPORTED_MODULE_9__.createApp)(_pages_users__WEBPACK_IMPORTED_MODULE_10__.default).mount('#users');
/** to show the image filename in form field */

$('.custom-file-input').on('change', function (event) {
  var inputFile = event.currentTarget;
  $(inputFile).parent().find('.custom-file-label').html(inputFile.files[0].name);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Footer',
  props: {
    footerMessage: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Loading'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_user_list_user_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/user_list/user-card */ "./assets/components/user_list/user-card.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loading */ "./assets/components/loading.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserList',
  components: {
    UserCard: _components_user_list_user_card__WEBPACK_IMPORTED_MODULE_0__.default,
    Loading: _components_loading__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    deleteUser: function deleteUser(id) {
      console.log(id + '  poslane do index.vue');
      this.$emit('delete-user', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/users-service */ "./assets/services/users-service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    dltUser: function dltUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_this.user.id);
                /*axios.delete('/api/users/' + this.user.id).then((response) => {
                  console.log(response)})*/

                _context.next = 3;
                return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(_this.user.id);

              case 3:
                //this.users = response.data['hydra:member'];
                console.log("klikol som tlacitko");

                _this.$emit('delete-user', _this.user.id);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/navbar */ "./assets/components/navbar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/footer */ "./assets/components/footer.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_user_list_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/user_list/index */ "./assets/components/user_list/index.vue");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/users-service */ "./assets/services/users-service.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Users',
  components: {
    Navbar: _components_navbar__WEBPACK_IMPORTED_MODULE_4__.default,
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_5__.default,
    UserList: _components_user_list_index__WEBPACK_IMPORTED_MODULE_7__.default
  },
  data: function data() {
    return {
      footerMessage: 'My own Photocloud made with care 2021 ',
      users: [],
      loading: false,
      logged: false,
      componentKey: 0,
      password: '',
      token: '',
      showIfLogged: false
    };
  },
  methods: {
    refresh: function refresh(id) {
      console.log(id + ' poslane do users.vue');
      /* deletovanie z pola !!!!!!! */

      this.users = this.users.filter(function (el) {
        return el.id !== id;
      });
    },
    clearCookie: function clearCookie() {
      document.getElementById('logout').click();
    },
    authenticate: function authenticate() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var headers, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('som tu'); //let response = '';

                headers = {
                  'Content-Type': 'application/json'
                };
                _context.next = 4;
                return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_8__.authenticateUser)(window.username, _this.password);

              case 4:
                response = _context.sent;

                /*axios.post('/api/login_check', {username : window.username , password : this.password }, {
                headers : headers
                })*/
                console.log(response);
                _this.token = response.data.token;
                console.log(_this.token); //window.token = this.token

                _context.next = 10;
                return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_8__.fetchUsersToken)();

              case 10:
                response = _context.sent;
                _this.users = response.data['hydra:member'];
                console.log(_this.users); //let response = await authenticateUser(this.password, window.username)
                //let response = await axios.get('https://127.0.0.1:8000/api/users');

                /*let response = axios({
                  method: 'post',
                  headers: "'Content-Type': 'application/json'",
                  url: '/api/login_check',
                  data: {
                    username: window.username,
                    password: this.password
                  }
                });*/
                //console.log(response);
                //console.log(response);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!window.logged) {
                _context2.next = 6;
                break;
              }

              console.log('tuuuuu');
              _context2.next = 4;
              return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_8__.fetchUsersToken)();

            case 4:
              response = _context2.sent;
              _this2.users = response.data['hydra:member'];

            case 6:
              _this2.loading = true;
              _context2.prev = 7;
              //response = await fetchUsers();
              //console.log(response);
              _this2.loading = false;
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](7);
              _this2.loading = false;
              return _context2.abrupt("return");

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 11]]);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("asdadasdadaasfaf"); //let response = await authenticateUser(window.username, this.password)

              _context3.next = 3;
              return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_8__.refreshToken)().then(function (_ref) {
                var status = _ref.status;

                if (status === 200 || status === 204) {
                  _this3.logged = true;
                  console.log("sadafsfsdf");
                }
              });

            case 3:
              if (!_context3.sent) {
                _context3.next = 5;
                break;
              }

              ;

            case 5:
              console.log(_this3.logged);

              if (!_this3.logged) {
                _context3.next = 12;
                break;
              }

              _context3.next = 9;
              return (0,_services_users_service__WEBPACK_IMPORTED_MODULE_8__.fetchUsersToken)();

            case 9:
              response = _context3.sent;
              _this3.users = response.data['hydra:member'];
              console.log(_this3.users);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=template&id=25fc48b6":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=template&id=25fc48b6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "footer justify-content-center d-flex"
};
var _hoisted_2 = {
  "class": "pt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("footer", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.footerMessage), 1
  /* TEXT */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=template&id=4ce03031":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=template&id=4ce03031 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("h4", {
    "class": _ctx.$style.component
  }, " Loading... ", 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=template&id=76a326aa":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=template&id=76a326aa ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "navbar navbar-expand-md navbar-light bg-light "
};
var _hoisted_2 = {
  "class": "navbar-brand",
  href: "#"
};
var _hoisted_3 = {
  "class": "text-white text-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "navbar-toggler  collapsed",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "navbar-toggler-icon"
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": " collapse navbar-collapse  ",
  id: "navbarSupportedContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row "
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
  "class": "navbar-nav  d-flex flex-row mx-md-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "nav-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-white"
}, "Home"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "(current)")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link",
  href: "#"
}, "Link")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link dropdown-toggle",
  href: "#",
  id: "navbarDropdown",
  role: "button",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, " Dropdown "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "dropdown-menu",
  "aria-labelledby": "navbarDropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "Something else here")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link disabled",
  href: "#"
}, "Disabled")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#endHalfNavbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
  id: "endHalfNavbar",
  "class": "collapse navbar-collapse navbar-nav justify-content-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  id: "js-nav-updates"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link navbar-navlink nav-bell mt-3 mr-4",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-bell"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "alert-circle"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link mt-3 mr-4",
  href: "#"
}, "Tutorials")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "nav-link dropdown-toggle",
  "data-toggle": "dropdown",
  href: "#",
  title: "Account Menu",
  id: "dropdownMenuButton",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "user-img",
  src: "https://image.flaticon.com/icons/png/512/61/61205.png"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-chevron-down pl-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "dropdown-menu dropdown-menu-right p-0",
  "aria-labelledby": "dropdownMenuButton"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "My Account"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "My Bookmarks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, "Sign Out")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n         <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<nav :class=\"[$style.navbar, 'navbar-expand-md', 'navbar-light', 'bg-light' ]\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), _hoisted_4, _hoisted_5])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-12"
};
var _hoisted_2 = {
  "class": "mt-4"
};
var _hoisted_3 = {
  "class": "col-4 offset-4 justify-content-center"
};
var _hoisted_4 = {
  "class": "table"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "thead-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "id"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Username"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Firstname"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Lastname"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loading");

  var _component_user_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loading, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.loading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, " Submit your password to view registered users ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$props.loading && $props.users.length === 0]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.users, function (user) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_user_card, {
      onDeleteUser: $options.deleteUser,
      key: user['@id'],
      user: user
    }, null, 8
    /* PROPS */
    , ["onDeleteUser", "user"])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$props.loading]]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  scope: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<div class=\" users-column col-4 d-flex justify-content-center \">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.id), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.username), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.email), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.firstname), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.lastname), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
    "class": "fas fa-trash-alt",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.dltUser();
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span>{{ \"id:\" +  user.id +    \"  username: \"  + user.username + \" email:  \" + user.email + \" \".repeat(5)}}<i class=\"fas fa-trash-alt\" @click=\"dltUser()\"></i></span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=template&id=56c924ff":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=template&id=56c924ff ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid "
};
var _hoisted_2 = {
  "class": "row"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "TitleUsers d-flex justify-content-center rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Registered Users")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "row ml-3"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "please type your password again ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "tabulka"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_UserList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UserList");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<Navbar :title=\"message\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    "class": "form-control",
    type: "password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "button",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.authenticate && $options.authenticate.apply($options, arguments);
    }),
    value: "send"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.clearCookie && $options.clearCookie.apply($options, arguments);
    }),
    value: "clear"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UserList, {
    "class": "",
    key: $data.users,
    onDeleteUser: $options.refresh,
    users: $data.users,
    loading: $data.loading
  }, null, 8
  /* PROPS */
  , ["onDeleteUser", "users", "loading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer, {
    "footer-message": $data.footerMessage
  }, null, 8
  /* PROPS */
  , ["footer-message"])]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"component":"component_3_Cp0"});

/***/ }),

/***/ "./assets/styles/vuePage.css":
/*!***********************************!*\
  !*** ./assets/styles/vuePage.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/components/footer.vue":
/*!**************************************!*\
  !*** ./assets/components/footer.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_25fc48b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=25fc48b6 */ "./assets/components/footer.vue?vue&type=template&id=25fc48b6");
/* harmony import */ var _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js */ "./assets/components/footer.vue?vue&type=script&lang=js");



_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _footer_vue_vue_type_template_id_25fc48b6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/footer.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/loading.vue":
/*!***************************************!*\
  !*** ./assets/components/loading.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loading_vue_vue_type_template_id_4ce03031__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=4ce03031 */ "./assets/components/loading.vue?vue&type=template&id=4ce03031");
/* harmony import */ var _loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js */ "./assets/components/loading.vue?vue&type=script&lang=js");
/* harmony import */ var _loading_vue_vue_type_style_index_0_id_4ce03031_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true */ "./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true");




const cssModules = _loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__cssModules = {}
;
cssModules["$style"] = _loading_vue_vue_type_style_index_0_id_4ce03031_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_2__.default
if (false) {}
_loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _loading_vue_vue_type_template_id_4ce03031__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/loading.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/navbar.vue":
/*!**************************************!*\
  !*** ./assets/components/navbar.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar_vue_vue_type_template_id_76a326aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=76a326aa */ "./assets/components/navbar.vue?vue&type=template&id=76a326aa");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js */ "./assets/components/navbar.vue?vue&type=script&lang=js");



_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _navbar_vue_vue_type_template_id_76a326aa__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/navbar.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/user_list/index.vue":
/*!***********************************************!*\
  !*** ./assets/components/user_list/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_e58e2aec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e58e2aec */ "./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./assets/components/user_list/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_e58e2aec__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/user_list/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/user_list/user-card.vue":
/*!***************************************************!*\
  !*** ./assets/components/user_list/user-card.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_card_vue_vue_type_template_id_2121898a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-card.vue?vue&type=template&id=2121898a */ "./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a");
/* harmony import */ var _user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-card.vue?vue&type=script&lang=js */ "./assets/components/user_list/user-card.vue?vue&type=script&lang=js");



_user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _user_card_vue_vue_type_template_id_2121898a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/components/user_list/user-card.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/pages/users.vue":
/*!********************************!*\
  !*** ./assets/pages/users.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _users_vue_vue_type_template_id_56c924ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=56c924ff */ "./assets/pages/users.vue?vue&type=template&id=56c924ff");
/* harmony import */ var _users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js */ "./assets/pages/users.vue?vue&type=script&lang=js");



_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _users_vue_vue_type_template_id_56c924ff__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "assets/pages/users.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./assets/components/footer.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./assets/components/footer.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/loading.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./assets/components/loading.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./loading.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/navbar.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./assets/components/navbar.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/user_list/index.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./assets/components/user_list/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/user_list/user-card.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./assets/components/user_list/user-card.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user-card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/pages/users.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./assets/pages/users.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./users.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/footer.vue?vue&type=template&id=25fc48b6":
/*!********************************************************************!*\
  !*** ./assets/components/footer.vue?vue&type=template&id=25fc48b6 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_25fc48b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_25fc48b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer.vue?vue&type=template&id=25fc48b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/footer.vue?vue&type=template&id=25fc48b6");


/***/ }),

/***/ "./assets/components/loading.vue?vue&type=template&id=4ce03031":
/*!*********************************************************************!*\
  !*** ./assets/components/loading.vue?vue&type=template&id=4ce03031 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_template_id_4ce03031__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_template_id_4ce03031__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./loading.vue?vue&type=template&id=4ce03031 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=template&id=4ce03031");


/***/ }),

/***/ "./assets/components/navbar.vue?vue&type=template&id=76a326aa":
/*!********************************************************************!*\
  !*** ./assets/components/navbar.vue?vue&type=template&id=76a326aa ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_template_id_76a326aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_template_id_76a326aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=template&id=76a326aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/navbar.vue?vue&type=template&id=76a326aa");


/***/ }),

/***/ "./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec":
/*!*****************************************************************************!*\
  !*** ./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_e58e2aec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_e58e2aec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=e58e2aec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/index.vue?vue&type=template&id=e58e2aec");


/***/ }),

/***/ "./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a":
/*!*********************************************************************************!*\
  !*** ./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_card_vue_vue_type_template_id_2121898a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_card_vue_vue_type_template_id_2121898a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user-card.vue?vue&type=template&id=2121898a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/user_list/user-card.vue?vue&type=template&id=2121898a");


/***/ }),

/***/ "./assets/pages/users.vue?vue&type=template&id=56c924ff":
/*!**************************************************************!*\
  !*** ./assets/pages/users.vue?vue&type=template&id=56c924ff ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_users_vue_vue_type_template_id_56c924ff__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_users_vue_vue_type_template_id_56c924ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./users.vue?vue&type=template&id=56c924ff */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/users.vue?vue&type=template&id=56c924ff");


/***/ }),

/***/ "./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true":
/*!************************************************************************************************!*\
  !*** ./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_style_index_0_id_4ce03031_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_loading_vue_vue_type_style_index_0_id_4ce03031_lang_scss_module_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/resolve-url-loader/index.js??clonedRuleSet-12.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/loading.vue?vue&type=style&index=0&id=4ce03031&lang=scss&module=true");
 

/***/ })

},
0,[["./assets/vuePage.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861","vendors-node_modules_core-js_modules_es_promise_js-node_modules_jquery_dist_jquery_js-node_mo-9dc6ed","vendors-node_modules_axios_index_js-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_-80fff4","vendors-node_modules_core-js_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL3VzZXJzLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9uYXZiYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXJfbGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdXNlcl9saXN0L3VzZXItY2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZT9hM2Y4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdnVlUGFnZS5jc3M/MjlmNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mb290ZXIudnVlPzYxODQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy52dWU/YzE1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9uYXZiYXIudnVlPzFiZDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdXNlcl9saXN0L2luZGV4LnZ1ZT8xOGVhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VzZXJfbGlzdC91c2VyLWNhcmQudnVlPzg0NjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL3VzZXJzLnZ1ZT85ZGNhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Zvb3Rlci52dWU/MTU1NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZT8wNmQzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25hdmJhci52dWU/ODAwNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91c2VyX2xpc3QvaW5kZXgudnVlPzE0ODYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdXNlcl9saXN0L3VzZXItY2FyZC52dWU/YTg5ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvdXNlcnMudnVlPzU2ZjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy52dWU/Y2RhNiJdLCJuYW1lcyI6WyJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSIsImZldGNoVXNlcnMiLCJheGlvcyIsImZldGNoVXNlcnNUb2tlbiIsIndpdGhDcmVkZW50aWFscyIsImRlbGV0ZVVzZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoZW50aWNhdGVVc2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJyZWZyZXNoVG9rZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiaXNSZWZyZXNoaW5nIiwic3Vic2NyaWJlcnMiLCJlcnIiLCJjb25maWciLCJzdGF0dXMiLCJkYXRhIiwib3JpZ2luYWxSZXF1ZXN0IiwidXJsIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwicmVxdWVzdFN1YnNjcmliZXJzIiwic3Vic2NyaWJlVG9rZW5SZWZyZXNoIiwib25SZWZyZXNoZWQiLCJjYiIsInB1c2giLCJtYXAiLCJjcmVhdGVBcHAiLCJVc2VycyIsIm1vdW50IiwiJCIsIm9uIiwiZXZlbnQiLCJpbnB1dEZp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VSxFQUFFLEVBWWY7O0FBRUQsOEVBQWE7O0FBRWIsaUVBQWUsdUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNMLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzVCxDIiwiZmlsZSI6InZ1ZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5jb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuY3JlYXRlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuLyoqXG4gKlxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xuICAgcmV0dXJuICBheGlvcy5nZXQoJy9hcGkvdXNlcnMnKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gIGZldGNoVXNlcnNUb2tlbigvKnRva2VuKi8pIHtcbiAvL3JldHVybiBheGlvcy5nZXQoJy9hcGkvdXNlcnMnLCAgeyBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJyA6ICdCZWFyZXIgJyArIHRva2VuIH0gfSApO1xuIHJldHVybiBheGlvcy5nZXQoJy9hcGkvdXNlcnMnLCAge3dpdGhDcmVkZW50aWFscyA6IHRydWV9ICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVVc2VyKGlkKSB7XG4gICBjb25zb2xlLmxvZyhpZCk7XG4gICByZXR1cm4gIGF4aW9zLmRlbGV0ZSgnL2FwaS91c2Vycy8nKyBpZCApXG59XG5cblxuXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgfVxuICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW5fY2hlY2snLCB7dXNlcm5hbWUgOiB1c2VybmFtZSAsIHBhc3N3b3JkIDogcGFzc3dvcmQgfSwge1xuICAgICAgaGVhZGVycyA6IGhlYWRlcnMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgIH0pXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFRva2VuKCkge1xuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgICAgLnBvc3QoYC9gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xufVxuIiwiLy9pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgJy4vc3R5bGVzL3Z1ZVBhZ2UuY3NzJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuLy9pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuLy9Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5pbXBvcnQgeyBjcmVhdGVBcHAsIGNvbXBpbGUgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vcGFnZXMvdXNlcnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtyZWZyZXNoVG9rZW59IGZyb20gXCJAL3NlcnZpY2VzL3VzZXJzLXNlcnZpY2VcIjtcblxubGV0IGlzUmVmcmVzaGluZyA9IGZhbHNlO1xubGV0IHN1YnNjcmliZXJzID0gW107XG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xuIHJldHVybiByZXNwb25zZTtcbn0sIGVyciA9PiB7XG4gY29uc3Qge1xuICBjb25maWcsXG4gICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgZGF0YSB9XG4gfSA9IGVycjtcblxuIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGNvbmZpZztcblxuIGlmIChvcmlnaW5hbFJlcXVlc3QudXJsLmluY2x1ZGVzKCcvYXBpL2xvZ2luX2NoZWNrJykpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiB9XG5cbiBpZiAoc3RhdHVzID09PSA0MDEgJiYgZGF0YS5tZXNzYWdlID09PSBcIkpXVCBUb2tlbiBub3QgZm91bmRcIikge1xuICAgaWYoIWlzUmVmcmVzaGluZykge1xuICAgICBpc1JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICByZWZyZXNoVG9rZW4oKS50aGVuKCh7c3RhdHVzfSkgPT4ge1xuICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwIHx8IHN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICAgICBzdWJzY3JpYmVycyA9IFtdO1xuICAgICAgIH0pXG4gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gIHtcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgfSk7XG5cbiAgIH1cblxuICAgY29uc3QgcmVxdWVzdFN1YnNjcmliZXJzID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgc3Vic2NyaWJlVG9rZW5SZWZyZXNoKCgpID0+IHtcbiAgICAgICAgICAgcmVzb2x2ZShheGlvcyhvcmlnaW5hbFJlcXVlc3QpKTtcbiAgICAgICB9KTtcbiAgIH0pO1xuICAgb25SZWZyZXNoZWQoKTtcbiAgIHJldHVybiByZXF1ZXN0U3Vic2NyaWJlcnM7XG4gfVxufSlcblxuc3Vic2NyaWJlcnMgPSBbXTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlVG9rZW5SZWZyZXNoKGNiKSB7XG4gICAgc3Vic2NyaWJlcnMucHVzaChjYik7XG59XG5cbmZ1bmN0aW9uIG9uUmVmcmVzaGVkKCkge1xuICAgIHN1YnNjcmliZXJzLm1hcChjYiA9PiBjYigpKTtcbn1cblxuXG4gY3JlYXRlQXBwKFVzZXJzKS5tb3VudCgnI3VzZXJzJylcblxuXG5cbi8qKiB0byBzaG93IHRoZSBpbWFnZSBmaWxlbmFtZSBpbiBmb3JtIGZpZWxkICovXG4kKCcuY3VzdG9tLWZpbGUtaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGlucHV0RmlsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgJChpbnB1dEZpbGUpLnBhcmVudCgpXG4gICAgICAgIC5maW5kKCcuY3VzdG9tLWZpbGUtbGFiZWwnKVxuICAgICAgICAuaHRtbChpbnB1dEZpbGUuZmlsZXNbMF0ubmFtZSk7XG5cbn0pIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4XCI+XG4gICAgICAgIDxwIGNsYXNzPVwicHQtMlwiPiB7eyBmb290ZXJNZXNzYWdlIH19PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6J0Zvb3RlcicsXG4gIHByb3BzOiB7XG4gICAgZm9vdGVyTWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG5cbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8aDQgOmNsYXNzPVwiJHN0eWxlLmNvbXBvbmVudFwiPlxuICAgIExvYWRpbmcuLi5cbiAgPC9oND5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdMb2FkaW5nJyxcbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIG1vZHVsZSA+XG4uY29tcG9uZW50IHtcbiBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9sb2FkaW5nLmdpZicpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgcGFkZGluZzogMCAwIDRweCA1MHB4O1xufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZSA+XG4gIDxkaXY+XG4gICAgPCEtLTxuYXYgOmNsYXNzPVwiWyRzdHlsZS5uYXZiYXIsICduYXZiYXItZXhwYW5kLW1kJywgJ25hdmJhci1saWdodCcsICdiZy1saWdodCcgXVwiPi0tPlxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodCBiZy1saWdodCBcIj5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj48cCBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj57eyB0aXRsZSB9fTwvcD48L2E+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiIGNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSAgXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgXCIgPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgIGQtZmxleCBmbGV4LXJvdyBteC1tZC1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+SG9tZTwvcD48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkxpbms8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGlkPVwibmF2YmFyRHJvcGRvd25cIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkaXNhYmxlZFwiIGhyZWY9XCIjXCI+RGlzYWJsZWQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyICBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2VuZEhhbGZOYXZiYXJcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj4tLT5cblxuICAgICAgICA8dWwgaWQ9XCJlbmRIYWxmTmF2YmFyXCIgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbmF2YmFyLW5hdiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGxpIGlkPVwianMtbmF2LXVwZGF0ZXNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2YmFyLW5hdmxpbmsgbmF2LWJlbGwgbXQtMyBtci00XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iZWxsXCI+PC9pPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJuYXYtbGluayBtdC0zIG1yLTRcIiBocmVmPVwiI1wiPlR1dG9yaWFsczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiI1wiIHRpdGxlPVwiQWNjb3VudCBNZW51XCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidXNlci1pbWdcIiBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9wbmcvNTEyLzYxLzYxMjA1LnBuZ1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93biBwbC0xXCI+PC9pPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCBwLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5NeSBBY2NvdW50PC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPk15IEJvb2ttYXJrczwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TaWduIE91dDwvYT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8IS0tIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj4tLT5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTmF2YmFyJyxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfVxuICB9XG5cbn07XG5cblxuXG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG5cblxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgIDxsb2FkaW5nIHYtc2hvdz1cImxvYWRpbmdcIiAvPlxuXG4gICAgICAgIDxoNSB2LXNob3c9XCIhbG9hZGluZyAmJiB1c2Vycy5sZW5ndGggPT09IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0IHlvdXIgcGFzc3dvcmQgdG8gdmlldyByZWdpc3RlcmVkIHVzZXJzXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IG9mZnNldC00IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWRhcmtcIj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+aWQ8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VybmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPmVtYWlsPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Rmlyc3RuYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdG5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHVzZXItY2FyZFxuICAgICAgICAgICAgICAgIEBkZWxldGUtdXNlcj1cImRlbGV0ZVVzZXJcIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwidXNlciBpbiB1c2Vyc1wiXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiIWxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJ1c2VyWydAaWQnXVwiXG4gICAgICAgICAgICAgICAgOnVzZXI9XCJ1c2VyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQC9jb21wb25lbnRzL3VzZXJfbGlzdC91c2VyLWNhcmQnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL2xvYWRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXJMaXN0JyxcbiAgY29tcG9uZW50czoge1xuICAgIFVzZXJDYXJkLFxuICAgIExvYWRpbmcsXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdXNlcnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczogIHtcbiAgICBkZWxldGVVc2VyKGlkKSB7XG4gICAgICBjb25zb2xlLmxvZyggaWQgKyAnICBwb3NsYW5lIGRvIGluZGV4LnZ1ZScpO1xuICAgICAgdGhpcy4kZW1pdCgnZGVsZXRlLXVzZXInLCBpZCk7XG5cbiAgICB9LFxuICB9LFxuXG59XG5cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8IS0tPGRpdiBjbGFzcz1cIiB1c2Vycy1jb2x1bW4gY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgXCI+LS0+XG4gICAgPHRyPlxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+IHt7IHVzZXIuaWQgfX0gPC90aD5cbiAgICAgIDx0ZD57eyB1c2VyLnVzZXJuYW1lIH19PC90ZD5cbiAgICAgIDx0ZD57eyAgdXNlci5lbWFpbCB9fTwvdGQ+XG4gICAgICA8dGQ+e3sgIHVzZXIuZmlyc3RuYW1lIH19PC90ZD5cbiAgICAgIDx0ZD57eyAgdXNlci5sYXN0bmFtZSB9fTwvdGQ+XG4gICAgICA8dGQ+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCIgQGNsaWNrPVwiZGx0VXNlcigpXCI+PC9pPjwvdGQ+XG4gICAgPC90cj5cblxuICAgPCEtLSA8c3Bhbj57eyBcImlkOlwiICsgIHVzZXIuaWQgKyAgICBcIiAgdXNlcm5hbWU6IFwiICArIHVzZXIudXNlcm5hbWUgKyBcIiBlbWFpbDogIFwiICsgdXNlci5lbWFpbCArIFwiIFwiLnJlcGVhdCg1KX19PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCIgQGNsaWNrPVwiZGx0VXNlcigpXCI+PC9pPjwvc3Bhbj4tLT5cblxuIDwhLS0gPC9kaXY+IC0tPlxuXG5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuaW1wb3J0IHtkZWxldGVVc2VyfSBmcm9tIFwiQC9zZXJ2aWNlcy91c2Vycy1zZXJ2aWNlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1VzZXJDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICB1c2VyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jICBkbHRVc2VyKCkge1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlci5pZClcbiAgICAgICAvKmF4aW9zLmRlbGV0ZSgnL2FwaS91c2Vycy8nICsgdGhpcy51c2VyLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpfSkqL1xuXG4gICAgICAgIGF3YWl0IGRlbGV0ZVVzZXIodGhpcy51c2VyLmlkKTtcbiAgICAgICAvL3RoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJrbGlrb2wgc29tIHRsYWNpdGtvXCIpO1xuICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGUtdXNlcicsIHRoaXMudXNlci5pZCk7XG4gICAgICB9LFxuXG4gICAgfSxcblxuXG5cblxuXG59XG5cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIFwiPlxuICAgICAgPCEtLTxOYXZiYXIgOnRpdGxlPVwibWVzc2FnZVwiLz4tLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVVc2VycyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICA8aDI+UmVnaXN0ZXJlZCBVc2VyczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwicm93IG1sLTNcIj5cbiAgICAgIDxoND5wbGVhc2UgdHlwZSB5b3VyIHBhc3N3b3JkIGFnYWluIDwvaDQ+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGFzc3dvcmRcIiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIi8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJhdXRoZW50aWNhdGVcIiB2YWx1ZT1cInNlbmRcIj5cbiAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2xlYXJDb29raWVcIiB2YWx1ZT1cImNsZWFyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFidWxrYVwiPlxuXG5cblxuICAgICAgPFVzZXJMaXN0IGNsYXNzPVwiXCJcbiAgICAgICAgICA6a2V5PVwidXNlcnNcIlxuICAgICAgICAgIEBkZWxldGUtdXNlcj1cInJlZnJlc2hcIlxuICAgICAgICAgIDp1c2Vycz1cInVzZXJzXCJcbiAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgOmZvb3Rlci1tZXNzYWdlPVwiZm9vdGVyTWVzc2FnZVwiPjwvRm9vdGVyPlxuICA8L2Rpdj5cblxuXG5cblxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy91c2VyX2xpc3QvaW5kZXgnO1xuaW1wb3J0IHtmZXRjaFVzZXJzLCBmZXRjaFVzZXJzVG9rZW4sIHJlZnJlc2hUb2tlbn0gZnJvbSAnQC9zZXJ2aWNlcy91c2Vycy1zZXJ2aWNlJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXJ9IGZyb20gXCJAL3NlcnZpY2VzL3VzZXJzLXNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGFycmF5IGZyb20gXCJjb3JlLWpzXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdVc2VycycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdmJhcixcbiAgICAgIEZvb3RlcixcbiAgICBVc2VyTGlzdCxcbiAgfSxcblxuXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb290ZXJNZXNzYWdlOiAnTXkgb3duIFBob3RvY2xvdWQgbWFkZSB3aXRoIGNhcmUgMjAyMSAnLFxuICAgICAgICB1c2VyczogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxvZ2dlZDogZmFsc2UsXG4gICAgICBjb21wb25lbnRLZXk6IDAsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICB0b2tlbjogJycsXG4gICAgICBzaG93SWZMb2dnZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJlZnJlc2goaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGlkICsgJyBwb3NsYW5lIGRvIHVzZXJzLnZ1ZScpXG4gICAgICAvKiBkZWxldG92YW5pZSB6IHBvbGEgISEhISEhISAqL1xuICAgICAgdGhpcy51c2VycyA9IHRoaXMudXNlcnMuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBpZCk7XG4gICAgfSxcblxuICAgIGNsZWFyQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dCcpLmNsaWNrKCk7XG4gICAgfSxcblxuICAgIGFzeW5jIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzb20gdHUnKTtcbiAgICAgIC8vbGV0IHJlc3BvbnNlID0gJyc7XG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHdpbmRvdy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkvKmF4aW9zLnBvc3QoJy9hcGkvbG9naW5fY2hlY2snLCB7dXNlcm5hbWUgOiB3aW5kb3cudXNlcm5hbWUgLCBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmQgfSwge1xuICAgICAgICBoZWFkZXJzIDogaGVhZGVyc1xuICAgICAgfSkqL1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgdGhpcy50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICAgIC8vd2luZG93LnRva2VuID0gdGhpcy50b2tlblxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFVzZXJzVG9rZW4oLyp0aGlzLnRva2VuKi8pXG4gICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJzKTtcbiAgICAgIC8vbGV0IHJlc3BvbnNlID0gYXdhaXQgYXV0aGVudGljYXRlVXNlcih0aGlzLnBhc3N3b3JkLCB3aW5kb3cudXNlcm5hbWUpXG4gICAgICAvL2xldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlcnMnKTtcbiAgICAgIC8qbGV0IHJlc3BvbnNlID0gYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczogXCInQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXCIsXG4gICAgICAgIHVybDogJy9hcGkvbG9naW5fY2hlY2snLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IHdpbmRvdy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICB9KTsqL1xuICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9XG5cblxuXG4gIH0sXG5cbiAgYXN5bmMgY3JlYXRlZCgpIHtcbiAgICAgIC8qYXhpb3MuZ2V0KCcvYXBpL3VzZXJzJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSkqL1xuICAgIC8vcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0ZSgpO1xuICAgIC8vYXdhaXQgcmVmcmVzaFRva2VuKCk7XG4gICAgaWYgKHdpbmRvdy5sb2dnZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0dXV1dXUnKTtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hVc2Vyc1Rva2VuKC8qdGhpcy50b2tlbiovKTtcbiAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXTtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgbGV0IHJlc3BvbnNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFVzZXJzKCk7XG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy90aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG5cblxuICB9LFxuIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhc2RhZGFzZGFkYWFzZmFmXCIpO1xuICAgLy9sZXQgcmVzcG9uc2UgPSBhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHdpbmRvdy51c2VybmFtZSwgdGhpcy5wYXNzd29yZClcbiAgaWYgKGF3YWl0IHJlZnJlc2hUb2tlbigpLnRoZW4oKHtzdGF0dXN9KSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwIHx8IHN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICB0aGlzLmxvZ2dlZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcInNhZGFmc2ZzZGZcIik7XG4gICAgfVxuICB9KSk7XG5cbiAgY29uc29sZS5sb2codGhpcy5sb2dnZWQpO1xuICBpZiAodGhpcy5sb2dnZWQpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFVzZXJzVG9rZW4oKTtcbiAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG4gICAgY29uc29sZS5sb2codGhpcy51c2Vycyk7XG4gIH1cbiAgIC8vdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAvKmlmICggcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEgKSB7XG4gICAgICB0aGlzLnNob3dJZkxvZ2dlZCA9IGZhbHNlO1xuICAgfVxuICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXTsqL1xuICB9XG59XG5cblxuXG48L3NjcmlwdD4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbXBvbmVudFwiOlwiY29tcG9uZW50XzNfQ3AwXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVmYzQ4YjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjI1ZmM0OGI2XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMjVmYzQ4YjYnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnMjVmYzQ4YjYnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZmM0OGI2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzI1ZmM0OGI2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL2Zvb3Rlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9sb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Y2UwMzAzMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuY29uc3QgY3NzTW9kdWxlcyA9IHNjcmlwdC5fX2Nzc01vZHVsZXMgPSB7fVxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjZTAzMDMxJmxhbmc9c2NzcyZtb2R1bGU9dHJ1ZVwiXG5jc3NNb2R1bGVzW1wiJHN0eWxlXCJdID0gc3R5bGUwXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Y2UwMzAzMSZsYW5nPXNjc3MmbW9kdWxlPXRydWVcIiwgKCkgPT4ge1xuICAgIGNzc01vZHVsZXNbXCIkc3R5bGVcIl0gPSBzdHlsZTBcbiAgICBfX1ZVRV9ITVJfUlVOVElNRV9fLnJlcmVuZGVyKFwiNGNlMDMwMzFcIilcbiAgfSlcbn1cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0Y2UwMzAzMVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzRjZTAzMDMxJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzRjZTAzMDMxJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNlMDMwMzFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNGNlMDMwMzEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9uYXZiYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2YTMyNmFhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmF2YmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9uYXZiYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI3NmEzMjZhYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc2YTMyNmFhJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzc2YTMyNmFhJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbmF2YmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NmEzMjZhYVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3NmEzMjZhYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9uYXZiYXIudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1OGUyYWVjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiZTU4ZTJhZWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdlNThlMmFlYycsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCdlNThlMmFlYycsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNThlMmFlY1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdlNThlMmFlYycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy91c2VyX2xpc3QvaW5kZXgudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdXNlci1jYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMTIxODk4YVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXItY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci1jYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMjEyMTg5OGFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyMTIxODk4YScsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCcyMTIxODk4YScsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VzZXItY2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjEyMTg5OGFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMjEyMTg5OGEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvdXNlcl9saXN0L3VzZXItY2FyZC52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi91c2Vycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZjOTI0ZmZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2Vycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI1NmM5MjRmZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzU2YzkyNGZmJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzU2YzkyNGZmJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXNlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2YzkyNGZmXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzU2YzkyNGZmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcImFzc2V0cy9wYWdlcy91c2Vycy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vZm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vbG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9sb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vbmF2YmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL25hdmJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vdXNlci1jYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3VzZXItY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3VzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3VzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9sb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjZTAzMDMxJmxhbmc9c2NzcyZtb2R1bGU9dHJ1ZVwiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vbG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Y2UwMzAzMSZsYW5nPXNjc3MmbW9kdWxlPXRydWVcIiJdLCJzb3VyY2VSb290IjoiIn0=