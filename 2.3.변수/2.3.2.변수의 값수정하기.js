//변수는 한번 저장한 값을 바꿀 수 있다.
let change = "바꿔 봐";
console.log(change);
change = "바꿨다";
console.log(change);
/*let으로 변수를 선언할 때는 콘솔의 결괏값이 undefined이지만 변수의 값을 바꿀 때는 결과로 바꾼값이 나온다. 
왜냐하면 let이 없을 때는 코드가 식이라서 대입한 값이 결괏값으로 출력되지만 let이 앞에 붙는 순간 선언문이되기때문이다. 문은 식과 다르게 결괏값이 없고
식의 자리에 사용할 수 없다. */

//변수에 넣은 값을 다시 비울 수 도 있다.
change = undefined; //방1. undefined대입하기
console.log(change);
change = null;
console.log(change); //방2.null대입하기
