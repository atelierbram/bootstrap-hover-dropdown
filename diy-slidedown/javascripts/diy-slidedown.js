$(document).ready(function () {

  var itms = {
  one      : ($("#dd-one li").length),
  two      : ($("#dd-two li").length),
  three    : ($("#dd-three li").length),
  four     : ($("#dd-four li").length),
  five     : ($("#dd-five li").length),
  six      : ($("#dd-six li").length),
  seven    : ($("#dd-seven li").length),
  eight    : ($("#dd-eight li").length),
  nine     : ($("#dd-nine li").length),
  ten      : ($("#dd-ten li").length),
  eleven   : ($("#dd-eleven li").length),
  twelve   : ($("#dd-twelve li").length),
  thirteen : ($("#dd-thirteen li").length),
  fourteen : ($("#dd-fourteen li").length),
  fifteen  : ($("#dd-fifteen li").length),
  sixteen  : ($("#dd-sixteen li").length)
  };

  // add a class on the parent element with the appropriate value for the number of list-items
  jQuery.each( itms, function( i, val ) {
    $( "#dd-" + i ).addClass('dd-nav__itemcount-'+val);
  });



});   
