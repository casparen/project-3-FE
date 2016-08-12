export default {
    getUser: function () {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/-KOz5W2cMK6GITW4E3pc.json`, fetchSettings)
            .then(response => response.json())
    }
}
