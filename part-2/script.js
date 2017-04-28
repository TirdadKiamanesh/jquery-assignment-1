// Do your work in this file.

// var view = $("<div>");

// view.addClass('view');

// $("body").append(view);

 

for (var i = 0; i < 197; i++) {


  var box = $("<div>");

  if (i%2 == 0) {

    box.addClass("box type-1");

  } else {

    box.addClass("box type-2");

  }

  $("body").append(box);

}

$(".box").click(function() {

  $(this).toggleClass("clicked");

  }
)
