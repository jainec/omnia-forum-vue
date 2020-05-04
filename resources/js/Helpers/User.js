import Token from './Token'
import AppStorage from './AppStorage'


class User {
    login(form) {
        axios.post('http://127.0.0.1:8000/api/auth/login', form)
            .then(res => this.responseAfterLogin(res))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        if (Token.isValid(access_token)) {
            AppStorage.store(res.data.user, access_token);
            window.location = '/home'
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken)
            return Token.isValid(storedToken) ? true : this.logout();
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear()
        window.location = '/home'
    }

    name() {
        if (this.loggedIn())
            return AppStorage.getUser();
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(user_id) {
        return this.id() == user_id ? true : false;
    }

    admin() {
        return this.id() == 11 ? true : false;
    }
}

export default User = new User();