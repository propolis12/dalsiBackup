<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\Like;
use App\Repository\ImageRepository;
use App\Repository\LikeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class SharedImagesController extends AbstractController
{

    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;
    /**
     * @var ImageRepository
     */
    private ImageRepository $imageRepository;
    /**
     * @var Security
     */
    private Security $security;
    /**
     * @var LikeRepository
     */
    private LikeRepository $likeRepository;

    public function __construct(EntityManagerInterface $entityManager, ImageRepository $imageRepository , Security $security, LikeRepository $likeRepository)
    {
        $this->entityManager = $entityManager;
        $this->imageRepository = $imageRepository;
        $this->security = $security;
        $this->likeRepository = $likeRepository;
    }

    #[Route('/shared/images', name: 'shared_photos')]
    public function index(): Response
    {
        return $this->render('shared_images/index.html.twig', [
            'controller_name' => 'SharedImagesController',
        ]);
    }

    /**
     * @Route("/get/public/images", name="shared_images" , methods={"GET"})
     */
    public function providePublicImages() {
        $images = $this->imageRepository->getPublicImages();
        $publicImages = [];
        foreach ($images as $image) {
            $image["likes"] = $this->imageRepository->getImageLikes($image["originalName"]);
            array_push($publicImages , $image);
        }
        return $this->json($publicImages);
    }

    /**
     * @Route("/get/liked/images" , name="liked_images", methods={"GET"})
     */
    public function provideLikedImages() {
        $images = $this->imageRepository->getLikedImages();
        return $this->json($images);
    }


    /**
     * @Route("/like/photo/{filename}", name="like_photo" , methods={"POST"})
     */
    public function likeImage(string $filename) {
        $image = $this->imageRepository->findOneBy(['originalName' => $filename]);
        $like = new Like();
        $like->setImage($image);
        $like->setUser($this->security->getUser());
        $image->addLike($like);
        $this->security->getUser()->addLikedImage($image);
        $this->entityManager->persist($like);
        $this->entityManager->persist($image);
        $this->entityManager->persist($this->security->getUser());
        $this->entityManager->flush();
        return $this->json($image, 200 , [] , [
            'groups' => ['share']
        ]);
    }

    /**
     * @Route("/unlike/photo/{filename}", name="unlike_photo" , methods={"POST"})
     */
    public function unlikeImage(string $filename) {
        $image = $this->imageRepository->findOneBy(['originalName' => $filename]);
       // $this->likeRepository->removeLike($image);
        foreach ($image->getLikes() as $like) {
            if ($like->getUser() === $this->security->getUser()) {
                $image->removeLike($like);
                $this->security->getUser()->removeLike($like);
                $this->security->getUser()->removeLikedImage($image);
                $this->entityManager->persist($image);
                $this->entityManager->persist($like);
                $this->entityManager->persist($this->security->getUser());
                $this->entityManager->flush();
                break;
            }
        }
        //$this->entityManager->persist($image);
        /*$image->addLike($like);
        $this->security->getUser()->addLikedImage($image);
        $this->entityManager->persist($like);
        $this->entityManager->persist($image);
        $this->entityManager->persist($this->security->getUser());
        $this->entityManager->flush();*/
        return $this->json($image, 200 , [] , [
            'groups' => ['share']
        ]);
    }




}
