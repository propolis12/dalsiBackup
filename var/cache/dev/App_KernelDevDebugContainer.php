<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerN256RmH\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerN256RmH/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerN256RmH.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerN256RmH\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerN256RmH\App_KernelDevDebugContainer([
    'container.build_hash' => 'N256RmH',
    'container.build_id' => '2d720a42',
    'container.build_time' => 1618159976,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerN256RmH');
