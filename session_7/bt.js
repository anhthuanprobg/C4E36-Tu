let addBtn = document.getElementById('Them mon an')
addBtn.addEventListener('Click', () => {
    console.log('clicked')
})
addBtn.addEventListener('a')

let removeBtn = document.getElementById('Xoa mon an')
removeBtn.removeEventListener('CLick', () =>{
    console.log('clicked')
})
removeBtn.remove()  