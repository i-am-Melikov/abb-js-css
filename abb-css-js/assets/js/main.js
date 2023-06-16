let search = document.getElementById('search-click')
let close = document.getElementById('close-icon')
let search_sec = document.getElementById('search-section')

search.onclick = function() {
    if(search.className==='none-active'){
        search_sec.style.display = 'inline'
        search.classList.remove('none-active')
        search.classList.add('active')
    }
    else{
        search_sec.style.display = 'none'
        search.classList.remove('active')
        search.classList.add('none-active')
    }
}
close.onclick = function() {
    search_sec.style.display = 'none'
}
let class_list = document.querySelector('.task-list')
let inp = document.getElementById('to-do-inp')
let btn = document.getElementById('add-btn')
let h1 = document.getElementById('to-do-h1')

let count = 0

btn.onclick = function() {
    let h1 = document.createElement('h1')
    let div = document.createElement('div')
    let button = document.createElement('button');
    let error_h1 = document.querySelector('.error')
    count++

    if(count === 0){
        error_h1.innerHTML = 'There is no any task...'
    }
    else{
        error_h1.innerHTML = `There is task: ${count}`
    }   

    h1.innerHTML = inp.value
    button.innerHTML = 'Delete'
    div.setAttribute('class','box')
    button.setAttribute('class','btn btn-danger')

    div.appendChild(h1);
    div.appendChild(button)
    document.querySelector('.task-list').appendChild(div)

    button.onclick = function() {
        let btn_par = this.parentElement
        btn_par.remove();
        count--
        console.log(count);
        if(count === 0){
            error_h1.innerHTML = 'There is no any task...'
        }
        else{
            error_h1.innerHTML = `There is task: ${count}`
        }
    }
}