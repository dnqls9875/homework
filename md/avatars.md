# 2주차 과제 float, flex 사용하여 레이아웃 만들기

### float, flex 이용하여 layout 구성

일단 `float`를 현업에서도 사용하지 않았고, 주로 `flex` , `grid`를 이용해 레이아웃을 작업하여서 사용해 본지 너무 오래되어 정말 오래간만에 사용해서 신선하게 다가왔다.

### float의 장단점

#### 장점

- 비교적 간단하게 레이아웃을 만들 수 있다.
- 오래된 브라우저에서 사용하던 방법으로, 특정 상황에서는 유용하게 사용 할 수 있다.

#### 단점

- 현대 웹 개발에서는 `flexbox`나 `grid`와 같은 더 강력하고 유연한 레이아웃 방법이 있기 때문에, `float`은 레거시 방법으로 된다.
- `float` 요소가 포함된 부모 요소는 자식 요소를 감싸지 않게 되어, 부모의 높이가 0이 될 수 있습니다. 이를 해결하기 위해 clearfix와 같은 추가적인 CSS를 사용해야 한다.
- 여러 개의 `float` 요소를 정렬할 때, 코드가 복잡해질 수 있고, 의도하지 않은 레이아웃 문제를 초래할 수 있어 유지보수가 어려워질 수 있다.
- 레이아웃을 만들기 위해 많은 CSS를 작성해야 할 수 있어, 코드의 가독성이 떨어질 수 있다.

❔❓ 레거시 방법 : **레거시 방법(legacy method)** 은 최신 기술이나 방법론이 등장하기 이전에 사용되던 구식 또는 전통적인 접근 방식을 의미한다.

일단 이렇듯 레이아웃을 처음 배울 때 float 속성을 이용해서 작업을 했지만 단점이 치명적이여서 현업에서는 주로 `flexbox` , `gird`를 자주 사용했던 것 같다. 그래도 슬비쌤께서 불편함을 먼저 겪고, 이를 보완하는 것 또한 도움이 된다고 했으니 이번 과제 또한 도움이 많이 될 것 같다. 말이 너무 길었지만 내가 작성한 코드를 리뷰해보겠다.

#### 💡html

```html
<main class="main">
  <section class="float-section">
    <h2>float Layout</h2>
    <ul class="avatars-list">
      <li>
        <img src="./../assets/avatars/face1.jpg" alt="사용자 A의 아바타" loading="lazy" width="64" heigth="64" />
        <span class="circle" aria-label="비활성화 상태"></span>
      </li>
      <li>
        <img src="./../assets/avatars/face2.jpg" alt="사용자 B의 아바타" loading="lazy" width="64" heigth="64" />
        <span class="circle --active" aria-label="활성화 상태"></span>
      </li>
    </ul>
  </section>
  <hr />
  <section class="flex-section">
    <h2>flex Layout</h2>
    <ul class="avatars-list">
      <li>
        <img src="./../assets/avatars/face1.jpg" alt="사용자 A의 아바타" loading="lazy" width="64" heigth="64" />
        <span class="circle" aria-label="비활성화 상태"></span>
      </li>
      <li>
        <img src="./../assets/avatars/face2.jpg" alt="사용자 B의 아바타" loading="lazy" width="64" heigth="64" />
        <span class="circle --active" aria-label="활성화 상태"></span>
      </li>
    </ul>
  </section>
</main>
```

마크업 구조는 `main`태그 안에 각각 `float`과 `flex` css 스타일링이 들어가야 하므로 두개의 `section`태그로 서로 다른 class를 부여했다. 디자인 시안을 보면 이미지 8개가 나열이 되는데 나는 이 구조에서 순서를 느끼지 못하여서 **비순서형 목록으로** `ul`태그를 사용했다.

사실 **BEM** 기법으로 class를 작성하고 싶었는데 CSS에서는 **BEM**을 사용이 제한이 되므로 `ul`에만 class를 부여하고 마크업에 집중을 더 하고자 `ul>li>img+span` 구조로 마크업을 작성했다.

`img`는 필수 속성으로 `src`, `alt` 속성을 포함해야 하고, 사실 이미지의 설명이 좀 애매해서 `aria-hidden="true"` 으로 ARIA로 스크린 리더에서 안 읽게 하고 싶었는데 `alt`값을 작성을 습관화하고자 `alt`값을 작성하였다.

그리고 디자인 상 이미지와 겹치게 활성화 비활성화 상태가 있는데 그 표시가 이미지보다 위에 위치해서 포지셔닝으로 위치하게 하였다. 또한 이 활성화 비활성화에 대한 설명이 있어야 접근성에 우수할 것 같아서 `aria-label`로 설명하였다.

추가로 이미지 성능 최적화를 고민해봤는데 수업시간에 배운 지연로드 `loading="lazy"`가 생각났다. 나는 원래 이미지에 스타일 속성으로 `width`값과 `height`값을 CSS로 작성하는데 HTML 속성에서 직접 지정하는게 CSS로 스타일링을 지정하는 것 보다 성능측면에서 더 좋다고 하여 이번에는 `img`태그 안에 속성으로 `width`값과 `height`값을 지정해주었다.

#### 그렇다면 왜 넓이와 높이값을 미리 지정해주어야 할까?

그 이유는 미리 이미지의 넓이와 높이를 안다면 브라우저는 초기 렌더링 단계에서 미리 크기를 알고 있어 불필요한 재계산을 방지하고, 렌더링 과정을 더 효율적으로 처리하기 때문에 **레이아웃 안정성과 렌더링 최적화**에 도움이 되기 때문이다.

#### 💡CSS

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

.float-section .avatars-list {
  overflow: hidden;
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
.flex-section .avatars-list {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  > li {
    position: relative;
    float: left;
  }
}
.avatars-list {
  width: 396px;
  margin: 20px auto;
  img {
    display: block;
    border-radius: 1000px;
  }
}
h2 {
  text-align: center;
}
```

#### float 사용 시 (.float-section)

`float`으로 디자인상과 같은 레이아웃을 작업하기 위해서는 부모인 `ul`요소가 아닌 `li`요소에 `float:left` 해야 한다. `float:left`를 했을 땐 부모요소가 높이를 잡지 못한다. 그래서 난 `float:left`를 사용한 li의 부모요소에 `overflow:hidden`을 주어 높이를 잡을 수 있게 하였다.

이미지간의 간격은 20px인데 동일하게 모든 `li`에 일단 `margin: 0 20px 20px 0`으로 우측과 아래 방향으로 `margin` 값을 20px씩 주었다. `padding`이 아닌 `margin`으로 준 이유는 활성화 비활성화 상태가 `li`안에 들어가는데 `padding` 값을 주게 되면 `li` 내부의 `padding`값이 늘어나 안에 있는 요소들의 위치를 변화시키기 때문에 외부요소를 변화를 줘야겠다 생각하여 `margin` 값을 주었다.

마저 콘텐츠의 간격을 `margin`으로 주었을 때를 이야기 해보겠다. 지금은 전체적으로 `li`의 우측 아래가 `margin`값이 적용 되었는데 디자인상 4번째와 8번째 이미지는 우측에 아무런 이미지가 없어 우측이 `margin`값을 가질 필요가 없고, 하단에 모든 이미지는 아래에 이미지가 없기 때문에 하단에 `margin` 값을 필요가 없다고 생각하여 **가상 선택자인** `nth-of-type(n번째)`로 4,8번 `li`에 `margin-right:0;` 5,6,7,8번 `li`에 `margin-bottom:0;`값을 주어 불필요한 margin값을 제거하였다.

#### flex 사용 시 (.flex-section)

`flex`는 생각보다 `float`보다 css작성에 편리하다. 일단 `flex`는 `float`을 했을 때와 달리 부모요소에 작성하여야 한다. 그래서 **.flex-section .avatars-list**에 `display:flex;`를 주었고, `flex-flow: row wrap`을 주었다. 여기서 `flex-flow`는 축약어인데 앞 `row`는 x방향 뒤 `wrap`은 부모의 넓이를 넘었을 때 하단으로 떨어뜨리는 속성이다. 기본값은 `row nowrap`이다.

이제 이미지안의 간격을 지정해주어야 하는데 `flex, grid`는 `gap`이라는 속성이 있다. `gap: 20px`이라고 하면 `flex` 사용한 내부 자식 요소들 간의 간격을 20px을 주어 `margin`이나 `padding`을 사용하지 않아도 깔끔하게 간격을 만들 수 있다.
만일 양옆만 `gap`을 주고 싶으면 `gap:0 20px` 상하 `gap`을 주고 싶으면 `gap:20px 0` 이렇게 작성하면 된다.

#### 이미지 안 비활성화 활성화 상태정보

```css
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
```

**.circle이라는 class**를 부여했고, `position: absolute`로 위치를 잡았다. 전체 스타일링은 비활성화된 때를 기본으로 스타일링 하였고, 활성화된 스타일링은 **.--active라는 class**를 부여해 활성화 되었을 시 색을 다르게 하였고, 마크업 상에서 **.--acitve class**를 추가해줘야 랜더링 된 화면에서 보여지기 활성화 된 상태로 보여지기 때문에 디자인상 활성화 된 2,4,5,6번째 `li` 자식요소 `span`태그에 **.--active class**를 추가해주어 활성화 상태를 주었다.
