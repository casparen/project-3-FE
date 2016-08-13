const Helpers = {
    getGiphy: (tag) => {
        return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy%20birthday')
            .then(res => res.json())
    },
    getCurrentUser: (uid) => {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/${uid}.json`, fetchSettings)
            .then(res => res.json())
    },
    getUserGroup: () => {
        return fetch("https://happybday-d595a.firebaseio.com/ga/wdi/robots/users.json")
            .then(res => res.json())
    }
};

module.exports = Helpers;