const myInputEmail = document.querySelector('.input-email');
const myInputPassword = document.querySelector('.input-password');
const errorMessageId = document.getElementById('error-message-id');
const errorMessagePw = document.getElementById('error-message-pw');
const login = document.querySelector('.cta');
const answerEmail = 'test@codeit.com';
const answerPassword = 'codeit101';

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

myInputEmail.addEventListener('focusout', function() {
  if (myInputEmail.value.trim() === '') {
    errorMessageId.textContent = '이메일 주소를 입력해 주세요.';
    errorMessageId.style.display = 'block';
  } else if (!isValidEmail(myInputEmail.value.trim())) {
    errorMessageId.textContent = '올바른 이메일 주소가 아닙니다.';
    errorMessageId.style.display = 'block';
  } else {
    errorMessageId.style.display = 'none';
  }
});

myInputPassword.addEventListener('focusout', function() {
  if (myInputPassword.value.trim() === '') {
    errorMessagePw.textContent = '비밀번호를 입력해 주세요.';
    errorMessagePw.style.display = 'block';
  } else {
    errorMessagePw.style.display = 'none';
  }
});

login.addEventListener('click', function() { 
  if (myInputEmail.value === answerEmail && myInputPassword.value == answerPassword) {
    window.location.href = '/folder';
  } else {
    errorMessageId.textContent = '이메일을 확인해 주세요.';
    errorMessageId.style.display = 'block';
    errorMessagePw.textContent = '비밀번호를 확인해 주세요.';
    errorMessagePw.style.display = 'block';
  }
});

