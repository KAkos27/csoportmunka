function htmlosszerak() {
  const tarolo = $(".gomb-tarolo");
  for (let index = 0; index < 9; index++) {
    tarolo.html += "<button></button>";
  }
}

export default htmlosszerak;
