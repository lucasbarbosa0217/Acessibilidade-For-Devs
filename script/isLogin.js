tokenCodificado = HttpClient.api.defaults.headers.common.Authorization =
  getTokenStorage();
var isLogged = false;
if (tokenCodificado == "") {
  isLogged = false;
} else {
  decodedToken = parseJwt(
    (HttpClient.api.defaults.headers.common.Authorization = getTokenStorage())
  );
  if (decodedToken.exp > Date.now()) {
    isLogged = true;
  } else {
    isLogged == false;
  }
}
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
