# Doctrine Deprecations

A small layer on top of `trigger_error(E_USER_DEPRECATED)` or PSR-3 logging
with options to disable all deprecations or selectively for packages.

By default it does not log deprecations at runtime and needs to be configured
to log through either trigger_error or with a PSR-3 logger. This is done to
avoid side effects by deprecations on user error handlers that Doctrine has no
control over.

## Usage from consumer perspective:

Enable or Disable Doctrine deprecations to be sent as `trigger_error(E_USER_DEPRECATED)`
messages.

```php
\Doctrine\Deprecations\Deprecation::enableWithTriggerError();
\Doctrine\Deprecations\Deprecation::enableWithSuppressedTriggerError();
\Doctrine\Deprecations\Deprecation::disable();
```

Enable Doctrine deprecations to be sent to a PSR3 logger:

```php
\Doctrine\Deprecations\Deprecation::enableWithPsrLogger($logger);
```

Disable deprecations from a package

```php
\Doctrine\Deprecations\Deprecation::ignorePackage("doctrine/orm");
```

Disable triggering about specific deprecations:

```php
\Doctrine\Deprecations\Deprecation::ignoreDeprecations("https://link/to/deprecations-description-identifier");
```

Access is provided to all triggered deprecations and their individual count:

```php
$deprecations = \Doctrine\Deprecations\Deprecation::getTriggeredDeprecations();

foreach ($deprecations as $identifier => $count) {
    echo $identifier . " was triggered " . $count . " times\n";
}
```

## Usage from a library perspective:

```php
\Doctrine\Deprecations\Deprecation::trigger(
    "doctrine/orm",
    "https://link/to/deprecations-description",
    "message"
);
```

If variable arguments are provided at the end, they are used with `sprintf` on
the message.

```php
\Doctrine\Deprecations\Deprecation::trigger(
    "doctrine/orm",
    "https://github.com/doctrine/orm/issue/1234",
    "message %s %d",
    "foo",
    1234
);
```

Based on the issue link each deprecation message is only triggered once per
request, so it must be unique for each deprecation.

A limited stacktrace is included in the deprecation message to find the
offending location.

## Usage in PHPUnit tests

There is a `VerifyDeprecations` trait that you can use to make assertions on
the occurrence of deprecations within a test.

```php
use Doctrine\Deprecations\PHPUnit\VerifyDeprecations;

class MyTest extends TestCase
{
    use VerifyDeprecations;

    public function testSomethingDeprecation()
    {
        $this->expectDeprecationWithIdentifier('https://github.com/doctrine/orm/issue/1234');

        triggerTheCodeWithDeprecation();
    }
}
```

## What is a deprecation identifier?

An identifier for deprecations is just a link to any resource, most often a
Github Issue or Pull Request explaining the deprecation and potentially its
alternative.
