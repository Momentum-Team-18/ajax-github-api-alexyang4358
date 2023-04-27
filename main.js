// fetch information from alexyang4358 github profile
// location, url, username, repos, avatar image
// create a for loop to gather attributes

let mainContainer = document.querySelector("#mainContainer");
let header = document.querySelector("#header");
let subHeader = document.querySelector("#subHeader");
let repoContainer = document.querySelector("#repoContainer")
let URL = "https://api.github.com/users/alexyang4358";

fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})

    .then((response) => {
        console.log(response)
        return response.json();
        //meta data of alexyang4358
})
    .then((body) => {
        console.log(body);
        return body;
        //attributes from alexyang4358 ready
})

.then((attributes) => {
    
    let imageURL = document.createElement("img");
        imageURL.src = `${attributes.avatar_url}`;
        header.appendChild(imageURL);
        imageURL.classList.add("profileImage")
    
    let name = document.createElement("p");
        name.innerText = `${attributes.name}`;
        header.appendChild(name);
        name.classList.add("header")

    let location = document.createElement("p");
        location.innerText = `Location: ${attributes.location}`;
        subHeader.appendChild(location);
        location.classList.add("subHeader")

    let login = document.createElement("p");
        login.innerText = `GitHub username: ${attributes.login}`;
        subHeader.appendChild(login);
        login.classList.add("subHeader");

    let webURL = document.createElement("p");
        webURL.innerText = `GitHub URL: ${attributes.html_url}`;
        subHeader.appendChild(webURL);
        webURL.classList.add("subHeader");

    let repoURL = document.createElement("h3");
        repoURL.innerText = `${attributes.repos_url}`;
        repoContainer.appendChild(repoURL);
        repoURL.classList.add("repoContainer");
});

//


// console.log(attributes.location);
// console.log(attributes.name);
// console.log(attributes.login);
// console.log(attributes.repos_url);
// console.log(attributes.html_url);
// console.log(attributes.avatar_url);






// .then((attributes) => {
//     for (let details of attributes.location) {
//         console.log(details.location);
//         let name = document.createElement("h3");
//         name.innerText = `${attributes.location}`;
//         mainContainer.appendChild(name);
//     }
// })


