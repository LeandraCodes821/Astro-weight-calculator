// Write your JavaScript code here!
// Testing testing 123
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
    var populateDropdown = document.getElementById("planets");
        planets.foreach(planet => {
            var option = document.createElement("option");
            option.value = planet[0];
            option.innerText = planet[0];
            populateDropdown.appendChild(option)
        });
    populateDropdown();
        
    function calculateWeight(weight, planetName) { 
        for(var i = 0; i < planets.length; i++){
            if (planets[i][0] == planetName) {
                return parseInt(weight) * planets[i][1];
                }
            }
        }
        function handleClickEvent(e) {
            var userWeight = 
        parseInt(document.getElementById(userWeight).value);
            var planetName = 
            document.querySelectorAll("planets option")
            [document.getElementById("planets").selectedIndex].textContent;
            var result = calculateWeight(userWeight, planetName);
            document.getElementById("output").innerHTML = "If you were on" + planetName + "you would weigh" + result + "lbs!";
        } 
        document.getElementById("calculatebutton").addEventListener("click",handleClickEvent);
        
    