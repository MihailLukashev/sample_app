$(document).ready(function() {
    $('input:checked').parent().find('.checktext').addClass("textchert");
    $('.checkb').parent().find('.butdel').fadeOut('fast');

    $('.checkb').change(function() {
      $(this).prop("checked", this.checked);
        $(this).parent('form').submit();

    });
    
    $('.checktext').dblclick(function() {
    $(this).hide();
      var $x = $(this).parent().find(".inputtext");
      $x.show().focus();
      $x.blur(function(){
$(this).parent('form').submit();
          $(this).hide();
          $('.checktext').show();

      });
  });

    $('li').hover(
        function() {
            $(this).children().find('.butdel').fadeIn('fast');
        },
        function(){
            $(this).children().find('.butdel').fadeOut('fast');
        });
    // });

    $('.butall').click(function(){
        $('.checkb').parent().parent().show();
        
    });

    $('.butactive').click(function(){
        $('.checkb').parent().parent().show();
        if ($('.checkb').parent().find('input:not(:checked)') != true) {
            $('input:checked').parent().parent().hide();
        }
    });

    $('.butcomlited').click(function(){
        $('.checkb').parent().parent().show();
        if ($('.checkb').parent().find('input:checked') != true) {

            $('.checkb').not(':checked').parent().parent().hide();
        }
    });

    var countChecked = function() {
        var n = $( "input:checked" ).length;
        $( ".count" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
        $('.butclear').css('display', (n === 0 ? 'none' : 'block'));
    };
    countChecked();

    $( "input[type=checkbox]" ).on( "click", countChecked );

    $('.butclear').click(function(){
        
            $('form').submit();

    });

    $('.toggle-all').click(function(){
       // $colovo = $('.checkb').length;
       //
       // if ($('input:checked').length != $colovo){
       //     $('.checkb').attr("checked","checked");
       //     $('form').submit();
       // }
       //  else {
       //     $('.checkb').removeAttr("checked");
           $('form').submit();
       // }
    });

});
