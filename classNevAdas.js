function classNevAdas(classNevek) {
  const gombok = $("button");

  gombok.forEach((gomb, i) => {
    gomb.addClass(classNevek[i]);
  });
}

export default classNevAdas;
