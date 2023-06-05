//활용1. 변수에 다른 변수 대입하기
let string = "Hello, variable";
let string2 = string;
console.log(string2);

//활용2. 변수에 자신과 같은 변수 대입하기
let number = 5;
number = number + 3;
console.log(number);
number += 3; //number=number+3을 축약함
console.log(number);
number -= 3; //number=number-3
console.log(number);

//활용3. 중복을 줄임
//같은문자열이 계속 반복됨
console.log("엄청 긴 문자열입니다.");
console.log("엄청 긴 문자열입니다.");
console.log("엄청 긴 문자열입니다.");
//반복되는 문자열을 변수에 저장하여 사용하면 중복을 줄일 수 있다.
let string1 = "엄청 긴 문자열입니다.";
console.log(string1);
console.log(string1);
console.log(string1);
//수정도 가능
string1 = "엄청 긴 문자열을 수정합니다.";
console.log(string1);
console.log(string1);
console.log(string1);
