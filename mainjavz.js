$(document).ready(function(){

  // make message fade in then run call back function
  $('#message').fadeIn(800, afterFadeIn);


  // call back - fade out after 3 seconds
  function afterFadeIn(){
    setTimeout(function(){
      $('#message').fadeOut(800);
    }, 3000);
  }


  // slide up song if trash is clicked, then remove from dom
  $('.fa-trash').click(function(){
    var parent = $(this).parent('li');
     parent.slideUp(500, function(){
       parent.remove();
     });
  });



   // hide notes 
  $('.notes').hide();

  // double click song slides down the notes
  // $('li').dblclick(function(){
  //   $(this).children('.notes').slideDown(300);
  // });


  // this is event delegation - it attaches dblclick hander to the parent
  // ul's, and also delegates it down to all children (li), regardless
  // of if they are present currenlty, or get added later via javascript

  $('#library-list, #playlist-list').on("dblclick", "li", function(){
    $(this).children('.notes').slideDown(300);
  });

  // hovering over song animates song (see app.css - animate me class)
  $('ul li').hover(function(){
    $(this).toggleClass('animateme');
  });



  // make both song list and list list sortable, and able to connect
  // to each other
  $('#library-list, #playlist-list').sortable({
    connectWith: ".link2connect"
  });


  // filter library 
  $('#filter-library').keyup(function(event){
    console.log( $('#filter-library').val() );
    $('#library-list li').hide();
    $('#library-list li:containsIN(' + $('#filter-library').val()  + ')').show();
    // notice use of containsIN instead of contains.. see containsplus.js file
  });


  // shake play button if empty
  $('#play-button').click(function(){
    if ( $('#playlist-list').children().length === 0 ){
      // console.log('empty');
      $('#play-button').toggleClass('animateplaybutton');
    }
  });

});