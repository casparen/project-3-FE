const Helpers = {
    getGiphy: (tag) => {
        return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy%20birthday')
            .then((response) => response.json())
    },
    getCurrentUser: (uid) => {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/${uid}.json`, fetchSettings)
            .then(response => response.json())
    },
};

module.exports = Helpers;