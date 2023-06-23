/*객체 : 여러 개의 변수를 하나의 변수로 묶어줌
객체리터럴 : {}을 사용해 객체를 표현하는 것
*/
const zerocho = {
  name: "조현영",
  year: 1994,
  month: 8,
  date: 12,
  gender: "M",
};
//<속성에 접근하는 방법 >
//1. 온점을 이용
console.log(zerocho.name);
//2. []을 이용
console.log(zerocho["name"]);
//console.log(zerocho[name]); 이렇게 쓰면 오류남 왜냐하면 []내부에는 문자열을 넣어햐한다. 따라서 문자열이 아닌 값을 넣게 되면 오류가 난다.
const name = "date"; //단 이렇게 name의 값을 변수로 지정해주면 date를 가리키는 말이 출력된다.
console.log(zerocho[name]); //즉 zerocho['date']와 같은 결과를 내놓게 된다.

/*<속성 이름에 띄어쓰기나 온점이 들어 있는 경우>
온점을 사용해 접근하는 방식에서 오류가 남
따라서 변수['속성이름']또는 변수['속성이름.이름']을 사용해야만 속성에 접근할 수 있다.
*/

//<객체 속성 수정하기>
zerocho.gender = "F";
console.log(zerocho.gender);

//<객체 속성 제거하기>
delete zerocho.gender;
console.log(zerocho.gender); //undefined 출력됨

//<메서드 이해하기>
/*메서드 : 객체의 속성 값으로 함수가 들어갈때 메서드라 부른다. */
const debug = {
  //log는 debug 객체의 메서드
  log: function (value) {
    console.log(value);
  },
};
debug.log("Hello,Method");

/*console과 log의 관계
console객체의 log메서드이다.
console 객체와 그 안에 든 log메서드 웹 브라우저가 기본으로 만들어 놓은 객체이므로 따로 선언하지 않아도 사용할 수 있다.*/

//<객체 간 비교>
const a = { name: "zerocho" };
const array = [1, 2, a];
console.log(a === array[2]); //같은 객체인지 비교하려면 기존 객체를 변수에 저장해두어야한다.

//<참조와 복사>
//참조
const c = { name: "zerocho" };
const d = c; //c와 d는 객체간에 참조관계가 있다.
c.name = "hero";
console.log(d.name); //d도 hero로 바뀜
//즉 c와d는 참조관계이기 때문에 변경내용이 서로 전달된다.

//복사 : 참조가 생기지 않는 상황
let e = "zerocho";
let h = e; //h와 e는 참조관계x 그냥 복사임
e = "hero";
console.log(h); //변경내용이 적용되지 않고 zerocho가 출력된다.
//즉 객체를 변수에 담으면 참조관계가 생기고 그렇지 않으면 그냥 복사이다.

//1분퀴즈. 다음과 같이 객체 안에 객체가 있을 때, '조' 값에 접근하는 방법은?
const zerocho1 = {
  name: {
    first: "현영",
    last: "조",
  },
  gender: "m",
};
console.log(zerocho1["name"]["last"]);
console.log(zerocho1.name.last);
