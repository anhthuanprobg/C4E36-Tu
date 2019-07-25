// console.log(1)
// setTimeout(() =>{
//     console.log(2);
// }, 2000)

// console.log(3)
const context = {
    users: null,
}
window.onload = async () => {
    await getUsers();
    renderUsers();
    viewUser();
}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users')
    users = await res.json()
    context.users = users.data;
}

// const renderUsers = () => {
//     console.log(context.users)
// }

// let img = document.getElementById('image')

const renderUsers = () => {
    let userDiv =document.getElementById('container')
    context.users.forEach((user,index) => {
        console.log(user)
        let userElement =  `
            <div id="user-${index}">
                <img src=${user.avatar}>
                
                <b>Full name : </b>${user.last_name}${user.first_name}
                
                <b>Email: </b>${user.email}
            </div>
            
            
        `
        userDiv.innerHTML += userElement
    })    
}
const viewUser = () => {
    for(let i=0;i<context.users;i++){
        // const userObj = context.users[index]
        // console.log(userObj)
        let user = document.getElementById(`user-${index}`)
        let userDetail = document.getElementById('user-detail')
        user.addEventListener('click', (event) => {
            console.log(event);
            userDetail.innerHTML = ''
            userDetail.innerHTML += user.innerHTML;
        })
    }
        

}