const receipe= document.getElementById('receipe');
const btn= document.getElementById('btn');
var hihi= document.getElementById('info');



btn.addEventListener("click", function(){
    event.preventDefault();
    var url="https://www.themealdb.com/api/json/v1/1/search.php?s="+receipe.value;

    async function GetData(){
        const response= await fetch(url);
        console.log(response)
        const data= await response.json();
        console.log(data)
        clear(hihi);
        info(data);
    }
    
    GetData();

    function info(x){

        hihi.innerHTML += "<h1>"+x.meals[0].strMeal+"</h1>";
        hihi.innerHTML += "<img style=\'aspect-ratio: 1 / 1; width: 300px; object-fit: cover\' src='"+x.meals[0].strMealThumb+"'>";
        hihi.innerHTML += "<p style='padding: 2em 8em;text-align: justify;'>"+x.meals[0].strInstructions+"</p>"
    }

    function clear(item){
        item.innerHTML = "";
    }

})








