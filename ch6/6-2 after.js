/* 
함수를 분리시키는것만이 답은 아니다
함수이름 자체가 코드인경우 합쳐서 의미를 한 눈에 파악하게 하는것도 좋음
*/

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
