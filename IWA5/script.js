//Declaring all constants & variables
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
const location = 'RSA'
const customers = 1
let currency = null

//Checking location and assigning relevant shipping amount and currency symbol
if (location == 'RSA') {
    shipping = 400
    currency = 'R'
} else if (location == 'NAM') {
    shipping = 600
    currency = '$'
} else {
    shipping = 800
    currency = '$'
}

//Calculates total amounts on all products bought
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

//Checks for free shipping depending on location and order total
if (shoes + toys + shirts + batteries + pens > 1000) {
	if (location == 'NAM' && customers < 2) {
        shipping = 0;
        if (location == 'RSA') {
            shipping = 0
        }
	}
}

//Checking for free shipping warning
if (shipping == 0 && customers > 1) { 
    console.log(FREE_WARNING) 
}

//Output
location == 'NK' ? console.log(BANNED_WARNING) : console.log('price: ', currency, shoes + batteries + pens + shirts + toys + shipping)