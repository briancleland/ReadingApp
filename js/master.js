// Put all your page JS here


$(function () {
    $('#slickQuiz').slickQuiz();
    
    // Modify fadeIn() to trigger an afterFadeIn event
    // http://stackoverflow.com/questions/1225102/jquery-event-to-trigger-action-when-a-div-is-made-visible
    $.fn.fadeIn = function(speed, oldCallback) {
      return $(this).each(function() {
        var obj         = $(this),
            newCallback = function() {
              if ($.isFunction(oldCallback)) {
                oldCallback.apply(obj);
              }
              obj.trigger('afterFadeIn');
            };
        // now use the old function to show the element passing the new callback
        $.fn.show.apply(obj, [speed, newCallback]);
      });
    }
    
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice('mespeak/voices/en/en-us.json');
    
    $('.question').bind('afterFadeIn', function() {
      if ($(this).find('.responses .correct').is(':visible')) {
        meSpeak.speak( $(this).find('.correct span').text() );
      } else if ($(this).find('.responses .incorrect').is(':visible')) {
        meSpeak.speak( $(this).find('.incorrect span').text() );
      } else {
        meSpeak.speak( $(this).find('h3').text() );         
      }
    })
    
    $(".question h3").click ( function() {
      meSpeak.speak( $(this).html() );
    });
    
    $('.checkAnswer').hide();
    
    //////////////////////////////////////////////////
    // Styling buttons
    //////////////////////////////////////////////////    
    $(".answers li").addClass( "button" );
    $(".question h3").addClass( "button" ); 
    var buttonStyle = {
      cursor: "pointer", 
      display:  "inline-block", 
      float: "none"
    };
    $(".question h3").css( buttonStyle );
    $(".answers li").css( buttonStyle );
    $(".answers").css( "margin", "0" );
    $(".answers input").remove();
    //////////////////////////////////////////////////
    
});