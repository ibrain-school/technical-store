const buttonModal = document.querySelector(".authorization");
const modalWrap = document.querySelector(".modal-wrap")
const MODALINPUT = document.querySelector(".modal-input")
const btnModal = document.querySelector(".modal-input-btn")
const modalForm = document.querySelector(".modal-form")

const key = "KEY Бренды"


function modalActiv (event) {
    event.preventDefault()
    modalWrap.classList.toggle("none");
}

MODALINPUT.addEventListener("input",(event)=>{
        let input = event.target;
        let inputNumbersValue = input.value.replace(/\D/g, '');
        let formattedInputValue = '+7 (';

        if (!inputNumbersValue) {
            input.value = '';
            return;
        }

        if (inputNumbersValue.length > 1) {
            formattedInputValue += inputNumbersValue.slice(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.slice(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.slice(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.slice(9, 11);
        }

         input.value = formattedInputValue;
})


MODALINPUT.addEventListener (
    "keydown",
    (event)=>{
        let allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
                if (!allowedKeys.includes(event.key) && !event.key.match(/[0-9]/)) {
                    event.preventDefault();
                }
    }
) 

MODALINPUT.addEventListener("click",(e)=>{
    e.target.placeholder = `+7 (___) ___-__-__`
})

btnModal.addEventListener("click",(e)=>{
    e.preventDefault() 
    const formData = new FormData (modalForm)

     if (formData.get("input-modal").length === 18) {
        localStorage.setItem(key, formData.get("input-modal"));
        modalWrap.classList.add("none")
     } else {
        alert("Недостаточно символов !!!")
     }
}) 











