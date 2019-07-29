
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
  $("#message").click(function(event){
    var name=$("#inputName").val();
    var email=$("#inputEmail").val();
    var message=$("#inputMessage").val();
    if((name==="")||(email==="")||(message==="")){
        alert("Please, fill the required fields!");
    }
    else{
        alert(name+ ", we have received your message. Thank you for reaching out to us!");
    }
    event.preventDefault();
});
});