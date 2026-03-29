function normalizeUrl(url) {
    return (url || '').trim().replace(/\/+$/, '');
}

export function getBackendBaseUrl() {
    if (process.env.REACT_APP_BACKEND_URL) {
        return normalizeUrl(process.env.REACT_APP_BACKEND_URL);
    }

    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:5000';
    }

    return '';
}
