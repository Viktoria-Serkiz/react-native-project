import {
  makeAutoObservable,
  makeObservable,
  observable,
  action,
  runInAction,
} from "mobx";

class OrderStore {
  @observable orders;
  constructor() {
    this.orders = [];
    makeObservable(this);
  }

  @action setOrders(orderItem) {
    this.orders = [...this.orders, orderItem];
  }
}

export default new OrderStore();
