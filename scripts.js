console.log('js is connected!')

let gitHubUrl = "https://api.github.com/users/rlconley"

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
        console.log("Response from GitHub API: ", data)
        // console log the data
    })