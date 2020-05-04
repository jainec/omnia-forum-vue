import User from './User'

class Exepction {
    handle(error) {
        this.isExpired(error.response.data.error)
    }

    isExpired(error) {
        if (error == 'Token is expired.') {
            User.logout()
        }
    }
}

export default Exepction = new Exepction()