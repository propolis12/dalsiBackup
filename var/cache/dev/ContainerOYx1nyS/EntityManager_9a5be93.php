<?php

namespace ContainerOYx1nyS;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderf7064 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerb3d41 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties30945 = [
        
    ];

    public function getConnection()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getConnection', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getMetadataFactory', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getExpressionBuilder', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'beginTransaction', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getCache', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getCache();
    }

    public function transactional($func)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'transactional', array('func' => $func), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->transactional($func);
    }

    public function commit()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'commit', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->commit();
    }

    public function rollback()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'rollback', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getClassMetadata', array('className' => $className), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'createQuery', array('dql' => $dql), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'createNamedQuery', array('name' => $name), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'createQueryBuilder', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'flush', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'clear', array('entityName' => $entityName), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->clear($entityName);
    }

    public function close()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'close', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->close();
    }

    public function persist($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'persist', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'remove', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'refresh', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'detach', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'merge', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getRepository', array('entityName' => $entityName), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'contains', array('entity' => $entity), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getEventManager', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getConfiguration', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'isOpen', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getUnitOfWork', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getProxyFactory', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'initializeObject', array('obj' => $obj), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'getFilters', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'isFiltersStateClean', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'hasFilters', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return $this->valueHolderf7064->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerb3d41 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderf7064) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderf7064 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderf7064->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__get', ['name' => $name], $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        if (isset(self::$publicProperties30945[$name])) {
            return $this->valueHolderf7064->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf7064;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf7064;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf7064;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf7064;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__isset', array('name' => $name), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf7064;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderf7064;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__unset', array('name' => $name), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf7064;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderf7064;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__clone', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        $this->valueHolderf7064 = clone $this->valueHolderf7064;
    }

    public function __sleep()
    {
        $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, '__sleep', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;

        return array('valueHolderf7064');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerb3d41 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerb3d41;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerb3d41 && ($this->initializerb3d41->__invoke($valueHolderf7064, $this, 'initializeProxy', array(), $this->initializerb3d41) || 1) && $this->valueHolderf7064 = $valueHolderf7064;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderf7064;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderf7064;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
