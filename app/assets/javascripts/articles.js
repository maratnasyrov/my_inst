$(document).ready(function(){
  $('image_show').mouseover(function (){
    $(".my_div").appendTo(this);
  });
  $('image_show').mouseout(function(){
    $(this).next('.my_div').remove() ;
  })
})
