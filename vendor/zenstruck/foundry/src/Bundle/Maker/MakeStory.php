<?php

namespace Zenstruck\Foundry\Bundle\Maker;

use Symfony\Bundle\MakerBundle\ConsoleStyle;
use Symfony\Bundle\MakerBundle\DependencyBuilder;
use Symfony\Bundle\MakerBundle\Generator;
use Symfony\Bundle\MakerBundle\InputConfiguration;
use Symfony\Bundle\MakerBundle\Maker\AbstractMaker;
use Symfony\Bundle\MakerBundle\Validator;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;

/**
 * @author Kevin Bond <kevinbond@gmail.com>
 */
final class MakeStory extends AbstractMaker
{
    public static function getCommandName(): string
    {
        return 'make:story';
    }

    public function configureCommand(Command $command, InputConfiguration $inputConfig): void
    {
        $command
            ->setDescription('Creates a Foundry story')
            ->addArgument('name', InputArgument::OPTIONAL, 'The name of the story class (e.g. <fg=yellow>DefaultCategoriesStory</>)')
            ->addOption('test', null, InputOption::VALUE_NONE, 'Create in <fg=yellow>tests/</> instead of <fg=yellow>src/</>')
        ;

        $inputConfig->setArgumentAsNonInteractive('name');
    }

    public function interact(InputInterface $input, ConsoleStyle $io, Command $command): void
    {
        if ($input->getArgument('name')) {
            return;
        }

        if (!$input->getOption('test')) {
            $io->text('// Note: pass <fg=yellow>--test</> if you want to generate stories in your <fg=yellow>tests/</> directory');
            $io->newLine();
        }

        $argument = $command->getDefinition()->getArgument('name');
        $value = $io->ask($argument->getDescription(), $argument->getDefault(), [Validator::class, 'notBlank']);
        $input->setArgument($argument->getName(), $value);
    }

    public function generate(InputInterface $input, ConsoleStyle $io, Generator $generator): void
    {
        $storyClassNameDetails = $generator->createClassNameDetails(
            $input->getArgument('name'),
            $input->getOption('test') ? 'Tests\\Story' : 'Story',
            'Story'
        );

        $generator->generateClass(
            $storyClassNameDetails->getFullName(),
            __DIR__.'/../Resources/skeleton/Story.tpl.php',
            []
        );

        $generator->writeChanges();

        $this->writeSuccessMessage($io);

        $io->text([
            'Next: Open your story class and start customizing it.',
            'Find the documentation at https://github.com/zenstruck/foundry#stories',
        ]);
    }

    public function configureDependencies(DependencyBuilder $dependencies): void
    {
        // noop
    }
}