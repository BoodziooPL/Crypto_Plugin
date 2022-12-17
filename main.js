const loginToWallet =  () => {
// funkcja podpinajaca metamask do strony i logujaca w konsoli adres walletu
window.ethereum.sendAsync({method: 'eth_requestAccounts'}, function(error, result) {
    console.log(result.result)
  });
}


    
