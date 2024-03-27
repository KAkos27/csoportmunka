import classNevAdas from "./classNevAdas.js";
import classNevek from "./classNevek.js";
import classRandomizalas from "./classRandomizalas.js";
import htmlosszerak from "./htmlosszerak.js";

function jatek() {
  htmlosszerak();
  classRandomizalas(classNevek);
  classNevAdas(classNevek);
  const gombok = $("button");
  gombok.forEach((gomb) => {
    gomb.on("click", (event) => {
      lampakattint(event);
    });
  });
}

export default jatek;
