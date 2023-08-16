let input = document.querySelector(".input-style");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


getButton.onclick = function(){
    getRepos();
};


function getRepos () {
   if(input.value == ""){
    reposData.innerHTML = "please enter the username";
   }

   else{
    fetch(`https://api.github.com/users/${input.value}/repos`)

    .then((response) => response.json())

    .then((repos) => {
        
        let mainDiv = document.createElement("div");
        
        reposData.innerHTML = '';
        // mainDiv.innerHTML = `<table class="table table-hover">
        //                      <thead>
        //                        <tr>
        //                          <th scope="col">Ripo Name</th>
        //                          <th scope="col">Stars</th>
        //                          <th scope="col">Ripo Link</th>
        //                        </tr>
        //                      </thead>
        //                      <tbody>
        //                        <tr>
        //                          <td>aaa</td>
        //                          <td>sss</td>
        //                          <td>ddddd</td>
        //                        </tr>
        //                      </tbody>
        //                    </table>  `;

        let table = document.createElement("table");
        table.className = 'table table-hover table-bordered table-sm table-responsive';

        let headRow = document.createElement("tr");

        let headName = document.createElement("th");
        headName.innerHTML="Ripo Name";

        let headStars = document.createElement("th");
        headStars.innerHTML="Stars";

        let headLinks = document.createElement("th");
        headLinks.innerHTML="Ripo Link";

        headRow.appendChild(headName);
        headRow.appendChild(headStars);
        headRow.appendChild(headLinks);
        table.appendChild(headRow);
        




        repos.forEach(repo => {

            let row = document.createElement("tr");

            let riponame = document.createElement("td");
            riponame.innerHTML = repo.name;


            let stars = document.createElement("td");
            stars.innerHTML = repo.stargazers_count;


            let RipoLink = document.createElement("td");
            RipoLink.innerHTML = `<a href="https://www.github.com/${input.value}/${repo.name}" target="_blank">Visit</a>`

            row.appendChild(riponame);
            row.appendChild(stars);        
            row.appendChild(RipoLink);        
            table.appendChild(row);                
                        
        });
        // mainDiv.appendChild(table);
        reposData.appendChild(table);

   })

   }
    
}



