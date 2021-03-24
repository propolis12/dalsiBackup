import axios from "axios";

export async function addComment(comment, filename) {
    return await axios.post('/add/comment/' + filename , {
            "comment": comment,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}