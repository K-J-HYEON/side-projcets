// class라고 지정했으니까 클래스 selector준다
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// javacript mouse move 마우스가 움직일 때 어떻게 해야하나
// addEventListener을 등록한 다음에 mousemove
// event에 있는 window위에서 움직이는 좌표를 받아와야 하기 때문에(창 위에 있는 X와 Y좌표를 받아와야 하니까)
document.addEventListener('mousemove', event => {
    // DOM요소들의 위치를 바꿔주면
    const x = event.clientX; // const 변수지정 x는 event에 있는 clientX이고
    const y = event.clientY; // y는 event에 있는 clientY이다.
    console.log(`${x} ${y}`);
    // console.log(`${event.clientX} ${event.clientY}`)

    // x와 y를 이용해서 요소들의 위치를 바꿔줌
    // style을 지정할 때는 px, 픽셀이라는 유닛을 붙여줘야한다. `키를 이용해서 x의 픽셀값을 전달
    vertical.style.left = `${x}px`;
    // horizontal은 top을 이용해서 값전달
    horizontal.style.top = `${y}px`;
    // left, top값 전달
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    // tag안에 있는 innerhtml값을 이용해서 x 픽셀, y 픽셀 지정
    tag.innerHTML = `${x}px, ${y}px`;

});



