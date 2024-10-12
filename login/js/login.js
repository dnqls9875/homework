const errorMessage = (element, isVisible) => {
  if (isVisible) {
    element.style.opacity = "1";
    element.style.height = "auto";
    element.style.visibility = "visible";
    element.style.paddingBlockStart = "0.4375rem";
  } else {
    element.style.opacity = "0";
    element.style.height = "0";
    element.style.visibility = "hidden";
    element.style.paddingBlockStart = "0";
  }
};

document.getElementById("loginForm").addEventListener("submit", (event) => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  const trimmedUsername = usernameInput.value.trim();
  const trimmedPassword = passwordInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // 유효성 검사: 이메일 입력 확인
  if (!trimmedUsername) {
    errorMessage(usernameError, true); // 에러 메시지 표시
    usernameInput.setCustomValidity("이메일을 입력해 주세요."); // 사용자 정의 메시지 설정
    isValid = false;
  } else if (!emailPattern.test(trimmedUsername)) {
    errorMessage(usernameError, true);
    usernameInput.setCustomValidity("유효한 이메일을 입력해 주세요.");
    isValid = false;
  } else {
    errorMessage(usernameError, false); // 입력이 유효하면 에러 메시지 숨김
    usernameInput.setCustomValidity(""); // 사용자 정의 메시지 초기화
  }

  // 유효성 검사: 비밀번호 입력 확인
  if (!trimmedPassword) {
    errorMessage(passwordError, true); // 에러 메시지 표시
    passwordInput.setCustomValidity("비밀번호를 입력해 주세요."); // 사용자 정의 메시지 설정
    isValid = false;
  } else if (trimmedPassword.length < 8) {
    errorMessage(passwordError, true);
    passwordInput.setCustomValidity("비밀번호는 8자리 이상이어야 합니다.");
    isValid = false;
  } else {
    errorMessage(passwordError, false); // 입력이 유효하면 에러 메시지 숨김
    passwordInput.setCustomValidity(""); // 사용자 정의 메시지 초기화
  }

  if (!isValid) {
    event.preventDefault(); // 폼 제출 막기
    usernameInput.reportValidity(); // 기본 알림을 보이게 함
    passwordInput.reportValidity(); //
  } else {
    errorMessage(usernameError, false); // 유효하면 에러 메시지 숨김
    errorMessage(passwordError, false); //
  }
});
// const errorMessage = (element, isVisible) => {
//   if (isVisible) {
//     element.style.opacity = "1";
//     element.style.height = "auto";
//     element.style.paddingBlockStart = "0.4375rem";
//   } else {
//     element.style.opacity = "0";
//     element.style.height = "0";
//     element.style.paddingBlockStart = "0";
//   }
// };

// document.getElementById("loginForm").addEventListener("submit", (event) => {
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");
//   const usernameError = document.getElementById("usernameError");
//   const passwordError = document.getElementById("passwordError");

//   // 변수 초기값 true
//   let isValid = true;

//   // 입력 값의 trim 처리
//   const trimmedUsername = usernameInput.value.trim();
//   const trimmedPassword = passwordInput.value.trim();

//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // 이메일 정규 표현식

//   // 유효성 검사: 이메일 입력 확인
//   if (!trimmedUsername || !emailPattern.test(trimmedUsername)) {
//     errorMessage(usernameError, true); // 에러 메시지 표시
//     isValid = false;
//   } else {
//     errorMessage(usernameError, false); // 입력이 유효하면 에러 메시지 숨김
//   }

//   // 유효성 검사: 비밀번호 입력 확인
//   if (!trimmedPassword || trimmedPassword.length < 8) {
//     errorMessage(passwordError, true); // 에러 메시지 표시
//     isValid = false;
//   } else {
//     errorMessage(passwordError, false); // 입력이 유효하면 에러 메시지 숨김
//   }

//   if (!isValid) {
//     event.preventDefault(); // 폼 제출 막는 함수
//   }
// });

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
