

let purArr = JSON.parse(localStorage.getItem("purchase"));
console.log(purArr);

displaythat(purArr);

function displaythat(data2){
    let container_2 = document.querySelector("#purchased_vouchers");
    
    data2.forEach((ele,i) => {
       
        let div = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = ele.image;

        let h3 = document.createElement("h3");
        h3.innerText = ele.name;

        let p = document.createElement("h3");
        p.innerText = ele.price;

        div.append(image,h3,p);

        container_2.append(div);
    });
}