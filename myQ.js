class myQ {
  constructor() {
    this.items = [];
  }

  enQ(item) {
    this.items.push(item);
  }

  dQ(error = "Error: No items in Queue") {
    if (this.items.length == 0) {
      return error;
    } else {
      return this.items.shift();
    }
  }

  front(error = "Error: No items in Queue") {
    if (this.items.length == 0) {
      return error;
    } else {
      return this.items[0];
    }
  }
}
