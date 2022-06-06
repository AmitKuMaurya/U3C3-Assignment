


let purArr = JSON.parse(localStorage.getItem("purchase")) || [];

  async function Mostpopular(){
    let url2 = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    
    let res = await fetch(url2);

    let data2 = await res.json();
    
    Append(data2[0].vouchers);
    console.log(data2[0].vouchers);
}
Mostpopular();


// function mostPopularAppend(data2){
    let  Append = (data2) =>{
    let container_2 = document.querySelector(".voucher");
    container_2.innerHTML = null;

    data2.forEach((ele,i) => {
       
        let div = document.createElement("div");
        div.src = ("id","voucher_list")
        let image = document.createElement("img");
        image.src = ele.image;

        let h3 = document.createElement("h3");
        h3.innerText = ele.name;

        let p = document.createElement("h3");
        p.innerText = ele.price;

        let button = document.createElement("button");
        button.src = ("id","buy_voucher");
        button.innerText = "Buy";
        button.addEventListener("click",function(){
            sentit(ele,i);
        })

        div.append(image,h3,p,button);

        container_2.append(div);
    });
}

function sentit(ele,i){
    alert("product has been added");
    purArr.push(ele);
    localStorage.setItem("purchase",JSON.stringify(purArr));
    

}