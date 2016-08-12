export default {
    getUser: function () {
        const fetchSettings = {method: 'GET'};
        return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/-KOz5W2cMK6GITW4E3pc.json`, fetchSettings)
            .then(response => response.json())
    },
    updateProfile: function (data) {
      const fetchSettings = {
        method: 'PATCH',
        body: JSON.stringify(data)
    }
      return fetch(`https://happybday-d595a.firebaseio.com/ga/wdi/robots/users/-KOz5W2cMK6GITW4E3pc.json`, fetchSettings).then(response => {
        return response.json();
      })
    }
}
