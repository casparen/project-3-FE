export default {
    getRandom: function (tag) {
        const fetchSettings = {method: 'GET'}
        return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy%20birthday', fetchSettings)
            .then((response) => response.json())
    },
    addToDB: function (data) {
        console.log("helper", data);
        const fetchSettings = {
            method: 'PATCH',
            body: JSON.stringify(data),
        };
        return fetch('https://happybday-d595a.firebaseio.com/ga/wdi/robots.json', fetchSettings)
            .then(response => response.json())
    },

    checkForMatch: function () {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/.json`, fetchSettings)
            .then(response => response.json())
    },
    // newPost: function(message) {
    //     const fetchSettings = {method: "PUT"};
    //     return fetch('', {message}, fetchSettings)
    //     .then((response) => response.json());
    // },
}
