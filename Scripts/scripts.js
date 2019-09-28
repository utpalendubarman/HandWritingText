$(document).ready(function(){
var highlight = window.getSelection(); 
  $('.bold-btn').click(function(){
    var span = '<span class="bold">' + highlight + '</span>';
    var text = $('.textEditor').html();
    $('.textEditor').html(text.replace(highlight, span));
});
});