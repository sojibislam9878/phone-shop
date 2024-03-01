const loadData = async (search) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);

    const data =await res.json();
    const phones = data.data;
    displayPhones(phones)
}

loadData()


const displayPhones = phones =>{
    const phoneDiv = document.getElementById("phone-card-container");
    phoneDiv.innerText = "";
    const showAllBtn = document.getElementById("show-all-btn");
    if (phones.length > 12) {
        showAllBtn.classList.remove("hidden")
    }else{
        showAllBtn.classList.add("hidden")
    }
    phones = phones.slice(0, 12);

        phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-base-100 shadow-xl`
        phoneCard.innerHTML= `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        phoneDiv.appendChild(phoneCard)
    });
}

const hanledSearch = () =>{
    console.log("I am clicked");
    const searchFild = document.getElementById("search-fild");
    const searchText = searchFild.value;
    console.log(searchText);
    loadData(searchText);
}