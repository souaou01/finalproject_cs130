var countries = ["France", "Italy", "Germany", "China", "Ghana", "Ivory Coast", "Egypt", "Morroco", "Mali", "Senegal", "Netherlands", "Japan", "Spain"];
var cities = ["Paris", "Rome",  'Berlin',  "Beijing",  "Accra",  "Abidjan", "Cairo", "Rabat", "Bamako", "Dakar", "Amsterdam", "Tokyo", "Madrid"];


function cityQuiz(){

  listLength = countries.length;
  var randnum = Math.floor(Math.random() * listLength);
  var savednum = randnum
  var randplace = countries[savednum]
  var qs = prompt("what is the capital of "+ randplace + "?")
  var again = "y"

  if (qs === cities[savednum]){
    alert('Congrats!');
  }

  else{
    alert("Sorry, incorrect");

    alert("The correct Answer is "+cities[savednum]);
  }

}


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function coloring(){
    document.body.style.backgroundColor = "black";
  }














// alert(countries.length + "countries in list")
