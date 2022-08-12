document.getElementById("searchInput").addEventListener("keyup", function(event){
  let searchQuery = event.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("name");
  // console.log(allNamesDOMCollection[0].textContent);
  for (i=0; i< allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase()
    currentName.includes(searchQuery)? allNamesDOMCollection[i].style.display="block"
    :
    allNamesDOMCollection[i].style.display ="none";
    }
  }
);
