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
/* harmony import */ var _services_comment_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/services/comment-services */ "./assets/services/comment-services.js");














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
  _renderImagesShared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(images) {
    var iconClass, i, l, j;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#photoListShared').html('');
            iconClass = 'far'; //publicImages = await fetchPublicImages();
            // ownedImages = await fetchOwnedImages();

            console.log(publicImagesNames + "toto je ownedImages");
            i = 0;

          case 4:
            if (!(i < images.length)) {
              _context6.next = 22;
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
              _context6.next = 15;
              break;
            }

            if (!(likedImages.data[l]["originalName"] === images[i]["originalName"])) {
              _context6.next = 12;
              break;
            }

            iconClass = 'fas';
            return _context6.abrupt("break", 15);

          case 12:
            l++;
            _context6.next = 8;
            break;

          case 15:
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="commentToggler">comments</span><span class="numberLikes mr-2">' + images[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>');
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').append('<div class="comments"><div class="commentValues"></div><input type="text" class="commentInput" placeholder="insert comment"></div>');

            for (j = 0; j < images[i]["comments"].length; j++) {
              jquery__WEBPACK_IMPORTED_MODULE_15___default()('#' + i + 'shared').children('.comments').children('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + images[i]["comments"][j]["username"] + ' </span><span class="commentCreatedAt"> ' + timeSince(new Date(images[i]["comments"][j]["createdAt"])) + '</span>' + '<div class="commentValue">' + images[i]["comments"][j]["value"] + '</div></div>');
            }

            iconClass = 'far';

          case 19:
            i++;
            _context6.next = 4;
            break;

          case 22:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
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
  _showUserPhotos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(username) {
    var imagesToRender, i;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
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

jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.commentToggler', function () {
  jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).parent().siblings('.comments').toggle();
});
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('keyup', '.commentInput', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
    var filename, comment, imageInfo, i;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(event.keyCode === 13)) {
              _context5.next = 13;
              break;
            }

            console.log(event.target.value);
            console.log(jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).parent().siblings('.thumbnailImageShared').data('name'));
            filename = jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).parent().siblings('.thumbnailImageShared').data('name');
            comment = event.target.value;
            _context5.next = 7;
            return (0,_services_comment_services__WEBPACK_IMPORTED_MODULE_18__.addComment)(comment, filename);

          case 7:
            _context5.next = 9;
            return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.getImageInfo)(filename, "share");

          case 9:
            imageInfo = _context5.sent;
            jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).siblings('.commentValues').html('');
            console.log(imageInfo);

            for (i = 0; i < imageInfo.data["comments"].length; i++) {
              jquery__WEBPACK_IMPORTED_MODULE_15___default()(this).siblings('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + imageInfo.data["comments"][i]["user"]["username"] + ' </span> <span class="commentCreatedAt">' + timeSince(new Date(imageInfo.data["comments"][i]["createdAt"])) + '</span>' + '<div class="commentValue">' + imageInfo.data["comments"][i]["value"] + ' </div></div>');
            }

          case 13:
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
0,[["./assets/sharedPhotos.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861","vendors-node_modules_core-js_modules_es_promise_js-node_modules_jquery_dist_jquery_js-node_mo-9dc6ed","vendors-node_modules_axios_index_js-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_-80fff4","vendors-node_modules_dropzone_dist_dropzone_js-node_modules_dropzone_dist_dropzone_css-node_m-ebf025","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_ma-594b72"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvY29tbWVudC1zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbImFkZENvbW1lbnQiLCJjb21tZW50IiwiZmlsZW5hbWUiLCJheGlvcyIsImhlYWRlcnMiLCJwdWJsaWNJbWFnZXMiLCJsaWtlZEltYWdlcyIsInB1YmxpY0ltYWdlc05hbWVzIiwiY3VycmVudFB1YmxpY0ltYWdlc05hbWVzIiwidXNlcm5hbWVzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsImZldGNoTGlrZWRJbWFnZXMiLCJmZXRjaFB1YmxpY0ltYWdlcyIsInJlbmRlckltYWdlc1NoYXJlZCIsImRhdGEiLCJodG1sIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsImhpZGUiLCJpbWFnZXMiLCJpY29uQ2xhc3MiLCJyZW5kZXJIZWxwIiwiYXBwZW5kIiwicmVhbHNyYyIsInNyYyIsImFsdCIsImwiLCJqIiwiY2hpbGRyZW4iLCJ0aW1lU2luY2UiLCJEYXRlIiwiZGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbCIsIm9uIiwibGlrZWQiLCJuYW1lIiwicGFyZW50Iiwic2libGluZ3MiLCJkYXRhc2V0IiwibGlrZVBob3RvIiwiaW1hZ2UiLCJ0b2dnbGVMaWtlZEhlYXJ0IiwidW5saWtlUGhvdG8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzdGF0dXMiLCJ0ZXh0IiwidG9TdHJpbmciLCJlbCIsInRvZ2dsZUNsYXNzIiwiaW1hZ2VOYW1lIiwib3BlbldpbmRvdyIsInByZXBlbmQiLCJhdmFpbGFibGVUYWdzIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlc3VsdCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJzaG93UmVzdWx0VXNlcnMiLCJyZXN1bHRBcnJheSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJzaG93VXNlclBob3RvcyIsImltYWdlc1RvUmVuZGVyIiwidG9nZ2xlIiwiZXZlbnQiLCJrZXlDb2RlIiwiZ2V0SW1hZ2VJbmZvIiwiaW1hZ2VJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBZUEsVUFBdEI7QUFBQTtBQUFBOzs7d0VBQU8saUJBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLGlEQUFBLENBQVcsa0JBQWtCRCxRQUE3QixFQUF3QztBQUM3Qyx5QkFBV0Q7QUFEa0MsYUFBeEMsRUFHVDtBQUNJRyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFg7QUFEYixhQUhTLENBRFY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxrSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBc0M7O0FBRXpFO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic2hhcmVkUGhvdG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ29tbWVudChjb21tZW50LCBmaWxlbmFtZSkge1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KCcvYWRkL2NvbW1lbnQvJyArIGZpbGVuYW1lICwge1xuICAgICAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSIsImltcG9ydCB7XG4gICAgZmV0Y2hMYXRlc3RJbWFnZXMsXG4gICAgZmV0Y2hPd25lZEltYWdlcyxcbiAgICBkZWxldGVJbWFnZSxcbiAgICBmZXRjaEltYWdlcyxcbiAgICBnZXRJbWFnZUluZm8sXG4gICAgbWFrZVB1YmxpYywgbWFrZVByaXZhdGUsIGZldGNoUHVibGljSW1hZ2VzLCBsaWtlUGhvdG8sIGZldGNoTGlrZWRJbWFnZXMsIHVubGlrZVBob3RvXG59IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy1zZXJ2aWNlXCI7XG5cblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtmZXRjaEFsYnVtSW1hZ2VzfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbGJ1bS1zZXJ2aWNlc1wiO1xuaW1wb3J0IHtvcGVuV2luZG93LCBzZXRIb3ZlcmluZ092ZXJJbWFnZXMsbmV4dEltYWdlLGZpbmRDdXJyZW50SW1hZ2UscHJldmlvdXNJbWFnZSxjbG9zZUltYWdlfSBmcm9tIFwiLi9tYWluUGFnZS5qc1wiO1xuaW1wb3J0IHthZGRDb21tZW50fSBmcm9tIFwiQC9zZXJ2aWNlcy9jb21tZW50LXNlcnZpY2VzXCI7XG4vL3JlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbnZhciBwdWJsaWNJbWFnZXMgPSBbXVxudmFyIGxpa2VkSW1hZ2VzID0gW11cbnZhciBwdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG52YXIgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzID0gW11cbnZhciB1c2VybmFtZXMgPSBbXTtcbiQoZG9jdW1lbnQpLnJlYWR5KGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICQoJyN1cGxvYWRJY29uJykucmVtb3ZlKClcbiAgICAkKCcjc2VhcmNoVXNlckxpJykuc2hvdygpXG4gICAgY29uc29sZS5sb2coXCJhc2RhZnNmc2Rmc2Rmc2Rmc2ZzZGZzZGZzZGZcIilcbiAgIC8vIHB1YmxpY0ltYWdlcyA9IGF3YWl0IGZldGNoUHVibGljSW1hZ2VzKClcbiAgICBsaWtlZEltYWdlcyA9IGF3YWl0IGZldGNoTGlrZWRJbWFnZXMoKVxuXG4gICAgY29uc29sZS5sb2coXCJ0b3RvIGJ1ZHUgbW9qZSBsaWtlZCBpbWFnZXNcIilcbiAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkdSBwdWJsaWMgaW1hZ2VzXCIpXG4gICAgcHVibGljSW1hZ2VzICA9IGF3YWl0IGZldGNoUHVibGljSW1hZ2VzKClcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKHB1YmxpY0ltYWdlcy5kYXRhKVxuICAgICQoJyNwaG90by1saXN0JykuaHRtbCgnJylcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0ltYWdlc05hbWVzW2ldID0gcHVibGljSW1hZ2VzLmRhdGFbaV1bJ29yaWdpbmFsTmFtZSddXG4gICAgICAgIGlmKCEodXNlcm5hbWVzLmluY2x1ZGVzKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0pKSkge1xuICAgICAgICAgICAgdXNlcm5hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMgPSBwdWJsaWNJbWFnZXNOYW1lc1xuXG4gICAgJCgnLmNvbW1lbnRzJykuaGlkZSgpXG59KVxuXG5cblxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJJbWFnZXNTaGFyZWQoaW1hZ2VzKSB7XG5cblxuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5odG1sKCcnKTtcbiAgICB2YXIgaWNvbkNsYXNzID0gJ2ZhcidcbiAgICAvL3B1YmxpY0ltYWdlcyA9IGF3YWl0IGZldGNoUHVibGljSW1hZ2VzKCk7XG5cblxuICAgIC8vIG93bmVkSW1hZ2VzID0gYXdhaXQgZmV0Y2hPd25lZEltYWdlcygpO1xuXG4gICAgY29uc29sZS5sb2cocHVibGljSW1hZ2VzTmFtZXMgKyBcInRvdG8gamUgb3duZWRJbWFnZXNcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcblxuXG4gICAgICAgIC8qKiBmb3IgbGF6eSBsb2FkaW5nICovXG4gICAgICAgIHJlbmRlckhlbHAoaSAsIGltYWdlcylcbiAgICAgICAgaWYgKGkgPiAzMCkge1xuICAgICAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgkKCc8aW1nPicsIHtcbiAgICAgICAgICAgICAgICByZWFsc3JjOiAnL3B1YmxpYy9waG90by8nICsgaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBzcmM6ICcnLFxuICAgICAgICAgICAgICAgIGFsdDogJycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd0aHVtYm5haWxJbWFnZVNoYXJlZCdcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgkKCc8aW1nPicsIHtcbiAgICAgICAgICAgICAgICByZWFsc3JjOiAnL3B1YmxpYy9waG90by8nICsgaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIGFsdDogJycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd0aHVtYm5haWxJbWFnZVNoYXJlZCdcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbGlrZWRJbWFnZXMuZGF0YS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgaWYgKGxpa2VkSW1hZ2VzLmRhdGFbbF1bXCJvcmlnaW5hbE5hbWVcIl0gPT09IGltYWdlc1tpXVtcIm9yaWdpbmFsTmFtZVwiXSkge1xuICAgICAgICAgICAgICAgIGljb25DbGFzcyA9ICdmYXMnXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0aHVtYm5haWxJY29uc1NoYXJlZFwiID48c3BhbiBjbGFzcz1cImNvbW1lbnRUb2dnbGVyXCI+Y29tbWVudHM8L3NwYW4+PHNwYW4gY2xhc3M9XCJudW1iZXJMaWtlcyBtci0yXCI+JyArIGltYWdlc1tpXVsnbGlrZXMnXS5sZW5ndGggKyAnPC9zcGFuPjxpIGNsYXNzPVwiJyArIGljb25DbGFzcyArICcgZmEtaGVhcnQgIGxpa2VhYmxlXCIgPjwvaT48L2Rpdj4nKVxuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29tbWVudHNcIj48ZGl2IGNsYXNzPVwiY29tbWVudFZhbHVlc1wiPjwvZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiY29tbWVudElucHV0XCIgcGxhY2Vob2xkZXI9XCJpbnNlcnQgY29tbWVudFwiPjwvZGl2PicpXG4gICAgICAgIGZvcih2YXIgaiA9IDAgOyBqIDwgaW1hZ2VzW2ldW1wiY29tbWVudHNcIl0ubGVuZ3RoIDsgaisrKVxuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuY2hpbGRyZW4oJy5jb21tZW50cycpLmNoaWxkcmVuKCcuY29tbWVudFZhbHVlcycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImFjdHVhbENvbW1lbnRWYWx1ZVwiPjxzcGFuIGNsYXNzPVwiY29tbWVudFVzZXJcIj4nICsgaW1hZ2VzW2ldW1wiY29tbWVudHNcIl1bal1bXCJ1c2VybmFtZVwiXSArICcgPC9zcGFuPjxzcGFuIGNsYXNzPVwiY29tbWVudENyZWF0ZWRBdFwiPiAnICsgIHRpbWVTaW5jZShuZXcgRGF0ZSggaW1hZ2VzW2ldW1wiY29tbWVudHNcIl1bal1bXCJjcmVhdGVkQXRcIl0pKSArICAnPC9zcGFuPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb21tZW50VmFsdWVcIj4nICsgaW1hZ2VzW2ldW1wiY29tbWVudHNcIl1bal1bXCJ2YWx1ZVwiXSArICc8L2Rpdj48L2Rpdj4nKVxuXG4gICAgICAgIGljb25DbGFzcyA9ICdmYXInXG5cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVySGVscChpLCBpbWFnZXMpIHtcbiAgICAkKCcjcGhvdG9MaXN0U2hhcmVkJykuYXBwZW5kKCc8ZGl2IGlkPScgKyBpICsgJ3NoYXJlZCcgKyAnIGNsYXNzPVwidGh1bWJuYWlsRGl2U2hhcmVkXCI+IDwvZGl2PicpXG4gICAgaWYgKGltYWdlc1tpXVsncHVibGlzaGVkQXQnXSAhPT0gbnVsbCkge1xuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHVibGljSW5mb0RpdlwiPjxkaXYgY2xhc3M9XCJvd25lck5hbWVEaXZcIj4nKyBpbWFnZXNbaV1bJ3VzZXJuYW1lJ10gICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJwdWJsaXNoRGF0ZURpdlwiPicrIHRpbWVTaW5jZShuZXcgRGF0ZSggKGltYWdlc1tpXVsncHVibGlzaGVkQXQnXSkpKSAgKyAnPC9kaXY+PC9kaXY+JylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHVibGljSW5mb0RpdlwiPjxkaXYgY2xhc3M9XCJvd25lck5hbWVEaXZcIj4nKyBpbWFnZXNbaV1bJ3VzZXJuYW1lJ10gICsgJzwvZGl2PjwvZGl2PicpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHRpbWVTaW5jZShkYXRlKSB7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiB5ZWFyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAyNTkyMDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgbW9udGhzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDg2NDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgZGF5c1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAzNjAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgaG91cnNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gNjA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtaW51dGVzXCI7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgXCIgc2Vjb25kc1wiO1xufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcubGlrZWFibGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbGlrZWQgPSBmYWxzZVxuICAgIHZhciBpbWFnZVxuICAgIHZhciBuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpWzFdLmRhdGFzZXQubmFtZVxuICAgIC8vY29uc29sZS5sb2cobmFtZSlcbiAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcy5kYXRhLmxlbmd0aClcbiAgICBmb3IgKGkgPSAwIDsgaSA8IGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cobGlrZWRJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSArIFwiYXNkYWZzc3Nzc3Nzc3Nzc2FzZmFhYWFhc2Zkc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc2ZmXCIpXG4gICAgICAgIGlmIChsaWtlZEltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsaWtlZCA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZighbGlrZWQpIHtcbiAgICAgICAgaW1hZ2UgPSBhd2FpdCBsaWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICAgICBsaWtlZEltYWdlcy5kYXRhLnB1c2goaW1hZ2UuZGF0YSlcbiAgICAgICAgLyokKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXMnKSovXG4gICAgICAgIHRvZ2dsZUxpa2VkSGVhcnQodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgIGltYWdlID0gYXdhaXQgdW5saWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgdmFyIGluZGV4ID0gbGlrZWRJbWFnZXMuZGF0YS5pbmRleE9mKG5hbWUpXG4gICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEuc3BsaWNlKGluZGV4ICwgMSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxpa2VkSW1hZ2VzIHBvIGRlbGV0ZSBcIilcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICAgICAgLyokKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXMnKSovXG4gICAgICAgIHRvZ2dsZUxpa2VkSGVhcnQodGhpcylcblxuXG4gICAgfVxuXG5cbiAgICBpZiggaW1hZ2Uuc3RhdHVzICE9PSA1MDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3RvIGJ1ZGUgaW1hZ2VcIilcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5udW1iZXJMaWtlcycpLnRleHQoKGltYWdlLmRhdGFbXCJsaWtlc1wiXS5sZW5ndGgpLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgLy8gY29uc29sZS5sb2coaW1hZ2UpXG4gICAgLy92YXIgaW5kZXggPSBwdWJsaWNJbWFnZXMuaW5kZXhPZihpbWFnZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBpZihpbWFnZVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gcHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pIHtcbiAgICAgICAgICAgIHB1YmxpY0ltYWdlcy5kYXRhW2ldID0gaW1hZ2VcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy92YXIgcG9zID0gcHVibGljSW1hZ2VzLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiBlW1wib3JpZ2luYWxOYW1lXCJdOyB9KS5pbmRleE9mKCdzdGV2aWUnKTtcbiAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG59KVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUxpa2VkSGVhcnQoZWwpIHtcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFyJylcbiAgICAkKGVsKS50b2dnbGVDbGFzcygnZmFzJylcbn1cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aHVtYm5haWxJbWFnZVNoYXJlZCcgLCBhc3luYyAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmRhdGEoJ25hbWUnKSlcbiAgICAgICAgdmFyIGltYWdlTmFtZSA9ICQodGhpcykuZGF0YSgnbmFtZScpXG4gICAgICAgIG9wZW5XaW5kb3coaW1hZ2VOYW1lLCBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMpXG4gICAgICAgICQoJyNmdWxsc2NyZWVuUGljdHVyZScpLnByZXBlbmQoJzxkaXY+PC9kaXY+JylcblxufSlcblxuLyokKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoe1xuICAgIHNvdXJjZTogdXNlcm5hbWVzXG59KTsqL1xuXG52YXIgYXZhaWxhYmxlVGFncyA9IFtcbiAgICBcIkFjdGlvblNjcmlwdFwiLFxuICAgIFwiQXBwbGVTY3JpcHRcIixcbiAgICBcIkFzcFwiLFxuICAgIFwiQkFTSUNcIixcbiAgICBcIkNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ2xvanVyZVwiLFxuICAgIFwiQ09CT0xcIixcbiAgICBcIkNvbGRGdXNpb25cIixcbiAgICBcIkVybGFuZ1wiLFxuICAgIFwiRm9ydHJhblwiLFxuICAgIFwiR3Jvb3Z5XCIsXG4gICAgXCJIYXNrZWxsXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJMaXNwXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNjaGVtZVwiLFxuICAgIFwic3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzXCJcbiAgICBdXG4vKiQoIGZ1bmN0aW9uKCkge1xuXG4gICAgXTtcbiAgICAkKCBcIiNzZWFyY2hVc2VyUGhvdG9zXCIgKS5hdXRvY29tcGxldGUoXG4gICAgICAgIGF2YWlsYWJsZVRhZ3MpO1xufSApOyovXG5cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVXNlclBob3RvcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpPT57XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgaWYoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgcmVzdWx0ID0gdXNlcm5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAobmFtZSA9PiBgPGxpIGNsYXNzPVwicmVzdWx0VXNlckxpXCI+JHtuYW1lfTwvbGk+YClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cbiAgICAgICAgc2hvd1Jlc3VsdFVzZXJzKHJlc3VsdClcbn0pXG5cbmZ1bmN0aW9uIHNob3dSZXN1bHRVc2VycyhyZXN1bHRBcnJheSkge1xuXG4gICAgaWYgKHJlc3VsdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBodG1sID0gLyohcmVzdWx0QXJyYXkubGVuZ3RoID8gJycgOiovIHJlc3VsdEFycmF5LmpvaW4oJycpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRVc2Vyc1VsJykuaW5uZXJIVE1MID0gaHRtbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgPGxpIGNsYXNzPVwicmVzdWx0VXNlck5vTGlcIj5ObyBwdWJsaWMgcGhvdG9zIGZvciB0aGlzIHVzZXI8L2xpPmBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdFVzZXJzVWwnKS5pbm5lckhUTUwgPSBodG1sXG4gICAgfVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc3VsdFVzZXJMaScsIGFzeW5jICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gJCh0aGlzKS50ZXh0KClcbiAgICBhd2FpdCBzaG93VXNlclBob3Rvcyh1c2VybmFtZSlcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93VXNlclBob3Rvcyh1c2VybmFtZSkge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5odG1sKClcbiAgICB2YXIgaW1hZ2VzVG9SZW5kZXIgPSBbXVxuICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyA9IFtdXG4gICAgLy9pbWFnZXNUb1JlbmRlciA9IHB1YmxpY0ltYWdlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHB1YmxpY0ltYWdlcy5kYXRhW2ldW1widXNlcm5hbWVcIl0uaW5jbHVkZXModXNlcm5hbWUpKSB7XG4gICAgICAgICAgICBpbWFnZXNUb1JlbmRlci5wdXNoKHB1YmxpY0ltYWdlcy5kYXRhW2ldKVxuICAgICAgICAgICAgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgcmVuZGVySW1hZ2VzU2hhcmVkKGltYWdlc1RvUmVuZGVyKTtcbn1cblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbW1lbnRUb2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5jb21tZW50cycpLnRvZ2dsZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnLmNvbW1lbnRJbnB1dCcsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy50aHVtYm5haWxJbWFnZVNoYXJlZCcpLmRhdGEoJ25hbWUnKSlcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnRodW1ibmFpbEltYWdlU2hhcmVkJykuZGF0YSgnbmFtZScpXG4gICAgICAgIHZhciBjb21tZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIGF3YWl0IGFkZENvbW1lbnQoY29tbWVudCwgZmlsZW5hbWUpXG4gICAgICAgIHZhciBpbWFnZUluZm8gPSBhd2FpdCBnZXRJbWFnZUluZm8oZmlsZW5hbWUsIFwic2hhcmVcIilcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbW1lbnRWYWx1ZXMnKS5odG1sKCcnKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUluZm8pXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VJbmZvLmRhdGFbXCJjb21tZW50c1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbW1lbnRWYWx1ZXMnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJhY3R1YWxDb21tZW50VmFsdWVcIj48c3BhbiBjbGFzcz1cImNvbW1lbnRVc2VyXCI+JyArIGltYWdlSW5mby5kYXRhW1wiY29tbWVudHNcIl1baV1bXCJ1c2VyXCJdW1widXNlcm5hbWVcIl0gKyAnIDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjb21tZW50Q3JlYXRlZEF0XCI+JyArIHRpbWVTaW5jZShuZXcgRGF0ZSggaW1hZ2VJbmZvLmRhdGFbXCJjb21tZW50c1wiXVtpXVtcImNyZWF0ZWRBdFwiXSkpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbW1lbnRWYWx1ZVwiPicgKyBpbWFnZUluZm8uZGF0YVtcImNvbW1lbnRzXCJdW2ldW1widmFsdWVcIl0gKyAnIDwvZGl2PjwvZGl2PicpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vKiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29tbWVudHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGUoKVxufSkqLyIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+U3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpXG4gICAgICAuaW5kZXhPZihub3RBUmVnRXhwKHNlYXJjaFN0cmluZyksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9