export default {
  getRandom: function (tag){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy birthday' + tag, fetchSettings).then((response) => {
      return response.json();
    })
  }
}
