const loadPlants=()=>{
  fetch("https://openapi.programming-hero.com/api/categories")
  .then((res)=>res.json())
  .then((json)=>displayLesson(json.categories))
};




const loadLevelWord=(id)=>{

  const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLevelWord(data.plants))
}


const displayLevelWord=(words)=>{
  const cardSection = document.getElementById("card-section");
  cardSection.innerHTML="";

  words.forEach(word => {
    const card = document.createElement("div");
    card.innerHTML=`
     <div class=" bg-white p-5 rounded-[8px] w-full h-full">
                  <img src="${word.image}" class="mb-[8px] h-[200px] w-full">   
                  <h2 class="mb-[8px] inter-font font-semibold text-[#1F2937] text-[14px]">${word.name}</h2>  
                  <p class="inter-font font-normal text-[12px] text-[#1F2937] mb-[8px]">${word.description}</p>
                  <div class="flex justify-between">
                     <p class="mb-[8px] geist-font font-medium text-[14px] rounded-[400px] text-[#15803D] bg-[#DCFCE7] px-2 py-1">${word.category}</p>
    
                     <p class="mb-[8px] inter-font font-semibold text-[14px]">$ ${word.price}</p>
                    
                  </div>
                   <a class="btn bg-[#15803D] text-white inter-font font-medium text-[16px] border-none rounded-4xl w-full">Add to Cart</a>
                  </div>
    
    `;

    cardSection.append(card);
  });
};


const displayLesson=(lessons)=>{ 
    

    const levelContainer = document.getElementById("plant-list");
    levelContainer.innerHTML="";

    for(let lesson of lessons){
        // console.log(lesson)
        const btnDiv =  document.createElement("div");
        btnDiv.innerHTML = `
        <p  id="lesson-btn-${lesson.category_name}" onclick="loadLevelWord('${lesson.id}')" class="w-[250px] mb-2 inter-font font-normal text-[16px] p-1 rounded-[4px] text-[#1F2937] hover:bg-[#15803D] hover:text-white max-sm:w-[150px]"> ${lesson.category_name}</p>
        `


        // append btn to level container...
        levelContainer.append(btnDiv)
    }
};







loadPlants();






