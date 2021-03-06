import {
    fetchLatestImages,
    fetchOwnedImages,
    deleteImage,
    fetchImages,
    getImageInfo,
    makePublic, makePrivate, fetchPublicImages, likePhoto, fetchLikedImages, unlikePhoto
} from "./services/images-service";


import './bootstrap';
import $ from 'jquery';
import {fetchAlbumImages} from "./services/album-services";
import {openWindow, setHoveringOverImages,nextImage,findCurrentImage,previousImage,closeImage} from "./mainPage.js";
import {addComment} from "@/services/comment-services";

var publicImages = []
var likedImages = []
var publicImagesNames = []
var currentPublicImagesNames = []
var usernames = [];
$(document).ready(async function() {
    $('#uploadIcon').remove()
    $('#searchUserLi').show()
    likedImages = await fetchLikedImages()
   // console.log(likedImages)
    publicImages  = await fetchPublicImages()
    await renderImagesShared(publicImages.data)
    $('#photo-list').html('')
    for (var i = 0; i < publicImages.data.length; i++) {
        publicImagesNames[i] = publicImages.data[i]['originalName']
        if(!(usernames.includes(publicImages.data[i]["username"]))) {
            usernames.push(publicImages.data[i]["username"])
        }
    }
    currentPublicImagesNames = publicImagesNames

    $('.comments').hide()
})




async function renderImagesShared(images) {


    $('#photoListShared').html('');
    var iconClass = 'far'
    for (var i = 0; i < images.length; i++) {


        /** for lazy loading */
        renderHelp(i , images)
        if (i > 30) {
            $('#' + i + 'shared').append($('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '',
                alt: '',
                'data-name': images[i]['originalName'],
                class: 'thumbnailImageShared'
            }))
        } else {
            $('#' + i + 'shared').append($('<img>', {
                realsrc: '/public/photo/' + images[i]['originalName'],
                src: '/public/photo/' + images[i]['originalName'],
                alt: '',
                'data-name': images[i]['originalName'],
                class: 'thumbnailImageShared'
            }))
        }
        for (var l = 0; l < likedImages.data.length; l++) {
            if (likedImages.data[l]["originalName"] === images[i]["originalName"]) {
                iconClass = 'fas'
                break
            }
        }

        $('#' + i + 'shared').append('<div class="thumbnailIconsShared" ><span class="commentToggler">comments</span><span class="numberLikes mr-2">' + images[i]['likes'].length + '</span><i class="' + iconClass + ' fa-heart  likeable" ></i></div>')
        $('#' + i + 'shared').append('<div class="comments"><div class="commentValues"></div><input type="text" class="commentInput" placeholder="insert comment"></div>')
        for(var j = 0 ; j < images[i]["comments"].length ; j++)
        $('#' + i + 'shared').children('.comments').children('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + images[i]["comments"][j]["username"] + ' </span><span class="commentCreatedAt"> ' +  timeSince(new Date( images[i]["comments"][j]["createdAt"])) +  '</span>' +
            '<div class="commentValue">' + images[i]["comments"][j]["value"] + '</div></div>')

        iconClass = 'far'

    }
}


function renderHelp(i, images) {
    $('#photoListShared').append('<div id=' + i + 'shared' + ' class="thumbnailDivShared"> </div>')
    if (images[i]['publishedAt'] !== null) {
        $('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">'+ images[i]['username']  + '</div><div class="publishDateDiv">'+ timeSince(new Date( (images[i]['publishedAt'])))  + '</div></div>')
    } else {
        $('#' + i + 'shared').append('<div class="publicInfoDiv"><div class="ownerNameDiv">'+ images[i]['username']  + '</div></div>')
    }
}


function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

$(document).on('click','.likeable', async function () {

    var liked = false
    var imageLikes
    var name = $(this).parent().siblings()[1].dataset.name
    for (i = 0 ; i < likedImages.data.length; i++) {
        console.log(likedImages.data[i]["originalName"])
        if (likedImages.data[i]["originalName"] === name) {
            console.log("true")
            liked = true
        }
    }
    if(!liked) {
        imageLikes = await likePhoto(name)
        //likedImages.data.push(imageLikes.data)
        toggleLikedHeart(this)
        console.log("-------------------------------------------------------------------------------------")
        console.log(imageLikes)
        console.log("toto je imageLikes po likovani")
        console.log(likedImages )
        console.log("toto su liked images po likovani")
    } else {
       imageLikes = await unlikePhoto(name)
        /*var index = likedImages.data.indexOf(name)
        likedImages.data.splice(index , 1)*/
        toggleLikedHeart(this)
        console.log("-------------------------------------------------------------------------------------")
        console.log(imageLikes)
        console.log("toto je imageLikes po unlikovani")
        console.log(likedImages )
        console.log("toto su liked images unlikovani")
    }

    likedImages = await fetchLikedImages()
    if( imageLikes.status !== 500) {
        $(this).siblings('.numberLikes').text((imageLikes.data.length).toString())
    }

    for (var i = 0; i < publicImages.data.length ; i++) {
        if(imageLikes["originalName"] === publicImages.data[i]["originalName"]) {
            publicImages.data[i] = imageLikes
        }
    }

    //console.log(publicImages)
})


function toggleLikedHeart(el) {
    $(el).toggleClass('far')
    $(el).toggleClass('fas')
}

$(document).on('click', '.thumbnailImageShared' , async  function () {
        var imageName = $(this).data('name')
        openWindow(imageName, currentPublicImagesNames)
        $('#fullscreenPicture').prepend('<div></div>')

})


document.getElementById('searchUserPhotos').addEventListener('input', (e)=>{
    let result = []
    if(e.target.value) {
        result = usernames.filter(name => name.toLowerCase().includes(e.target.value))
        result = result.map(name => `<li class="resultUserLi">${name}</li>`)
    }
        showResultUsers(result)
})

function showResultUsers(resultArray) {

    if (resultArray.length) {
        const html = /*!resultArray.length ? '' :*/ resultArray.join('')
        document.querySelector('#resultUsersUl').innerHTML = html
    } else {
        const html = `<li class="resultUserNoLi">No public photos for this user</li>`
        document.querySelector('#resultUsersUl').innerHTML = html
    }
}

$(document).on('click', '.resultUserLi', async  function () {
    var username = $(this).text()
    await showUserPhotos(username)
})

export async function showUserPhotos(username) {
    $('#photoListShared').html()
    var imagesToRender = []
    currentPublicImagesNames = []
    for (var i = 0; i < publicImages.data.length; i++) {
        if (publicImages.data[i]["username"].includes(username)) {
            imagesToRender.push(publicImages.data[i])
            currentPublicImagesNames.push(publicImages.data[i]["originalName"])
        }
    }
    await renderImagesShared(imagesToRender);
}


$(document).on('click', '.commentToggler', function () {
    $(this).parent().siblings('.comments').toggle()
})

$(document).on('keyup', '.commentInput', async function (event) {
    if (event.keyCode === 13) {
        var filename = $(this).parent().siblings('.thumbnailImageShared').data('name')
        var comment = event.target.value
        await addComment(comment, filename)
        var imageInfo = await getImageInfo(filename, "share")
        $(this).siblings('.commentValues').html('')
        for (var i = 0; i < imageInfo.data["comments"].length; i++) {
            $(this).siblings('.commentValues').append('<div class="actualCommentValue"><span class="commentUser">' + imageInfo.data["comments"][i]["user"]["username"] + ' </span> <span class="commentCreatedAt">' + timeSince(new Date( imageInfo.data["comments"][i]["createdAt"])) + '</span>' +
                '<div class="commentValue">' + imageInfo.data["comments"][i]["value"] + ' </div></div>')
        }
    }
})

