let selectUF = null;
let selectCity = null;
let collectedItems = null;
let selectedItems = [];
const itemsToCollect = document.querySelectorAll(".itens-grid li");

for(const item of itemsToCollect){
  item.addEventListener("click", handleSelectedItem);
}

window.addEventListener("load", () => {
  mapElements();
  fetchStates();
  fetchCities();
});

function mapElements() {
  selectUF = document.querySelector("#selectUF");
  selectCity = document.querySelector("#selectCity");
  collectedItems = document.querySelector("input[name=items]");
}

function fetchStates(){
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
      .then(states => {
        for(state of states){
          selectUF.innerHTML += `<option value="${state.sigla}">${state.nome}</option>`;
        }
      })
}

function fetchCities(){
  selectCity.innerHTML = "<option value>Selecione a cidade</option>";

  selectUF.addEventListener("change", () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectUF.value}/municipios`)
    .then(response => response.json())
      .then(cities => {
        for(city of cities){
          selectCity.removeAttribute("disabled");
          selectCity.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }
      })
  });
}

function handleSelectedItem(event) {
  const itemLi = event.target;
  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;
  const alreadySelected = selectedItems.findIndex(item => {
    return (item == itemId);
  });
  
  if(alreadySelected != -1){
    const filteredItems = selectedItems.filter(item =>{
      return (item != itemId);
    });
    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }
  
  collectedItems.value = selectedItems;
}
