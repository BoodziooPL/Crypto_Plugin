const loginToWallet =  () => {
    
window.ethereum.enable().then(async function(accounts) {
    await console.log(accounts)
  });
}


    
