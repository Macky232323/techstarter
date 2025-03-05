function validateForm() {
  const email = document.getElementById('email').value;
  const savedemail = "alex@ich.de";
  const password = document.getElementById('password').value;
  const savedpassword = "1234";
  
  if (password !== savedpassword) {
      alert('Passwörter stimmen nicht überein.');
      return;
  }

  if (email !== savedemail) {
    alert('Emailadresse stimmen nicht überein.');
    return;
}

  console.log(`Der Bneutzer hat sich erflogreich mit ${email} und ${password} angemeldet`);
  alert(`Der Bneutzer hat sich erflogreich mit ${email} und ${password} angemeldet`);
}