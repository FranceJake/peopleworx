// attendance form
const employeeID = document.querySelector("#eId-el")
const fName = document.querySelector("#name-el")
const date = document.querySelector("#date-el")
const timeIn = document.querySelector("#timeIn-el")
const timeOut = document.querySelector("#timeOut-el")

const saveEl = document.querySelector("#save-el")
const delEl = document.querySelector("#del-el")

const tableEl = document.querySelector("#table-el")

//employeelist form
const position = document.querySelector("#pos-el")
const sched = document.querySelector("#sched-el")
const hiredDate = document.querySelector("#hired-el")





// attendance
let logEmployeeID = document.getElementById("log-eid")
let logName = document.querySelector("#log-name")
let logDate = document.querySelector("#log-date")
let logTimeIn = document.querySelector("#log-timeIn")
let logTimeOut = document.querySelector("#log-timeOut")



const attendanceData = {
        eid: '',
        name: '',
        date: '',
        timeIn: '',
        timeOut: ''
};


// let dataFromLocalStorage = JSON.parse(localStorage.getItem("newData"))


delEl.addEventListener('dblclick', function() {
    employeeID.value = ""
    fName.value = ""
    date.value = ""
    timeIn.value = ""
    timeOut.value = ""
    localStorage.clear();
});


saveEl.addEventListener('click', function() {
    let attendanceData = {
        eid: employeeID.value,
        name: fName.value,
        date: date.value,
        timeIn: timeIn.value,
        timeOut: timeOut.value
    }
    localStorage.setItem("newData", JSON.stringify(attendanceData))

    const data = Object.entries(attendanceData);
    console.log(typeof data)
    console.log(data)
    // for (const [keys,value] of Object.entries(attendanceData)) {
    // console.log(`${value}`)
})


// tableEl.addEventListener("load", function() {
//     let dataFromLocalStorage = JSON.parse(localStorage.getItem("newData"))
//     if (dataFromLocalStorage) {
//         //render()
//     }
// })


// // const render = () => {
//     logEmployeeID.innerHTML = "entry"
//     logName.innerHTML = attendanceData.name
//     logDate.innerHTML = attendanceData.date
//     logTimeIn.innerHTML = attendanceData.timeIn
//     logTimeOut.innerHTML = attendanceData.timeOut
// // }

// Employee List page

