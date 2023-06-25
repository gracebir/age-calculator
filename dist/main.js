//inputs
const iday = document.querySelector('#iday')
const imonth = document.querySelector('#imonth')
const iyear = document.querySelector('#iyear')

const id1 = document.querySelector('#id1')
const id2 = document.querySelector('#id2')
const id3 = document.querySelector('#id3')

const form = document.getElementById('form')

//result span
const rday = document.querySelector('#rdays')
const rmonth = document.querySelector('#rmonths')
const ryear = document.querySelector('#ryear')

const day = new Date().getDate()
const month = new Date().getUTCMonth() + 1
const year = new Date().getFullYear()

// error messages
const errorDay = document.getElementById("errorDay")
const errorMonth = document.getElementById("errorMonth")
const errorYear = document.getElementById("errorYear")
console.log(errorDay)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (iday.value.length === 0) {
        iday.classList.add("border-color-light-red")
        errorDay.classList.remove("hidden")
        errorDay.classList.add("block")
    } else if (parseInt(iday.value) > 31 || parseInt(iday.value) <= 0) {
        iday.classList.add("border-color-light-red")
        errorDay.classList.remove("hidden")
        errorDay.classList.add("block")
    } else {
        iday.classList.remove("border-color-light-red")
        errorDay.classList.remove("block")
        errorDay.classList.add("hidden")
        rday.textContent = Math.abs(day - parseInt(iday.value))
    }

    if (imonth.value.length === 0) {
        imonth.classList.add("border-color-light-red")
        errorMonth.classList.remove("hidden")
        errorMonth.classList.add("block")
    } else if (parseInt(imonth.value) > 12) {
        imonth.classList.add("border-color-light-red")
        errorMonth.classList.remove("hidden")
        errorMonth.classList.add("block")
    } else {
        imonth.classList.remove("border-color-light-red")
        errorMonth.classList.remove("block")
        errorMonth.classList.add("hidden")
        rmonth.textContent = Math.abs(month - parseInt(imonth.value))
    }

    if (iyear.value.length === 0) {
        iyear.classList.add("border-color-light-red")
        errorYear.classList.remove("hidden")
        errorYear.classList.add("block")
    } else if(parseInt(iyear.value) > year){
        iyear.classList.add("border-color-light-red")
        errorYear.classList.remove("hidden")
        errorYear.classList.add("block")
    } else {
        iyear.classList.remove("border-color-light-red")
        errorYear.classList.remove("block")
        errorYear.classList.add("hidden")
        ryear.textContent = year - parseInt(iyear.value)
    }

    form.reset();
})
