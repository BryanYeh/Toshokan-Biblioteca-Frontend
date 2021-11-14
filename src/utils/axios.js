export function authHeader() {
    const token = store.getters['user/access_token']
    if (token) {
        return {
            Authorization: `Bearer ${token}`,
        }
    }
    return {}
}

export function contentHeader() {
    return {
        'Content-Type': 'application/json',
    }
}

export function axiosConfig() {
    return {
        headers: {
            ...authHeader(),
            ...contentHeader(),
        },
        baseURL: import.meta.env.VITE_API_DOMAIN_ENDPOINT,
    }
}

export function urlConfig() {
    return {
        baseURL: import.meta.env.VITE_API_DOMAIN,
    }
}