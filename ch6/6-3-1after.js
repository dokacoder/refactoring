export function price(order) {
  /* 
   주석으로 해결하려고 하는 습관은 버려야함
   주석을 지울수 있는지 늘 고민!
   return 하고있는 내용이 뭘표현하는지 명확하기 때문에
   가격(price) = 기본가격 - 수량할인 + 배송비 주석지워도 됨
  */
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shipping;
}
