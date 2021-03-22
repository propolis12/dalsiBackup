<?php

namespace ContainerDvhDCOy;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_N_32WpiService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.n.32Wpi' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.n.32Wpi'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'entityManager' => ['services', 'doctrine.orm.default_entity_manager', 'getDoctrine_Orm_DefaultEntityManagerService', false],
            'security' => ['privates', 'security.helper', 'getSecurity_HelperService', true],
            'uploaderHelper' => ['privates', 'App\\Service\\UploaderHelper', 'getUploaderHelperService', true],
            'validator' => ['services', '.container.private.validator', 'get_Container_Private_ValidatorService', false],
        ], [
            'entityManager' => '?',
            'security' => '?',
            'uploaderHelper' => 'App\\Service\\UploaderHelper',
            'validator' => '?',
        ]);
    }
}