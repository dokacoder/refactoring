// >> 개인주석

// >> 함수가 어떤 일을 하는지 한눈에 파악하기 어려워보임
// >> printOwing 함수를 해석하려면 문서를 끝까지 읽어야함
// >> 재사용성이 떨어짐 한 함수안에 기능이 뭉쳐있어서 버그 발생하면
// >> 하나 수정하다가 10개 버그가 생길수도있음
// >> 함수를 읽어 내려가면서 단계적으로 함수 추출하기

export function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
