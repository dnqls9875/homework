const errorMessage = (element, isVisible) => {
  if (isVisible) {
    element.style.opacity = "1";
    element.style.height = "auto";
    element.style.paddingBlockStart = "0.4375rem";
  } else {
    element.style.opacity = "0";
    element.style.height = "0";
    element.style.paddingBlockStart = "0";
  }
};

document.getElementById("loginForm").addEventListener("submit", (event) => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  // 변수 초기값 true
  let isValid = true;

  // 입력 값의 trim 처리
  const trimmedUsername = usernameInput.value.trim();
  const trimmedPassword = passwordInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // 이메일 정규 표현식

  // 유효성 검사: 이메일 입력 확인
  if (!trimmedUsername || !emailPattern.test(trimmedUsername)) {
    errorMessage(usernameError, true); // 에러 메시지 표시
    isValid = false;
  } else {
    errorMessage(usernameError, false); // 입력이 유효하면 에러 메시지 숨김
  }

  // 유효성 검사: 비밀번호 입력 확인
  if (!trimmedPassword || trimmedPassword.length < 10) {
    errorMessage(passwordError, true); // 에러 메시지 표시
    isValid = false;
  } else {
    errorMessage(passwordError, false); // 입력이 유효하면 에러 메시지 숨김
  }

  if (!isValid) {
    event.preventDefault(); // 폼 제출 막는 함수
  }
});

const switchButton = document.getElementById("switch");
switchButton.addEventListener("click", () => {
  if (switchButton.textContent === "off") {
    switchButton.textContent = "on";
    switchButton.style.color = "#03CF5D";
  } else {
    switchButton.textContent = "off";
    switchButton.style.color = "#999";
  }
});
