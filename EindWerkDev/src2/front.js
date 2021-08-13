
//FRONTEND JAVASCRITP (optioneel)
var article = document.getElementById('agenda');
//Get logs agenda
getLogs();
var maandstappen = 0;
var maandcalorieen = 0;
var maandsporturen = 0;

//Ophalen logs
function getLogs() {
    article.innerHTML = "";
    fetch('http://127.0.0.1:3000/api/sportagenda/')
        .then(res => res.json())
        .then(data => {

            data.forEach(element => {
                maandstappen = parseFloat(maandstappen) + parseFloat(element.stappen);
                maandcalorieen = parseFloat(maandcalorieen) + parseFloat(element.calorieen);
                maandsporturen = parseFloat(maandsporturen) + parseFloat(element.sporturen);
                
                article.insertAdjacentHTML('beforeend', `<p>Op <strong>${element.date}</strong> heeft u in <strong>${element.sporturen}</strong> uur <strong>${element.stappen}</strong> stappen afgelegd en <strong>${element.calorieen}</strong> calorieen verbrandt. </p>`);
            });
            
            patchStatistieken(maandstappen,maandcalorieen,maandsporturen);
            console.log(maandstappen);
            maandstappen = 0;
            maandcalorieen = 0;
            maandsporturen = 0;
            
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

//PatchLogs
var statis = document.getElementById('statistieken');
function  patchStatistieken(maandstappen,maandcalorieen,maandsporturen){
    fetch('http://127.0.0.1:3000/api/statistieken/884f04a2-e763-489a-8f15-63dde0bfe12e', {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "PATCH",
        body: JSON.stringify({
            maandstappen: maandstappen,
            maandcalorieen: maandcalorieen,
            maandsporturen: maandsporturen
        })
    }).then(function(){
        statis.innerHTML = "";
        statis.insertAdjacentHTML("beforeend", 
        
        `<h2>Totaal calorieen ${maandcalorieen}</h2><h2>Totaal stappen ${maandstappen}</h2><h2>Totaal sporturen ${maandsporturen}</h2>`
        
        );
    })
}