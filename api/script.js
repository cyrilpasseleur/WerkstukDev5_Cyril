"use strict";
import {
    convertQuerySnapshotToRegularArray
} from '../utils.js';

firebase.initializeApp({
    apiKey: 'AIzaSyBBdktFRkgM6v8FUh7YuxsuS6PWEC5ptds',
    authDomain: 'localhost',
    projectId: 'dev5werk'
});

let db = firebase.firestore();
let foodCollection = db.collection("Foods");

renderFoods();

//RENDER FOOD
async function renderFoods() {
    foodCollection.get().then(querySnapshot => {
        const foods = convertQuerySnapshotToRegularArray(querySnapshot);
        console.log(foods);
    })
}

//ADD FOOD
let add = document.getElementById("sub");
add.addEventListener("click", addFood);

async function addFood(event) {

    event.preventDefault();
    let inputVal = document.getElementById("addToDB");
    inputVal.value = "";
    try {
        let docRef = foodCollection.add({
            name: "brood"
        });
        renderFoods();
    }catch(error){
        console.error(error);
    }


}