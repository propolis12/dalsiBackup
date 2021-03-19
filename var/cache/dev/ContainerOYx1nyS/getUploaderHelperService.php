<?php

namespace ContainerOYx1nyS;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUploaderHelperService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'App\Service\UploaderHelper' shared autowired service.
     *
     * @return \App\Service\UploaderHelper
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/Service/UploaderHelper.php';

        return $container->privates['App\\Service\\UploaderHelper'] = new \App\Service\UploaderHelper(($container->services['oneup_flysystem.default_filesystem_filesystem'] ?? $container->getOneupFlysystem_DefaultFilesystemFilesystemService()), ($container->privates['monolog.logger'] ?? $container->getMonolog_LoggerService()), ($container->services['kernel'] ?? $container->get('kernel', 1)), ($container->privates['security.helper'] ?? $container->load('getSecurity_HelperService')));
    }
}
