// JavaScript Document
$(document).ready(function(){
	grid(64);
	
	$('#size').click(function(){
		$('.col').css({'background-color':'#bbb'});
		var user=prompt('Input Any Number Between 1 and 64');
		gride(user);
	});
	
	
	function grid(num){
	for(var i = 0; i < num; i++){
		var row = $('<div class="row"></div>');
		$('#container').append(row);
	}
	var rowt = 512/num+'px';
	$('.row').css({'width':'100%','height':rowt}) //new

	for(var j = 0; j < num; j++){
		var col = $('<div class="col"></div>');
		$('.row').append(col);		
		}
	var colt = 512/num+'px';
	$('.col').css({'width':colt,'height':'100%','display':'inline-block'}) //new
	}

	$('.col').hover(function(){
  		$(this).css({'background-color':'#333'});
  	});

	$('#clear').click(function(){
		$('.col').css({'background-color':'#E8E7E7'});
	});

	$('#rainbow').click(function(){
		$('.col').hover(function(){
		var ranCol = Math.floor(Math.random()*10+1);
		switch (ranCol){
			case 1:
			  $(this).css({'background-color':'##ff1612'});
			  break;
			case 2:
			  $(this).css({'background-color':'#ff1ec3'});
			  break;
			case 3:
			  $(this).css({'background-color':'#6411ff'});
			  break;
			case 4:
			  $(this).css({'background-color':'#1852ff'});
			  break;
			case 5:
			  $(this).css({'background-color':'#1affd5'});
			  break;
			case 6:
			  $(this).css({'background-color':'#16ff12'});
			  break;
			case 7:
			  $(this).css({'background-color':'#76ff0d'});
			  break;
			case 8:
			  $(this).css({'background-color':'#f3ff13'});
			  break;
			case 9:
			  $(this).css({'background-color':'#ff8a0d'});
			  break;
			case 10:
			  $(this).css({'background-color':'#6d9c6c'});
			  break;
		}
	});
	});

	$('#black-pan').click(function(){
		$('.col').hover(function(){
		$(this).css({'background-color':'#333'});
		});	
	});
	
	$('#green').click(function(){
		$('.col').hover(function(){
		$(this).css({'background-color':'#20F446'});
		});	
	});
	
	$('#red').click(function(){
		$('.col').hover(function(){
		$(this).css({'background-color':'#F41F47'});
		});	
	});
	
	$('#yellow').click(function(){
		$('.col').hover(function(){
		$(this).css({'background-color':'#F4EC1F'});
		});	
	});
	
	$('#erase').click(function(){
		$('.col').hover(function(){
		$(this).css({'background-color':'#E8E7E7'});
		});	
	});

	$('button').mouseenter(function(){
		$(this).addClass('active');
	});

	$('button').mouseleave(function(){
		$(this).removeClass('active');
	});
	
	
	
});