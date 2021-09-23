export const TOKEN_KEY = 'token'
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const setUserInfo = (data) => {
  localStorage.setItem('userInfo', data);
};

export const _getUserInfo = () => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) return userInfo
  else return false
}

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) return token
  else return false
}
