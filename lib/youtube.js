const scopes = [
    "youtube",
    "youtube.readonly",
].join(',');

const params = {
    scope: scopes
}

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://www.googleapis.com/auth/${queryParamString}`;

export { LOGIN_URL };