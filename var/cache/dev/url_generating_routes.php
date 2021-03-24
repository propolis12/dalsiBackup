<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
    '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], []],
    '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
    '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
    '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
    '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
    '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
    '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::body'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::stylesheet'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    'app_admin_users' => [[], ['_controller' => 'App\\Controller\\AdminController::manageUsers'], [], [['text', '/admin/users']], [], []],
    'album_create' => [[], ['_controller' => 'App\\Controller\\AlbumController::create'], [], [['text', '/album/create']], [], []],
    'fetch_albums' => [[], ['_controller' => 'App\\Controller\\AlbumController::provideAlbums'], [], [['text', '/fetch/albums']], [], []],
    'fetch_album_images' => [['albumName'], ['_controller' => 'App\\Controller\\AlbumController::provideAlbumImages'], [], [['variable', '/', '[^/]++', 'albumName', true], ['text', '/fetch/album/images']], [], []],
    'add_to_album' => [['albumName'], ['_controller' => 'App\\Controller\\AlbumController::addToAlbum'], [], [['variable', '/', '[^/]++', 'albumName', true], ['text', '/add/to/album']], [], []],
    'remove_from_album' => [['albumName'], ['_controller' => 'App\\Controller\\AlbumController::removeFromAlbum'], [], [['variable', '/', '[^/]++', 'albumName', true], ['text', '/remove/from/album']], [], []],
    'delete_album' => [['name'], ['_controller' => 'App\\Controller\\AlbumController::deleteAlbum'], [], [['variable', '/', '[^/]++', 'name', true], ['text', '/delete/album']], [], []],
    'image' => [[], ['_controller' => 'App\\Controller\\ImageController::index'], [], [['text', '/image']], [], []],
    'latest_photos' => [['originalFilename'], ['_controller' => 'App\\Controller\\ImageController::latestPhotosAjax'], [], [['variable', '/', '[^/]++', 'originalFilename', true], ['text', '/latest/photos']], [], []],
    'send_thumbnail' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::thumbnailImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/photo']], [], []],
    'send_public_thumbnail' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::thumbnailPublicImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/public/photo']], [], []],
    'latest_image' => [['originalName'], ['_controller' => 'App\\Controller\\ImageController::latestPhotosByOriginalName'], [], [['variable', '/', '[^/]++', 'originalName', true], ['text', '/send/photo']], [], []],
    'get_owned_images' => [[], ['_controller' => 'App\\Controller\\ImageController::ownedImages'], [], [['text', '/owned/images']], [], []],
    'dropzone_upload' => [[], ['_controller' => 'App\\Controller\\ImageController::handleDropzone'], [], [['text', '/upload/dropzone']], [], []],
    'latest_photo' => [[], ['_controller' => 'App\\Controller\\ImageController::getLatestPhotoUploadedName'], [], [['text', '/latest/uploaded/photo']], [], []],
    'send_full_photo' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::sendPhoto'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/send/fullPhoto']], [], []],
    'delete_image' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::deleteImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/delete/image']], [], []],
    'get_images' => [[], ['_controller' => 'App\\Controller\\ImageController::getImages'], [], [['text', '/get/images']], [], []],
    'get_image_info' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::getimageInfo'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/get/image/info']], [], []],
    'make_public' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::makePublic'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/make/public']], [], []],
    'make_private' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::makePrivate'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/make/private']], [], []],
    'download_image' => [['filename'], ['_controller' => 'App\\Controller\\ImageController::downloadImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/download/image']], [], []],
    'main_page' => [[], ['_controller' => 'App\\Controller\\MainPageController::uploadFileAction'], [], [['text', '/']], [], []],
    'app_login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], []],
    'app_registration' => [[], ['_controller' => 'App\\Controller\\SecurityController::register'], [], [['text', '/register']], [], []],
    'app_update' => [['id'], ['_controller' => 'App\\Controller\\SecurityController::update'], [], [['text', '/update'], ['variable', '/', '[^/]++', 'id', true], ['text', '/user']], [], []],
    'shared_photos' => [[], ['_controller' => 'App\\Controller\\SharedImagesController::index'], [], [['text', '/shared/images']], [], []],
    'shared_images' => [[], ['_controller' => 'App\\Controller\\SharedImagesController::providePublicImages'], [], [['text', '/get/public/images']], [], []],
    'liked_images' => [[], ['_controller' => 'App\\Controller\\SharedImagesController::provideLikedImages'], [], [['text', '/get/liked/images']], [], []],
    'like_photo' => [['filename'], ['_controller' => 'App\\Controller\\SharedImagesController::likeImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/like/photo']], [], []],
    'unlike_photo' => [['filename'], ['_controller' => 'App\\Controller\\SharedImagesController::unlikeImage'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/unlike/photo']], [], []],
    'add_comment' => [['filename'], ['_controller' => 'App\\Controller\\SharedImagesController::addComment'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/add/comment']], [], []],
    'add_tags' => [['filename'], ['_controller' => 'App\\Controller\\TagController::addTag'], [], [['variable', '/', '[^/]++', 'filename', true], ['text', '/add/tags']], [], []],
    'api_entrypoint' => [['index', '_format'], ['_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index' => 'index'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', 'index', 'index', true], ['text', '/api']], [], []],
    'api_doc' => [['_format'], ['_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], [], [['variable', '.', '[^/]++', '_format', true], ['text', '/api/docs']], [], []],
    'api_jsonld_context' => [['shortName', '_format'], ['_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName' => '.+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '.+', 'shortName', true], ['text', '/api/contexts']], [], []],
    'api_images_get_collection' => [['_format'], ['_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'get'], [], [['variable', '.', '[^/]++', '_format', true], ['text', '/api/images']], [], []],
    'api_images_post_collection' => [['_format'], ['_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'post'], [], [['variable', '.', '[^/]++', '_format', true], ['text', '/api/images']], [], []],
    'api_images_get_item' => [['id', '_format'], ['_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'get'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/images']], [], []],
    'api_images_delete_item' => [['id', '_format'], ['_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'delete'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/images']], [], []],
    'api_images_put_item' => [['id', '_format'], ['_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'put'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/images']], [], []],
    'api_images_patch_item' => [['id', '_format'], ['_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'patch'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/images']], [], []],
    'api_users_get_collection' => [['_format'], ['_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'get'], [], [['variable', '.', '[^/]++', '_format', true], ['text', '/api/users']], [], []],
    'api_users_post_collection' => [['_format'], ['_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'post'], [], [['variable', '.', '[^/]++', '_format', true], ['text', '/api/users']], [], []],
    'api_users_get_item' => [['id', '_format'], ['_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'get'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/users']], [], []],
    'api_users_delete_item' => [['id', '_format'], ['_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'delete'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/users']], [], []],
    'api_users_put_item' => [['id', '_format'], ['_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'put'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/users']], [], []],
    'api_users_patch_item' => [['id', '_format'], ['_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'patch'], [], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '[^/\\.]++', 'id', true], ['text', '/api/users']], [], []],
    'liip_imagine_filter_runtime' => [['filter', 'hash', 'path'], ['_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterRuntimeAction'], ['filter' => '[A-z0-9_-]*', 'path' => '.+'], [['variable', '/', '.+', 'path', true], ['variable', '/', '[^/]++', 'hash', true], ['text', '/rc'], ['variable', '/', '[A-z0-9_-]*', 'filter', true], ['text', '/media/cache/resolve']], [], []],
    'liip_imagine_filter' => [['filter', 'path'], ['_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterAction'], ['filter' => '[A-z0-9_-]*', 'path' => '.+'], [['variable', '/', '.+', 'path', true], ['variable', '/', '[A-z0-9_-]*', 'filter', true], ['text', '/media/cache/resolve']], [], []],
    'api_login_check' => [[], [], [], [['text', '/api/login_check']], [], []],
    'gesdinet_jwt_refresh_token' => [[], ['_controller' => 'gesdinet.jwtrefreshtoken::refresh'], [], [['text', '/api/token/refresh']], [], []],
];
