function lampaKattint(event, i) {
  if (event.target.className === "felkapcsolt") {
    $(event.target).removeClass("felkapcsolt");
    $(event.target).addClass("lekapcsolt");
  } else {
    $(event.target).removeClass("lekapcsolt");
    $(event.target).addClass("felkapcsolt");
  }
}

export default lampaKattint;
