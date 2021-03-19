(self["webpackChunk"] = self["webpackChunk"] || []).push([["sharedPhotos"],{

/***/ "./assets/sharedPhotos.js":
/*!********************************!*\
  !*** ./assets/sharedPhotos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/images-service */ "./assets/services/images-service.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_album_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/album-services */ "./assets/services/album-services.js");
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mainPage.js */ "./assets/mainPage.js");









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





 //require('bootstrap')

var publicImages = [];
var likedImages = [];
var publicImagesNames = [];
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var i;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jquery__WEBPACK_IMPORTED_MODULE_10___default()('#uploadIcon').remove();
          console.log("asdafsfsdfsdfsdfsfsdfsdfsdf"); // publicImages = await fetchPublicImages()

          _context.next = 4;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_8__.fetchLikedImages)();

        case 4:
          likedImages = _context.sent;
          console.log(publicImages);
          console.log("toto budu moje liked images");
          console.log(likedImages);
          _context.next = 10;
          return renderImagesShared();

        case 10:
          jquery__WEBPACK_IMPORTED_MODULE_10___default()('#photo-list').html('');

          for (i = 0; i < publicImages.data.length; i++) {
            publicImagesNames[i] = publicImages.data[i]['originalName'];
          }

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

function renderImagesShared() {
  return _renderImagesShared.apply(this, arguments);
}

function _renderImagesShared() {
  _renderImagesShared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var iconClass, i, l;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            jquery__WEBPACK_IMPORTED_MODULE_10___default()('#photoListShared').html('');
            iconClass = 'far';
            _context4.next = 4;
            return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_8__.fetchPublicImages)();

          case 4:
            publicImages = _context4.sent;
            // ownedImages = await fetchOwnedImages();
            console.log(publicImagesNames + "toto je ownedImages");
            i = 0;

          case 7:
            if (!(i < publicImages.data.length)) {
              _context4.next = 23;
              break;
            }

            /** for lazy loading */
            renderHelp(i);

            if (i > 30) {
              jquery__WEBPACK_IMPORTED_MODULE_10___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_10___default()('<img>', {
                realsrc: '/public/photo/' + publicImages.data[i]['originalName'],
                src: '',
                alt: '',
                'data-name': publicImages.data[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_10___default()('#' + i + 'shared').append(jquery__WEBPACK_IMPORTED_MODULE_10___default()('<img>', {
                realsrc: '/public/photo/' + publicImages.data[i]['originalName'],
                src: '/public/photo/' + publicImages.data[i]['originalName'],
                alt: '',
                'data-name': publicImages.data[i]['originalName'],
                "class": 'thumbnailImageShared'
              }));
            }

            l = 0;

          case 11:
            if (!(l < likedImages.data.length)) {
              _context4.next = 18;
              break;
            }

            if (!(likedImages.data[l]["originalName"] === publicImages.data[i]["originalName"])) {
              _context4.next = 15;
              break;
            }

            iconClass = 'fas';
            return _context4.abrupt("break", 18);

          case 15:
            l++;
            _context4.next = 11;
            break;

          case 18:
            jquery__WEBPACK_IMPORTED_MODULE_10___default()('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="numberLikes mr-2">' + publicImages.data[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>');
            iconClass = 'far';

          case 20:
            i++;
            _context4.next = 7;
            break;

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _renderImagesShared.apply(this, arguments);
}

function renderHelp(i) {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('#photoListShared').append('<div id=' + i + 'shared' + ' class="thumbnailDivShared"> </div>');

  if (publicImages.data[i]['publishedAt'] !== null) {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + publicImages.data[i]['username'] + '</div><div class="publishDateDiv">' + timeSince(new Date(publicImages.data[i]['publishedAt'])) + '</div></div>');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">' + publicImages.data[i]['username'] + '</div></div>');
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

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.likeable', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var liked, image, name, index, i;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).toggleClass('far');
          jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).toggleClass('fas');
          liked = false;
          name = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).parent().siblings()[1].dataset.name; //console.log(name)

          console.log(likedImages.data.length);

          for (i = 0; i < likedImages.data.length; i++) {
            console.log(likedImages.data[i]["originalName"] + "asdafsssssssssssasfaaaaasfdsssssssssssssssssssssssssff");

            if (likedImages.data[i]["originalName"] === name) {
              liked = true;
            }
          }

          if (liked) {
            _context2.next = 14;
            break;
          }

          _context2.next = 9;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_8__.likePhoto)(name);

        case 9:
          image = _context2.sent;
          //console.log(image)
          //console.log(likedImages)
          likedImages.data.push(image.data);
          toggleLikedHeart();
          _context2.next = 20;
          break;

        case 14:
          _context2.next = 16;
          return (0,_services_images_service__WEBPACK_IMPORTED_MODULE_8__.unlikePhoto)(name);

        case 16:
          image = _context2.sent;
          //console.log(image)
          index = likedImages.data.indexOf(name);
          likedImages.data.splice(index, 1); //console.log("likedImages po delete ")
          //console.log(likedImages)

          toggleLikedHeart();

        case 20:
          if (image.status !== 500) {
            console.log("toto bude image");
            console.log(image);
            jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).siblings().text(image.data["likes"].length.toString());
          } // console.log(image)
          //var index = publicImages.indexOf(image)


          for (i = 0; i < publicImages.data.length; i++) {
            if (image["originalName"] === publicImages.data[i]["originalName"]) {
              publicImages.data[i] = image;
            }
          } //var pos = publicImages.map(function(e) { return e["originalName"]; }).indexOf('stevie');
          // console.log(index);


          console.log(publicImages);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

function toggleLikedHeart() {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).toggleClass('far');
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).toggleClass('fas');
}

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.thumbnailImageShared', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var imageName;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).data('name'));
          imageName = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).data('name');
          (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_12__.openWindow)(imageName, publicImagesNames);
          jquery__WEBPACK_IMPORTED_MODULE_10___default()('#fullscreenPicture').prepend('<div></div>');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));

/***/ })

},
0,[["./assets/sharedPhotos.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861","vendors-node_modules_axios_index_js-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_-65cea7","vendors-node_modules_dropzone_dist_dropzone_js-node_modules_dropzone_dist_dropzone_css-node_m-ebf025","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_ma-594b72"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hhcmVkUGhvdG9zLmpzIl0sIm5hbWVzIjpbInB1YmxpY0ltYWdlcyIsImxpa2VkSW1hZ2VzIiwicHVibGljSW1hZ2VzTmFtZXMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaExpa2VkSW1hZ2VzIiwicmVuZGVySW1hZ2VzU2hhcmVkIiwiaHRtbCIsImkiLCJkYXRhIiwibGVuZ3RoIiwiaWNvbkNsYXNzIiwiZmV0Y2hQdWJsaWNJbWFnZXMiLCJyZW5kZXJIZWxwIiwiYXBwZW5kIiwicmVhbHNyYyIsInNyYyIsImFsdCIsImwiLCJ0aW1lU2luY2UiLCJEYXRlIiwiZGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJsaWtlZCIsIm5hbWUiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImRhdGFzZXQiLCJsaWtlUGhvdG8iLCJpbWFnZSIsInB1c2giLCJ0b2dnbGVMaWtlZEhlYXJ0IiwidW5saWtlUGhvdG8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzdGF0dXMiLCJ0ZXh0IiwidG9TdHJpbmciLCJpbWFnZU5hbWUiLCJvcGVuV2luZG93IiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBQyw4Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWix1RUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RGLHdEQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxNQUFqQjtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksNkJB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QUFaLENBQWUsT0FBZixFQUF3Qix1QkFBeEIsdUVBQWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQ3ZCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUwsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLE1BQWIsQ0FBWjtBQUNJbUMsbUJBRnNDLEdBRTFCN0MsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLE1BQWIsQ0FGMEI7QUFHMUNvQyxtRUFBVSxDQUFDRCxTQUFELEVBQVk5QyxpQkFBWixDQUFWO0FBQ0FDLHdEQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QitDLE9BQXhCLENBQWdDLGFBQWhDOztBQUowQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsRCxJIiwiZmlsZSI6InNoYXJlZFBob3Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgZmV0Y2hMYXRlc3RJbWFnZXMsXG4gICAgZmV0Y2hPd25lZEltYWdlcyxcbiAgICBkZWxldGVJbWFnZSxcbiAgICBmZXRjaEltYWdlcyxcbiAgICBnZXRJbWFnZUluZm8sXG4gICAgbWFrZVB1YmxpYywgbWFrZVByaXZhdGUsIGZldGNoUHVibGljSW1hZ2VzLCBsaWtlUGhvdG8sIGZldGNoTGlrZWRJbWFnZXMsIHVubGlrZVBob3RvXG59IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy1zZXJ2aWNlXCI7XG5cblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtmZXRjaEFsYnVtSW1hZ2VzfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbGJ1bS1zZXJ2aWNlc1wiO1xuaW1wb3J0IHtvcGVuV2luZG93LCBzZXRIb3ZlcmluZ092ZXJJbWFnZXMsbmV4dEltYWdlLGZpbmRDdXJyZW50SW1hZ2UscHJldmlvdXNJbWFnZSxjbG9zZUltYWdlfSBmcm9tIFwiLi9tYWluUGFnZS5qc1wiO1xuLy9yZXF1aXJlKCdib290c3RyYXAnKVxuXG52YXIgcHVibGljSW1hZ2VzID0gW11cbnZhciBsaWtlZEltYWdlcyA9IFtdXG52YXIgcHVibGljSW1hZ2VzTmFtZXMgPSBbXVxuJChkb2N1bWVudCkucmVhZHkoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgJCgnI3VwbG9hZEljb24nKS5yZW1vdmUoKVxuICAgIGNvbnNvbGUubG9nKFwiYXNkYWZzZnNkZnNkZnNkZnNmc2Rmc2Rmc2RmXCIpXG4gICAvLyBwdWJsaWNJbWFnZXMgPSBhd2FpdCBmZXRjaFB1YmxpY0ltYWdlcygpXG4gICAgbGlrZWRJbWFnZXMgPSBhd2FpdCBmZXRjaExpa2VkSW1hZ2VzKClcbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXMpXG4gICAgY29uc29sZS5sb2coXCJ0b3RvIGJ1ZHUgbW9qZSBsaWtlZCBpbWFnZXNcIilcbiAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICBhd2FpdCByZW5kZXJJbWFnZXNTaGFyZWQoKVxuICAgICQoJyNwaG90by1saXN0JykuaHRtbCgnJylcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB1YmxpY0ltYWdlc05hbWVzW2ldID0gcHVibGljSW1hZ2VzLmRhdGFbaV1bJ29yaWdpbmFsTmFtZSddXG4gICAgfVxufSlcblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySW1hZ2VzU2hhcmVkKCkge1xuXG5cbiAgICAkKCcjcGhvdG9MaXN0U2hhcmVkJykuaHRtbCgnJyk7XG4gICAgdmFyIGljb25DbGFzcyA9ICdmYXInXG4gICAgcHVibGljSW1hZ2VzID0gYXdhaXQgZmV0Y2hQdWJsaWNJbWFnZXMoKTtcblxuXG4gICAgLy8gb3duZWRJbWFnZXMgPSBhd2FpdCBmZXRjaE93bmVkSW1hZ2VzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJsaWNJbWFnZXNOYW1lcyArIFwidG90byBqZSBvd25lZEltYWdlc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1YmxpY0ltYWdlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cblxuICAgICAgICAvKiogZm9yIGxhenkgbG9hZGluZyAqL1xuICAgICAgICByZW5kZXJIZWxwKGkpXG4gICAgICAgIGlmIChpID4gMzApIHtcbiAgICAgICAgICAgICQoJyMnICsgaSArICdzaGFyZWQnKS5hcHBlbmQoJCgnPGltZz4nLCB7XG4gICAgICAgICAgICAgICAgcmVhbHNyYzogJy9wdWJsaWMvcGhvdG8vJyArIHB1YmxpY0ltYWdlcy5kYXRhW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBzcmM6ICcnLFxuICAgICAgICAgICAgICAgIGFsdDogJycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IHB1YmxpY0ltYWdlcy5kYXRhW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCQoJzxpbWc+Jywge1xuICAgICAgICAgICAgICAgIHJlYWxzcmM6ICcvcHVibGljL3Bob3RvLycgKyBwdWJsaWNJbWFnZXMuZGF0YVtpXVsnb3JpZ2luYWxOYW1lJ10sXG4gICAgICAgICAgICAgICAgc3JjOiAnL3B1YmxpYy9waG90by8nICsgcHVibGljSW1hZ2VzLmRhdGFbaV1bJ29yaWdpbmFsTmFtZSddLFxuICAgICAgICAgICAgICAgIGFsdDogJycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IHB1YmxpY0ltYWdlcy5kYXRhW2ldWydvcmlnaW5hbE5hbWUnXSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RodW1ibmFpbEltYWdlU2hhcmVkJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsaWtlZEltYWdlcy5kYXRhLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICBpZiAobGlrZWRJbWFnZXMuZGF0YVtsXVtcIm9yaWdpbmFsTmFtZVwiXSA9PT0gcHVibGljSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0pIHtcbiAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSAnZmFzJ1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsSWNvbnNTaGFyZWRcIiA+PHNwYW4gY2xhc3M9XCJudW1iZXJMaWtlcyBtci0yXCI+JyArIHB1YmxpY0ltYWdlcy5kYXRhW2ldWydsaWtlcyddLmxlbmd0aCArICc8L3NwYW4+PGkgY2xhc3M9XCInICsgaWNvbkNsYXNzICsgJyBmYS1oZWFydCAgbGlrZWFibGVcIiA+PC9pPjwvZGl2PicpXG4gICAgICAgIGljb25DbGFzcyA9ICdmYXInXG5cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVySGVscChpKSB7XG4gICAgJCgnI3Bob3RvTGlzdFNoYXJlZCcpLmFwcGVuZCgnPGRpdiBpZD0nICsgaSArICdzaGFyZWQnICsgJyBjbGFzcz1cInRodW1ibmFpbERpdlNoYXJlZFwiPiA8L2Rpdj4nKVxuICAgIGlmIChwdWJsaWNJbWFnZXMuZGF0YVtpXVsncHVibGlzaGVkQXQnXSAhPT0gbnVsbCkge1xuICAgICAgICAkKCcjJyArIGkgKyAnc2hhcmVkJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHVibGljSW5mb0RpdlwiPjxkaXYgY2xhc3M9XCJvd25lck5hbWVEaXZcIj4nKyBwdWJsaWNJbWFnZXMuZGF0YVtpXVsndXNlcm5hbWUnXSAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cInB1Ymxpc2hEYXRlRGl2XCI+JysgdGltZVNpbmNlKG5ldyBEYXRlKCAocHVibGljSW1hZ2VzLmRhdGFbaV1bJ3B1Ymxpc2hlZEF0J10pKSkgICsgJzwvZGl2PjwvZGl2PicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnIycgKyBpICsgJ3NoYXJlZCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInB1YmxpY0luZm9EaXZcIj48ZGl2IGNsYXNzPVwib3duZXJOYW1lRGl2XCI+JysgcHVibGljSW1hZ2VzLmRhdGFbaV1bJ3VzZXJuYW1lJ10gICsgJzwvZGl2PjwvZGl2PicpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHRpbWVTaW5jZShkYXRlKSB7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiB5ZWFyc1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAyNTkyMDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgbW9udGhzXCI7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDg2NDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgZGF5c1wiO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAzNjAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgXCIgaG91cnNcIjtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gNjA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyBcIiBtaW51dGVzXCI7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgXCIgc2Vjb25kc1wiO1xufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcubGlrZWFibGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmFyJylcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXMnKVxuICAgIHZhciBsaWtlZCA9IGZhbHNlXG4gICAgdmFyIGltYWdlXG4gICAgdmFyIG5hbWUgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKClbMV0uZGF0YXNldC5uYW1lXG4gICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKGxpa2VkSW1hZ2VzLmRhdGEubGVuZ3RoKVxuICAgIGZvciAoaSA9IDAgOyBpIDwgbGlrZWRJbWFnZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhsaWtlZEltYWdlcy5kYXRhW2ldW1wib3JpZ2luYWxOYW1lXCJdICsgXCJhc2RhZnNzc3Nzc3Nzc3NzYXNmYWFhYWFzZmRzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzZmZcIilcbiAgICAgICAgaWYgKGxpa2VkSW1hZ2VzLmRhdGFbaV1bXCJvcmlnaW5hbE5hbWVcIl0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGxpa2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFsaWtlZCkge1xuICAgICAgICBpbWFnZSA9IGF3YWl0IGxpa2VQaG90byhuYW1lKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2VkSW1hZ2VzKVxuICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEucHVzaChpbWFnZS5kYXRhKVxuICAgICAgICB0b2dnbGVMaWtlZEhlYXJ0KClcbiAgICB9IGVsc2Uge1xuICAgICAgIGltYWdlID0gYXdhaXQgdW5saWtlUGhvdG8obmFtZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZSlcbiAgICAgICAgdmFyIGluZGV4ID0gbGlrZWRJbWFnZXMuZGF0YS5pbmRleE9mKG5hbWUpXG4gICAgICAgIGxpa2VkSW1hZ2VzLmRhdGEuc3BsaWNlKGluZGV4ICwgMSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxpa2VkSW1hZ2VzIHBvIGRlbGV0ZSBcIilcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlZEltYWdlcylcbiAgICAgICAgdG9nZ2xlTGlrZWRIZWFydCgpXG5cblxuICAgIH1cblxuXG4gICAgaWYoIGltYWdlLnN0YXR1cyAhPT0gNTAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG90byBidWRlIGltYWdlXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkudGV4dCgoaW1hZ2UuZGF0YVtcImxpa2VzXCJdLmxlbmd0aCkudG9TdHJpbmcoKSlcbiAgICB9XG4gICAvLyBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICAvL3ZhciBpbmRleCA9IHB1YmxpY0ltYWdlcy5pbmRleE9mKGltYWdlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVibGljSW1hZ2VzLmRhdGEubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGlmKGltYWdlW1wib3JpZ2luYWxOYW1lXCJdID09PSBwdWJsaWNJbWFnZXMuZGF0YVtpXVtcIm9yaWdpbmFsTmFtZVwiXSkge1xuICAgICAgICAgICAgcHVibGljSW1hZ2VzLmRhdGFbaV0gPSBpbWFnZVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3ZhciBwb3MgPSBwdWJsaWNJbWFnZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGVbXCJvcmlnaW5hbE5hbWVcIl07IH0pLmluZGV4T2YoJ3N0ZXZpZScpO1xuICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKHB1YmxpY0ltYWdlcylcbn0pXG5cblxuZnVuY3Rpb24gdG9nZ2xlTGlrZWRIZWFydCgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXInKVxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhcycpXG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGh1bWJuYWlsSW1hZ2VTaGFyZWQnICwgYXN5bmMgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5kYXRhKCduYW1lJykpXG4gICAgICAgIHZhciBpbWFnZU5hbWUgPSAkKHRoaXMpLmRhdGEoJ25hbWUnKVxuICAgICAgICBvcGVuV2luZG93KGltYWdlTmFtZSwgcHVibGljSW1hZ2VzTmFtZXMpXG4gICAgICAgICQoJyNmdWxsc2NyZWVuUGljdHVyZScpLnByZXBlbmQoJzxkaXY+PC9kaXY+JylcblxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=