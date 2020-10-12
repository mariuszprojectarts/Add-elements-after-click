const btn = document.querySelector('button');
let number = 1;

const addElement = function () {
    const div = document.createElement('div');
    div.textContent = number
    document.body.appendChild(div);

    if (Number.isInteger(number / 5)) {
        div.classList.add('circle')
    }
    number++;
    // console.log(div);
}

btn.addEventListener('click', addElement);