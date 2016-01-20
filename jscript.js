$(document).ready(function(){
	$('body').prepend('<div class="container"></div>')
	$('body').css('background-color','#dbeef0')
	$('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>')
		.append('<ul></ul>')
		.append('<ul></ul>')
		.append('<ul></ul>')
		.append('<ul></ul>')

	$('ul').append("<li></li>")
		.append('<li></li>')
		.append('<li></li>')
		.append('<li></li>')

		$('.container').css({
		
		margin:'auto',
		width:'960px',
		overflow:'auto'

		
		
	});

	var size = $('.container').width()/4 -4;

		$('li').css('width',size);
		$('li').css('height',size);

	$('li').css({
		display: 'inline-block',
				border: '1px solid black',
		margin:'0px 1px'



	}).hover(function(){
		$(this).css('background-color','blue')
	});	

	
	


	$('ul').css({
		margin:'auto',
		padding:'0px 0px 0px 0px',
		
		float:'centre'
	})

	$('button').css({
		margin:'auto',
		padding:'10px',
		'font-size':'16px',
		display:'block'
	});


});
function newGrid(){

	$('.container').html("");

		
	var input = prompt("enter a number between 1 and 128");

	

	
	$('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>')
	if(input >=1 && input <=128){
		for(var i=1;i<=input;i++){
			$('.container').append('<ul></ul>')
		};
			for(var j=1;j<=input;j++){
				$('ul').append('<li></li>')
			};
		
		
		$('.container').css({
		
		margin:'auto',
		width:'960px',
		overflow:'auto'
		
		
	});
		var sizeNew = $('.container').width()/input -4;

		$('li').css('width',sizeNew);
		$('li').css('height',sizeNew);


		$('li').css(
		{
		display: 'inline-block',
		
		border: '1px solid black',
		margin:'0px 1px'


	}).hover(function(){
		$(this).css('background-color','blue')
	});	

		

	$('ul').css({
		margin:'auto',
		padding:'0px 0px 0px 0px',
		float:'centre'

	})

	$('button').css({
		margin:'auto',
		
		padding:'10px',
		'font-size':'16px',
		display:'block'
		
	});


	}else{
		alert('wrong entry!!');
	}
};
