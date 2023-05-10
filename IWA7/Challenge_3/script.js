const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let randZALocale = Intl.NumberFormat('en-ZA');

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance))
const leo = leoName + " " + leoSurname + " (Owed: R" + randZALocale.format(leoBalance.substring(1, leoBalance.length)) + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: R" + randZALocale.format(sarahBalance.substring(1, sarahBalance.length)) + ")\n"
const total = "Total amount owed: R" + randZALocale.format(Math.abs(owed))
const result = leo + "\n" + sarah + "\n" + divider + "\n" + total + "\n" + divider

console.log(result)