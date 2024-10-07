# 과제 수정 반영 사항.

## 목차

1. 과제 수정 피드백
2. 수정 후 HTML, CSS코드
3. 결론

<br>

## 과제 수정 피드백

1. `<li>`요소에 `<img>`와 `<span>` 요소를 마크업 했는데 아바타 이미지 하나의 `component(컴포넌트 - 부품)`으로 접근한다면 `<li>`요소가 적절한지 고민해 보기 바람.

> 일단 나는 이 부분을 간과하여 작업을 했던 것 같다. 의미론적인 시맨틱한 마크업만 생각하고, 고민하다 보니 ul > li> img + span으로 마크업을 하였는데 아바타 이미지를 어디에선가 사용한다고 한다면 내가 작업한 마크업으로는 재사용성이 떨어진다고 느꼈다. 그래서 내가 생각한 부분은 이렇게다.
>
> > ul > li의 시맨틱한 구조는 유지하고, img+span 태그를 div로 감싸고 이부분에 class를 추가하여 나중에 다른곳에서도 사용할 수 있게 div 태그를 추가하였다.

<br>

2. img 태그 alt 대체텍스트로 `사용자 A의 아바타`가 적절한가 고민해보기 바람.

> 솔직히 피드백 받은 내용 중 가장 이해가 어려운 부분이다.순서를 매기를 형태로 접근한 것에 데한 부분이 서비스를 이용하는 사용자에 대한 고민을 부족하게 했다는데 사실 이해가 어렵지만 맞는 피드백인 것 같다. 순서로만 접근해서 사용자에게 정보를 주는건 좋지 않다고 생각한다. 어떤 설명을 대체텍스트로 작성해야 할까.. 실제 사용자의 아바타가 노출이 된다고 했을 때 사용자의 이름으로 접근하는게 맞지 않을까 해서 일단 alt값으로는 홍길동의 프로필이라고 정의한 것 같다.

<br>

3. `jpg` 형식의 이미지를 제공하는 것이 성능 관점에서 최선이었을지 고민해보기 바람.

> 이 부분은 jpg 이미지를 webp 이미지로 변환하여 성능 최적화 하는 방법으로 수정하였다.

<br>

4. `loding=lazy` 사용이 적절해는지 고민해보기 바람.

> 이건 정말 내 큰 실수였다. 이미지 성능에 있어 최적화 방법은 `loading=lazy`만 생각이 났었다. 하지만 `loading=lazy`는 모든 이미지를 지연 로드하는 것이 아니라, 화면에 상단 중요한 이미지는 즉시 로드하고, 스크롤 하단의 이미지나 보조적인 이미지는 지연로드를 하는 것이 좋다고 알고 있었는데 지금 이 과제에서 저 이미지들은 상단에 즉시 노출이 되는 이미지인데 왜 지연로드를 하려고 했을까 아차 싶었다. 그래서 `loading=lazy`를 제거하였다.

<br>

5. <span> 요소에 aria-label 속성으로 상태 정보를 제공하고 있으나 해당 정보는 숨김 콘텐츠 기법을 사용하는 방향을 추천하고 싶음.

> 원래 이 방법을 사용하려고 했는데 연습삼아 습관을 들이고자 aria-label 속성을 사용하여 작업을 하였기도 했고, 활성화 비활성화 상태가 각각 나눠져 있었기 때문에 이렇게 작업을 했었다. 일단 피드백 주신대로 `aria-hidden="true"`로 변경하였다.

<br>

6. 마크업에 Pretendard 웹폰트를 사용하기 위한 CSS 속성을 선언하지 않았음. safari 브라우저에서 제목 등의 텍스트가 serif 계열의 글꼴로 렌더링 되고 있음.

> 스니펫에 마크업기본 구조를 저장하고 그걸 바로 사용하다 보니 연결이 되었지만 디자인상에서 텍스트가 없어 사용하지 않았던 것 같다. 굳이 사용하지도 않는 부분으로 인해 웹사이트의 속도를 저하시키는 불필요한 데이터를 만들지 않는게 좋은 것 같다고 느꼈고, 사용하지 않아 이 부분을 제거하였다.

<br>

7. `float`을 적용하기 위한 마크업과 `flex`를 적용하기 위한 마크업을 `따로 구현`한 부분은 아쉬움.
   flex를 지원하지 않는 환경에서 float을 사용한 방법이 적용되도록 하는 것이 필요한데 현재는 float와 flex를 따로 마크업 한 상태로 구현하고 있음.
   @support 규칙`에 대해 찾아보기 바람.

> 솔직하게 말해서 `@support` 규칙을 몰랐을 뿐더러 `flex`를 지원하는 브라우저 환경에서 `flex`를 사용해라 라는 말이 `flex`를 추가해서 사용하라는 말로 느껴졌고, 세세하게 고민해보지 않는 내 잘못이 크다. 그래서 이 부분을 좀 고민을 했다. 내가 느낀건 선생님의 과제 의도는 레거시방법으로 오래된 브라우저에서 지원이 되는 `float`과 최신기술이지만 오래된 브라우저에서는 사용이 제한이 되는 `flex`였다. 먼저 모든 브라우저에서 렌더링 될 수 있는 `float`의 형태로 마크업을 구축하고, `@support`을 활용하여 `display:flex`가 지원 되는 브라우저 환경에서는 `display:flex`속성을 추가하여 보여줘라 라는 의도였다고 느껴져서 그렇게 작업을 하였다.

## 수정 후 HTML, CSS코드

### 💡 HTML

```html
<main class="main">
  <section class="section">
    <h1 class="sr-only">homework avatar Layout</h1>
    <ul class="avatars-list">
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face1.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face2.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle --active" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face3.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face4.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle --active" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face5.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle --active" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face6.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle --active" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face7.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle" aria-hidden="true"></span>
        </div>
      </li>
      <li>
        <div class="avatars-state">
          <img src="./../assets/images/face8.webp" alt="홍길동의 프로필" width="64" heigth="64" />
          <span class="circle" aria-hidden="true"></span>
        </div>
      </li>
    </ul>
  </section>
</main>
```

### 💡 CSS

```css
/* Reset css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.avatars-list {
  overflow: hidden;
  width: 396px;
  margin: 20px auto;
  > li {
    position: relative;
    float: left;
    margin: 0 20px 20px 0;

    &:nth-of-type(4),
    &:nth-of-type(8) {
      margin-right: 0;
    }
    &:nth-of-type(5),
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(8) {
      margin-bottom: 0;
    }
  }
}

.avatars-state {
  img {
    display: block;
    border-radius: 1000px;
  }
}

/* 활성화 비활성화 상태 */
.circle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 18px;
  aspect-ratio: 1;
  border-radius: 1000px;
  border: 1px solid #fff;
  background-color: #dbdbdb;
}
.--active {
  background-color: #4cfe88;
}

/* flex 브라우저 환경 */
@supports (display: flex) {
  .avatars-list {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    > li {
      position: relative;
      float: left;
      margin: 0;
    }
  }
}
```

## 결론

최대한 이번 과제를 하면서 신경쓴다고 신경을 썼던 것 같은데, 사용자 측면에서 고민을 좀 많이 해야 겠다는 생각을 했고, 또 과제를 하면서 그냥 빨리 구현해야지가 아닌 과제 주제에 대한 이유를 좀 생각을 더 하면서 고민을 많이 해야겠다는 생각이 들었다. 단순히 빨리 과제를 해결해야지가 아닌 빠르게 작업을 해도 작업 후에 더 좋은 방향으로 나아가기 위한 리펙토링을 꾸준하게 하고 만족을 하지 말아야 되겠다고 느꼈다. 솔직히 이번 과제 이후로 자극을 많이 받았고, 머리를 강하게 맞은 느낌이 들었다.
