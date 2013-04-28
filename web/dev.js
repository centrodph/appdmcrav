
$(document).ready(function(){
  
    var width  = $(window).width();
    var height = $(window).height();
	/*****************************************************************
	center init
	*****************************************************************/
   var logoInit=$('#logo_init');
   var logoInitHeight=$(logoInit).height();
   var logoInitWidth=$(logoInit).width();
   $(logoInit).css('margin-left','-'+logoInitWidth/2+'px');
   $(logoInit).css('margin-top','-'+logoInitHeight/2+'px');
   
   
	equalHeight($(".eqh"));
	
	/*****************************************************************
	Loading
	*****************************************************************/	
	/*	setTimeout(function(){
	        $.mobile.changePage( "#login", { transition: "slideup"} );
	}, 3000);*/
	/*****************************************************************
	page changes
	*****************************************************************/
	$( '#two' ).live( 'pageshow',function(event, ui){
	  equalHeight($(".eqh"));
	  checkAut();
	});
	/*****************************************************************
	click events
	*****************************************************************/	
	$('#submitLogin').click(function(event){
		event.preventDefault();
		if( $('#user').val() == 'demo' && $('#pass').val() == 'demo' ){
			window.localStorage["username"] = true;
			$.mobile.changePage( "#list", { transition: "fade"} );
		} else{
			window.localStorage["username"] = false;
			alert('Los datos ingresados no son válidos')
		}	
	});

});



function checkAut(){
	  var user = window.localStorage.getItem("username");
	  if(user != "true"){
	  	 $.mobile.changePage( "#login", { transition: "fade"} );
	  }
}
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}