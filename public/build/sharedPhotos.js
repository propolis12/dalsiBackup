(self["webpackChunk"] = self["webpackChunk"] || []).push([["sharedPhotos"],{

/***/ "./assets/services/comment-services.js":
/*!*********************************************!*\
  !*** ./assets/services/comment-services.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function addComment(_x, _x2) {
  return _addComment.apply(this, arguments);
}

function _addComment() {
  _addComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(comment, filename) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().post('/add/comment/' + filename, {
              "comment": comment
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addComment.apply(this, arguments);
}

/***/ }),

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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/images-service */ "./assets/services/images-service.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_album_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/album-services */ "./assets/services/album-services.js");
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mainPage.js */ "./assets/mainPage.js");
/* harmony import */ var _services_comment_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/services/comment-services */ "./assets/services/comment-services.js");












function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var publicImages = [];
var likedImages = [];
var publicImagesNames = [];
var currentPublicImagesNames = [];
var usernames = [];
jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var i;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#uploadIcon').remove();
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#searchUserLi').show();
          _context.next = 4;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.fetchLikedImages)();

        case 4:
          likedImages = _context.sent;
          _context.next = 7;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.fetchPublicImages)();

        case 7:
          publicImages = _context.sent;
          _context.next = 10;
          return renderImagesShared(publicImages.data);

        case 10:
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#photo-list').html('');

          for (i = 0; i < publicImages.data.length; i++) {
            publicImagesNames[i] = publicImages.data[i]['originalName'];

            if (!usernames.includes(publicImages.data[i]["username"])) {
              usernames.push(publicImages.data[i]["username"]);
            }
          }

          currentPublicImagesNames = publicImagesNames;
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.comments').hide();

        case 14:
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
  _renderImagesShared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(images) {
    var iconClass, i, l, j;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_13___default()('#photoListShared').html('');
            iconClass = 'far';
            i = 0;

          case 3:
            if (!(i < images.length)) {
              _context6.next = 21;
              break;
            }

            /** for lazy loading */
            renderHelp(i, images);

            if (i > 30) {
              jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_13___default()('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '',
                alt: '',
                'data-name': images[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_13___default()('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '/public/photo/' + images[i]['originalName'],
                alt: '',
                'data-name': images[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            }

            l = 0;

          case 7:
            if (!(l < likedImages.data.length)) {
              _context6.next = 14;
              break;
            }

            if (!(likedImages.data[l]["originalName"] === images[i]["originalName"])) {
              _context6.next = 11;
              break;
            }

            iconClass = 'fas';
            return _context6.abrupt("break", 14);

          case 11:
            l++;
            _context6.next = 7;
            break;

          case 14:
            jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="commentToggler">comments</span><span class="numberLikes mr-2">' + images[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>');
            jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append('<div class="comments"><div class="commentValues"></div><input type="text" class="commentInput" placeholder="insert comment"></div>');

            for (j = 0; j < images[i]["comments"].length; j++) {
              jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').children('.comments').children('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + images[i]["comments"][j]["username"] + ' </span><span class="commentCreatedAt"> ' + timeSince(new Date(images[i]["comments"][j]["createdAt"])) + '</span>' + '<div class="commentValue">' + images[i]["comments"][j]["value"] + '</div></div>');
            }

            iconClass = 'far';

          case 18:
            i++;
            _context6.next = 3;
            break;

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _renderImagesShared.apply(this, arguments);
}

function renderHelp(i, images) {
  jquery__WEBPACK_IMPORTED_MODULE_13___default()('#photoListShared').append('<div id=' + i + 'shared' + ' class="thumbnailDivShared"> </div>');

  if (images[i]['publishedAt'] !== null) {
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + images[i]['username'] + '</div><div class="publishDateDiv">' + timeSince(new Date(images[i]['publishedAt'])) + '</div></div>');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + images[i]['username'] + '</div></div>');
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

jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.likeable', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var liked, imageLikes, name, i;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          liked = false;
          name = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parent().siblings()[1].dataset.name;

          for (i = 0; i < likedImages.data.length; i++) {
            console.log(likedImages.data[i]["originalName"]);

            if (likedImages.data[i]["originalName"] === name) {
              console.log("true");
              liked = true;
            }
          }

          if (liked) {
            _context2.next = 15;
            break;
          }

          _context2.next = 6;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.likePhoto)(name);

        case 6:
          imageLikes = _context2.sent;
          //likedImages.data.push(imageLikes.data)
          toggleLikedHeart(this);
          console.log("-------------------------------------------------------------------------------------");
          console.log(imageLikes);
          console.log("toto je imageLikes po likovani");
          console.log(likedImages);
          console.log("toto su liked images po likovani");
          _context2.next = 24;
          break;

        case 15:
          _context2.next = 17;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.unlikePhoto)(name);

        case 17:
          imageLikes = _context2.sent;

          /*var index = likedImages.data.indexOf(name)
          likedImages.data.splice(index , 1)*/
          toggleLikedHeart(this);
          console.log("-------------------------------------------------------------------------------------");
          console.log(imageLikes);
          console.log("toto je imageLikes po unlikovani");
          console.log(likedImages);
          console.log("toto su liked images unlikovani");

        case 24:
          _context2.next = 26;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.fetchLikedImages)();

        case 26:
          likedImages = _context2.sent;

          if (imageLikes.status !== 500) {
            jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).siblings('.numberLikes').text(imageLikes.data.length.toString());
          }

          for (i = 0; i < publicImages.data.length; i++) {
            if (imageLikes["originalName"] === publicImages.data[i]["originalName"]) {
              publicImages.data[i] = imageLikes;
            }
          } //console.log(publicImages)


        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

function toggleLikedHeart(el) {
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(el).toggleClass('far');
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(el).toggleClass('fas');
}

jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.thumbnailImageShared', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var imageName;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          imageName = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).data('name');
          (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_15__.openWindow)(imageName, currentPublicImagesNames);
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fullscreenPicture').prepend('<div></div>');

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));
document.getElementById('searchUserPhotos').addEventListener('input', function (e) {
  var result = [];

  if (e.target.value) {
    result = usernames.filter(function (name) {
      return name.toLowerCase().includes(e.target.value);
    });
    result = result.map(function (name) {
      return "<li class=\"resultUserLi\">".concat(name, "</li>");
    });
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

jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.resultUserLi', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var username;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          username = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text();
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
  _showUserPhotos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(username) {
    var imagesToRender, i;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_13___default()('#photoListShared').html();
            imagesToRender = [];
            currentPublicImagesNames = [];

            for (i = 0; i < publicImages.data.length; i++) {
              if (publicImages.data[i]["username"].includes(username)) {
                imagesToRender.push(publicImages.data[i]);
                currentPublicImagesNames.push(publicImages.data[i]["originalName"]);
              }
            }

            _context7.next = 6;
            return renderImagesShared(imagesToRender);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _showUserPhotos.apply(this, arguments);
}

jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.commentToggler', function () {
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parent().siblings('.comments').toggle();
});
jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('keyup', '.commentInput', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
    var filename, comment, imageInfo, i;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(event.keyCode === 13)) {
              _context5.next = 10;
              break;
            }

            filename = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parent().siblings('.thumbnailImageShared').data('name');
            comment = event.target.value;
            _context5.next = 5;
            return (0,_services_comment_services__WEBPACK_IMPORTED_MODULE_16__.addComment)(comment, filename);

          case 5:
            _context5.next = 7;
            return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_11__.getImageInfo)(filename, "share");

          case 7:
            imageInfo = _context5.sent;
            jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).siblings('.commentValues').html('');

            for (i = 0; i < imageInfo.data["comments"].length; i++) {
              jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).siblings('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + imageInfo.data["comments"][i]["user"]["username"] + ' </span> <span class="commentCreatedAt">' + timeSince(new Date(imageInfo.data["comments"][i]["createdAt"])) + '</span>' + '<div class="commentValue">' + imageInfo.data["comments"][i]["value"] + ' </div></div>');
            }

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x3) {
    return _ref5.apply(this, arguments);
  };
}());

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

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


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
0,[["./assets/sharedPhotos.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-fff9c4","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_ma-594b72"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvY29tbWVudC1zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyJdLCJuYW1lcyI6WyJhZGRDb21tZW50IiwiY29tbWVudCIsImZpbGVuYW1lIiwiYXhpb3MiLCJoZWFkZXJzIiwicHVibGljSW1hZ2VzIiwibGlrZWRJbWFnZXMiLCJwdWJsaWNJbWFnZXNOYW1lcyIsImN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyIsInVzZXJuYW1lcyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlIiwic2hvdyIsImZldGNoTGlrZWRJbWFnZXMiLCJmZXRjaFB1YmxpY0ltYWdlcyIsInJlbmRlckltYWdlc1NoYXJlZCIsImRhdGEiLCJodG1sIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsImhpZGUiLCJpbWFnZXMiLCJpY29uQ2xhc3MiLCJyZW5kZXJIZWxwIiwiYXBwZW5kIiwicmVhbHNyYyIsInNyYyIsImFsdCIsImwiLCJqIiwiY2hpbGRyZW4iLCJ0aW1lU2luY2UiLCJEYXRlIiwiZGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbCIsIm9uIiwibGlrZWQiLCJuYW1lIiwicGFyZW50Iiwic2libGluZ3MiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsImxpa2VQaG90byIsImltYWdlTGlrZXMiLCJ0b2dnbGVMaWtlZEhlYXJ0IiwidW5saWtlUGhvdG8iLCJzdGF0dXMiLCJ0ZXh0IiwidG9TdHJpbmciLCJlbCIsInRvZ2dsZUNsYXNzIiwiaW1hZ2VOYW1lIiwib3BlbldpbmRvdyIsInByZXBlbmQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVzdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsInNob3dSZXN1bHRVc2VycyIsInJlc3VsdEFycmF5Iiwiam9pbiIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ1c2VybmFtZSIsInNob3dVc2VyUGhvdG9zIiwiaW1hZ2VzVG9SZW5kZXIiLCJ0b2dnbGUiLCJldmVudCIsImtleUNvZGUiLCJnZXRJbWFnZUluZm8iLCJpbWFnZUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFlQSxVQUF0QjtBQUFBO0FBQUE7Ozt3RUFBTyxpQkFBMEJDLE9BQTFCLEVBQW1DQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVUMsaURBQUEsQ0FBVyxrQkFBa0JELFFBQTdCLEVBQXdDO0FBQzdDLHlCQUFXRDtBQURrQyxhQUF4QyxFQUdUO0FBQ0lHLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWDtBQURiLGFBSFMsQ0FEVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7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RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsa0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixlQUFlLG1CQUFPLENBQUMsMkVBQXVCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxZQUFZLG1CQUFPLENBQUMsbUZBQTJCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLDZCQUE2QiwwQkFBMEIsWUFBWSxFQUFFO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLGVBQWU7QUFDckI7Ozs7Ozs7Ozs7OztBQ3hCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBc0M7O0FBRXpFO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic2hhcmVkUGhvdG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ29tbWVudChjb21tZW50LCBmaWxlbmFtZSkge1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KCcvYWRkL2NvbW1lbnQvJyArIGZpbGVuYW1lICwge1xuICAgICAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSIsImltcG9ydCB7XG4gICAgZmV0Y2hMYXRlc3RJbWFnZXMsXG4gICAgZmV0Y2hPd25lZEltYWdlcyxcbiAgICBkZWxldGVJbWFnZSxcbiAgICBmZXRjaEltYWdlcyxcbiAgICBnZXRJbWFnZUluZm8sXG4gICAgbWFrZVB1YmxpYywgbWFrZVByaXZhdGUsIGZldGNoUHVibGljSW1hZ2VzLCBsaWtlUGhvdG8sIGZldGNoTGlrZWRJbWFnZXMsIHVubGlrZVBob3RvXG59IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy1zZXJ2aWNlXCI7XG5cblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtmZXRjaEFsYnVtSW1hZ2VzfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbGJ1bS1zZXJ2aWNlc1wiO1xuaW1wb3J0IHtvcGVuV2luZG93LCBzZXRIb3ZlcmluZ092ZXJJbWFnZXMsbmV4dEltYWdlLGZpbmRDdXJyZW50SW1hZ2UscHJldmlvdXNJbWFnZSxjbG9zZUltYWdlfSBmcm9tIFwiLi9tYWluUGFnZS5qc1wiO1xuaW1wb3J0IHthZGRDb21tZW50fSBmcm9tIFwiQC9zZXJ2aWNlcy9jb21tZW50LXNlcnZpY2VzXCI7XG5cbnZhciBwdWJsaWNJbWFnZXMgPSBbXVxudmFyIGxpa2VkSW1hZ2VzID0gW11cbnZhciBwdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG52YXIgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzID0gW11cbnZhciB1c2VybmFtZXMgPSBbXTtcbiQoZG9jdW1lbnQpLnJlYWR5KGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICQoJyN1cGxvYWRJY29uJykucmVtb3ZlKClcbiAgICAkKCcjc2VhcmNoVXNlckxpJykuc2hvdygpXG4gICAgbGlrZWRJbWFnZXMgPSBhd2FpdCBmZXRjaExpa2VkSW1hZ2VzKClcbiAgIC8vIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgIHB1YmxpY0ltYWdlcyAgPSBhd2FpdCBmZXRjaFB1YmxpY0ltYWdlcygpXG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKHB1YmxpY0ltYWdlcy5kYXRhKVxuICAgICQoJyNwaG90by1saXN0JykuaHRtbCgnJylcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0ltYWdlc05hbWVzW2ldID0gcHVibGljSW1hZ2VzLmRhdGFbaV1bJ29yaWdpbmFsTmFtZSddXG4gICAgICAgIGlmKCEodXNlcm5hbWVzLmluY2x1ZGVzKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0pKSkge1xuICAgICAgICAgICAgdXNlcm5hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMgPSBwdWJsaWNJbWFnZXNOYW1lc1xuXG4gICAgJCgnLmNvbW1lbnRzJykuaGlkZSgpXG59KVxuXG5cblxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJJbWFnZXNTaGFyZWQoaW1hZ2VzKSB7XG5cblxuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5odG1sKCcnKTtcbiAgICB2YXIgaWNvbkNsYXNzID0gJ2ZhcidcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuXG5cbiAgICAgICAgLyoqIGZvciBsYXp5IGxvYWRpbmcgKi9cbiAgICAgICAgcmVuZGVySGVscChpICwgaW1hZ2VzKVxuICAgICAgICBpZiAoaSA+IDMwKSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJy9wdWJsaWMvcGhvdG8vJyArIGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsaWtlZEltYWdlcy5kYXRhLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICBpZiAobGlrZWRJbWFnZXMuZGF0YVtsXVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gaW1hZ2VzW2ldW1wib3JpZ2luYWxOYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcydcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRodW1ibmFpbEljb25zU2hhcmVkXCIgPjxzcGFuIGNsYXNzPVwiY29tbWVudFRvZ2dsZXJcIj5jb21tZW50czwvc3Bhbj48c3BhbiBjbGFzcz1cIm51bWJlckxpa2VzIG1yLTJcIj4nICsgaW1hZ2VzW2ldWydsaWtlcyddLmxlbmd0aCArICc8L3NwYW4+PGkgY2xhc3M9XCInICsgaWNvbkNsYXNzICsgJyBmYS1oZWFydCAgbGlrZWFibGVcIiA+PC9pPjwvZGl2PicpXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjxkaXYgY2xhc3M9XCJjb21tZW50VmFsdWVzXCI+PC9kaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb21tZW50SW5wdXRcIiBwbGFjZWhvbGRlcj1cImluc2VydCBjb21tZW50XCI+PC9kaXY+JylcbiAgICAgICAgZm9yKHZhciBqID0gMCA7IGogPCBpbWFnZXNbaV1bXCJjb21tZW50c1wiXS5sZW5ndGggOyBqKyspXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5jaGlsZHJlbignLmNvbW1lbnRzJykuY2hpbGRyZW4oJy5jb21tZW50VmFsdWVzJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYWN0dWFsQ29tbWVudFZhbHVlXCI+PHNwYW4gY2xhc3M9XCJjb21tZW50VXNlclwiPicgKyBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcInVzZXJuYW1lXCJdICsgJyA8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb21tZW50Q3JlYXRlZEF0XCI+ICcgKyAgdGltZVNpbmNlKG5ldyBEYXRlKCBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcImNyZWF0ZWRBdFwiXSkpICsgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbW1lbnRWYWx1ZVwiPicgKyBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcInZhbHVlXCJdICsgJzwvZGl2PjwvZGl2PicpXG5cbiAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcidcblxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJIZWxwKGksIGltYWdlcykge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5hcHBlbmQoJzxkaXYgaWQ9JyArIGkgKyAnc2hhcmVkJyArICcgY2xhc3M9XCJ0aHVtYm5haWxEaXZTaGFyZWRcIj4gPC9kaXY+JylcbiAgICBpZiAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddICE9PSBudWxsKSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cInB1Ymxpc2hEYXRlRGl2XCI+JysgdGltZVNpbmNlKG5ldyBEYXRlKCAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddKSkpICArICc8L2Rpdj48L2Rpdj4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PC9kaXY+JylcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdGltZVNpbmNlKGRhdGUpIHtcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIGRhdGUpIC8gMTAwMCk7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzE1MzYwMDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIHllYXJzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtb250aHNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBkYXlzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDM2MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBob3Vyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA2MDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIG1pbnV0ZXNcIjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcykgKyBcIiBzZWNvbmRzXCI7XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5saWtlYWJsZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBsaWtlZCA9IGZhbHNlXG4gICAgdmFyIGltYWdlTGlrZXNcbiAgICB2YXIgbmFtZSA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKVsxXS5kYXRhc2V0Lm5hbWVcbiAgICBmb3IgKGkgPSAwIDsgaSA8IGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cobGlrZWRJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSlcbiAgICAgICAgaWYgKGxpa2VkSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxuICAgICAgICAgICAgbGlrZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWxpa2VkKSB7XG4gICAgICAgIGltYWdlTGlrZXMgPSBhd2FpdCBsaWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9saWtlZEltYWdlcy5kYXRhLnB1c2goaW1hZ2VMaWtlcy5kYXRhKVxuICAgICAgICB0b2dnbGVMaWtlZEhlYXJ0KHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUxpa2VzKVxuICAgICAgICBjb25zb2xlLmxvZyhcInRvdG8gamUgaW1hZ2VMaWtlcyBwbyBsaWtvdmFuaVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcyApXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG90byBzdSBsaWtlZCBpbWFnZXMgcG8gbGlrb3ZhbmlcIilcbiAgICB9IGVsc2Uge1xuICAgICAgIGltYWdlTGlrZXMgPSBhd2FpdCB1bmxpa2VQaG90byhuYW1lKVxuICAgICAgICAvKnZhciBpbmRleCA9IGxpa2VkSW1hZ2VzLmRhdGEuaW5kZXhPZihuYW1lKVxuICAgICAgICBsaWtlZEltYWdlcy5kYXRhLnNwbGljZShpbmRleCAsIDEpKi9cbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCh0aGlzKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VMaWtlcylcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3RvIGplIGltYWdlTGlrZXMgcG8gdW5saWtvdmFuaVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcyApXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG90byBzdSBsaWtlZCBpbWFnZXMgdW5saWtvdmFuaVwiKVxuICAgIH1cblxuICAgIGxpa2VkSW1hZ2VzID0gYXdhaXQgZmV0Y2hMaWtlZEltYWdlcygpXG4gICAgaWYoIGltYWdlTGlrZXMuc3RhdHVzICE9PSA1MDApIHtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm51bWJlckxpa2VzJykudGV4dCgoaW1hZ2VMaWtlcy5kYXRhLmxlbmd0aCkudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBpZihpbWFnZUxpa2VzW1wib3JpZ2luYWxOYW1lXCJdID09PSBwdWJsaWNJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSkge1xuICAgICAgICAgICAgcHVibGljSW1hZ2VzLmRhdGFbaV0gPSBpbWFnZUxpa2VzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKHB1YmxpY0ltYWdlcylcbn0pXG5cblxuZnVuY3Rpb24gdG9nZ2xlTGlrZWRIZWFydChlbCkge1xuICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdmYXMnKVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRodW1ibmFpbEltYWdlU2hhcmVkJyAsIGFzeW5jICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbWFnZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ25hbWUnKVxuICAgICAgICBvcGVuV2luZG93KGltYWdlTmFtZSwgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzKVxuICAgICAgICAkKCcjZnVsbHNjcmVlblBpY3R1cmUnKS5wcmVwZW5kKCc8ZGl2PjwvZGl2PicpXG5cbn0pXG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFVzZXJQaG90b3MnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKT0+e1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGlmKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIHJlc3VsdCA9IHVzZXJuYW1lcy5maWx0ZXIobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKVxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKG5hbWUgPT4gYDxsaSBjbGFzcz1cInJlc3VsdFVzZXJMaVwiPiR7bmFtZX08L2xpPmApXG4gICAgfVxuICAgICAgICBzaG93UmVzdWx0VXNlcnMocmVzdWx0KVxufSlcblxuZnVuY3Rpb24gc2hvd1Jlc3VsdFVzZXJzKHJlc3VsdEFycmF5KSB7XG5cbiAgICBpZiAocmVzdWx0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAvKiFyZXN1bHRBcnJheS5sZW5ndGggPyAnJyA6Ki8gcmVzdWx0QXJyYXkuam9pbignJylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdFVzZXJzVWwnKS5pbm5lckhUTUwgPSBodG1sXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGA8bGkgY2xhc3M9XCJyZXN1bHRVc2VyTm9MaVwiPk5vIHB1YmxpYyBwaG90b3MgZm9yIHRoaXMgdXNlcjwvbGk+YFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0VXNlcnNVbCcpLmlubmVySFRNTCA9IGh0bWxcbiAgICB9XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVzdWx0VXNlckxpJywgYXN5bmMgIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlcm5hbWUgPSAkKHRoaXMpLnRleHQoKVxuICAgIGF3YWl0IHNob3dVc2VyUGhvdG9zKHVzZXJuYW1lKVxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dVc2VyUGhvdG9zKHVzZXJuYW1lKSB7XG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmh0bWwoKVxuICAgIHZhciBpbWFnZXNUb1JlbmRlciA9IFtdXG4gICAgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwdWJsaWNJbWFnZXMuZGF0YVtpXVtcInVzZXJuYW1lXCJdLmluY2x1ZGVzKHVzZXJuYW1lKSkge1xuICAgICAgICAgICAgaW1hZ2VzVG9SZW5kZXIucHVzaChwdWJsaWNJbWFnZXMuZGF0YVtpXSlcbiAgICAgICAgICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcy5wdXNoKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHJlbmRlckltYWdlc1NoYXJlZChpbWFnZXNUb1JlbmRlcik7XG59XG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb21tZW50VG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcuY29tbWVudHMnKS50b2dnbGUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJy5jb21tZW50SW5wdXQnLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnRodW1ibmFpbEltYWdlU2hhcmVkJykuZGF0YSgnbmFtZScpXG4gICAgICAgIHZhciBjb21tZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIGF3YWl0IGFkZENvbW1lbnQoY29tbWVudCwgZmlsZW5hbWUpXG4gICAgICAgIHZhciBpbWFnZUluZm8gPSBhd2FpdCBnZXRJbWFnZUluZm8oZmlsZW5hbWUsIFwic2hhcmVcIilcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbW1lbnRWYWx1ZXMnKS5odG1sKCcnKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlSW5mby5kYXRhW1wiY29tbWVudHNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5jb21tZW50VmFsdWVzJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYWN0dWFsQ29tbWVudFZhbHVlXCI+PHNwYW4gY2xhc3M9XCJjb21tZW50VXNlclwiPicgKyBpbWFnZUluZm8uZGF0YVtcImNvbW1lbnRzXCJdW2ldW1widXNlclwiXVtcInVzZXJuYW1lXCJdICsgJyA8L3NwYW4+IDxzcGFuIGNsYXNzPVwiY29tbWVudENyZWF0ZWRBdFwiPicgKyB0aW1lU2luY2UobmV3IERhdGUoIGltYWdlSW5mby5kYXRhW1wiY29tbWVudHNcIl1baV1bXCJjcmVhdGVkQXRcIl0pKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb21tZW50VmFsdWVcIj4nICsgaW1hZ2VJbmZvLmRhdGFbXCJjb21tZW50c1wiXVtpXVtcInZhbHVlXCJdICsgJyA8L2Rpdj48L2Rpdj4nKVxuICAgICAgICB9XG4gICAgfVxufSlcblxuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdpbmNsdWRlcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xuXG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xudmFyIG5hdGl2ZVRvU3RyaW5nID0gUmVnRXhwUHJvdG90eXBlW1RPX1NUUklOR107XG5cbnZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbnZhciBJTkNPUlJFQ1RfTkFNRSA9IG5hdGl2ZVRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+U3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpXG4gICAgICAuaW5kZXhPZihub3RBUmVnRXhwKHNlYXJjaFN0cmluZyksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9