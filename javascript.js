
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
});