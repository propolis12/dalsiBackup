<?php

namespace ContainerDvhDCOy;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getAlbumControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\AlbumController' shared autowired service.
     *
     * @return \App\Controller\AlbumController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/AlbumController.php';

        $container->services['App\\Controller\\AlbumController'] = $instance = new \App\Controller\AlbumController(($container->privates['security.helper'] ?? $container->load('getSecurity_HelperService')), ($container->privates['App\\Repository\\AlbumRepository'] ?? $container->load('getAlbumRepositoryService')), ($container->privates['App\\Repository\\ImageRepository'] ?? $container->load('getImageRepositoryService')), ($container->services['doctrine.orm.default_entity_manager'] ?? $container->getDoctrine_Orm_DefaultEntityManagerService()));

        $instance->setContainer(($container->privates['.service_locator.OuIzoRA'] ?? $container->load('get_ServiceLocator_OuIzoRAService'))->withContext('App\\Controller\\AlbumController', $container));

        return $instance;
    }
}