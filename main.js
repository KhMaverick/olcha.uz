let Data = [];
function enquiry() {
    $.ajax({
        url: "http://myjson.dit.upm.es/api/bins/apn3",
        type: "GET",
        success: (value) => {
            Data = value,
                mapping(Data)
        },
        error: (err) => {
            console.log(err);
        }
    })
};
enquiry()

function mapping(value) {
    value.map((v, i) => {
        let li = `
    <li>
        <a id="a" href="#">
            <div id="slide${i + 1}">
                <div id="card" class=" p-3">
                    <img class="img-fluid" src="${v.rasm}" alt="image">
                   <p class="text-outline danger">${v.category}</p>
                   <div id="info">
                        <h5>${v.narxi}</h5>
                        <h6 class="text-light rounded-pill py-1 px-3"> от ${v.narxi / 10}сум/месяц </h6>
                        <p>${v.info}</p>

                    </div>
                    <div class="d-flex justify-content-between">
                        <button onclick="Del(${i})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="px-4 py-0">Купить</button>
                        <span><i class="fa-solid fa-chart-column"></i></span>
                    </div>
                                        
                    <div class="peel">
                        <h5 class="text-danger"><i class="fa-regular fa-heart"></i></h5>
                    </div>
                </div>
                    
            </div>
        </a>
    </li>
        `
        $("#ul").append(li)
    })
}

let Data2 = [];
const Del = (index) => {
    Data2.push(Data[index])

    $("#spit").html("")
   Data2.map((v,i)=>{
    let b = v.name
    let d = v.narxi
    console.log(b,d);
    $("#spit").append("     ", i+1,".", "Название: ",b,"; Цена: ", d)
   })
}

$("#Search").on("input", ()=>{
    $("#ul").html("")
    let Newdata = Data.filter(f=>{
        return f.category.toLowerCase().includes($("#Search").val());     
    })
    mapping(Newdata);
})