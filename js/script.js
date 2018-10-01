function hse_count(){

  var result;
  var current = (new Date()).getFullYear();

  result = Math.round((current - $('#hseyear').val())/(current - $('#birthyear').val())*100);


  $('div.game').css('display','none');

  $('#res').text(result);

  //alert(result + '% Вашей жизни Вы связаны с Вышкой!');

}
