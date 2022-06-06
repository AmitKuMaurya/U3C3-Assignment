
let userArr = JSON.parse(localStorage.getItem("user")) || [];

function SubmitMyform(){
    event.preventDefault();
    console.log("hello i am here");
    let obj = {
        Pname : form.name.value,
        Pemail : form.email.value,
        Paddress : form.address.value,
        Pamount : form.amount.value,
    }
    console.log(obj);
    userArr.push(obj);

    localStorage.setItem("user",JSON.stringify(userArr));
    window.location.reload();
}
// console.log(userArr);