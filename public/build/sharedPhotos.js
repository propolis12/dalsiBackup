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
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('.comments').hide();

        case 19:
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
              _context5.next = 21;
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
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="commentToggler">comments</span><span class="numberLikes mr-2">' + images[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>');
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="comments"><input type="text" class="commentInput" placeholder="insert comment"></div>');
            iconClass = 'far';

          case 18:
            i++;
            _context5.next = 4;
            break;

          case 21:
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
            jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).siblings('.numberLikes').text(image.data["likes"].length.toString());
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

jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.commentToggler', function () {
  jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).parent().siblings('.comments').toggle();
});
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('keyup', '.commentInput', function (event) {
  if (event.keyCode === 13) {
    console.log(event.target.value);
  }
});
/*$(document).on('click', '.comments', function () {
    $(this).toggle()
})*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbInB1YmxpY0ltYWdlcyIsImxpa2VkSW1hZ2VzIiwicHVibGljSW1hZ2VzTmFtZXMiLCJjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMiLCJ1c2VybmFtZXMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hMaWtlZEltYWdlcyIsImZldGNoUHVibGljSW1hZ2VzIiwicmVuZGVySW1hZ2VzU2hhcmVkIiwiZGF0YSIsImh0bWwiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwiaGlkZSIsImltYWdlcyIsImljb25DbGFzcyIsInJlbmRlckhlbHAiLCJhcHBlbmQiLCJyZWFsc3JjIiwic3JjIiwiYWx0IiwibCIsInRpbWVTaW5jZSIsIkRhdGUiLCJkYXRlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImludGVydmFsIiwib24iLCJsaWtlZCIsIm5hbWUiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImRhdGFzZXQiLCJsaWtlUGhvdG8iLCJpbWFnZSIsInRvZ2dsZUxpa2VkSGVhcnQiLCJ1bmxpa2VQaG90byIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInN0YXR1cyIsInRleHQiLCJ0b1N0cmluZyIsImVsIiwidG9nZ2xlQ2xhc3MiLCJpbWFnZU5hbWUiLCJvcGVuV2luZG93IiwicHJlcGVuZCIsImF2YWlsYWJsZVRhZ3MiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVzdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsInNob3dSZXN1bHRVc2VycyIsInJlc3VsdEFycmF5Iiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ1c2VybmFtZSIsInNob3dVc2VyUGhvdG9zIiwiaW1hZ2VzVG9SZW5kZXIiLCJ0b2dnbGUiLCJldmVudCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBSUEsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxJQUFJQyx3QkFBd0IsR0FBRyxFQUEvQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBQyw4Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWix1RUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RGLHdEQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxNQUFqQjtBQUNBSCx3REFBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksSUFBbkI7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBSGMsQ0FJZjs7QUFKZTtBQUFBLGlCQUtNQywyRUFBZ0IsRUFMdEI7O0FBQUE7QUFLZFgscUJBTGM7QUFPZFMsaUJB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K0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFekU7QUFDQTtBQUNBLEdBQUcsMkVBQTJFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzaGFyZWRQaG90b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGZldGNoTGF0ZXN0SW1hZ2VzLFxuICAgIGZldGNoT3duZWRJbWFnZXMsXG4gICAgZGVsZXRlSW1hZ2UsXG4gICAgZmV0Y2hJbWFnZXMsXG4gICAgZ2V0SW1hZ2VJbmZvLFxuICAgIG1ha2VQdWJsaWMsIG1ha2VQcml2YXRlLCBmZXRjaFB1YmxpY0ltYWdlcywgbGlrZVBob3RvLCBmZXRjaExpa2VkSW1hZ2VzLCB1bmxpa2VQaG90b1xufSBmcm9tIFwiLi9zZXJ2aWNlcy9pbWFnZXMtc2VydmljZVwiO1xuXG5cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7ZmV0Y2hBbGJ1bUltYWdlc30gZnJvbSBcIi4vc2VydmljZXMvYWxidW0tc2VydmljZXNcIjtcbmltcG9ydCB7b3BlbldpbmRvdywgc2V0SG92ZXJpbmdPdmVySW1hZ2VzLG5leHRJbWFnZSxmaW5kQ3VycmVudEltYWdlLHByZXZpb3VzSW1hZ2UsY2xvc2VJbWFnZX0gZnJvbSBcIi4vbWFpblBhZ2UuanNcIjtcbi8vcmVxdWlyZSgnYm9vdHN0cmFwJylcblxudmFyIHB1YmxpY0ltYWdlcyA9IFtdXG52YXIgbGlrZWRJbWFnZXMgPSBbXVxudmFyIHB1YmxpY0ltYWdlc05hbWVzID0gW11cbnZhciBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMgPSBbXVxudmFyIHVzZXJuYW1lcyA9IFtdO1xuJChkb2N1bWVudCkucmVhZHkoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgJCgnI3VwbG9hZEljb24nKS5yZW1vdmUoKVxuICAgICQoJyNzZWFyY2hVc2VyTGknKS5zaG93KClcbiAgICBjb25zb2xlLmxvZyhcImFzZGFmc2ZzZGZzZGZzZGZzZnNkZnNkZnNkZlwiKVxuICAgLy8gcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKVxuICAgIGxpa2VkSW1hZ2VzID0gYXdhaXQgZmV0Y2hMaWtlZEltYWdlcygpXG5cbiAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkdSBtb2plIGxpa2VkIGltYWdlc1wiKVxuICAgIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgIGNvbnNvbGUubG9nKFwidG90byBidWR1IHB1YmxpYyBpbWFnZXNcIilcbiAgICBwdWJsaWNJbWFnZXMgID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKVxuICAgIGNvbnNvbGUubG9nKHB1YmxpY0ltYWdlcylcbiAgICBhd2FpdCByZW5kZXJJbWFnZXNTaGFyZWQocHVibGljSW1hZ2VzLmRhdGEpXG4gICAgJCgnI3Bob3RvLWxpc3QnKS5odG1sKCcnKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHVibGljSW1hZ2VzTmFtZXNbaV0gPSBwdWJsaWNJbWFnZXMuZGF0YVtpXVsnb3JpZ2luYWxOYW1lJ11cbiAgICAgICAgaWYoISh1c2VybmFtZXMuaW5jbHVkZXMocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXSkpKSB7XG4gICAgICAgICAgICB1c2VybmFtZXMucHVzaChwdWJsaWNJbWFnZXMuZGF0YVtpXVtcInVzZXJuYW1lXCJdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyA9IHB1YmxpY0ltYWdlc05hbWVzXG5cbiAgICAkKCcuY29tbWVudHMnKS5oaWRlKClcbn0pXG5cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckltYWdlc1NoYXJlZChpbWFnZXMpIHtcblxuXG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmh0bWwoJycpO1xuICAgIHZhciBpY29uQ2xhc3MgPSAnZmFyJ1xuICAgIC8vcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKTtcblxuXG4gICAgLy8gb3duZWRJbWFnZXMgPSBhd2FpdCBmZXRjaE93bmVkSW1hZ2VzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXNOYW1lcyArIFwidG90byBqZSBvd25lZEltYWdlc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuXG5cbiAgICAgICAgLyoqIGZvciBsYXp5IGxvYWRpbmcgKi9cbiAgICAgICAgcmVuZGVySGVscChpICwgaW1hZ2VzKVxuICAgICAgICBpZiAoaSA+IDMwKSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJy9wdWJsaWMvcGhvdG8vJyArIGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsaWtlZEltYWdlcy5kYXRhLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICBpZiAobGlrZWRJbWFnZXMuZGF0YVtsXVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gaW1hZ2VzW2ldW1wib3JpZ2luYWxOYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcydcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRodW1ibmFpbEljb25zU2hhcmVkXCIgPjxzcGFuIGNsYXNzPVwiY29tbWVudFRvZ2dsZXJcIj5jb21tZW50czwvc3Bhbj48c3BhbiBjbGFzcz1cIm51bWJlckxpa2VzIG1yLTJcIj4nICsgaW1hZ2VzW2ldWydsaWtlcyddLmxlbmd0aCArICc8L3NwYW4+PGkgY2xhc3M9XCInICsgaWNvbkNsYXNzICsgJyBmYS1oZWFydCAgbGlrZWFibGVcIiA+PC9pPjwvZGl2PicpXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiY29tbWVudElucHV0XCIgcGxhY2Vob2xkZXI9XCJpbnNlcnQgY29tbWVudFwiPjwvZGl2PicpXG4gICAgICAgIGljb25DbGFzcyA9ICdmYXInXG5cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVySGVscChpLCBpbWFnZXMpIHtcbiAgICAkKCcjcGhvdG9MaXN0U2hhcmVkJykuYXBwZW5kKCc8ZGl2IGlkPScgKyBpICsgJ3NoYXJlZCcgKyAnIGNsYXNzPVwidGh1bWJuYWlsRGl2U2hhcmVkXCI+IDwvZGl2PicpXG4gICAgaWYgKGltYWdlc1tpXVsncHVibGlzaGVkQXQnXSAhPT0gbnVsbCkge1xuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHVibGljSW5mb0RpdlwiPjxkaXYgY2xhc3M9XCJvd25lck5hbWVEaXZcIj4nKyBpbWFnZXNbaV1bJ3VzZXJuYW1lJ10gICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJwdWJsaXNoRGF0ZURpdlwiPicrIHRpbWVTaW5jZShuZXcgRGF0ZSggKGltYWdlc1tpXVsncHVibGlzaGVkQXQnXSkpKSAgKyAnPC9kaXY+PC9kaXY+JylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHVibGljSW5mb0RpdlwiPjxkaXYgY2xhc3M9XCJvd25lck5hbWVEaXZcIj4nKyBpbWFnZXNbaV1bJ3VzZXJuYW1lJ10gICsgJzwvZGl2PjwvZGl2PicpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHRpbWVTaW5jZShkYXRlKSB7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiB5ZWFyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAyNTkyMDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgbW9udGhzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDg2NDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgZGF5c1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAzNjAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgaG91cnNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gNjA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtaW51dGVzXCI7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgXCIgc2Vjb25kc1wiO1xufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcubGlrZWFibGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbGlrZWQgPSBmYWxzZVxuICAgIHZhciBpbWFnZVxuICAgIHZhciBuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpWzFdLmRhdGFzZXQubmFtZVxuICAgIC8vY29uc29sZS5sb2cobmFtZSlcbiAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcy5kYXRhLmxlbmd0aClcbiAgICBmb3IgKGkgPSAwIDsgaSA8IGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cobGlrZWRJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSArIFwiYXNkYWZzc3Nzc3Nzc3Nzc2FzZmFhYWFhc2Zkc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc2ZmXCIpXG4gICAgICAgIGlmIChsaWtlZEltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsaWtlZCA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZighbGlrZWQpIHtcbiAgICAgICAgaW1hZ2UgPSBhd2FpdCBsaWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICAgICBsaWtlZEltYWdlcy5kYXRhLnB1c2goaW1hZ2UuZGF0YSlcbiAgICAgICAgLyokKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXMnKSovXG4gICAgICAgIHRvZ2dsZUxpa2VkSGVhcnQodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgIGltYWdlID0gYXdhaXQgdW5saWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgdmFyIGluZGV4ID0gbGlrZWRJbWFnZXMuZGF0YS5pbmRleE9mKG5hbWUpXG4gICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEuc3BsaWNlKGluZGV4ICwgMSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxpa2VkSW1hZ2VzIHBvIGRlbGV0ZSBcIilcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICAgICAgLyokKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXMnKSovXG4gICAgICAgIHRvZ2dsZUxpa2VkSGVhcnQodGhpcylcblxuXG4gICAgfVxuXG5cbiAgICBpZiggaW1hZ2Uuc3RhdHVzICE9PSA1MDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3RvIGJ1ZGUgaW1hZ2VcIilcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5udW1iZXJMaWtlcycpLnRleHQoKGltYWdlLmRhdGFbXCJsaWtlc1wiXS5sZW5ndGgpLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgLy8gY29uc29sZS5sb2coaW1hZ2UpXG4gICAgLy92YXIgaW5kZXggPSBwdWJsaWNJbWFnZXMuaW5kZXhPZihpbWFnZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBpZihpbWFnZVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gcHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pIHtcbiAgICAgICAgICAgIHB1YmxpY0ltYWdlcy5kYXRhW2ldID0gaW1hZ2VcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy92YXIgcG9zID0gcHVibGljSW1hZ2VzLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiBlW1wib3JpZ2luYWxOYW1lXCJdOyB9KS5pbmRleE9mKCdzdGV2aWUnKTtcbiAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG59KVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUxpa2VkSGVhcnQoZWwpIHtcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFyJylcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFzJylcbn1cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aHVtYm5haWxJbWFnZVNoYXJlZCcgLCBhc3luYyAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmRhdGEoJ25hbWUnKSlcbiAgICAgICAgdmFyIGltYWdlTmFtZSA9ICQodGhpcykuZGF0YSgnbmFtZScpXG4gICAgICAgIG9wZW5XaW5kb3coaW1hZ2VOYW1lLCBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMpXG4gICAgICAgICQoJyNmdWxsc2NyZWVuUGljdHVyZScpLnByZXBlbmQoJzxkaXY+PC9kaXY+JylcblxufSlcblxuLyokKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoe1xuICAgIHNvdXJjZTogdXNlcm5hbWVzXG59KTsqL1xuXG52YXIgYXZhaWxhYmxlVGFncyA9IFtcbiAgICBcIkFjdGlvblNjcmlwdFwiLFxuICAgIFwiQXBwbGVTY3JpcHRcIixcbiAgICBcIkFzcFwiLFxuICAgIFwiQkFTSUNcIixcbiAgICBcIkNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ2xvanVyZVwiLFxuICAgIFwiQ09CT0xcIixcbiAgICBcIkNvbGRGdXNpb25cIixcbiAgICBcIkVybGFuZ1wiLFxuICAgIFwiRm9ydHJhblwiLFxuICAgIFwiR3Jvb3Z5XCIsXG4gICAgXCJIYXNrZWxsXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJMaXNwXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNjaGVtZVwiLFxuICAgIFwic3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzXCJcbiAgICBdXG4vKiQoIGZ1bmN0aW9uKCkge1xuXG4gICAgXTtcbiAgICAkKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoXG4gICAgICAgIGF2YWlsYWJsZVRhZ3MpO1xufSApOyovXG5cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVXNlclBob3RvcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpPT57XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgaWYoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgcmVzdWx0ID0gdXNlcm5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAobmFtZSA9PiBgPGxpIGNsYXNzPVwicmVzdWx0VXNlckxpXCI+JHtuYW1lfTwvbGk+YClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cbiAgICAgICAgc2hvd1Jlc3VsdFVzZXJzKHJlc3VsdClcbn0pXG5cbmZ1bmN0aW9uIHNob3dSZXN1bHRVc2VycyhyZXN1bHRBcnJheSkge1xuXG4gICAgaWYgKHJlc3VsdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBodG1sID0gLyohcmVzdWx0QXJyYXkubGVuZ3RoID8gJycgOiovIHJlc3VsdEFycmF5LmpvaW4oJycpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRVc2Vyc1VsJykuaW5uZXJIVE1MID0gaHRtbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgPGxpIGNsYXNzPVwicmVzdWx0VXNlck5vTGlcIj5ObyBwdWJsaWMgcGhvdG9zIGZvciB0aGlzIHVzZXI8L2xpPmBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdFVzZXJzVWwnKS5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc3VsdFVzZXJMaScsIGFzeW5jICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gJCh0aGlzKS50ZXh0KClcbiAgICBhd2FpdCBzaG93VXNlclBob3Rvcyh1c2VybmFtZSlcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93VXNlclBob3Rvcyh1c2VybmFtZSkge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5odG1sKClcbiAgICB2YXIgaW1hZ2VzVG9SZW5kZXIgPSBbXVxuICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG4gICAgLy9pbWFnZXNUb1JlbmRlciA9IHB1YmxpY0ltYWdlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0uaW5jbHVkZXModXNlcm5hbWUpKSB7XG4gICAgICAgICAgICBpbWFnZXNUb1JlbmRlci5wdXNoKHB1YmxpY0ltYWdlcy5kYXRhW2ldKVxuICAgICAgICAgICAgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKGltYWdlc1RvUmVuZGVyKTtcbn1cblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbW1lbnRUb2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5jb21tZW50cycpLnRvZ2dsZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnLmNvbW1lbnRJbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxufSlcblxuLyokKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbW1lbnRzJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlKClcbn0pKi8iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==