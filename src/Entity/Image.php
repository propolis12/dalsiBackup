<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ImageRepository;
use App\Service\UploaderHelper;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 */
class Image // implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("image")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="images")
     * @ORM\JoinColumn(nullable=false)
     *@Groups("share")
     */
    private $owner;


    /**
     * @ORM\Column(type="boolean")
     */
    private $public;



    /**
     * @ORM\Column(type="datetime")
     * @Groups({"image","share"})
     */
    private $UploadedAt;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"image","share"})
     */
    private $originalName;

    /**
     * @ORM\ManyToMany(targetEntity=Album::class, mappedBy="image")
     */
    private Collection $albums;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, mappedBy="image")
     * @Groups("image")
     */
    private $tags;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $publishedAt;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mimetype;

    /**
     * @ORM\OneToMany(targetEntity=Like::class, mappedBy="image", orphanRemoval=true)
     * @Groups("share")
     */
    private $likes;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="image")
     * @Groups({"share"})
     */
    private $comments;

    public function __construct()
    {
        $this->albums = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }



    public function getId(): ?int
    {
        return $this->id;
    }


    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }


    public function getPublic(): ?bool
    {
        return $this->public;
    }

    public function setPublic(bool $public): self
    {
        $this->public = $public;

        return $this;
    }


    public function getUploadedAt(): ?\DateTimeInterface
    {
        return $this->UploadedAt;
    }

    public function setUploadedAt(\DateTimeInterface $UploadedAt): self
    {
        $this->UploadedAt = $UploadedAt;

        return $this;
    }

    public function getOriginalName(): ?string
    {
        return $this->originalName;
    }

    public function setOriginalName(string $originalName): self
    {
        $this->originalName = $originalName;

        return $this;
    }

    /**
     * @return Collection|Album[]
     */
    public function getAlbums(): Collection
    {
        return $this->albums;
    }

    public function addAlbum(Album $album): self
    {
        if (!$this->albums->contains($album)) {
            $this->albums[] = $album;
            $album->addImage($this);
        }

        return $this;
    }

    public function removeAlbum(Album $album): self
    {
        if ($this->albums->removeElement($album)) {
            $album->removeImage($this);
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->addImage($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeImage($this);
        }

        return $this;
    }


    public function getPublishedAt(): ?\DateTimeInterface
    {
        return $this->publishedAt;
    }

    public function setPublishedAt(?\DateTimeInterface $publishedAt): self
    {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    /**
     * @return Collection|Like[]
     */
   public function getLikes(): Collection
    {
        return $this->likes;
    }

    public function addLike(Like $like): self
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setImage($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getImage() === $this) {
                $like->setImage(null);
            }
        }

        return $this;
    }

    public function getMimetype(): ?string
    {
        return $this->mimetype;
    }

    public function setMimetype(string $mimetype): self
    {
        $this->mimetype = $mimetype;

        return $this;
    }



    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setImage($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getImage() === $this) {
                $comment->setImage(null);
            }
        }

        return $this;
    }


}
