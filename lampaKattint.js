const atszinez = (lampa, lampaClassNev) => {
console.log(lampaClassNev);
console.log(lampa)
  if (lampaClassNev === "felkapcsolt") {
    lampa.removeClass("felkapcsolt");
    lampa.addClass("lekapcsolt");
  } else {
    lampa.removeClass("lekapcsolt");
    lampa.addClass("felkapcsolt");
  }
};





function lampaKattint(event, i, gombok) {
  const lampa = $(event.target);
  const lampaClassNev = event.target.className;
  atszinez(lampa, lampaClassNev);
/*
  if(i%3==0){
    if gombok.
  }
*/

/*
  if (i === 4) {
    atszinez(gombok.eq(i - 3), gombok.eq(i - 3).className);
    atszinez(gombok.eq(i + 3), gombok.eq(i + 3).className);
    atszinez(gombok.eq(i - 1), gombok.eq(i - 1).className);
    atszinez(gombok.eq(i + 1), gombok.eq(i + 1).className);
  }*/

  
    if(i%3!==0){
      atszinez(gombok.eq(i - 1), gombok.eq(i - 1).attr("class"));//balra
    }

    if(i)

    atszinez(gombok.eq(i - 3), gombok.eq(i - 3).attr("class"));//felette
    atszinez(gombok.eq(i + 3), gombok.eq(i + 3).attr("class"));//alatta
 
    atszinez(gombok.eq(i + 1), gombok.eq(i + 1).attr("class")); //jobbra

};


export default lampaKattint;

