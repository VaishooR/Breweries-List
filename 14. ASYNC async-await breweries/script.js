//build an html element with header part:
document.body.innerHTML =`
<div class="heading-container">
  <h1>Breweries List</h1>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4KWEzA0gSowu4cLVHCqIoztyuyKfyGbPhyDvuM93j-8eoGyhK1PkuHFj1DgKYdrDhKM&usqp=CAU" id="icon" width="200px" height="150px"/>    <br><br>
</div>
<div id="maincontainer" class="main-container"></div>`

//fetch api data using async await
const getData = async () =>{
    try{
        const data=await fetch("https://api.openbrewerydb.org/breweries");
        const breweries= await data.json();
        maincontainer.innerHTML="";
        breweries.forEach((brewery)=>{
            displayData(brewery);
        })
    }
    catch(error){
       console.log(error);
    }
};
getData();

const displayData = (obj) => {
    maincontainer.innerHTML +=`
    <div class="eachbrew">
        <h5>Brewery :</h5>
        <p> Name :   <span>${obj.name}</span>        </p>
        <p> Type:    <span>${obj.brewery_type}</span></p>
        <p> City:    <span>${obj.city}</span>        </p>
        <p> State:   <span>${obj.state}</span>       </p>
        <p> Country: <span>${obj.country}</span>     </p>
    </div>`
}




//fetch data using .then()
fetch("https://api.openbrewerydb.org/breweries")
.then((response)=>(response.json()))
.then((data)=>{
    console.log(data);
    getData(data);
})
.catch((err)=>{
    console.log(err);
})

