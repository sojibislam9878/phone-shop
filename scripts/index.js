const loadData = async (search , isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);

    const data =await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

loadData(13)


const displayPhones = (phones,isShowAll) =>{
    const phoneDiv = document.getElementById("phone-card-container");
    phoneDiv.innerText = "";
    const showAllBtn = document.getElementById("show-all-btn");
    // if (phones.length === 0) {
    //     alert("input a valid name")
    // }
    
    if (phones.length > 12 && !isShowAll) {
        showAllBtn.classList.remove("hidden")
    }else{
        showAllBtn.classList.add("hidden")
    }

    console.log("is show all",isShowAll);
        if (!isShowAll) {
            phones = phones.slice(0, 12);
        }

        phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-base-100 shadow-xl pt-8`
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
    handleSpinner(false)
}

const handleSearch = (isShowAll) =>{
    handleSpinner(true)
    const searchFild = document.getElementById("search-fild");
    const searchText = searchFild.value;
    console.log(searchText);
    loadData(searchText , isShowAll);
}

const handleSpinner = (isloading) =>{
    const spinner = document.getElementById("spinner");
    if (isloading) {
        spinner.classList.remove("hidden")
    }else{
        spinner.classList.add("hidden")
    }
}

const showAll = () => {
    handleSearch(true);
}