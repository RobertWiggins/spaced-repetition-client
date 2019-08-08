import config from '../config';
import TokenService from './token-service'

const LanguageApiService = {
  getWords() {
    console.log('Getting words');
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getHead() {
    console.log('Getting words');
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  submitGuess(guess) {
    console.log('fetching guess: ', guess)
    let body = JSON.stringify(
      { 
        'guess': guess 
      });

    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: body,
    })
      .then(res => {
        if (!res.ok) {
          console.log('res error: ', res)
          return res.json().then(e => Promise.reject(e))
        }
        console.log('res: ', res);
        return res.json()
      }).then(data => {
        // console.log('data: ', data)
      }).catch(e => console.error(e)) 
      
  }
}

export default LanguageApiService;