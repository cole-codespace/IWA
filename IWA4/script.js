const date = 2050
const status = 'parent'
let count = 0
let month = ''

if (date == 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')

    month = 'April'

	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')

    count += 4

    if (status == "student") {
        console.log('June', 'Youth Day')
        count++
    }

    console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')

	month = 'December'

	console.log(month, 'Day of Reconciliation')
	count += 3

    if (status == "parent") {
        console.log(month, 'Chistmas Day')
        count++
    }

    console.log(month, 'Day of Goodwill')
    count++
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)