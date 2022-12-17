const loginToWallet =  () => {
// funkcja podpinajaca metamask do strony i logujaca w konsoli adres walletu
window.ethereum.enable().then(async function(accounts) {
    await console.log(accounts)
  });
}


    
