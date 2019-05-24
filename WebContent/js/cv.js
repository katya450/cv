$(function() {
  $("nav").data("size", "big")

  // tee tästä geneerisempi: klikattavilla elementeille oma yhteinen classi ja
  // niiden alla oleville yhteinen class (id:iden tilalle),
  // todo: klikattavalla jutulla on alipalikka joka tulee näkyviin kun kerrotaan että tuu
  //lisäks muuta ididen nimet alkamaan js-
  // lisäks muuta tää perusJÄSÄKS
  $("#integration-specialist").on("click", function() {
    document
      .getElementById("integration-specialist-info")
      .classList.remove("hidden")
  })
})

$(window).scroll(function() {
  var $nav = $("nav")
  if ($(document).scrollTop() > 0) {
    if ($nav.data("size") == "big") {
      $nav.data("size", "small")
      $nav.stop().animate({ height: "46px" }, 600)
      $nav.find("a").animate({ fontSize: "16px" }, 600)
    }
  } else {
    if ($nav.data("size") == "small") {
      $nav.data("size", "big")
      $nav.stop().animate({ height: "80px" }, 600)
      $nav.find("a").animate({ fontSize: "25px" }, 600)
    }
  }
})

$(".scroll").click(function(event) {
  event.preventDefault()
  console.log("jeejee")
  //calculate destination place
  var dest = 0
  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
    dest = $(document).height() - $(window).height()
  } else {
    dest = $(this.hash).offset().top
  }
  //go to destination
  $("html,body").animate({ scrollTop: dest }, 1000, "swing")
})
