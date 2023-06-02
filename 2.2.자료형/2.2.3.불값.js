//불값 true, false를 나타냄. 1은 true 0은 flase(숫자에서 0만 false고 다른 숫자는 다 true)
//불값 표현하기
console.log(true);
console.log(false);
console.log(typeof true); //불값=boolean

//비교연산자 사용하기
console.log(5 > 3); //true
console.log(5 < 3); //false
console.log(5 >= 5); //true
console.log(5 <= 4); //false
console.log(5 == 5); //true, == : 양쪽 값이 같은지 비교하는 연산자
console.log(5 == 6); //false
console.log(5 != 5); //false, != : 양쪽 값이 다른지 비교하는 연산자
console.log(5 != 6); //true
console.log(NaN == NaN); //false // NaN끼리 어떠한 연산자로 비교하든지 모두 false나옴!!
console.log(true > false); //true, why? true는 1을 fasle는 0을 나타내기 때문!
console.log(false > true);
console.log("a" > "b"); //false, why? 문자의 번호가 클수록 큰 값! 사전과 비슷한원리!
console.log("apple" > "alway"); //true, why? 앞글자의 문자번호가 같으면 그 다음 글자로 비교하기!(여기선 p와 l을 비교해야겠죠?)
console.log("ab" > "a"); //true, why?처음 문자는 같으니 다음 문자로 비교! 그런데 b와 글자가 없는 것중 누가더 큰 값일까? 바로 문자가 존재하는 것이 더 큰값!
console.log("a".charCodeAt()); //문자의 번호를 알려면 charCodeAt()함수 쓰기!
console.log("3" < 5); //true, 숫자를 문자열로 만든 값과 숫자를 비교하면 모두 자료형이 숫자로 바뀌어서 비교된다.
console.log("abc" < 5); //"abc"를 숫자로 바꾸면 NaN! NaN과 비교하는 건 모두 false!
console.log("0" < true); //true

//==와 ===의 차이
//== : 자료형 달라도 비교가능. 자료형은 자동으로 맞춰서 비교해줌 -> 따라서 비교 취지에 맞지 않은 경우가 있을 수 있음
//=== : 자료형과 크기 모두 비교함. ==의 문제점 해결
console.log("1" == 1); //true, 자동으로 자료형 맞춤
console.log("1" === 1); //false, 자료형이 다름. 따라서 다른값
//!=와 !==의 차이도 위와 같다
console.log(1 != "1"); //false, 자료형 자동으로 맞춰서 1과 1은 같아짐. 그런데 같지 않냐고 물었으니 false!
console.log(1 !== "1"); //true, 자료형이 달라서 이 두 값은 다른거임. 같지 않냐고 물었으니 true!

//논리연산자 사용하기
/*&& : 그리고, 둘다 참이여야 참 
  || : 또는, 둘중 하나라도 참이면 참
  !! : 반대의 반대. 참인 것은 거짓으로 바꾸고 또 참으로 바꿈. 즉 결국 참이였던 것은 참이 된다.*/
console.log(10 > 5 && 8 > 4); //true && true -> true
console.log(10 < 5 || 6 < 8); //false || true -> true
console.log(10 < 5 || 6 > 8); //flase || flase =>false
console.log(
  !!"a"
); /*앞에서 문자를 숫자로 바꾸면 NaN이 되었죠? NaN은 false죠? 그래서!!하면 false라고 생각했죠? 그러나 오답니다.
여기서 물어보는건 문자열을 불형으로 바꿨을때 어떻냐? 라는것을 물어본거기 때문에 앞에 상황가 그냥 다른 문제라는 것을 알아야합니다.
즉 !!은 불리언으로 형변환해주는 연산자라고 외우자. 'a'를 불리언으로 형변환하면? true입니다~*/
//불리언으로 형변환하면 false가 되는 값(이것밖에 없으니 이것 외우고 이것 제외한 것들은 true라고 생각하기)
console.log(!!false);
console.log(!!""); //빈무자열도 false!(공백은 true이니 잘 확인하자)
console.log(!!0);
console.log(!!NaN);

//논리연산자에도 우선순위가 있다!
console.log(!(2 < 0)); //괄호가 우선순위 높으니 괄호먼저! (2<0)은 false니깐 !하면 true
console.log(!2 < 0); //!가 우선순위 높으니!부터! 2는 0이 아니기때문에 true이다. 따라서 !2는 false이다. false<0은 false이다. 0도 false라 값이 같은데 0이 더 크다고 했으니 false겠죠?

//1분퀴즈. 숫자와 불 갑셍서 배운 것을 활용해 다음 연산의 결과가 ture가 되게 만들어보세요. 연산자만 추가하거나 수정할 수 ㅣㅇㅆ씁니다. 정답은 여러개 가능
//5+4*3===27
console.log((5 + 4) * 3 === 27);
