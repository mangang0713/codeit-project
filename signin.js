const myInput = document.querySelector('.sign-input');
const errorMessage = document.getElementById('error-message');

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


myInput.addEventListener('focusout', function() {
  if (myInput.value.trim() === '') {
    errorMessage.textContent = '아래에 이메일 주소를 입력해 주세요.';
    errorMessage.style.display = 'block';
  } else if (!isValidEmail(myInput.value.trim())) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});


