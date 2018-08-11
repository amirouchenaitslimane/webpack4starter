module.exports = class Github{
    constructor(clientId,clientSecret){
        this.client_id = clientId
        this.client_secret = clientSecret
    }
    async fuetchUser(user){
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        return await userDataRequest.json()
    }

     async getRepos(user){
        const userDataRequestRepos = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}/repos`)
        return await userDataRequestRepos.json()
    }

}