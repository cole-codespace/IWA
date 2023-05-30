// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Helper function to select elements by class name
function selector(className) {
  return document.getElementsByClassName(className);
}

// Get the elements by class name
const status = selector("status");
const reserve = selector("reserve");
const checkout = selector("checkout");
const checkin = selector("checkin");

// Update the first book
status[0].style.color = STATUS_MAP.shelf.color;
reserve[0].disabled = !STATUS_MAP.shelf.canReserve;
checkout[0].disabled = !STATUS_MAP.shelf.canCheckout;
checkin[0].disabled = !STATUS_MAP.shelf.canCheckIn;

// Update the second book
status[1].style.color = STATUS_MAP.reserved.color;
reserve[1].disabled = !STATUS_MAP.reserved.canReserve;
checkout[1].disabled = !STATUS_MAP.reserved.canCheckout;
checkin[1].disabled = !STATUS_MAP.reserved.canCheckIn;

// Update the third book
status[2].style.color = STATUS_MAP.overdue.color;
reserve[2].disabled = !STATUS_MAP.overdue.canReserve;
checkout[2].disabled = !STATUS_MAP.overdue.canCheckout;
checkin[2].disabled = !STATUS_MAP.overdue.canCheckIn;