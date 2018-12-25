import Cookies from 'js-cookie'

const authToken = {
    tokenTimeoutMethod: 'getNewToken',

    loginKey: 'isLogin',

    getToken: function () {
        return Cookies.get('token');
    },

    isLogin: function () {
        return Cookies.get(this.isLogin);
    },

    setToken: function (token) {
        var maxAge = new Date(new Date().getTime() + 30 * 1000);
        Cookies.set('token', token, { expires: maxAge });
    },

    setLoginStatus: function () {
        var maxAge = new Date(new Date().getTime() + 30 * 60 * 1000);
        Cookies.set(this.loginKey, 'true', { expires: maxAge });
    },

    removeToken: function () {
        Cookies.remove('token');
    },

    removeLoginStatus: function () {
        Cookies.remove(this.loginKey);
    },
}

export default authToken