$(document).ready(function() {
    $('h1 span').hover(function() {
      $(this).css('animation', 'none');
    }, function() {
      $(this).css('animation', 'pulse 2s infinite');
    });
  });
  