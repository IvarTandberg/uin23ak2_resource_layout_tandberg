document.querySelector(".text").innerHTML = `<h2>${resources[0].category}</h2><p>${resources[0].text}</p>`;
    let text = ""
    for (let i = 0; i < resources[0].sources.length; i++) {
        text += `<li><a href="${resources[0].sources[i].url}">${resources[0].sources[i].title}</a></li>`;
      }
    document.querySelector(".sources").innerHTML = text

function innhold(index) {

    
    
    document.getElementById("nav0").classList.remove("selected");
    document.getElementById("nav1").classList.remove("selected");
    document.getElementById("nav2").classList.remove("selected");
    document.getElementById("nav3").classList.remove("selected");
    document.getElementById("nav4").classList.remove("selected");

    document.querySelector(".text").innerHTML = `<h2>${resources[index].category}</h2><p>${resources[index].text}</p>`;
    let text = ""
    for (let i = 0; i < resources[index].sources.length; i++) {
        text += `<li><a href="${resources[index].sources[i].url}">${resources[index].sources[i].title}</a></li>`;
      }
    document.querySelector(".sources").innerHTML = text
    
    

   

    document.getElementById("nav"+index).classList.add("selected");



}



