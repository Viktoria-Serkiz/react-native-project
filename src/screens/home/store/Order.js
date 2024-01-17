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
    const existingOrder = this.orders.find((item) => item.id === orderItem.id);

    if (existingOrder) {
      existingOrder.quantity += 1;
    } else {
      this.orders.push({ ...orderItem, quantity: 1 });
    }

    this.updateTotalQuantity();
  }

  @action updateTotalQuantity() {
    this.totalQuantity = this.orders.reduce(
      (total, item) => total + item.quantity,
      0
    );
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
    const existingOrder = this.orders.find((item) => item.id === orderItem.id);

    if (existingOrder) {
      if (existingOrder.quantity > 1) {
        existingOrder.quantity -= 1;
      } else {
        this.orders = this.orders.filter((item) => item.id !== orderItem.id);
      }
    }

    this.updateTotalQuantity();
  }

  @action removeItemsInOrder(orderItem) {
    const indexToRemove = this.orders.findIndex(
      (item) => item.id === orderItem.id
    );

    if (indexToRemove !== -1) {
      this.orders.splice(indexToRemove, 1);
    }
  }

  @action confirmOrder() {
    this.orders = [];
  }

  @computed get calculateTotal() {
    return this.orders.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  @computed get calculateTotalQuantity() {
    return this.orders.reduce((total, item) => total + item.quantity, 0);
  }
}

export default new OrderStore();
