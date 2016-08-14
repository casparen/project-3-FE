const Helpers = {
    // to giphy server
    getGiphy: (tag) => {
        return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy%20birthday')
            .then(res => res.json())
    },
    // to firebase
    getCurrentUser: (uid) => {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/${uid}.json`, fetchSettings)
            .then(res => res.json())
    },
    updateCurrentUser: (uid, data) => {
        const fetchSettings = {method: 'PATCH', body: JSON.stringify(data)};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/${uid}.json`, fetchSettings)
            .then(res => res.json())
    },
    getUserGroup: () => {
        return fetch("https://happybday-d595a.firebaseio.com/ga/wdi/robots/users.json")
            .then(res => res.json())
    },
    // to backend server
    sendMessage: (data) => {
        const fetchSettings = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        };
        return fetch("http://immense-garden-30944.herokuapp.com/message", fetchSettings)
    }

};

module.exports = Helpers;
