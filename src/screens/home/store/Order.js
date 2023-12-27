import { makeAutoObservable, observable, action, computed } from "mobx";
import { mockItemData } from "../../home/screens/mockedData";

class OrderStore {
  @observable orders = [];
  @observable input = "";
  @observable data = mockItemData;

  constructor() {
    makeAutoObservable(this);
  }

  @action setOrders(orderItem) {
    this.orders = [...this.orders, orderItem];
  }

  @action setInput(value) {
    this.input = value;
  }

  @computed get filteredArray() {
    return this.data.filter((pizza) => {
      return pizza.title.toLowerCase().includes(this.input.toLowerCase());
    });
  }

  @action removeOrder(orderItem) {
    this.orders = this.orders.filter((item) => item.id !== orderItem.id);
  }

  @action confirmOrder() {
    this.orders = [];
  }

  @computed get calculateTotal() {
    return this.orders.reduce((total, item) => total + item.price, 0);
  }
}

export default new OrderStore();
