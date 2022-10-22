
const getTokenStorage = () => {
    const token = localStorage.getItem('TOKEN_KEY');
    return token ? `Bearer ${token}` : '';
  };

const getUserName = () => {
  const nome = localStorage.getItem('USERNAME')
  return nome;
}