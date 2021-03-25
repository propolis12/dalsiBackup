<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/admin/users' => [[['_route' => 'app_admin_users', '_controller' => 'App\\Controller\\AdminController::manageUsers'], null, null, null, false, false, null]],
        '/album/create' => [[['_route' => 'album_create', '_controller' => 'App\\Controller\\AlbumController::create'], null, ['POST' => 0], null, false, false, null]],
        '/fetch/albums' => [[['_route' => 'fetch_albums', '_controller' => 'App\\Controller\\AlbumController::provideAlbums'], null, ['GET' => 0], null, false, false, null]],
        '/image' => [[['_route' => 'image', '_controller' => 'App\\Controller\\ImageController::index'], null, null, null, false, false, null]],
        '/owned/images' => [[['_route' => 'get_owned_images', '_controller' => 'App\\Controller\\ImageController::ownedImages'], null, ['GET' => 0], null, false, false, null]],
        '/upload/dropzone' => [[['_route' => 'dropzone_upload', '_controller' => 'App\\Controller\\ImageController::handleDropzone'], null, null, null, false, false, null]],
        '/latest/uploaded/photo' => [[['_route' => 'latest_photo', '_controller' => 'App\\Controller\\ImageController::getLatestPhotoUploadedName'], null, ['GET' => 0], null, false, false, null]],
        '/get/images' => [[['_route' => 'get_images', '_controller' => 'App\\Controller\\ImageController::getImages'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'main_page', '_controller' => 'App\\Controller\\MainPageController::uploadFileAction'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'app_registration', '_controller' => 'App\\Controller\\SecurityController::register'], null, null, null, false, false, null]],
        '/shared/images' => [[['_route' => 'shared_photos', '_controller' => 'App\\Controller\\SharedImagesController::index'], null, null, null, false, false, null]],
        '/get/public/images' => [[['_route' => 'shared_images', '_controller' => 'App\\Controller\\SharedImagesController::providePublicImages'], null, ['GET' => 0], null, false, false, null]],
        '/get/liked/images' => [[['_route' => 'liked_images', '_controller' => 'App\\Controller\\SharedImagesController::provideLikedImages'], null, ['GET' => 0], null, false, false, null]],
        '/api/login_check' => [[['_route' => 'api_login_check'], null, null, null, false, false, null]],
        '/api/token/refresh' => [[['_route' => 'gesdinet_jwt_refresh_token', '_controller' => 'gesdinet.jwtrefreshtoken::refresh'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/d(?'
                    .'|elete/(?'
                        .'|user/([^/]++)(*:196)'
                        .'|album/([^/]++)(*:218)'
                        .'|image/([^/]++)(*:240)'
                    .')'
                    .'|ownload/image/([^/]++)(*:271)'
                .')'
                .'|/fetch/album/images/([^/]++)(*:308)'
                .'|/a(?'
                    .'|dd/(?'
                        .'|t(?'
                            .'|o/album/([^/]++)(*:347)'
                            .'|ags/([^/]++)(*:367)'
                        .')'
                        .'|comment/([^/]++)(*:392)'
                    .')'
                    .'|pi(?'
                        .'|(?:/(index)(?:\\.([^/]++))?)?(*:434)'
                        .'|/(?'
                            .'|docs(?:\\.([^/]++))?(*:465)'
                            .'|contexts/(.+)(?:\\.([^/]++))?(*:501)'
                            .'|images(?'
                                .'|(?:\\.([^/]++))?(?'
                                    .'|(*:536)'
                                .')'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                    .'|(*:574)'
                                .')'
                            .')'
                            .'|users(?'
                                .'|(?:\\.([^/]++))?(?'
                                    .'|(*:610)'
                                .')'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                    .'|(*:648)'
                                .')'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/remove/from/album/([^/]++)(*:688)'
                .'|/l(?'
                    .'|atest/photos/([^/]++)(*:722)'
                    .'|ike/photo/([^/]++)(*:748)'
                .')'
                .'|/p(?'
                    .'|hoto/([^/]++)(*:775)'
                    .'|ublic/photo/([^/]++)(*:803)'
                .')'
                .'|/send/(?'
                    .'|photo/([^/]++)(*:835)'
                    .'|fullPhoto/([^/]++)(*:861)'
                .')'
                .'|/get/image/info/([^/]++)(*:894)'
                .'|/m(?'
                    .'|ake/p(?'
                        .'|ublic/([^/]++)(*:929)'
                        .'|rivate/([^/]++)(*:952)'
                    .')'
                    .'|edia/cache/resolve/(?'
                        .'|([A-z0-9_-]*)/rc/([^/]++)/(.+)(*:1013)'
                        .'|([A-z0-9_-]*)/(.+)(*:1040)'
                    .')'
                .')'
                .'|/u(?'
                    .'|ser/([^/]++)/update(*:1075)'
                    .'|nlike/photo/([^/]++)(*:1104)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        196 => [[['_route' => 'delete_user', '_controller' => 'App\\Controller\\AdminController::deleteUser'], ['id'], null, null, false, true, null]],
        218 => [[['_route' => 'delete_album', '_controller' => 'App\\Controller\\AlbumController::deleteAlbum'], ['name'], ['DELETE' => 0], null, false, true, null]],
        240 => [[['_route' => 'delete_image', '_controller' => 'App\\Controller\\ImageController::deleteImage'], ['filename'], ['DELETE' => 0], null, false, true, null]],
        271 => [[['_route' => 'download_image', '_controller' => 'App\\Controller\\ImageController::downloadImage'], ['filename'], ['GET' => 0], null, false, true, null]],
        308 => [[['_route' => 'fetch_album_images', '_controller' => 'App\\Controller\\AlbumController::provideAlbumImages'], ['albumName'], ['GET' => 0], null, false, true, null]],
        347 => [[['_route' => 'add_to_album', '_controller' => 'App\\Controller\\AlbumController::addToAlbum'], ['albumName'], ['POST' => 0], null, false, true, null]],
        367 => [[['_route' => 'add_tags', '_controller' => 'App\\Controller\\TagController::addTag'], ['filename'], null, null, false, true, null]],
        392 => [[['_route' => 'add_comment', '_controller' => 'App\\Controller\\SharedImagesController::addComment'], ['filename'], ['POST' => 0], null, false, true, null]],
        434 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        465 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        501 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        536 => [
            [['_route' => 'api_images_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_images_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        574 => [
            [['_route' => 'api_images_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_images_delete_item', '_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'delete'], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
            [['_route' => 'api_images_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_images_patch_item', '_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Image', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'patch'], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
        ],
        610 => [
            [['_route' => 'api_users_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_users_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        648 => [
            [['_route' => 'api_users_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_users_delete_item', '_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'delete'], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
            [['_route' => 'api_users_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_users_patch_item', '_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_item_operation_name' => 'patch'], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
        ],
        688 => [[['_route' => 'remove_from_album', '_controller' => 'App\\Controller\\AlbumController::removeFromAlbum'], ['albumName'], ['POST' => 0], null, false, true, null]],
        722 => [[['_route' => 'latest_photos', '_controller' => 'App\\Controller\\ImageController::latestPhotosAjax'], ['originalFilename'], ['GET' => 0], null, false, true, null]],
        748 => [[['_route' => 'like_photo', '_controller' => 'App\\Controller\\SharedImagesController::likeImage'], ['filename'], ['POST' => 0], null, false, true, null]],
        775 => [[['_route' => 'send_thumbnail', '_controller' => 'App\\Controller\\ImageController::thumbnailImage'], ['filename'], ['GET' => 0], null, false, true, null]],
        803 => [[['_route' => 'send_public_thumbnail', '_controller' => 'App\\Controller\\ImageController::thumbnailPublicImage'], ['filename'], ['GET' => 0], null, false, true, null]],
        835 => [[['_route' => 'latest_image', '_controller' => 'App\\Controller\\ImageController::latestPhotosByOriginalName'], ['originalName'], ['GET' => 0], null, false, true, null]],
        861 => [[['_route' => 'send_full_photo', '_controller' => 'App\\Controller\\ImageController::sendPhoto'], ['filename'], null, null, false, true, null]],
        894 => [[['_route' => 'get_image_info', '_controller' => 'App\\Controller\\ImageController::getimageInfo'], ['filename'], ['GET' => 0], null, false, true, null]],
        929 => [[['_route' => 'make_public', '_controller' => 'App\\Controller\\ImageController::makePublic'], ['filename'], ['POST' => 0], null, false, true, null]],
        952 => [[['_route' => 'make_private', '_controller' => 'App\\Controller\\ImageController::makePrivate'], ['filename'], ['POST' => 0], null, false, true, null]],
        1013 => [[['_route' => 'liip_imagine_filter_runtime', '_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterRuntimeAction'], ['filter', 'hash', 'path'], ['GET' => 0], null, false, true, null]],
        1040 => [[['_route' => 'liip_imagine_filter', '_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterAction'], ['filter', 'path'], ['GET' => 0], null, false, true, null]],
        1075 => [[['_route' => 'app_update', '_controller' => 'App\\Controller\\SecurityController::update'], ['id'], null, null, false, false, null]],
        1104 => [
            [['_route' => 'unlike_photo', '_controller' => 'App\\Controller\\SharedImagesController::unlikeImage'], ['filename'], ['POST' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
