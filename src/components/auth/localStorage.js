export const loadAuthData = () => {
    try {
        return JSON.parse(localStorage.getItem("authData"));
    } catch (e) {
        console.error(e);
    }
};

export const saveAuthData = authData => {
    try {
        localStorage.setItem("authData", JSON.stringify(authData));
    } catch (e) {
        console.error(e);
    }
};

export const clearAuthData = () => {
    try {
        localStorage.removeItem("authData");
    } catch (e) {
        console.error(e);
    }
};