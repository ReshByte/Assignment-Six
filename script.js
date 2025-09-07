const manageSpinner=(status)=>{
  if(status==true){
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-section").classList.add("hidden");
  }
  else{
    document.getElementById("card-section").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden")
  }
}



const loadPlants=()=>{
  fetch("https://openapi.programming-hero.com/api/categories")
  .then((res)=>res.json())
  .then((json)=>displayLesson(json.categories))
};


const removeActive=()=>{
  const lessonButtons = document.querySelectorAll(".lesson-btn");
  lessonButtons.forEach(btn=>btn.classList.remove("active"))
}

const loadLevelWord=(id)=>{
 manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${id}`)
      clickBtn.classList.add("active")
      displayLevelWord(data.plants);
    })
}

const loadWordDetail=async(id)=>{
  const url =`https://openapi.programming-hero.com/api/plant/${id}`;
  const res =await fetch(url)
  const details=await res.json()
 
  displayWordDetails(details.plants)
}

const displayWordDetails=(word)=>{
  
  console.log(word)
  const detailsBox = document.getElementById("details-container");
  
  
 
  detailsBox.innerHTML=`
  <div class=" bg-white p-5 rounded-[8px] ">
                 <h2 class="mb-[8px] inter-font font-semibold text-[#1F2937] text-[14px]">${word.name}</h2> 
                 <img src="${word.image}" class="mb-[8px] w-full h-[300px] rounded-[8px]">   
                   <p class="mb-[8px] geist-font font-medium text-[14px] rounded-[400px] text-[#15803D] bg-[#DCFCE7] text-center  py-1 w-[120px]">${word.category}</p>
                    <p class="mb-[8px] inter-font font-semibold text-[14px]">৳ <span>${word.price}</span></p>
                   <p class="inter-font font-normal text-[12px] text-[#1F2937] mb-[8px]">${word.description}</p>
          
                   
                </div>
  `
  document.getElementById("word_modal").showModal();


}


const displayLevelWord=(words)=>{
  const cardSection = document.getElementById("card-section");
  cardSection.innerHTML="";

  words.forEach(word => {
    const card = document.createElement("div");
    card.innerHTML=`
     <div class=" bg-white p-5 rounded-[8px] w-full h-full">
                  <img src="${word.image}" class="mb-[8px] h-[200px] w-full rounded-[8px]">   
                  <h2 onclick="loadWordDetail(${word.id})" class="mb-[8px] inter-font font-semibold text-[#1F2937] text-[14px]">${word.name}</h2>  
                  <p class="inter-font font-normal text-[12px] text-[#1F2937] mb-[8px]">${word.description}</p>
                  <div class="flex justify-between">
                     <p class="mb-[8px] geist-font font-medium text-[14px] rounded-[400px] text-[#15803D] bg-[#DCFCE7] px-2 py-1">${word.category}</p>
    
                     <p class="mb-[8px] inter-font font-semibold text-[14px]">৳<span>${word.price}</span> </p>
                    
                  </div>
                   <a  class="btn bg-[#15803D] text-white inter-font font-medium text-[16px] border-none rounded-4xl w-full">Add to Cart</a>
                  </div>
    
    `;

    cardSection.append(card);
  });
  manageSpinner(false);
};


const displayLesson=(lessons)=>{ 
    

    const levelContainer = document.getElementById("plant-list");
    levelContainer.innerHTML="";

    for(let lesson of lessons){
        // console.log(lesson)
        const btnDiv =  document.createElement("div");
        btnDiv.innerHTML = `
        <p  id="lesson-btn-${lesson.id}" onclick="loadLevelWord('${lesson.id}')" class="lesson-btn w-[250px] mb-2 inter-font font-normal text-[16px] p-1 rounded-[4px] text-[#1F2937] hover:bg-[#15803D] hover:text-white max-sm:w-[150px]"> ${lesson.category_name}</p>
        `


        // append btn to level container...
        levelContainer.append(btnDiv)
    }
};







loadPlants();



const showDisplay=()=>{
  const url ="https://openapi.programming-hero.com/api/plants";
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>display(data.plants))

}


const display=(cards)=>{
  // console.log(id)
  const secCard = document.getElementById("card-section");
   for(let card of cards){
           
        const btnDiv =  document.createElement("div");
        btnDiv.innerHTML = `
                  
         <div class=" bg-white p-5 rounded-[8px] w-full h-full">
        <img src="${card.image}" class="mb-[8px] h-[200px] w-full rounded-[8px]">   
        <h2 onclick="loadWordDetail(${card.id})" class="mb-[8px] inter-font font-semibold text-[#1F2937] text-[14px]">${card.name}</h2>  
                  <p class="inter-font font-normal text-[12px] text-[#1F2937] mb-[8px]">${card.description}</p>
       <div class="flex justify-between">
                     <p class="mb-[8px] geist-font font-medium text-[14px] rounded-[400px] text-[#15803D] bg-[#DCFCE7] px-2 py-1">${card.category}</p>
    
                     <p class="mb-[8px] inter-font font-semibold text-[14px]">৳ <span>${card.price}</span></p>
                    
                  </div>
                  <a onclick="cartDetails(${card.id})" class="btn bg-[#15803D] text-white inter-font font-medium text-[16px] border-none rounded-4xl w-full">Add to Cart</a>
           </div>
               `


        // append btn to level container...
        secCard.append(btnDiv)
    }


}

showDisplay();
















// add to cart section 

document.getElementById("card-section")
  .addEventListener("click", (e) => {
   if(e.target.localName==="a"){
    const name = e.target.parentNode.children[1].innerText;
      const price = e.target.parentNode.parentNode.children[0].children[3].children[1].children[0].innerText;
      // console.log(name)
      console.log(price)
       alert(`${name} has been added to the cart.`);
    const cartMainSection = document.getElementById(
        "card-id"
      );
      cartMainSection.innerHTML += `
      <div class="flex justify-between items-center rounded-lg p-2 bg-[#f0fdf4] mt-[10px]">
        <div>
          <h1 class="font-[600]">${name}</h1>
          <p><span class="cart-item-price">${price}</span></p>
        </div>
        <div>
          <button class="remove-btn cursor-pointer">❌</button>
        </div>
      </div>`;

      // update total
      const cartPrice = document.getElementById("total-count").innerText;
      const total = Number(cartPrice) + Number(price);
      document.getElementById("total-count").innerText = total;

      
    }
  });

 
  document
  .getElementById("card-id")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const itemDiv = e.target.closest("div.flex"); 
      const price = itemDiv.querySelector(".cart-item-price").innerText;

      // total update
      const cartPrice = document.getElementById("total-count").innerText;
      const newTotal = Number(cartPrice) - Number(price);
      document.getElementById("total-count").innerText = newTotal;

      // remove from DOM
      itemDiv.remove();
    }
  });





