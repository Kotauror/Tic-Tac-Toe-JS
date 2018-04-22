window.onload = function() {

};


$( document ).ready(function() {
  var game = new Game();


  $('.first_sign').append(game.bot_1.sign);
  $('.second_sign').append(game.bot_2.sign);

  $('.button').click(function() {
    var moveMade = game.playOneMove();
    var signUsed = game.passive_player.sign;
    $( "." + moveMade ).text(signUsed);
    $( "." + moveMade ).attr('class', signUsed)

      $( ".first_sign" ).toggleClass('nonhighlighted');
      $( ".second_sign" ).toggleClass('highlighted');
  })


})
