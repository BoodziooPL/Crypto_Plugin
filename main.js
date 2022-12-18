const btnExpand = document.querySelector('.btn-expand');
const content = document.querySelector('.content');

const visible = () => {
    content.classList.toggle('info')
    content.classList.toggle('content')
}

btnExpand.addEventListener('click', visible)

const btnConnect = document.querySelector('.btnConnect');
btnConnect.innerText = 'Login with Metamask';

let loggedIn = false;

const loginToWallet = () => {
  if (!loggedIn) {
    window.ethereum.sendAsync({method: 'eth_requestAccounts'}, function(error, result) {
      const address = result.result[0];
      const shortenedAddress = address.substring(0, 5) + '...' + address.substring(address.length - 4);
      btnConnect.innerHTML = shortenedAddress;
      loggedIn = true;
    });
  } else {
    logoutFromWallet();
  }
}

const logoutFromWallet = () => {
  window.ethereum.sendAsync({method: 'eth_requestAccounts', params: []}, function(error, result) {
    loggedIn = false;
    btnConnect.innerHTML = 'Login with Metamask';
  });
}

btnConnect.addEventListener('click', loginToWallet);




function handleFormSubmit(event) {
    event.preventDefault(); // zapobiegaj domyślnemu przeładowaniu strony po wysłaniu formularza
    const formValue = document.querySelector('input[type="number"]').value;
    console.log(formValue); // wyświetl wartość w konsoli
    // reszta kodu, który wysyła wartość na blockchain itp.
  }
  


  btnConnect.addEventListener('click', loginToWallet)