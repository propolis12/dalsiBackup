<?php

namespace App\Repository;

use App\Entity\Image;
use App\Entity\Like;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;
use App\Repository\UserRepository;
use App\Repository\ImageRepository;


/**
 * @method Like|null find($id, $lockMode = null, $lockVersion = null)
 * @method Like|null findOneBy(array $criteria, array $orderBy = null)
 * @method Like[]    findAll()
 * @method Like[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LikeRepository extends ServiceEntityRepository
{
    /**
     * @var Security
     */
    private Security $security;
    /**
     * @var ImageRepository
     */
    private ImageRepository $imageRepository;

    public function __construct(ManagerRegistry $registry , Security $security , ImageRepository $imageRepository , )
    {
        parent::__construct($registry, Like::class);
        $this->security = $security;
        $this->imageRepository = $imageRepository;
    }


    public function removeLike($file)
    {
        return $this->createQueryBuilder('l')
            ->delete()
            ->andWhere('l.user = :val')
            ->setParameter('val', $this->security->getUser())
            ->andWhere('l.image :val')
            ->setParameter('val',$file)
            /*->join('l.image', 'i')
            ->join('l.user', 'u')
            ->andWhere('u.username = :val')
            ->setParameter('val', $this->security->getUser()->getUsername())
            ->andWhere('i.originalName = :val')
            ->setParameter('val', $filename)*/
            ->getQuery()
            ->getResult();


    }

    // /**
    //  * @return Like[] Returns an array of Like objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Like
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
