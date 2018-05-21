<script>
$(function(){
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    }); 
});
</script>

<script>
jQuery(function($){
			$('.menu').click(function(){
   			 if ($('#menu').css('display') == 'none') {
        	$('#menu').slideDown('fast');
    		} else {
       		 $('#menu').slideUp('fast');
   			 }
			});
        });
</script>
