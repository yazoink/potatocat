function include(file, id) {
  const target = document.querySelector(id)
  fetch(file)
  .then(res=>res.text())
  .then(data=>{
    target.innerHTML=data
  });
}
