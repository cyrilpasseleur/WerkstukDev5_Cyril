var article = document.getElementById('agenda');

//Get logs agenda
getLogs();
var maandstappen = 0;
var maandcalorieen = 0;
var maandsporturen = 0;
function getLogs() {
    article.innerHTML = "";
    fetch('http://127.0.0.1:3000/api/sportagenda/')
        .then(res => res.json())
        .then(data => {

            data.forEach(element => {
                maandstappen + element.stappen;
                maandcalorieen + element.calorieen;
                maandsporturen + element.maandsporturen;
                article.insertAdjacentHTML('beforeend', `<p>Op <strong>${element.date}</strong> heeft u in <strong>${element.sporturen}</strong> uur <strong>${element.stappen}</strong> stappen afgelegd en <strong>${element.calorieen}</strong> calorieen verbrandt. </p>`);
            });
            console.log(maandcalorieen);
            console.log(maandsporturen);
            console.log(maandstappen);
        });
}


//post logs agenda
var button = document.getElementById('voeg');
button.addEventListener('click', function (e) {
    e.preventDefault();

    fetch('http://127.0.0.1:3000/api/sportagenda/', {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            date: new Date(),
            stappen: document.getElementById('stap').value,
            calorieen: document.getElementById('cal').value,
            sporturen: document.getElementById('sportuur').value
        })
    })
    getLogs();
    
})


var statis = document.getElementById('statistieken');
function  countStatistieken(){
    fetch('http://127.0.0.1:3000/api/statistieken/', {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            maandstappen: document.getElementById('stap').value,
            calorieen: document.getElementById('cal').value,
            sporturen: document.getElementById('sportuur').value
        })
    })
}