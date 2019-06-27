export function authHeader() {
    // Функция возвращает заголовок с jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token};
    } else {
        return {};
    }
}
