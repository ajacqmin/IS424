// Part1
// fetch("https://api.github.com/users/ajacqmin")
//     .then((response) => response.json())
//     .then((data) =>
//         // console.log(data)
//         // console.log(data.public_repos)
//         // console.log(data.followers)
//     );


// fetch("https://api.github.com/users/ajacqmin/followers")
//     .then((response) => response.json())
//     .then((data) =>
//         data.forEach((follower) => {
//             console.log("Follower id: ", follower.id);
//         })
//     );

// Part 2
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((comments) => console.log(comments.length));

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((photos) => console.log(photos.length));

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//         users.forEach((user) => {
//             console.log(user.name, ",", user.email);
//         })
//     );

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//         users.forEach((user) => {
//             console.log(user.name, ",", user.address.city);
//         })
//     );

// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//     .then((response) => response.json())
//     .then((todos) => console.log(todos.length));


// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//     .then((response) => response.json())
//     .then((todos) =>
//         todos.forEach((todo) => {
//             console.log(todo.id, todo.title);
//         })
//     );

// fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
//     .then((response) => response.json())
//     .then((todos) =>
//         todos.forEach((todo) => {
//             fetch(`https://jsonplaceholder.typicode.com/users?id=${todo.userId}`)
//                 .then((response) => response.json())
//                 .then((user) => console.log(user[0].name));
//         })
//     );


fetch("https://jsonplaceholder.typicode.com/albums?title=quidem molestiae enim")
    .then((response) => response.json())
    .then((album) =>
        fetch(`https://jsonplaceholder.typicode.com/users?id=${album[0].userId}`)
        .then((response) => response.json())
        .then((user) =>
            console.log("Owner of quidem molestiae enim:", user[0].name)
        )
    );