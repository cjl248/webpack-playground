// import fetch from 'node-fetch'

export default class Fetcher {

  constructor(api) {
    this._API = api
  }

  setAPI(api) {
    this._API = api
  }

  getAPI() {
    return this._API
  }

  async getRequest(endpoint) {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return await fetch(this._API+endpoint, config)
    //   .then(r => r.json())
    //   .then(response => {
    //     console.log(response)
    // })
  }



}
