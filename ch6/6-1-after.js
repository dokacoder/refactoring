/* 함수가 어떤 일을 하는지 한눈에 파악하기 어려워보임
printOwing 함수를 해석하려면 문서를 끝까지 읽어야함
재사용성이 떨어짐 한 함수안에 기능이 뭉쳐있어서 버그 발생하면
하나 수정하다가 10개 버그가 생길수도있음
함수를 읽어 내려가면서 단계적으로 함수 추출하기 */

/* 읽어 내려가면서 주석을 달아보면 어떻게 추출할지 파악하기 쉬움*/

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice) {
  const today = new Date();
  /* 객체에 지역변수를 생성해버림.. 객체는 불변성을 유지하는것이 좋음 
  불변성을 유지하면서 수정할수있는 방법으로 수정 Array.prototype.concat()*/
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

printOwing(invoice);
