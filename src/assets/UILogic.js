document.addEventListener("deviceready", function(){
console.log("Ran UI script.");
  $(".addCartButton").click(function() {
      console.log("Ran UI script.");
    $(this).find("ion-icon:first").toggleClass('transform-active');
    $(this).css("background-color", "#4caf50");
    $(this).html("Added To Cart!");
  });

});
