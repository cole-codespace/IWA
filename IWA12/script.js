const STATUS_MAP = {
  shelf: {
    color: 'green',
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: 'blue',
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: 'red',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: 'orange',
    canReserve: true,
    canCheckout: false,
    canCheckIn: false,
  }
}

//Edit below line 

const statuses = document.querySelectorAll('.status');              
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

statuses.forEach(function (status, index) {                          
  const bookStatus = status.textContent;
  const statusInfo = STATUS_MAP[bookStatus];                          

  status.style.color = statusInfo.color;
  reserveButtons[index].disabled = !statusInfo.canReserve;          
  checkoutButtons[index].disabled = !statusInfo.canCheckout;
  checkinButtons[index].disabled = !statusInfo.canCheckIn;
});