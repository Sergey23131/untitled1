const url = new URL(location);
const userJson = url.searchParams.get('user');
const user = JSON.parse(userJson);

console.log(user);

const userName = document.getElementById('user-name');
userName.innerText = `${user.id}. ${user.name}`;
let user_n = document.getElementById('user-name');
user_n.innerText = `Username: ${user.username}`;
let email = document.getElementById('user-email');
email.innerText = `Email: ${user.email}`;
let phone = document.getElementById('user-phone');
    phone.innerText = `Phone: ${user.phone}`;
let web = document.getElementById('user-website');
web.innerText = `Website: ${user.website}`;
let company = document.getElementById('user-company');
company.innerText = `Name: ${user.company.name}`;
let phrase = document.getElementById('user-phrase');
    phrase.innerText = `Catch phrase: ${user.company.catchPhrase}`;
let bs = document.getElementById('user-bs');
    bs.innerText = `Bs: ${user.company.bs}`;
let street = document.getElementById('street');
street.innerText = `Street: ${user.address.street}`;
let suite = document.getElementById('suite');
    suite.innerText = `Suite: ${user.address.suite}`;
let city_u = document.getElementById('city')
     city_u.innerText = `City: ${user.address.city}`;
let lat = document.getElementById('lat');
    lat.innerText = `Lat: ${user.address.geo.lat}`;
let lng = document.getElementById('lng');
    lng.innerText = `Lng: ${user.address.geo.lng}`;

const getPostsBtn = document.getElementById('get-posts');
getPostsBtn.addEventListener('click', getPosts, { once: true });

function getPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(responce => responce.json())
        .then(posts => {

            const postsDiv = document.getElementById('user-posts');

            for (const post of posts) {
                const postDiv = document.createElement('div');

                const postInfo = document.createElement('div');
                postInfo.innerText = `${post.id}.${post.userId}. ${post.title}`;

                const postDetailsA = document.createElement('a');
                postDetailsA.innerText = 'Details';
                postDetailsA.href = `post-details.html?post=${JSON.stringify(post)}`;

                postDiv.append(postInfo, postDetailsA);
                postsDiv.append(postDiv);
            }
        });

}


