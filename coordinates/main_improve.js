// class라고 지정했으니까 클래스 selector준다
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



// target이 중간으로 오지 않으면 targetRect를 console.log 찍어본다.(width와 height가 0으로)
// 나올 때가 있다.
// addEventListener을 이용
// target에 getboundingRect을 호출할 때 target라는 이미지가 준비가 되어있지 않을 가능성이 크다
// 아직 다운로드가 완료되지 않았거나 브라우저 위에 올라와 있지 않은 경우
// 자바스크립트를 defer 옵션을 이용해서 썼는데 window load를 기억해보자
// defer은 document content가 load가 되기 전에 호출이 되고
// 모든 이미지와 리소스가 준비된 상태는 load 상태이다. 이때쯤에 getBoundingClientRect를 호출해서
// 정확한 크기를 받을 수가 있다.

// 윈도우가 로드될 때 이것들을 처리할수 있게
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    // javacript mouse move 마우스가 움직일 때 어떻게 해야하나
    // addEventListener을 등록한 다음에 mousemove
    // event에 있는 window위에서 움직이는 좌표를 받아와야 하기 때문에(창 위에 있는 X와 Y좌표를 받아와야 하니까)
    document.addEventListener('mousemove', event => {
    // DOM요소들의 위치를 바꿔주면
      const x = event.clientX; // const 변수지정 x는 event에 있는 clientX이고
      const y = event.clientY; // y는 event에 있는 clientY이다.
      // console.log(`${x} ${y}`);
      // console.log(`${event.clientX} ${event.clientX}`)

      // x와 y를 이용해서 요소들의 위치를 바꿔줌
      // style을 지정할 때는 px, 픽셀이라는 유닛을 붙여줘야한다. `키를 이용해서 x의 픽셀값을 전달
    
      // left와 top 대신에 translate을 한번 이용
      //translate의 vertical은 X좌표를 이동해야 되기 때문에
      vertical.style.transform = `translateX(${x}px)`;
      horizontal.style.transform = `translateY(${y}px)`;
      target.style.transform = `translate(${x - targetHalfWidth}px, ${
          y - targetHalfHeight}px)`;
      tag.style.transform = `translate(${x}px, ${y}px)`;
      // tag안에 있는 innerhtml값을 이용해서 x 픽셀, y 픽셀 지정
      tag.innerHTML = `${x}px, ${y}px`;
    });
})






// 사용자가 어떤 것을 썼을 때 애니메이션을 쓰거나 동적으로 요소를 움직이거나
// 조작할 때 어떻게 쓰면 성능이 나빠지고 어떻게 쓰면 성능이 좋아지는지 
// 즉 layoyt, paint, composition 이 3단계를 거쳐서 브라우저에 표기가 되기 때문에
// composite만 발생하면 너무 좋고 paint부터 발생하거나 layout부터 발생하면 조금 조금씩
// 성능이 나빠질 수 있다는 걸 배웠다.
// left와 top을 바꾸면 layout부터 발생해서 크기가 다시 재측정되고 paint도 다시 해야되고
// composite도 다시 일어나야 되니까 매우 바쁘다.
// 그래서 사용자가 이런 요소를 움직일 때는 left와 top을 이용하는거 보다 translate를 이용해서
// copposite만 발생할 수 있도록 만드는 것이 효율적이다