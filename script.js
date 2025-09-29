document.getElementById('akanForm').addEventListener('submit', function (e) {
  e.preventDefault();


  const birthdateInput = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!birthdateInput) {
    alert('Please select your birthdate.');
    return;
  }

  if (!gender) {
    alert('Please select a gender.');
    return;
  }

  // Convert to Date object
  const birthDate = new Date(birthdateInput);
  const dayOfWeek = birthDate.getDay(); // 0 = Sunday, 6 = Saturday

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let akanName;
  if (gender.value === 'male') {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  document.getElementById('dayOfWeek').innerText = days[dayOfWeek]; 
  document.getElementById('akanName').innerText = akanName;
});
