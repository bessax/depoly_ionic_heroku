async function getToken(userData){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var retorno;

    var raw = JSON.stringify(userData);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
    fetch("http://countertopstores.com/api/Auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        retorno = result}
       )
      .catch(error => retorno = error);
    
    return retorno;
}