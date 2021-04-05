"use strict"
const darbas = document.querySelector('#uzduotis');
const svarba = document.querySelector('#priority');
const rezultatams = document.querySelector('tbody');

console.log(rezultatams);


const addBtn = document.getElementById('mygtukas');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
})

console.log(addBtn);

function addToDo(){
    if(darbas.value !== ''){
        // pasitikrinimui visada spausdinu i konsole
        console.log(darbas.value);
        console.log(svarba.value);

        // sukuriu eilute vienai darbu eigai spausdinti
        const eilute = document.createElement('tr');
        // eilute pridedu i sukurta table
        rezultatams.appendChild(eilute);
        // kuriu kiekvienai reiksmei po atskira td elementa
        const uzduotis = document.createElement('td');
        // idedu i td elementa tai, ka vartotojas ivede      
       uzduotis.textContent = darbas.value;        
        // td elementa apendinu eilutei
        eilute.appendChild(uzduotis);

        // kodas prioricio idejimui
        const prioritis = document.createElement('td');
       switch (svarba.value){
            case 'High':
                prioritis.innerHTML = '<p class="btn btn-danger">'+svarba.value+'</p>';
                break;
            case 'Normal':
                prioritis.innerHTML = '<p class="btn btn-success">'+svarba.value+'</p>';
                break;
            case 'Low':
                prioritis.innerHTML = '<p class="btn btn-secondary">'+svarba.value+'</p>';
                break;
       }
       eilute.appendChild(prioritis);

    } else {
        alert("Įveskite naują užduotį.")
    }
    

    
}