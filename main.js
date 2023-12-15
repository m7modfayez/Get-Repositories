let input = document.querySelector(".input-style");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
let reposcontainer = document.getElementsByClassName(".repos-container")
let reposCount ;
let counter = 1;

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

getButton.onclick = function(){
    getRepos(`https://api.github.com/users/${input.value}/repos`);
    counter = 1;
};


function getRepos (link) {
   if(input.value == ""){
    reposData.innerHTML = "please enter the username";
   }

   else{
    
    fetch(link)

    .then((response) => response.json())

    .then((repos) => {

        reposCount = repos.length;
        console.log(reposCount);

        reposData.innerHTML = '';
        let table = document.createElement("table");
        table.className = 'table table-hover border-start border-end table-bordered bg-light w-100 b-5';

        let headRow = document.createElement("tr");
        headRow.className = " bg-gradient font-weight-bold fs-4 text-danger w-100";

        let headName = document.createElement("th");
        headName.innerHTML="Repo Name";
        headName.className = "p-3 w-40";

        let headlang = document.createElement("th");
        headlang.innerHTML="Repo language";
        headlang.className = "p-3 w-10";

        let headsize = document.createElement("th");
        headsize.innerHTML="Repo size";
        headsize.className = "p-3 w-10";

        let headStars = document.createElement("th");
        headStars.innerHTML="Stars";
        headStars.className = "p-3 w-10";

        let watchers = document.createElement("th");
        watchers.innerHTML="Watchers";
        watchers.className = "p-3 w-10";


        let headLinks = document.createElement("th");
        headLinks.innerHTML="Repo Link";
        headLinks.className = "p-3 w-10";


        headRow.appendChild(headName);
        headRow.appendChild(headlang);
        headRow.appendChild(headsize);
        headRow.appendChild(headStars);
        headRow.appendChild(watchers);
        headRow.appendChild(headLinks);
        table.appendChild(headRow);
        




        repos.forEach(repo => {

            reposCount++;

            let row = document.createElement("tr");
            row.className= "fs-5 text-start";

            let riponame = document.createElement("td");
            riponame.innerHTML =repo.name;
            riponame.className = "p-3 ";

            let lang = document.createElement("td");
            lang.innerHTML =repo.language;
            lang.className = "p-3 ";

            let size = document.createElement("td");
            size.innerHTML =repo.size;
            size.className = "p-3 ";

            let stars = document.createElement("td");
            stars.innerHTML =repo.stargazers_count;
            stars.className = "p-3 s-2 ";


            let watchers = document.createElement("td");
            watchers.innerHTML =repo.watchers_count;
            watchers.className = "p-4 ";



            let RipoLink = document.createElement("td");
            RipoLink.innerHTML = `<a class = "text-decoration-none rounded-2 text-light" style="background-color: rgb(240, 90, 45);  " href="https://www.github.com/${input.value}/${repo.name}" target="_blank">Visit Repo</a>`
            RipoLink.className = "p-2";

            row.appendChild(riponame);
            row.appendChild(lang);
            row.appendChild(size);
            row.appendChild(stars);      
            row.appendChild(watchers);        
            row.appendChild(RipoLink);        
            table.appendChild(row);    
            
                        
        });
        reposData.appendChild(table);
        
        // console.log(reposCount);
   if(counter != 1){
    prevBtn.classList.remove("invisible");
    prevBtn.classList.add("visible");
   }
   else if(counter == 1)
   {
    prevBtn.classList.remove("visible");
    prevBtn.classList.add("invisible");
   }

   if(repos.length==30){
    nextBtn.classList.remove("invisible");
    nextBtn.classList.add("visible");
   }
   else if(repos.length!=30)
   {
       nextBtn.classList.add("invisible");
       nextBtn.classList.remove("visible");
   }
       
   })
   

   }
//    let pagi = document.createElement("div");
//    pagi.innerHTML = `<div class="container ms-0 justify-content-end">
//      <ul class="pagination justify-content-center m-8">
     
//      </ul>
//   </div>`

//   let prev = document.createElement("button");
//   let next = document.createElement("button");

//   prev.innerHTML = `<button onclick="Previous()" class="page-link  ">Previous</button>`
//   next.innerHTML = `<button onclick="Next()" class="page-link ">Next</button>`

//   if(reposCount == 30)
//   {pagi.appendChild(next)}


  


//   reposData.appendChild(pagi);
   
}

//try
// let counter = 1;
// function Next() {
//     counter++;
//     getRepos(`https://api.github.com/users/${input.value}/repos?page=${counter}`);
// }

// function Previous() {
//     counter--;
//     getRepos(`https://api.github.com/users/${input.value}/repos?page=${counter}`);
// }


// 
nextBtn.onclick = function() {
    counter++;
    getRepos(`https://api.github.com/users/${input.value}/repos?page=${counter}`);
   
}
// 
prevBtn.onclick = function() {
    counter--;
    getRepos(`https://api.github.com/users/${input.value}/repos?page=${counter}`);
}





