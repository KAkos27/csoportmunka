function htmlosszerak() {
  const tarolo = $(".gomb-tarolo");
 // tarolo.html("<button></button>");
  let txt="";
  for (let index = 0; index < 9; index++) {
   txt+=`<button></button>`;
  }
  tarolo.html(txt)
}

export default htmlosszerak;
