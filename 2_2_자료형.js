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

//문자열 여러줄로 나타내기111
