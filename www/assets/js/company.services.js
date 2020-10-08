function addCompany(company){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var retorno;

    var raw = JSON.stringify(company);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://countertopstores.com/api/Companies/", requestOptions)
        .then(response => response.text())
        .then(result => retorno = "passed")
        .catch(error => retorno = "error");
    //console.log(company);
    return retorno;
}