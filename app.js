// ********************** 1 — MASALA **************************

const findText =(event)=> {
    const {value} = event.target
    const result = document.getElementById("result")
    const result2 = document.getElementById("result2")
    
    let arr = value.split(" ").filter(val => val.length > 0)
    let arr1 = value.split("").filter(val => val.trim().length > 0)
    console.log(arr.length);
    
    result.innerText = arr.length
    result2.innerText = arr1.length
}   



// *********************** 2 — MASALA ***************************

const onKeyUp = (event) => {
    const textareaValue = document.getElementById("textarea").value.toLowerCase()
    const inputValue = document.getElementById("input").value.toLowerCase()

    const output = document.getElementById("output")

    if (textareaValue && inputValue) {
        if (textareaValue.includes(inputValue)) {
            output.innerText = "Bu so'z matn ichida qatnshgan ✅"
            output.style.color = "green"
        }else {
            output.innerText = "Bu so'z qatnashmagan ❌"
            output.style.color = "red"
        }
    }else {
        output.innerText = "Ikkala joyni ham to'ldiring! ⚠️"
        output.style.color = "orange"
    }
    
}



// *********************** 3 — MASALA *************************

const showFileSize = (event) => {
    const fileInput = event.target
    const file = fileInput.files[0]

    if (file) {
        const fileSizeInKB = (file.size / 1024).toFixed(2)
        const fileSizeDisplay = `Fayl hajmi: ${fileSizeInKB} KB`

        const output = document.getElementById("fileSize")
        output.innerText = fileSizeDisplay
    }else {
        output.innerText("Fayl tanlanmadi")
    }
}



// ********************* 4 — MASALA ***************************

const areScopesEqual = (event) => {
    const {value} = event.target
   
    const output1 = document.getElementById("output1")
    const output2 = document.getElementById("output2")
    const result = document.getElementById("result")

    let ochuvchi = 0
    let yopuvchi = 0
    let onlySymbols = true

    if (value == "") {
        output1.innerText = "Ochuvchi qavslar: 0"
        output2.innerText = "Yopuvchi qavslar: 0"
        result3.innerText = "N/A"
        return
    }

    let arr = value.split("")
    for(let item of arr) {
        if (item == "(") {
            ochuvchi++
        }else if(item == ")"){
            yopuvchi++
        }else {
            onlySymbols = false
        }
        
        output1.innerText = `Ochuvchi qavslar: ${ochuvchi}` 
        output2.innerText = `Yopuvchi qavslar: ${yopuvchi}` 
    

        if (!onlySymbols) {
             result3.innerText = "Matnda boshqa belgilar mavjud"
        }else if (ochuvchi == yopuvchi) {
            result3.innerText = "Ochuvchi va Yopuvchi qavsalar teng"
        }else {
             result3.innerText = "Teng emas"
        }
    }   
}



// ************************ 5 — MASALA *************************

const save = document.getElementById("save")
save.addEventListener("click", (ev)=> {
    ev.preventDefault()
    const width = document.getElementById("width").value
    const height = document.getElementById("height").value
    const borderRadius = document.getElementById("borderRadius").value
    const bgColor = document.getElementById("bgColor").value
    const result = document.getElementById("result")

    result4.style.width = width + "px"
    result4.style.height = height + "px"
    result4.style.borderRadius = borderRadius + "px"
    result4.style.backgroundColor = bgColor
})