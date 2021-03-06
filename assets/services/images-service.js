import axios from "axios";
import $ from "jquery";


export function fetchOwnedImages() {
   return axios.get('/owned/images');

}


export function fetchImage(filename) {
    return axios.get('/photos/'.filename);
}

/*export function fetchLatestImages() {
    return axios.get('/latest/uploaded/photo');
}*/

export function deleteImage(name) {
    return axios.delete('/delete/image/'+ name);
}

export function fetchImages() {
    return axios.get('/get/images');
}

export function getImageInfo(filename, group) {
    return axios.post('/get/image/info/' + filename ,{
        "group": group,
    })
}

export function makePublic(filename) {
    return axios.post('/make/public/' + filename)
}

export function makePrivate(filename) {
    return axios.post('/make/private/' + filename)
}
export function fetchPublicImages() {
    return axios.get('/get/public/images')
}

export function likePhoto(filename) {
    return axios.post('/like/photo/' + filename)
}

export function fetchLikedImages() {
    return axios.get('/get/liked/images')
}

export function unlikePhoto(filename) {
    return axios.post('/unlike/photo/' + filename)
}

export function downloadImage(filename) {
    return location.href = ('/download/image/' + filename)
    //return axios.get('/download/image/' + filename)

}

export function downloadMultipleImages(filenames) {
    return location.href = ('download/multiple?array=' + filenames)
   /* return axios.post("/download/multiple", {
        "filenames": filenames
    }).then( e => location.href = ("/"))*/
}


