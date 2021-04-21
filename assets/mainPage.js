import {insertTags} from "@/services/tag-services";

Dropzone .autoDiscover = false;
import {
    fetchLatestImages,
    fetchOwnedImages,
    deleteImage,
    fetchImages,
    getImageInfo,
    makePublic, makePrivate, downloadImage, downloadMultipleImages
} from "@/services/images-service";
import {
    postAlbum,
    fetchAlbums,
    fetchAlbumImages,
    addToAlbum,
    deleteOnlyFromAlbum,
    deleteAlbum
} from "@/services/album-services";
import './bootstrap';
import './styles/mainPage.css';
import dropzone from "dropzone";
import 'dropzone/dist/dropzone.css';
import $ from 'jquery';
require('bootstrap')


var albums = [];
var  selected  = [];
var allOwnedImages = [];
var currentNameSet = [];
var currentAlbum = '';
var ownedImages = [];
var currentImageIndex;
var myImages = [];
var currentImages = []

$(document).ready(async function() {
    $('#searchUserLi').hide()
    $('#albumList').hide()
    myImages  = await fetchImages();
    $('#addTagLi').hide()
    $('#deleteOnlyFromAlbumLi').hide()
    $('#editNavbar').hide()
    allOwnedImages = await fetchImages()
    renderImages().then(r => {
        $('.thumbnailIcons').hide()
        setHoveringOverImages()
    });
    lazyLoading()

    $('#dropzone').hide();

    $('#fullscreenPicture').hide();

    $('#sidebarCollapse').hide();

    await loadAlbums();



    for (var i = 0 ; i < albums.data.length ; i++) {
        $('#addToAlbumDropdown').append('<a class="dropdown-item addToAlbumClickableLi" href="#">' +  albums.data[i]["name"] + ' </a>')
    }

    $('#sidebarCollapse').on('click', function () {
        sidebarResponsive();

    });
    $('#newAlbumLi').hide();
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    setHoveringOverImages()


    initializeDropzone();
    $('body').css('pointer-events', 'all')

});






$(document).on('click', '.nav-item', function () {
    $(this).addClass('active')
    $('.nav-item').removeClass('active')
})

$(document).on('click', '#deleteOnlyFromAlbumLi', async function () {
    for (var i = 0; i < selected.length; i++ ) {
        await deleteOnlyFromAlbum(currentAlbum, selected[i])
    }
    reloadEditingTools()
    await renderImages()
})



$(document).on('click', '.addToAlbumClickableLi', async function () {
    var albumName = $(this).text()
    for (var i = 0; i < selected.length; i++ ) {
        await addToAlbum(albumName, selected[i])
    }
    reloadEditingTools()
})


/**
 * handling selecting photos
 */
$(document).on('click','.selectable', function () {
    $(this).toggleClass('far')
    $(this).toggleClass('fas')
    if($(".fas.fa-check-circle")[0]) {
        $('#editNavbar').show()
    } else {
        $('#editNavbar').hide()
    }
    var filenameToPush = $(this).parent().siblings().data('name')
    if($(this).hasClass('fas')) {
        selected.push(filenameToPush)
    } else {
        var index = selected.indexOf(filenameToPush)
        if (index !== -1 ) {
            selected.splice(index, 1)
        }
    }
})






/**
 * delete selected photos
 */
$(document).on('click', '#deleteImagesNav' , async function () {
    if(selected.length > 0 ) {
        for (var i = 0 ; i < selected.length; i++) {
            await deleteImage(selected[i])
        }
        selected = []
        $('#editNavbar').hide()
        await renderImages()
    }
})


/**
 * to set toggle edit icons when mouse cursor hovers over image
 */
export function setHoveringOverImages() {
    $('.thumbnailImage').mouseover(
        function () {
            $(this).siblings().show()
        }
    )

    $('.thumbnailImage').mouseout(
        function () {
            if($(this).siblings().children().hasClass('far')) {
                $(this).siblings().hide()
            }
        }
    )
    $('#editNavbar').mouseover(
        function () {
            $(this).css('opacity', 1)
        }
    )

    $('#editNavbar').mouseout(
        function () {
            $(this).css('opacity', 0.5)
        }
    )


}




function initializeDropzone() {
    var newNames = [];
    var formElement = document.querySelector('.js-reference-dropzone');
    if (!formElement) {
        return;
    }
    var dropzone = new Dropzone(formElement, {
        paramName: 'dropzone',
        acceptedFiles: ".jpeg,.jpg,.png,.gif",
        params: {'albumName': currentAlbum },
        renameFile: function (file) {
            let newName = new Date().getTime() + '_' + file.name;
             newNames.push(newName);
             return newName;
        },
        init: function() {
            this.on('sending', function (file,xhr, data) {
                data.append("data" , currentAlbum);

            })

            this.on('success', function(file, data) {


            });

            this.on('error', function(file, data) {
                if (data.detail) {
                    this.emit('error', file, data.detail);
                }
            });

            this.on('queuecomplete', function (file) {
                appendImage(newNames).then(r => { newNames = [];
                if (currentAlbum !== '') {

                }
                    setTimeout(() => $('#dropzone').html(""),2000)

                });
            })
        }
    });
}


/**
 *
 * to append image on page after uploading
 */
async function appendImage(names) {
    currentNameSet = currentNameSet.concat(names)
    var tempLength = names.length
    for(let i = 0; i < names.length; i++) {
    $('#photo-list').append('<div id=' + (currentNameSet.length - tempLength + i)  + '  class="thumbnailDiv" ><div class="thumbnailIcons" ><i class="far fa-check-circle fa-2x selectable"></i></div></div>')
    $('#' + (currentNameSet.length - tempLength + i)).append($('<img>',{src:'/photo/'+ names[i], alt: '' ,'data-name': names[i] , /*click:  function () { openWindow(this.dataset.name, currentNameSet) } ,*/ class:'thumbnailImage' , loading: 'lazy'}))
    }
    ownedImages = await fetchImages();
    currentImages = []
    for (let i = 0 ; i < ownedImages.data.length; i++) {
        for (var j = 0 ; j < currentNameSet.length; j++) {
            if(ownedImages.data[i]["originalName"] === currentNameSet[j]) {
                currentImages.push(ownedImages.data[i])

            }
        }
    }
    $('.thumbnailIcons').hide()
    setHoveringOverImages()
}



async function renderImages() {

    $('#photo-list').html('');
    var albumImages = []
    var ownedImagesNames = []
    if (currentAlbum === '') {
        ownedImages = await fetchImages();
        for (var i = 0 ; i  < ownedImages.data.length; i++) {
            ownedImagesNames[i] = ownedImages.data[i]['originalName']
        }
        currentNameSet = ownedImagesNames
        currentImages = ownedImages.data
    } else {
        albumImages = await fetchAlbumImages(currentAlbum)
        currentImages = albumImages.data
        for (var i = 0 ; i < albumImages.data.length ; i++ ){
            ownedImagesNames[i] = albumImages.data[i]['originalName']
        }

        currentNameSet = ownedImagesNames
    }


    for(var i = 0 ; i < ownedImagesNames.length ; i++) {
        if (i > 30) {
            /** for lazy loading */
            $('#photo-list').append('<div id=' + i + ' class="thumbnailDiv" ><div class="thumbnailIcons" ><i class="far fa-check-circle fa-2x selectable"></i></div> </div>')
            $('#' + i).append($('<img>',{ realsrc:'/photo/'+ ownedImagesNames[i], src:'', alt: '' , 'data-name': ownedImagesNames[i] ,/* click:  function () { openWindow(this.dataset.name, ownedImagesNames) } , */ class:'thumbnailImage'}))
            continue
        }
        var parent = i;

        $('#photo-list').append('<div id=' + i + ' class="thumbnailDiv " ><div class="thumbnailIcons" ><i class="far fa-check-circle fa-2x selectable"></i></div> </div>')
        $('#' + i).append( $('<img>',{ realsrc:'/photo/'+ ownedImagesNames[i], src:'/photo/'+ ownedImagesNames[i], alt: '' , 'data-name': ownedImagesNames[i] ,/* click:  function () { openWindow(this.dataset.name, ownedImagesNames) }, */ class:'thumbnailImage'} ))

    }
    $('.thumbnailIcons').hide()
    setHoveringOverImages()
}





$('#uploadIcon').click(function () {
            $('#dropzone').toggle();
})

function sidebarResponsive() {
    $('#sidebar').toggleClass('active');
    $('#sidebar-wrapper').toggleClass('col-2');
    $('#sidebar-wrapper').toggleClass('col-0');
    $('#content-wrapper').toggleClass('col-10');
    $('#content-wrapper').toggleClass('col-12');
    if(!($('#sidebar').hasClass('active'))) {
        $('#sidebarCollapse').hide();
    } else {
        $('#sidebarCollapse').show();
    }
}


/**
 * listener to make image fullscreen
 */
$(document).on('click', '.thumbnailImage', function () {
    console.log($(this).data('name'))
    var imageName = $(this).data('name')
    openWindow(imageName, currentNameSet)
})





/** Full photo controls
 *  name - url of the image from source attribute
 * we want extract only the name , because the name(url) is not a good response for this request */
 export function openWindow(name, nameSet) {
    currentNameSet = nameSet
    $('#insertPicture').html($('<img>',{src:'/send/fullPhoto/'+ name, alt: '' , id: 'fullScreenImage'}));
    $('#fullscreenPicture').show();
    $('#photo-list').hide();
    findCurrentImage(name, nameSet);



}

export function closeImage() {
    $('#fullscreenPicture').hide();
    $('#photo-list').show();
}


export function findCurrentImage(name , nameSet) {

    for(var i = 0; i < nameSet.length; i++) {
        if (nameSet[i] == name ) {
            currentImageIndex = i;
        }
    }

}
 export function previousImage() {
    if(currentImageIndex !== 0) {
        currentImageIndex--;
        $('#insertPicture').html($('<img>', {
            src: '/send/fullPhoto/' + currentNameSet[currentImageIndex],
            alt: 'photo',
            id: 'fullScreenImage'
        }));

    }

}

export function nextImage() {
    if(currentImageIndex !== (currentNameSet.length - 1)) {
        currentImageIndex++;
        $('#insertPicture').html($('<img>',{src:'/send/fullPhoto/'+ currentNameSet[currentImageIndex], alt: '' , id: 'fullScreenImage'}));
    }
}


$('#closeFullScreenSpan').on('click', function () {
    closeImage();

});

$('#navigateLeftSpan').on('click', function () {
    previousImage();
})

$('#navigateRightSpan').on('click', function () {
    nextImage();
})







/** -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * Album logic
 *
 * */

$('#createAlbumLi').on('click', function () {
    $('#newAlbumLi').toggle()
})

$('#createAlbumInputButton').on('click', async function () {
    let response = await postAlbum($('#albumNameTextInput').val());
    await loadAlbums();
})


async function listAlbumImages(name) {
    var images = await fetchAlbumImages(name);
    return images
}


/** listener on album click*/
$(document).on('click',"a.AlbumListItem" , async function () {

    $('#photo-list').html('');
    $('#deleteOnlyFromAlbumLi').show()
    var albumName = $(this).data("albumname");
    $('#sidebarHeader').text(albumName)
    currentAlbum = albumName;
    $('#nav-brandEditNavbar').text(albumName)
    reloadEditingTools()
    await renderImages();

})





async function loadAlbums() {
    $('#albumList').html('')
    albums = await fetchAlbums();
    for (var i = 0; i < albums.data.length; i++) {
        $('#albumList').append('<li class="albumListItem"><a class="AlbumListItem" data-AlbumName="' + albums.data[i]["name"] + '"> ' + albums.data[i]["name"] + '<i class="fas fa-trash deleteAlbumIcon"></i></a></li>')

    }

}



$('#loadAllImagesLi').on('click', async function () {
    currentAlbum = '';
    $('#deleteOnlyFromAlbumLi').hide()
    $('#nav-brandEditNavbar').text("All images")
    $('#sidebarHeader').text("All Images")
    reloadEditingTools()
    await renderImages()

})

$('#photo-list').on('click', function () {
    $('.dropzone').hide()
})


/**
 * to prevent loading all images in page show , images are loaded when they get on screen
 */
function lazyLoading() {
    var refresh_handler = function(e) {
        var elements = document.querySelectorAll("*[realsrc]");
        for (var i = 0; i < elements.length; i++) {
            var boundingClientRect = elements[i].getBoundingClientRect();
            if (elements[i].hasAttribute("realsrc") && boundingClientRect.top < window.innerHeight) {
                elements[i].setAttribute("src", elements[i].getAttribute("realsrc"));
                elements[i].removeAttribute("realsrc");
            }
        }
    };

    window.addEventListener('scroll', refresh_handler);
    window.addEventListener('load', refresh_handler);
    window.addEventListener('resize', refresh_handler);
}


/**
 * to reset edit navbar data
 */
function reloadEditingTools() {
    selected = []
    $('.fas.fa-check-circle').addClass('far')
    $('.fas.fa-check-circle').removeClass('fas')
    $('#editNavbar').hide()
    $('.dropzone').hide()
}


/**
 *
 * logic for tags
 */

const tagContainer = document.querySelector('#forTagsSearch');
const inputTagsSearch = document.querySelector('#tag-container input');

const tagContainerEdit = document.querySelector('#forTags')
const inputTagEdit = document.querySelector('#addTagInput')

let tags = [];
let inpuTags = []

function createTag(label, classname, attributename) {
    const div = document.createElement('div');
    div.setAttribute('class', attributename);
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeIcon = document.createElement('i');
    closeIcon.setAttribute('class', 'fas fa-times ' + classname);
    closeIcon.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeIcon);
    return div;
}

function clearTags(classname) {
    document.querySelectorAll(classname).forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

function addTags() {

    clearTags('.tag');
    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag, 'IconTagSearch', 'tag'));
    });
}


function addTagsInput() {

    clearTags('.inputTag');
    inpuTags.slice().reverse().forEach(tag => {
        tagContainerEdit.append(createTag(tag, 'IconTagInput', 'inputTag'));
    });
}



inputTagsSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
            e.target.value.split(',').forEach(tag => {
                if (tag !== '') {
                    tags.push(tag);
                }
            });
            addTags();
            inputTagsSearch.value = '';
    }
});


inputTagEdit.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
            e.target.value.split(',').forEach(tag => {
                if (tag !== '') {
                    inpuTags.push(tag);
                }
            });
            console.log(tags)
            addTagsInput();
            inputTagEdit.value = '';
    }
});








document.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.classList.contains('IconTagSearch')) {
        const tagLabel = e.target.getAttribute('data-item');
        const index = tags.indexOf(tagLabel);
        tags = [...tags.slice(0, index), ...tags.slice(index+1)];

    }
    addTags();
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('IconTagInput')) {
        const tagLabel = e.target.getAttribute('data-item');
        const index = inpuTags.indexOf(tagLabel);
        inpuTags = [...inpuTags.slice(0, index), ...inpuTags.slice(index+1)];

    }
    addTagsInput();
})

inputTagsSearch.focus();
inputTagEdit.focus();


/**
 * listeners for tags
 */


$(document).on('click','#addTag', async function () {
    $('#addTagLi').toggle()

})


/**
 * -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * tags button listeners
 */

$(document).on('click', '#addTagButton' , async function () {
    for (var i = 0 ; i < selected.length; i++) {
        await insertTags(selected[i], inpuTags)
    }
    inpuTags = []
    $('#forTags').html('')
    reloadEditingTools()
    await updateCurrentImages()


})

$(document).on('click', '#searchTagsButton', async function() {

    if (tags.length > 0) {
        $('.thumbnailDiv').hide()
    }

    var resultImages = [];
    var hasAll = true
    var tagsLength = tags.length
    for(var i = 0; i < currentImages.length ; i++ ) {
        hasAll = true
        if(currentImages[i]["tags"].length <= 0){
            continue
        }
        for (var j = 0; j < tags.length ; j++) {
            let currentImageTagsLength = currentImages[i]["tags"].length
            for (var x = 0 ; x < currentImages[i]["tags"].length; x++) {
                if((currentImages[i]["tags"][x]["name"] !== tags[j])) {
                    if(x === (currentImageTagsLength - 1)) {
                        hasAll = false
                        break
                    }
                } else {
                    break
                }
            }
          if (!hasAll) {
             break
          }
        }
        if (hasAll) {

            resultImages.push(currentImages[i])

        }
    }




    tags = []
    $('#forTagsSearch').html('')
    for (i = 0 ; i < resultImages.length ; i ++) {
        $('.thumbnailImage').filter(function () {
            return $(this).data('name') === resultImages[i]["originalName"]
        }).parent().show()

    }

    currentNameSet = []
    for(i = 0 ; i < resultImages.length ; i ++) {
        currentNameSet.push( resultImages[i]["originalName"])

    }

    ownedImages = fetchImages()

})






$(document).on('click','#closeNavbar', function () {
    $('#editNavbar').hide()
})



async function updateCurrentImages() {
    var tempImage
    for (var i = 0; i < currentImages.length; i++) {
       tempImage =  await getImageInfo(currentImages[i]["originalName"], "image")
        currentImages[i] = tempImage.data
    }
}


$(document).on('click','#makePublicLi', async function () {
    for (var i = 0 ; i < selected.length; i++) {
        await makePublic(selected[i])
    }
    reloadEditingTools()

})


$(document).on('click','#makePrivateLi', async function () {
    for (var i = 0 ; i < selected.length; i++) {
        await makePrivate(selected[i])
    }
    reloadEditingTools()

})

$(document).on('click', '.deleteAlbumIcon', async function (event) {
    event.stopImmediatePropagation();
    var name = $(this).parent().data('albumname')
    var response = await  deleteAlbum(name)
    if (response.status !== 401 ) {
        $(this).parent().parent().remove()
    }
    $('#loadAllImagesLi').click()

})

$(document).on('click', '#albumListToggler', function () {
    $('#albumList').toggle()
})


$(document).on('click', '#downloadImagesNav' , async function () {
    if (selected.length > 1) {
        await downloadMultipleImages(selected)
        return
    }

        await downloadImage(selected[0])

})








