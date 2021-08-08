const url = new URL(location);
const params = url.searchParams.get('post');
const post = JSON.parse(params);

console.log(post);
const title = document.getElementById('post-title');
title.innerText = `${post.id}. ${post.title}${post.body}`;

const body = document.getElementById('post-body');
body.innerText = post.body;

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(responce => responce.json())
    .then(comments => {
        console.log(comments);
        const postComments = document.getElementById('post-comments');

        for (const comment of comments) {
            const commentDiv = document.createElement('div');

            const title = document.createElement('h3');
            title.innerText = `${comment.id}.${comment.postId}. ${comment.name}`;

            const body = document.createElement('p');
            body.innerText = comment.body;

            commentDiv.append(title, body);
            postComments.append(commentDiv);
        }
    });
