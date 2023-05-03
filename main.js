// fetch information from alexyang4358 github profile
// location, url, username, repos, avatar image
// create a for loop to gather attributes

let mainContainer = document.querySelector("#mainContainer");
let header = document.querySelector("#header");
let subHeader = document.querySelector("#subHeader");
let repoContainer = document.querySelector("#repoContainer");
let repoTitle =document.querySelector("#repoTitle");
let URL = "https://api.github.com/users/alexyang4358";
let rURL = "https://api.github.com/users/alexyang4358/repos";

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
    
    let name = document.createElement("h3");
        name.innerText = `${attributes.name}`;
        header.appendChild(name);
        name.classList.add("header")

    let location = document.createElement("p");
        location.innerText = `Location: ${attributes.location}`;
        subHeader.appendChild(location);
        location.classList.add("subHeader");

    let login = document.createElement("p");
        login.innerText = `GitHub UserName: ${attributes.login}`;
        subHeader.appendChild(login);
        login.classList.add("subHeader");

    let webURL = document.createElement("a");
        webURL.innerText = attributes.login;
        webURL.href = `${attributes.html_url}`;
        subHeader.appendChild(webURL);
        webURL.classList.add("subHeader");
});

//=============== fetch get request

fetch(rURL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
// initiates response from rURL. the "GET" method is used to retrieve data, 
// while setting content-type to json allows us to retrieve that data in text format.
// defines parameters of fetch request

.then((response) => {
    console.log(response)
    return response.json();
})
// next the .then function(method) allows us to handle the delivered response.
// this also returns the response as an object, indicated by the curly brackets.
// inside the object is data that we want to access.

.then((body) => {
    console.log(body);
    return body;
})
// to access the data for this project we run the function above.
// when we console.log body, we get an array of javascript objects.
// in this case, all of the repositories i've uploaded to github.
// each object in the array have key-value pairs that we want to display on our page.

.then((parsedRepos) => {
    for (let repos of parsedRepos) {
    console.log(repos);
        let reposEl = document.createElement("a");
        reposEl.href = repos.html_url;
        reposEl.innerText = repos.name;
        repoContainer.appendChild(reposEl);
    }
});

// this for of loop above is able to sequentially cycle through objects (repo) from array (parsedRepos).
// for the first object in the array, this loop is creating an "a" tag, 
// extracting the URL (html_url) and displaying the url as project name (name).
// then the loop does the same for the remaining objects in parsedRepos.
// by using dot notation i was able to target key-value pairs(html_url & name) within parsedRepos.
// for the link destination - repos.html_url // for the link display name - repos.name
// however, if i wanted to display the id# i could of done repos.id.
// lastly i took my parent (repoContainer) and appended a new child (reposEl).


// to extract the key-value pairs within the object i made a for of loop.
// repos receives a value from each object in the array (parsedRepos).
// for this section i needed the "html_url" and "name" to display on the page.
// in order to do this i defined reposEl as a variable that creates an "a" tag.
// anchor tags have two components: the "href" and "innerText".
// to assign these values to reposEl i used dot notation to target the key.
// for the link destination - repos.html_url // for the link display name - repos.name
// lastly i took my parent (repoContainer) and appended a new child (reposEl).


