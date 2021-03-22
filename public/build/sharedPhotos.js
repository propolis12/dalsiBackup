(self["webpackChunk"] = self["webpackChunk"] || []).push([["sharedPhotos"],{

/***/ "./assets/sharedPhotos.js":
/*!********************************!*\
  !*** ./assets/sharedPhotos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showUserPhotos": () => (/* binding */ showUserPhotos)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/images-service */ "./assets/services/images-service.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_album_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/album-services */ "./assets/services/album-services.js");
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mainPage.js */ "./assets/mainPage.js");














function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





 //require('bootstrap')

var publicImages = [];
var likedImages = [];
var publicImagesNames = [];
var currentPublicImagesNames = [];
var usernames = [];
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var i;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#uploadIcon').remove();
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#searchUserLi').show();
          console.log("asdafsfsdfsdfsdfsfsdfsdfsdf"); // publicImages = await fetchPublicImages()

          _context.next = 5;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.fetchLikedImages)();

        case 5:
          likedImages = _context.sent;
          console.log("toto budu moje liked images");
          console.log(likedImages);
          console.log("toto budu public images");
          _context.next = 11;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.fetchPublicImages)();

        case 11:
          publicImages = _context.sent;
          console.log(publicImages);
          _context.next = 15;
          return renderImagesShared(publicImages.data);

        case 15:
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#photo-list').html('');

          for (i = 0; i < publicImages.data.length; i++) {
            publicImagesNames[i] = publicImages.data[i]['originalName'];

            if (!usernames.includes(publicImages.data[i]["username"])) {
              usernames.push(publicImages.data[i]["username"]);
            }
          }

          currentPublicImagesNames = publicImagesNames;

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

function renderImagesShared(_x) {
  return _renderImagesShared.apply(this, arguments);
}

function _renderImagesShared() {
  _renderImagesShared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(images) {
    var iconClass, i, l;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#photoListShared').html('');
            iconClass = 'far'; //publicImages = await fetchPublicImages();
            // ownedImages = await fetchOwnedImages();

            console.log(publicImagesNames + "toto je ownedImages");
            i = 0;

          case 4:
            if (!(i < images.length)) {
              _context5.next = 20;
              break;
            }

            /** for lazy loading */
            renderHelp(i, images);

            if (i > 30) {
              jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_15___default()('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '',
                alt: '',
                'data-name': images[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_15___default()('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '/public/photo/' + images[i]['originalName'],
                alt: '',
                'data-name': images[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            }

            l = 0;

          case 8:
            if (!(l < likedImages.data.length)) {
              _context5.next = 15;
              break;
            }

            if (!(likedImages.data[l]["originalName"] === images[i]["originalName"])) {
              _context5.next = 12;
              break;
            }

            iconClass = 'fas';
            return _context5.abrupt("break", 15);

          case 12:
            l++;
            _context5.next = 8;
            break;

          case 15:
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="numberLikes mr-2">' + images[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>');
            iconClass = 'far';

          case 17:
            i++;
            _context5.next = 4;
            break;

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _renderImagesShared.apply(this, arguments);
}

function renderHelp(i, images) {
  jquery__WEBPACK_IMPORTED_MODULE_15___default()('#photoListShared').append('<div id=' + i + 'shared' + ' class="thumbnailDivShared"> </div>');

  if (images[i]['publishedAt'] !== null) {
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + images[i]['username'] + '</div><div class="publishDateDiv">' + timeSince(new Date(images[i]['publishedAt'])) + '</div></div>');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + images[i]['username'] + '</div></div>');
  }
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }

  interval = seconds / 2592000;

  if (interval > 1) {
    return Math.floor(interval) + " months";
  }

  interval = seconds / 86400;

  if (interval > 1) {
    return Math.floor(interval) + " days";
  }

  interval = seconds / 3600;

  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }

  interval = seconds / 60;

  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }

  return Math.floor(seconds) + " seconds";
}

jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.likeable', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var liked, image, name, index, i;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          liked = false;
          name = jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).parent().siblings()[1].dataset.name; //console.log(name)

          console.log(likedImages.data.length);

          for (i = 0; i < likedImages.data.length; i++) {
            console.log(likedImages.data[i]["originalName"] + "asdafsssssssssssasfaaaaasfdsssssssssssssssssssssssssff");

            if (likedImages.data[i]["originalName"] === name) {
              liked = true;
            }
          }

          if (liked) {
            _context2.next = 12;
            break;
          }

          _context2.next = 7;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.likePhoto)(name);

        case 7:
          image = _context2.sent;
          //console.log(image)
          //console.log(likedImages)
          likedImages.data.push(image.data);
          /*$(this).toggleClass('far')
          $(this).toggleClass('fas')*/

          toggleLikedHeart(this);
          _context2.next = 18;
          break;

        case 12:
          _context2.next = 14;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.unlikePhoto)(name);

        case 14:
          image = _context2.sent;
          //console.log(image)
          index = likedImages.data.indexOf(name);
          likedImages.data.splice(index, 1); //console.log("likedImages po delete ")
          //console.log(likedImages)

          /*$(this).toggleClass('far')
          $(this).toggleClass('fas')*/

          toggleLikedHeart(this);

        case 18:
          if (image.status !== 500) {
            console.log("toto bude image");
            console.log(image);
            jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).siblings().text(image.data["likes"].length.toString());
          } // console.log(image)
          //var index = publicImages.indexOf(image)


          for (i = 0; i < publicImages.data.length; i++) {
            if (image["originalName"] === publicImages.data[i]["originalName"]) {
              publicImages.data[i] = image;
            }
          } //var pos = publicImages.map(function(e) { return e["originalName"]; }).indexOf('stevie');
          // console.log(index);


          console.log(publicImages);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

function toggleLikedHeart(el) {
  jquery__WEBPACK_IMPORTED_MODULE_15___default()(el).toggleClass('far');
  jquery__WEBPACK_IMPORTED_MODULE_15___default()(el).toggleClass('fas');
}

jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.thumbnailImageShared', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var imageName;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).data('name'));
          imageName = jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).data('name');
          (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_17__.openWindow)(imageName, currentPublicImagesNames);
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#fullscreenPicture').prepend('<div></div>');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));
/*$( "#searchUserPhotos" ).autocomplete({
    source: usernames
});*/

var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme", "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"];
/*$( function() {

    ];
    $( "#searchUserPhotos" ).autocomplete(
        availableTags);
} );*/

document.getElementById('searchUserPhotos').addEventListener('input', function (e) {
  var result = [];

  if (e.target.value) {
    result = usernames.filter(function (name) {
      return name.toLowerCase().includes(e.target.value);
    });
    result = result.map(function (name) {
      return "<li class=\"resultUserLi\">".concat(name, "</li>");
    });
    console.log(result);
  }

  showResultUsers(result);
});

function showResultUsers(resultArray) {
  if (resultArray.length) {
    var html =
    /*!resultArray.length ? '' :*/
    resultArray.join('');
    document.querySelector('#resultUsersUl').innerHTML = html;
  } else {
    var _html = "<li class=\"resultUserNoLi\">No public photos for this user</li>";
    document.querySelector('#resultUsersUl').innerHTML = _html;
  }
}

jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.resultUserLi', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var username;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          username = jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).text();
          _context4.next = 3;
          return showUserPhotos(username);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
})));
function showUserPhotos(_x2) {
  return _showUserPhotos.apply(this, arguments);
}

function _showUserPhotos() {
  _showUserPhotos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(username) {
    var imagesToRender, i;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#photoListShared').html();
            imagesToRender = [];
            currentPublicImagesNames = []; //imagesToRender = publicImages

            for (i = 0; i < publicImages.data.length; i++) {
              if (publicImages.data[i]["username"].includes(username)) {
                imagesToRender.push(publicImages.data[i]);
                currentPublicImagesNames.push(publicImages.data[i]["originalName"]);
              }
            }

            _context6.next = 6;
            return renderImagesShared(imagesToRender);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _showUserPhotos.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
0,[["./assets/sharedPhotos.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861","vendors-node_modules_axios_index_js-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_-65cea7","vendors-node_modules_dropzone_dist_dropzone_js-node_modules_dropzone_dist_dropzone_css-node_m-ebf025","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_ma-594b72"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbInB1YmxpY0ltYWdlcyIsImxpa2VkSW1hZ2VzIiwicHVibGljSW1hZ2VzTmFtZXMiLCJjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMiLCJ1c2VybmFtZXMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hMaWtlZEltYWdlcyIsImZldGNoUHVibGljSW1hZ2VzIiwicmVuZGVySW1hZ2VzU2hhcmVkIiwiZGF0YSIsImh0bWwiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW1hZ2VzIiwiaWNvbkNsYXNzIiwicmVuZGVySGVscCIsImFwcGVuZCIsInJlYWxzcmMiLCJzcmMiLCJhbHQiLCJsIiwidGltZVNpbmNlIiwiRGF0ZSIsImRhdGUiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiaW50ZXJ2YWwiLCJvbiIsImxpa2VkIiwibmFtZSIsInBhcmVudCIsInNpYmxpbmdzIiwiZGF0YXNldCIsImxpa2VQaG90byIsImltYWdlIiwidG9nZ2xlTGlrZWRIZWFydCIsInVubGlrZVBob3RvIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic3RhdHVzIiwidGV4dCIsInRvU3RyaW5nIiwiZWwiLCJ0b2dnbGVDbGFzcyIsImltYWdlTmFtZSIsIm9wZW5XaW5kb3ciLCJwcmVwZW5kIiwiYXZhaWxhYmxlVGFncyIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXN1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibWFwIiwic2hvd1Jlc3VsdFVzZXJzIiwicmVzdWx0QXJyYXkiLCJqb2luIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInVzZXJuYW1lIiwic2hvd1VzZXJQaG90b3MiLCJpbWFnZXNUb1JlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLElBQUlDLHdCQUF3QixHQUFHLEVBQS9CO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FDLDhDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLHVFQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEYsd0RBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLE1BQWpCO0FBQ0FILHdEQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSSxJQUFuQjtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFIYyxDQUlmOztBQUplO0FBQUEsaUJBS01DLDJFQUFnQixFQUx0Qjs7QUFBQTtBQUtkWCxxQkFMYztBQU9kUyxpQkFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsaUJB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O0FBQ0EsR0FBRywrQkFBK0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxrSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBc0M7O0FBRXpFO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic2hhcmVkUGhvdG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBmZXRjaExhdGVzdEltYWdlcyxcbiAgICBmZXRjaE93bmVkSW1hZ2VzLFxuICAgIGRlbGV0ZUltYWdlLFxuICAgIGZldGNoSW1hZ2VzLFxuICAgIGdldEltYWdlSW5mbyxcbiAgICBtYWtlUHVibGljLCBtYWtlUHJpdmF0ZSwgZmV0Y2hQdWJsaWNJbWFnZXMsIGxpa2VQaG90bywgZmV0Y2hMaWtlZEltYWdlcywgdW5saWtlUGhvdG9cbn0gZnJvbSBcIi4vc2VydmljZXMvaW1hZ2VzLXNlcnZpY2VcIjtcblxuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge2ZldGNoQWxidW1JbWFnZXN9IGZyb20gXCIuL3NlcnZpY2VzL2FsYnVtLXNlcnZpY2VzXCI7XG5pbXBvcnQge29wZW5XaW5kb3csIHNldEhvdmVyaW5nT3ZlckltYWdlcyxuZXh0SW1hZ2UsZmluZEN1cnJlbnRJbWFnZSxwcmV2aW91c0ltYWdlLGNsb3NlSW1hZ2V9IGZyb20gXCIuL21haW5QYWdlLmpzXCI7XG4vL3JlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbnZhciBwdWJsaWNJbWFnZXMgPSBbXVxudmFyIGxpa2VkSW1hZ2VzID0gW11cbnZhciBwdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG52YXIgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzID0gW11cbnZhciB1c2VybmFtZXMgPSBbXTtcbiQoZG9jdW1lbnQpLnJlYWR5KGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICQoJyN1cGxvYWRJY29uJykucmVtb3ZlKClcbiAgICAkKCcjc2VhcmNoVXNlckxpJykuc2hvdygpXG4gICAgY29uc29sZS5sb2coXCJhc2RhZnNmc2Rmc2Rmc2Rmc2ZzZGZzZGZzZGZcIilcbiAgIC8vIHB1YmxpY0ltYWdlcyA9IGF3YWl0IGZldGNoUHVibGljSW1hZ2VzKClcbiAgICBsaWtlZEltYWdlcyA9IGF3YWl0IGZldGNoTGlrZWRJbWFnZXMoKVxuXG4gICAgY29uc29sZS5sb2coXCJ0b3RvIGJ1ZHUgbW9qZSBsaWtlZCBpbWFnZXNcIilcbiAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkdSBwdWJsaWMgaW1hZ2VzXCIpXG4gICAgcHVibGljSW1hZ2VzICA9IGF3YWl0IGZldGNoUHVibGljSW1hZ2VzKClcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKHB1YmxpY0ltYWdlcy5kYXRhKVxuICAgICQoJyNwaG90by1saXN0JykuaHRtbCgnJylcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0ltYWdlc05hbWVzW2ldID0gcHVibGljSW1hZ2VzLmRhdGFbaV1bJ29yaWdpbmFsTmFtZSddXG4gICAgICAgIGlmKCEodXNlcm5hbWVzLmluY2x1ZGVzKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0pKSkge1xuICAgICAgICAgICAgdXNlcm5hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMgPSBwdWJsaWNJbWFnZXNOYW1lc1xuXG5cbn0pXG5cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckltYWdlc1NoYXJlZChpbWFnZXMpIHtcblxuXG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmh0bWwoJycpO1xuICAgIHZhciBpY29uQ2xhc3MgPSAnZmFyJ1xuICAgIC8vcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKTtcblxuXG4gICAgLy8gb3duZWRJbWFnZXMgPSBhd2FpdCBmZXRjaE93bmVkSW1hZ2VzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXNOYW1lcyArIFwidG90byBqZSBvd25lZEltYWdlc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuXG5cbiAgICAgICAgLyoqIGZvciBsYXp5IGxvYWRpbmcgKi9cbiAgICAgICAgcmVuZGVySGVscChpICwgaW1hZ2VzKVxuICAgICAgICBpZiAoaSA+IDMwKSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJy9wdWJsaWMvcGhvdG8vJyArIGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsaWtlZEltYWdlcy5kYXRhLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICBpZiAobGlrZWRJbWFnZXMuZGF0YVtsXVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gaW1hZ2VzW2ldW1wib3JpZ2luYWxOYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcydcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRodW1ibmFpbEljb25zU2hhcmVkXCIgPjxzcGFuIGNsYXNzPVwibnVtYmVyTGlrZXMgbXItMlwiPicgKyBpbWFnZXNbaV1bJ2xpa2VzJ10ubGVuZ3RoICsgJzwvc3Bhbj48aSBjbGFzcz1cIicgKyBpY29uQ2xhc3MgKyAnIGZhLWhlYXJ0ICBsaWtlYWJsZVwiID48L2k+PC9kaXY+JylcbiAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcidcblxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJIZWxwKGksIGltYWdlcykge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5hcHBlbmQoJzxkaXYgaWQ9JyArIGkgKyAnc2hhcmVkJyArICcgY2xhc3M9XCJ0aHVtYm5haWxEaXZTaGFyZWRcIj4gPC9kaXY+JylcbiAgICBpZiAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddICE9PSBudWxsKSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cInB1Ymxpc2hEYXRlRGl2XCI+JysgdGltZVNpbmNlKG5ldyBEYXRlKCAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddKSkpICArICc8L2Rpdj48L2Rpdj4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PC9kaXY+JylcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdGltZVNpbmNlKGRhdGUpIHtcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIGRhdGUpIC8gMTAwMCk7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzE1MzYwMDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIHllYXJzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtb250aHNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBkYXlzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDM2MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBob3Vyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA2MDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIG1pbnV0ZXNcIjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcykgKyBcIiBzZWNvbmRzXCI7XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5saWtlYWJsZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBsaWtlZCA9IGZhbHNlXG4gICAgdmFyIGltYWdlXG4gICAgdmFyIG5hbWUgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKClbMV0uZGF0YXNldC5uYW1lXG4gICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoKVxuICAgIGZvciAoaSA9IDAgOyBpIDwgbGlrZWRJbWFnZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdICsgXCJhc2RhZnNzc3Nzc3Nzc3NzYXNmYWFhYWFzZmRzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzZmZcIilcbiAgICAgICAgaWYgKGxpa2VkSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGxpa2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFsaWtlZCkge1xuICAgICAgICBpbWFnZSA9IGF3YWl0IGxpa2VQaG90byhuYW1lKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEucHVzaChpbWFnZS5kYXRhKVxuICAgICAgICAvKiQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcicpXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcycpKi9cbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCh0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICAgaW1hZ2UgPSBhd2FpdCB1bmxpa2VQaG90byhuYW1lKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICB2YXIgaW5kZXggPSBsaWtlZEltYWdlcy5kYXRhLmluZGV4T2YobmFtZSlcbiAgICAgICAgbGlrZWRJbWFnZXMuZGF0YS5zcGxpY2UoaW5kZXggLCAxKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibGlrZWRJbWFnZXMgcG8gZGVsZXRlIFwiKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgICAgICAvKiQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcicpXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcycpKi9cbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCh0aGlzKVxuXG5cbiAgICB9XG5cblxuICAgIGlmKCBpbWFnZS5zdGF0dXMgIT09IDUwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkZSBpbWFnZVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnRleHQoKGltYWdlLmRhdGFbXCJsaWtlc1wiXS5sZW5ndGgpLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgLy8gY29uc29sZS5sb2coaW1hZ2UpXG4gICAgLy92YXIgaW5kZXggPSBwdWJsaWNJbWFnZXMuaW5kZXhPZihpbWFnZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBpZihpbWFnZVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gcHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pIHtcbiAgICAgICAgICAgIHB1YmxpY0ltYWdlcy5kYXRhW2ldID0gaW1hZ2VcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy92YXIgcG9zID0gcHVibGljSW1hZ2VzLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiBlW1wib3JpZ2luYWxOYW1lXCJdOyB9KS5pbmRleE9mKCdzdGV2aWUnKTtcbiAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG59KVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUxpa2VkSGVhcnQoZWwpIHtcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFyJylcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFzJylcbn1cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aHVtYm5haWxJbWFnZVNoYXJlZCcgLCBhc3luYyAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmRhdGEoJ25hbWUnKSlcbiAgICAgICAgdmFyIGltYWdlTmFtZSA9ICQodGhpcykuZGF0YSgnbmFtZScpXG4gICAgICAgIG9wZW5XaW5kb3coaW1hZ2VOYW1lLCBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMpXG4gICAgICAgICQoJyNmdWxsc2NyZWVuUGljdHVyZScpLnByZXBlbmQoJzxkaXY+PC9kaXY+JylcblxufSlcblxuLyokKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoe1xuICAgIHNvdXJjZTogdXNlcm5hbWVzXG59KTsqL1xuXG52YXIgYXZhaWxhYmxlVGFncyA9IFtcbiAgICBcIkFjdGlvblNjcmlwdFwiLFxuICAgIFwiQXBwbGVTY3JpcHRcIixcbiAgICBcIkFzcFwiLFxuICAgIFwiQkFTSUNcIixcbiAgICBcIkNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ2xvanVyZVwiLFxuICAgIFwiQ09CT0xcIixcbiAgICBcIkNvbGRGdXNpb25cIixcbiAgICBcIkVybGFuZ1wiLFxuICAgIFwiRm9ydHJhblwiLFxuICAgIFwiR3Jvb3Z5XCIsXG4gICAgXCJIYXNrZWxsXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJMaXNwXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNjaGVtZVwiLFxuICAgIFwic3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzXCJcbiAgICBdXG4vKiQoIGZ1bmN0aW9uKCkge1xuXG4gICAgXTtcbiAgICAkKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoXG4gICAgICAgIGF2YWlsYWJsZVRhZ3MpO1xufSApOyovXG5cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVXNlclBob3RvcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpPT57XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgaWYoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgcmVzdWx0ID0gdXNlcm5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAobmFtZSA9PiBgPGxpIGNsYXNzPVwicmVzdWx0VXNlckxpXCI+JHtuYW1lfTwvbGk+YClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cbiAgICAgICAgc2hvd1Jlc3VsdFVzZXJzKHJlc3VsdClcbn0pXG5cbmZ1bmN0aW9uIHNob3dSZXN1bHRVc2VycyhyZXN1bHRBcnJheSkge1xuXG4gICAgaWYgKHJlc3VsdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBodG1sID0gLyohcmVzdWx0QXJyYXkubGVuZ3RoID8gJycgOiovIHJlc3VsdEFycmF5LmpvaW4oJycpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRVc2Vyc1VsJykuaW5uZXJIVE1MID0gaHRtbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgPGxpIGNsYXNzPVwicmVzdWx0VXNlck5vTGlcIj5ObyBwdWJsaWMgcGhvdG9zIGZvciB0aGlzIHVzZXI8L2xpPmBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdFVzZXJzVWwnKS5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc3VsdFVzZXJMaScsIGFzeW5jICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gJCh0aGlzKS50ZXh0KClcbiAgICBhd2FpdCBzaG93VXNlclBob3Rvcyh1c2VybmFtZSlcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93VXNlclBob3Rvcyh1c2VybmFtZSkge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5odG1sKClcbiAgICB2YXIgaW1hZ2VzVG9SZW5kZXIgPSBbXVxuICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG4gICAgLy9pbWFnZXNUb1JlbmRlciA9IHB1YmxpY0ltYWdlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0uaW5jbHVkZXModXNlcm5hbWUpKSB7XG4gICAgICAgICAgICBpbWFnZXNUb1JlbmRlci5wdXNoKHB1YmxpY0ltYWdlcy5kYXRhW2ldKVxuICAgICAgICAgICAgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKGltYWdlc1RvUmVuZGVyKTtcbn0iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==