<?php

namespace ContainerDvhDCOy;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_VogmsH7Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.vogmsH7' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.vogmsH7'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'manager' => ['services', 'doctrine.orm.default_entity_manager', 'getDoctrine_Orm_DefaultEntityManagerService', false],
            'user' => ['privates', '.errored..service_locator.vogmsH7.App\\Entity\\User', NULL, 'Cannot autowire service ".service_locator.vogmsH7": it references class "App\\Entity\\User" but no such service exists.'],
            'userPasswordEncoder' => ['services', 'security.password_encoder', 'getSecurity_PasswordEncoderService', true],
        ], [
            'manager' => '?',
            'user' => 'App\\Entity\\User',
            'userPasswordEncoder' => '?',
        ]);
    }
}
