console.log('js is connected!')

const profile = document.querySelector('#profile')
const gitHubUrl = "https://api.github.com/users/rlconley/repos"
// url to get my repos

fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (response) {
        // the response is the promised data
        return response.json()
        // put the response in JSON format
    })
    .then(function (data) {
        // data refers to what the above promise returned (response.json())
        // console log the data
        buildRepos(data)

    })

function buildRepos(repoData) {
    profileData.map(function (repo) {
        profile.appendChild(buildRepoElement(repo.name))
    })
    // create elements and add them to the page
    // profileData is the data from the promise
}

function buildReposLoop(profileData) {
    // equivalent to buildRepos but uses loops

    for (let repo of profileData) {
        profile.appendChild(buildRepoElement(repo.name))
    }
}



function buildRepoElement(name) {
    let el = document.createElement('p')
    el.innerText = name;
    return el
    // returns a new element for a repo, like a customer
}