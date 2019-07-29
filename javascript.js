
  $(document).ready(function(){
    $("#design").click(function(){
      $("#design-text").toggle();
      $("#design").toggle();
    });
  $("#design-text").click(function(){
    $("#design").toggle();
    // $("#design").toggle();
    $("#design-text").toggle();
  });
  $("#product").click(function(){
    $("#dev").toggle();
    $("#product").toggle();
  });
$("#dev").click(function(){
  $("#product").toggle();
  // $("#design").toggle();
  $("#dev").toggle();
});
$("#man").click(function(){
  $("#managment").toggle();
  $("#man").toggle();
});
$("#managment").click(function(){
$("#man").toggle();
// $("#design").toggle();
$("#managment").toggle();
});
  $("#submit").click(function(event){
    var name=$("#name").val();
    var email=$("#Email").val();
    var message=$("#message").val();
    if((name==="")||(email==="")||(message==="")){
        alert("Please, fill the required fields!");
    }
    else{
        alert(name+ ", we have received your message. Thank you for reaching out to us!");
    }
    event.preventDefault();
});
$(".p1").hide();
   $(".pic1").hover(function(){
       $(this).stop().animate({opacity:.2},200);
       $(".p1").fadeIn();
   },function(){
       $(this).stop().animate({opacity:2},500);
       $(".p1").fadeOut();
   });
   $(".p2").hide();
   $(".pic2").hover(function(){
       $(this).stop().animate({opacity:.2},200);
       $(".p2").fadeIn();
   },function(){
       $(this).stop().animate({opacity:2},500);
       $(".p2").fadeOut();
   });
});