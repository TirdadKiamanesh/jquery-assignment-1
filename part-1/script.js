// // Do your work in this file.

// 1. Create a `div` element with a class name of "**view**" and append it to the document `body` using jQuery. You can use [append], [appendTo], or any other jQuery method.

// var className = $('view').attr('class');

// // function createElement() {
// var view = $(".view");
var view = $("<div>");

view.addClass('view');

$("body").append(view);

// $('body').appendTo('<div class="view"></div>')

// console.log("view");

// }




// $("body").append("<div>hello world</div>")

// var txt1="<p>Text.</p>";               // Create element with HTML  
// var txt2=$("<p></p>").text("Text.");   // Create with jQuery
// var txt3=document.createElement("p");  // Create with DOM
// txt3.innerHTML="Text.";
// $("p").append(txt1,txt2,txt3);         // Append the new elements 


// 1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.

var grass = $("<div>");

grass.addClass("grass");

$(".view").append(grass)


// 1. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.

var sun = $("<div>");
sun.addClass("sun");
$(".view").append(sun);


// 1. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.

var i = 5;
while (i > 0) {
  var ray = $("<div>");
  ray.addClass("ray-" + i);
  $(".sun").append(ray);
  i--;
}

// 1. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.

var mountain = $("<div>");
mountain.addClass("mountain");
$(".view").append(mountain);

// 1. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.

var mountainTop = $("<div>");
mountainTop.addClass("mountain-top");
$(".mountain").append(mountainTop);

// 1. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.

var l = 3 ;
do {
  var mountainCap = $("<div>");
  mountainCap.addClass("mountain-cap-" + l);
  $(".mountain-top").append(mountainCap);
  l--;
} while (l > 0)


// ### What the HTML should look like when you're done.

// Remember, you're producing this HTML using jQuery. You cannot edit any file other than the `script.js` file.

// ```HTML
// <div class="view">
//     <div class="grass"></div>
//     <div class="sun">
//         <div class="ray-1"></div>
//         <div class="ray-2"></div>
//         <div class="ray-3"></div>
//         <div class="ray-4"></div>
//         <div class="ray-5"></div>
//     </div>

//     <div class="mountain">
//         <div class="mountain-top">
//             <div class="mountain-cap-1"></div>
//             <div class="mountain-cap-2"></div>
//             <div class="mountain-cap-3"></div>
//         </div>
//     </div>
// </div>
// ```

// ### The HTML page should produce an image like so:

// ![output](./output.png)

// [`do...while`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
// [`while`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// [append]: https://api.jquery.com/append/
// [appendTo]: https://api.jquery.com/appendTo/
// [createElement]: https://api.jquery.com/jQuery/#creating-new-elements
// [fork]: https://github.com/karbassi-id/jQuery-assignment-1/fork
// [jQuery]: https://jquery.com
