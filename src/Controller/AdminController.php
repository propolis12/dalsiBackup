<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{

    /**
     * @var UserRepository
     */
    private UserRepository $userRepository;
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;

    public function __construct(UserRepository $userRepository , EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/admin/users", name="app_admin_users")
     */
    public function manageUsers(): Response
    {

        $users = $this->userRepository->findAll();
        return $this->render('admin/users.html.twig', [
            'controller_name' => 'AdminController',
            'users' => $users
        ]);
    }

    /**
     * @Route("/delete/user/{id}" , name="delete_user")
     * @param $id
     */
    public function deleteUser($id) {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $this->entityManager->remove($user);
        //$this->entityManager->persist($user);
        $this->entityManager->flush();
        return $this->manageUsers();

    }
}
