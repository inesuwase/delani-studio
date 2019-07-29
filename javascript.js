
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
  $(".management").toggle();
  $("#man").toggle();
});
$(".management").click(function(){
$("#man").toggle();
$(".management").toggle();
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
$(".pic1").mouseover(function () {
       $(".pic1").css('opacity', '0.5');
       $(".p1").show();
       $(".p1").addClass("website");
   });
   $(".pic1").mouseleave(function () {
       $(".pic1").css('opacity', '1');
       $(".p1").hide();
   });
   $(".p2").hide();
   $(".pic2").mouseover(function () {
    $(".pic2").css('opacity', '0.5');
    $(".p2").show();
    $(".p2").addClass("website");
});
$(".pic2").mouseleave(function () {
    $(".pic2").css('opacity', '1');
    $(".p2").hide();
});
$(".p3").hide();
$(".pic3").mouseover(function () {
  $(".pic3").css('opacity', '0.5');
  $(".p3").show();
  $(".p3").addClass("website");
});
$(".pic3").mouseleave(function () {
  $(".pic3").css('opacity', '1');
  $(".p3").hide();
});
$(".p4").hide();
$(".pic4").mouseover(function () {
  $(".pic4").css('opacity', '0.5');
  $(".p4").show();
  $(".p4").addClass("website");
});
$(".pic4").mouseleave(function () {
  $(".pic4").css('opacity', '1');
  $(".p4").hide();
});
$(".p5").hide();
$(".pic5").mouseover(function () {
  $(".pic5").css('opacity', '0.5');
  $(".p5").show();
  $(".p5").addClass("website");
});
$(".pic5").mouseleave(function () {
  $(".pic5").css('opacity', '1');
  $(".p5").hide();
});
$(".p6").hide();
$(".pic6").mouseover(function () {
  $(".pic6").css('opacity', '0.5');
  $(".p6").show();
  $(".p6").addClass("website");
});
$(".pic6").mouseleave(function () {
  $(".pic6").css('opacity', '1');
  $(".p6").hide();
});
$(".p7").hide();
$(".pic7").mouseover(function () {
  $(".pic7").css('opacity', '0.5');
  $(".p7").show();
  $(".p7").addClass("website");
});
$(".pic7").mouseleave(function () {
  $(".pic7").css('opacity', '1');
  $(".p7").hide();
});
$(".p8").hide();
$(".pic8").mouseover(function () {
  $(".pic8").css('opacity', '0.5');
  $(".p8").show();
  $(".p8").addClass("website");
});
$(".pic8").mouseleave(function () {
  $(".pic8").css('opacity', '1');
  $(".p8").hide();
});
});