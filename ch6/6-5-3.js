export function inNewEngland(state) {
  // return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state); 범위를 작게해서 의존성을 낮추고 재사용성을 늘려라
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
