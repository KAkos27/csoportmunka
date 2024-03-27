
function randomizalas(classNevek){
    for (let index = 0; index < classNevek.lenght; index++) {
        let random=Math.floor(Math.random()*(classNevek.lenght-index))+index;
        let csere= classNevek[index];
        classNevek[i]=classNevek[random];
        classNevek[random]=csere;
    }
}