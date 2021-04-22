var num;
num = 5;
console.log(num);


//var는 선언과 초기화 순서 바껴도 즉 선언문을 아래쪽에 작성해도 최상위로 올라간것처럼 정상적으로 변수에 할당이 되더라
//var는 선언을 어디에서 하던 되더라.. 이런현상이 hoisting임. javascript에서만 잇는 특징.
hNum = 5;
var hNum;
console.log(hNum);


//호이스팅 선언문이 스코프(작업영역)의 최상단으로 이동하는 현상

//let은 호이스팅이안댐






//undefined와 null은다르다!
//옵젝트a를 선언햇는데  아무것도할당안되잇어서 undefined인것
let obj = {}
console.log{obj.a};
//null은  빈공간을 나타내는 object다.
