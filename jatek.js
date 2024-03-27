import classNevAdas from "./classNevAdas.js";
import classNevek from "./classNevek.js";
import classRandomizalas from "./classRandomizalas.js";
import htmlosszerak from "./htmlosszerak.js";

function jatek() {
  htmlosszerak();
  classRandomizalas(classNevek);
  console.log(classNevek);
  //classNevAdas(classNevek);
}

export default jatek;
