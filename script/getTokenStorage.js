
const getTokenStorage = () => {
    const token = localStorage.getItem('TOKEN_KEY');
    return token ? `Bearer ${token}` : '';
  };