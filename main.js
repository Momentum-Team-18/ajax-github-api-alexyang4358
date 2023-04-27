// fetch information from alexyang4358 github profile
// location, url, username, repos, avatar image
// create a for loop to gather attributes


let mainContainer = document.querySelector("#mainContainer");
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
    let name = document.createElement("h3");
        name.innerText = `${attributes.name}`;
        mainContainer.appendChild(name);
    let location = document.createElement("h3");
        location.innerText = `${attributes.location}`;
        mainContainer.appendChild(location);
    let login = document.createElement("h3");
        login.innerText = `${attributes.login}`;
        mainContainer.appendChild(login);
    let webURL = document.createElement("h3");
        webURL.innerText = `${attributes.html_url}`;
        mainContainer.appendChild(webURL);
    let repoURL = document.createElement("h3");
        repoURL.innerText = `${attributes.repos_url}`;
        mainContainer.appendChild(repoURL);
    let imageURL = document.createElement("h3");
        imageURL.innerText = `${attributes.avatar_url}`;
        mainContainer.appendChild(imageURL);
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


