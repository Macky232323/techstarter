function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatpassword = document.getElementById('repeatpassword').value;
  const firstname = document.getElementById('firstname').value;
  const familyname = document.getElementById('familyname').value;

  if (password !== repeatpassword) {
      alert('Passwörter stimmen nicht überein.');
      return;
  }

  if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
      alert('Ungültige E-Mail-Adresse.');
      return;
  }

  if (email.length < 1 || password.length < 1 || repeatpassword.length < 1 || firstname.length < 1 || familyname.length < 1) {
    alert('Bitte füllen sie alle Felder aus.');
    return;
  }

  const userData = {
      email: email,
      firstname: firstname,
      familyname: familyname,
      password: password
  };

  console.log(JSON.stringify(userData, null, 2));
  alert(JSON.stringify(userData, null, 2));
}