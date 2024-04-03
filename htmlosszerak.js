function htmlosszerak() {
  const tarolo = $(".gomb-tarolo");
 // tarolo.html("<button></button>");
  let txt="";
  for (let index = 0; index < 9; index++) {
   txt+=`<button></button>`;
  }
  tarolo.html(txt)
}

function ujjatek(){
  const gomb=$(".ujjatek");
  let txt="";
  for(let index=0;index < 1; index++){
  txt+=<button></button>

  }
  gomb.html(txt)


}

export default htmlosszerak;
