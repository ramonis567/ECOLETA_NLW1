window.addEventListener("load", () =>{
  const buttonSearch = document.querySelector("#homepage .searchButton");
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#modal .header a");
  buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide");
  });
  closeModal.addEventListener("click", () => {
    modal.classList.add("hide");
  });
});
