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
            return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_13__.getImageInfo)(filename);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvY29tbWVudC1zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbImFkZENvbW1lbnQiLCJjb21tZW50IiwiZmlsZW5hbWUiLCJheGlvcyIsImhlYWRlcnMiLCJwdWJsaWNJbWFnZXMiLCJsaWtlZEltYWdlcyIsInB1YmxpY0ltYWdlc05hbWVzIiwiY3VycmVudFB1YmxpY0ltYWdlc05hbWVzIiwidXNlcm5hbWVzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsImZldGNoTGlrZWRJbWFnZXMiLCJmZXRjaFB1YmxpY0ltYWdlcyIsInJlbmRlckltYWdlc1NoYXJlZCIsImRhdGEiLCJodG1sIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsImhpZGUiLCJpbWFnZXMiLCJpY29uQ2xhc3MiLCJyZW5kZXJIZWxwIiwiYXBwZW5kIiwicmVhbHNyYyIsInNyYyIsImFsdCIsImwiLCJqIiwiY2hpbGRyZW4iLCJ0aW1lU2luY2UiLCJEYXRlIiwiZGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbCIsIm9uIiwibGlrZWQiLCJuYW1lIiwicGFyZW50Iiwic2libGluZ3MiLCJkYXRhc2V0IiwibGlrZVBob3RvIiwiaW1hZ2UiLCJ0b2dnbGVMaWtlZEhlYXJ0IiwidW5saWtlUGhvdG8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzdGF0dXMiLCJ0ZXh0IiwidG9TdHJpbmciLCJlbCIsInRvZ2dsZUNsYXNzIiwiaW1hZ2VOYW1lIiwib3BlbldpbmRvdyIsInByZXBlbmQiLCJhdmFpbGFibGVUYWdzIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlc3VsdCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJzaG93UmVzdWx0VXNlcnMiLCJyZXN1bHRBcnJheSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJzaG93VXNlclBob3RvcyIsImltYWdlc1RvUmVuZGVyIiwidG9nZ2xlIiwiZXZlbnQiLCJrZXlDb2RlIiwiZ2V0SW1hZ2VJbmZvIiwiaW1hZ2VJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBZUEsVUFBdEI7QUFBQTtBQUFBOzs7d0VBQU8saUJBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLGlEQUFBLENBQVcsa0JBQWtCRCxRQUE3QixFQUF3QztBQUM3Qyx5QkFBV0Q7QUFEa0MsYUFBeEMsRUFHVDtBQUNJRyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFg7QUFEYixhQUhTLENBRFY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFxQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxzRUFBc0U7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLGtIQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFekU7QUFDQTtBQUNBLEdBQUcsMkVBQTJFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzaGFyZWRQaG90b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDb21tZW50KGNvbW1lbnQsIGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoJy9hZGQvY29tbWVudC8nICsgZmlsZW5hbWUgLCB7XG4gICAgICAgICAgICBcImNvbW1lbnRcIjogY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59IiwiaW1wb3J0IHtcbiAgICBmZXRjaExhdGVzdEltYWdlcyxcbiAgICBmZXRjaE93bmVkSW1hZ2VzLFxuICAgIGRlbGV0ZUltYWdlLFxuICAgIGZldGNoSW1hZ2VzLFxuICAgIGdldEltYWdlSW5mbyxcbiAgICBtYWtlUHVibGljLCBtYWtlUHJpdmF0ZSwgZmV0Y2hQdWJsaWNJbWFnZXMsIGxpa2VQaG90bywgZmV0Y2hMaWtlZEltYWdlcywgdW5saWtlUGhvdG9cbn0gZnJvbSBcIi4vc2VydmljZXMvaW1hZ2VzLXNlcnZpY2VcIjtcblxuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge2ZldGNoQWxidW1JbWFnZXN9IGZyb20gXCIuL3NlcnZpY2VzL2FsYnVtLXNlcnZpY2VzXCI7XG5pbXBvcnQge29wZW5XaW5kb3csIHNldEhvdmVyaW5nT3ZlckltYWdlcyxuZXh0SW1hZ2UsZmluZEN1cnJlbnRJbWFnZSxwcmV2aW91c0ltYWdlLGNsb3NlSW1hZ2V9IGZyb20gXCIuL21haW5QYWdlLmpzXCI7XG5pbXBvcnQge2FkZENvbW1lbnR9IGZyb20gXCJAL3NlcnZpY2VzL2NvbW1lbnQtc2VydmljZXNcIjtcbi8vcmVxdWlyZSgnYm9vdHN0cmFwJylcblxudmFyIHB1YmxpY0ltYWdlcyA9IFtdXG52YXIgbGlrZWRJbWFnZXMgPSBbXVxudmFyIHB1YmxpY0ltYWdlc05hbWVzID0gW11cbnZhciBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMgPSBbXVxudmFyIHVzZXJuYW1lcyA9IFtdO1xuJChkb2N1bWVudCkucmVhZHkoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgJCgnI3VwbG9hZEljb24nKS5yZW1vdmUoKVxuICAgICQoJyNzZWFyY2hVc2VyTGknKS5zaG93KClcbiAgICBjb25zb2xlLmxvZyhcImFzZGFmc2ZzZGZzZGZzZGZzZnNkZnNkZnNkZlwiKVxuICAgLy8gcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKVxuICAgIGxpa2VkSW1hZ2VzID0gYXdhaXQgZmV0Y2hMaWtlZEltYWdlcygpXG5cbiAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkdSBtb2plIGxpa2VkIGltYWdlc1wiKVxuICAgIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgIGNvbnNvbGUubG9nKFwidG90byBidWR1IHB1YmxpYyBpbWFnZXNcIilcbiAgICBwdWJsaWNJbWFnZXMgID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKVxuICAgIGNvbnNvbGUubG9nKHB1YmxpY0ltYWdlcylcbiAgICBhd2FpdCByZW5kZXJJbWFnZXNTaGFyZWQocHVibGljSW1hZ2VzLmRhdGEpXG4gICAgJCgnI3Bob3RvLWxpc3QnKS5odG1sKCcnKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHVibGljSW1hZ2VzTmFtZXNbaV0gPSBwdWJsaWNJbWFnZXMuZGF0YVtpXVsnb3JpZ2luYWxOYW1lJ11cbiAgICAgICAgaWYoISh1c2VybmFtZXMuaW5jbHVkZXMocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXSkpKSB7XG4gICAgICAgICAgICB1c2VybmFtZXMucHVzaChwdWJsaWNJbWFnZXMuZGF0YVtpXVtcInVzZXJuYW1lXCJdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcyA9IHB1YmxpY0ltYWdlc05hbWVzXG5cbiAgICAkKCcuY29tbWVudHMnKS5oaWRlKClcbn0pXG5cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckltYWdlc1NoYXJlZChpbWFnZXMpIHtcblxuXG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmh0bWwoJycpO1xuICAgIHZhciBpY29uQ2xhc3MgPSAnZmFyJ1xuICAgIC8vcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKTtcblxuXG4gICAgLy8gb3duZWRJbWFnZXMgPSBhd2FpdCBmZXRjaE93bmVkSW1hZ2VzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXNOYW1lcyArIFwidG90byBqZSBvd25lZEltYWdlc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuXG5cbiAgICAgICAgLyoqIGZvciBsYXp5IGxvYWRpbmcgKi9cbiAgICAgICAgcmVuZGVySGVscChpICwgaW1hZ2VzKVxuICAgICAgICBpZiAoaSA+IDMwKSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBpbWFnZXNbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIHNyYzogJy9wdWJsaWMvcGhvdG8vJyArIGltYWdlc1tpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogaW1hZ2VzW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsaWtlZEltYWdlcy5kYXRhLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICBpZiAobGlrZWRJbWFnZXMuZGF0YVtsXVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gaW1hZ2VzW2ldW1wib3JpZ2luYWxOYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcydcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRodW1ibmFpbEljb25zU2hhcmVkXCIgPjxzcGFuIGNsYXNzPVwiY29tbWVudFRvZ2dsZXJcIj5jb21tZW50czwvc3Bhbj48c3BhbiBjbGFzcz1cIm51bWJlckxpa2VzIG1yLTJcIj4nICsgaW1hZ2VzW2ldWydsaWtlcyddLmxlbmd0aCArICc8L3NwYW4+PGkgY2xhc3M9XCInICsgaWNvbkNsYXNzICsgJyBmYS1oZWFydCAgbGlrZWFibGVcIiA+PC9pPjwvZGl2PicpXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjxkaXYgY2xhc3M9XCJjb21tZW50VmFsdWVzXCI+PC9kaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb21tZW50SW5wdXRcIiBwbGFjZWhvbGRlcj1cImluc2VydCBjb21tZW50XCI+PC9kaXY+JylcbiAgICAgICAgZm9yKHZhciBqID0gMCA7IGogPCBpbWFnZXNbaV1bXCJjb21tZW50c1wiXS5sZW5ndGggOyBqKyspXG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5jaGlsZHJlbignLmNvbW1lbnRzJykuY2hpbGRyZW4oJy5jb21tZW50VmFsdWVzJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYWN0dWFsQ29tbWVudFZhbHVlXCI+PHNwYW4gY2xhc3M9XCJjb21tZW50VXNlclwiPicgKyBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcInVzZXJuYW1lXCJdICsgJyA8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb21tZW50Q3JlYXRlZEF0XCI+ICcgKyAgdGltZVNpbmNlKG5ldyBEYXRlKCBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcImNyZWF0ZWRBdFwiXSkpICsgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbW1lbnRWYWx1ZVwiPicgKyBpbWFnZXNbaV1bXCJjb21tZW50c1wiXVtqXVtcInZhbHVlXCJdICsgJzwvZGl2PjwvZGl2PicpXG5cbiAgICAgICAgaWNvbkNsYXNzID0gJ2ZhcidcblxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJIZWxwKGksIGltYWdlcykge1xuICAgICQoJyNwaG90b0xpc3RTaGFyZWQnKS5hcHBlbmQoJzxkaXYgaWQ9JyArIGkgKyAnc2hhcmVkJyArICcgY2xhc3M9XCJ0aHVtYm5haWxEaXZTaGFyZWRcIj4gPC9kaXY+JylcbiAgICBpZiAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddICE9PSBudWxsKSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cInB1Ymxpc2hEYXRlRGl2XCI+JysgdGltZVNpbmNlKG5ldyBEYXRlKCAoaW1hZ2VzW2ldWydwdWJsaXNoZWRBdCddKSkpICArICc8L2Rpdj48L2Rpdj4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwdWJsaWNJbmZvRGl2XCI+PGRpdiBjbGFzcz1cIm93bmVyTmFtZURpdlwiPicrIGltYWdlc1tpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PC9kaXY+JylcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdGltZVNpbmNlKGRhdGUpIHtcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIGRhdGUpIC8gMTAwMCk7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzE1MzYwMDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIHllYXJzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtb250aHNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBkYXlzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDM2MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBob3Vyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA2MDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArIFwiIG1pbnV0ZXNcIjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcykgKyBcIiBzZWNvbmRzXCI7XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5saWtlYWJsZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBsaWtlZCA9IGZhbHNlXG4gICAgdmFyIGltYWdlXG4gICAgdmFyIG5hbWUgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKClbMV0uZGF0YXNldC5uYW1lXG4gICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoKVxuICAgIGZvciAoaSA9IDAgOyBpIDwgbGlrZWRJbWFnZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdICsgXCJhc2RhZnNzc3Nzc3Nzc3NzYXNmYWFhYWFzZmRzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzZmZcIilcbiAgICAgICAgaWYgKGxpa2VkSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGxpa2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFsaWtlZCkge1xuICAgICAgICBpbWFnZSA9IGF3YWl0IGxpa2VQaG90byhuYW1lKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEucHVzaChpbWFnZS5kYXRhKVxuICAgICAgICAvKiQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcicpXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcycpKi9cbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCh0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICAgaW1hZ2UgPSBhd2FpdCB1bmxpa2VQaG90byhuYW1lKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICB2YXIgaW5kZXggPSBsaWtlZEltYWdlcy5kYXRhLmluZGV4T2YobmFtZSlcbiAgICAgICAgbGlrZWRJbWFnZXMuZGF0YS5zcGxpY2UoaW5kZXggLCAxKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibGlrZWRJbWFnZXMgcG8gZGVsZXRlIFwiKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgICAgICAvKiQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcicpXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcycpKi9cbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCh0aGlzKVxuXG5cbiAgICB9XG5cblxuICAgIGlmKCBpbWFnZS5zdGF0dXMgIT09IDUwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRvdG8gYnVkZSBpbWFnZVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm51bWJlckxpa2VzJykudGV4dCgoaW1hZ2UuZGF0YVtcImxpa2VzXCJdLmxlbmd0aCkudG9TdHJpbmcoKSlcbiAgICB9XG4gICAvLyBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICAvL3ZhciBpbmRleCA9IHB1YmxpY0ltYWdlcy5pbmRleE9mKGltYWdlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGlmKGltYWdlW1wib3JpZ2luYWxOYW1lXCJdID09PSBwdWJsaWNJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSkge1xuICAgICAgICAgICAgcHVibGljSW1hZ2VzLmRhdGFbaV0gPSBpbWFnZVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3ZhciBwb3MgPSBwdWJsaWNJbWFnZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGVbXCJvcmlnaW5hbE5hbWVcIl07IH0pLmluZGV4T2YoJ3N0ZXZpZScpO1xuICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKHB1YmxpY0ltYWdlcylcbn0pXG5cblxuZnVuY3Rpb24gdG9nZ2xlTGlrZWRIZWFydChlbCkge1xuICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdmYXMnKVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRodW1ibmFpbEltYWdlU2hhcmVkJyAsIGFzeW5jICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuZGF0YSgnbmFtZScpKVxuICAgICAgICB2YXIgaW1hZ2VOYW1lID0gJCh0aGlzKS5kYXRhKCduYW1lJylcbiAgICAgICAgb3BlbldpbmRvdyhpbWFnZU5hbWUsIGN1cnJlbnRQdWJsaWNJbWFnZXNOYW1lcylcbiAgICAgICAgJCgnI2Z1bGxzY3JlZW5QaWN0dXJlJykucHJlcGVuZCgnPGRpdj48L2Rpdj4nKVxuXG59KVxuXG4vKiQoIFwiI3NlYXJjaFVzZXJQaG90b3NcIiApLmF1dG9jb21wbGV0ZSh7XG4gICAgc291cmNlOiB1c2VybmFtZXNcbn0pOyovXG5cbnZhciBhdmFpbGFibGVUYWdzID0gW1xuICAgIFwiQWN0aW9uU2NyaXB0XCIsXG4gICAgXCJBcHBsZVNjcmlwdFwiLFxuICAgIFwiQXNwXCIsXG4gICAgXCJCQVNJQ1wiLFxuICAgIFwiQ1wiLFxuICAgIFwiQysrXCIsXG4gICAgXCJDbG9qdXJlXCIsXG4gICAgXCJDT0JPTFwiLFxuICAgIFwiQ29sZEZ1c2lvblwiLFxuICAgIFwiRXJsYW5nXCIsXG4gICAgXCJGb3J0cmFuXCIsXG4gICAgXCJHcm9vdnlcIixcbiAgICBcIkhhc2tlbGxcIixcbiAgICBcIkphdmFcIixcbiAgICBcIkphdmFTY3JpcHRcIixcbiAgICBcIkxpc3BcIixcbiAgICBcIlBlcmxcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUHl0aG9uXCIsXG4gICAgXCJSdWJ5XCIsXG4gICAgXCJTY2FsYVwiLFxuICAgIFwiU2NoZW1lXCIsXG4gICAgXCJzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NcIlxuICAgIF1cbi8qJCggZnVuY3Rpb24oKSB7XG5cbiAgICBdO1xuICAgICQoIFwiI3NlYXJjaFVzZXJQaG90b3NcIiApLmF1dG9jb21wbGV0ZShcbiAgICAgICAgYXZhaWxhYmxlVGFncyk7XG59ICk7Ki9cblxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hVc2VyUGhvdG9zJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSk9PntcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBpZihlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICByZXN1bHQgPSB1c2VybmFtZXMuZmlsdGVyKG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChuYW1lID0+IGA8bGkgY2xhc3M9XCJyZXN1bHRVc2VyTGlcIj4ke25hbWV9PC9saT5gKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgfVxuICAgICAgICBzaG93UmVzdWx0VXNlcnMocmVzdWx0KVxufSlcblxuZnVuY3Rpb24gc2hvd1Jlc3VsdFVzZXJzKHJlc3VsdEFycmF5KSB7XG5cbiAgICBpZiAocmVzdWx0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAvKiFyZXN1bHRBcnJheS5sZW5ndGggPyAnJyA6Ki8gcmVzdWx0QXJyYXkuam9pbignJylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdFVzZXJzVWwnKS5pbm5lckhUTUwgPSBodG1sXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGA8bGkgY2xhc3M9XCJyZXN1bHRVc2VyTm9MaVwiPk5vIHB1YmxpYyBwaG90b3MgZm9yIHRoaXMgdXNlcjwvbGk+YFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0VXNlcnNVbCcpLmlubmVySFRNTCA9IGh0bWxcbiAgICB9XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVzdWx0VXNlckxpJywgYXN5bmMgIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlcm5hbWUgPSAkKHRoaXMpLnRleHQoKVxuICAgIGF3YWl0IHNob3dVc2VyUGhvdG9zKHVzZXJuYW1lKVxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dVc2VyUGhvdG9zKHVzZXJuYW1lKSB7XG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmh0bWwoKVxuICAgIHZhciBpbWFnZXNUb1JlbmRlciA9IFtdXG4gICAgY3VycmVudFB1YmxpY0ltYWdlc05hbWVzID0gW11cbiAgICAvL2ltYWdlc1RvUmVuZGVyID0gcHVibGljSW1hZ2VzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwdWJsaWNJbWFnZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHVibGljSW1hZ2VzLmRhdGFbaV1bXCJ1c2VybmFtZVwiXS5pbmNsdWRlcyh1c2VybmFtZSkpIHtcbiAgICAgICAgICAgIGltYWdlc1RvUmVuZGVyLnB1c2gocHVibGljSW1hZ2VzLmRhdGFbaV0pXG4gICAgICAgICAgICBjdXJyZW50UHVibGljSW1hZ2VzTmFtZXMucHVzaChwdWJsaWNJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCByZW5kZXJJbWFnZXNTaGFyZWQoaW1hZ2VzVG9SZW5kZXIpO1xufVxuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29tbWVudFRvZ2dsZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmNvbW1lbnRzJykudG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcuY29tbWVudElucHV0JywgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnRodW1ibmFpbEltYWdlU2hhcmVkJykuZGF0YSgnbmFtZScpKVxuICAgICAgICB2YXIgZmlsZW5hbWUgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcudGh1bWJuYWlsSW1hZ2VTaGFyZWQnKS5kYXRhKCduYW1lJylcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgYXdhaXQgYWRkQ29tbWVudChjb21tZW50LCBmaWxlbmFtZSlcbiAgICAgICAgdmFyIGltYWdlSW5mbyA9IGF3YWl0IGdldEltYWdlSW5mbyhmaWxlbmFtZSlcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbW1lbnRWYWx1ZXMnKS5odG1sKCcnKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUluZm8pXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VJbmZvLmRhdGFbXCJjb21tZW50c1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbW1lbnRWYWx1ZXMnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJhY3R1YWxDb21tZW50VmFsdWVcIj48c3BhbiBjbGFzcz1cImNvbW1lbnRVc2VyXCI+JyArIGltYWdlSW5mby5kYXRhW1wiY29tbWVudHNcIl1baV1bXCJ1c2VyXCJdW1widXNlcm5hbWVcIl0gKyAnIDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjb21tZW50Q3JlYXRlZEF0XCI+JyArIHRpbWVTaW5jZShuZXcgRGF0ZSggaW1hZ2VJbmZvLmRhdGFbXCJjb21tZW50c1wiXVtpXVtcImNyZWF0ZWRBdFwiXSkpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbW1lbnRWYWx1ZVwiPicgKyBpbWFnZUluZm8uZGF0YVtcImNvbW1lbnRzXCJdW2ldW1widmFsdWVcIl0gKyAnIDwvZGl2PjwvZGl2PicpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vKiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29tbWVudHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGUoKVxufSkqLyIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+U3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpXG4gICAgICAuaW5kZXhPZihub3RBUmVnRXhwKHNlYXJjaFN0cmluZyksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9