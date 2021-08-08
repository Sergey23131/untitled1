
const userBox= document.getElementsByClassName('users-box')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users=>{

        for (const user of users){

            let use = document.createElement('a');
            use.classList.add('user_link');
            use.innerText = 'Details';
            use.href = `user-details.html?user=${JSON.stringify(user)}`;
            let box = document.createElement('div');
            box.classList.add('wrap');
            let divs = document.createElement('p');
            divs.classList.add('user_name');
            divs.innerText = `${user.id} - ${user.name}`;
            box.append(divs);
            box.append(use);
            userBox.append(box);

        }

    });
