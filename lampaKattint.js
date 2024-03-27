function lampaKattint(event) {
  if (event.target === "felkapcsolt") {
    event.target.removeClass("felkapcsolt");
    event.target.addClass("lekapcsolt");
  } else {
    event.target.removeClass("lekapcsolt");
    event.target.addClass("felkapcsolt");
  }
}
