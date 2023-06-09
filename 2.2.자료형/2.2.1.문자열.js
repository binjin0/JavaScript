//2.2.1 문자열
console.log("Hello World");
//typeof : 자료형 확인할 수 있는 연산자. 연산자란 어떠한 값에 특정 작업을 수행하려는 기호. 이밖에 수많은 연산자가 있음.
console.log(typeof "Hello Wolrd");
console.log("" == " "); //빈문자열과 공백있는 문자열은 다른 것이다.
console.log(typeof ""); //따옴표 안에 문자가 없는 경우의 자료형은 문자열이다.

//문자열 안에서 따옴표 사용하기
//console.log('문자열 안에 작은 따옴표가'가있어요'); ->이경우 SyntaxError가 발생.
//해결방법
console.log("문자열 안에 작은따옴표(')가 있어요"); //작은따옴표 출력하고 싶은 경우 : 큰따옴표 안에 넣기
console.log('문자열 안에 큰따옴표(")가 있어요'); //큰따옴표 출력하고 싶은 경우 : 작은따옴표 안에 넣기
console.log('문자열 안에 큰따옴표(")가 있어요'); //따옴표를 이스케이핑한다. 이스케이핑 : 문자가 다르게 해석되게 하는 행위. 즉 \를 붙임으로써 문자열의 끝을 알리는 따옴표의 역할을 다르게 해석되게 만듦
console.log(`문자열 안에 작은따옴표(')가 있어요`); //백틱으로 감싸서 사용하기

//문자열 여러줄로 나타내기
//1. \n사용하기
console.log("여러줄에 걸쳐 \n표시됩니다."); // \n뒤에 부분은 줄바꿈되어 다음 줄에 표시된다.
//2. 백틱` 사용하기
//백틱 : 백틱은 문자열이다. 백틱으로 감싸진 문자열을 템플릿 리터럴(template literal)이라고 한다.
console.log(`여러줄에 걸쳐
효시됩니다. `);
/*console.log('여러줄에 걸쳐
표시됩니다.'); 이렇게 그냥 따옴표로 감싸고 마음대로 줄바꿈을 하면 오류가 난다.*/

//문자열 합치기
console.log("문자열이 긴 경우에는 문자열을" + " 나눈 뒤 다시 합칩니다."); //+연산자 사용하여 문자열을 합칠 수 있다.
console.log(
  "문자열이 긴 경우에는 문자열을" + "나눈 뒤 다시 합칩니다."
); /*문자열을 합칠때 주의할 점이 있다.바로 띄어쓰기를 하지않고 합치는 것이다.
방금 든 예시처럼 +연산자를 쓴다고 '나눈 뒤'에서 '나' 앞에 띄어쓰기를 해주지 않으면 문장의 띄어쓰기가 올바르지 않게 출력된다.즉 +연산자 써도 띄어쓰기는 알아서 해야한다!!*/
