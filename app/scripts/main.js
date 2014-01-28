// make a dice click function to call when I click the dice roll

// make a recent role through functions

// constructor personal example below

var Bear = {
	name: 		'Yogi',
	strength: 100,
	health: 	400,
	defense: 	100,
}

var Wolf= {
	name: 		'The Big Bad Wolf',
	strength: 125,
	health: 	200,
	defense: 	50,
}

var Turtle = {
	name: 		'Franklin',
	strength: 75,
	health: 	300,
	defense: 	125,
}

$('#bear').click(function(){
	console.log('work?');

	$('#name').html(Bear.name)
	$('#health').html(Bear.health);
	$('#strength').text(Bear.strength);
	$('#defense').html(Bear.defense);
})


$('#wolf').click(function(){
	console.log('work?');

	$('#name').html(Wolf.name)
	$('#health').html(Wolf.health);
	$('#strength').html(Wolf.strength);
	$('#defense').html(Wolf.defense);
})



$('#turtle').click(function(){
	console.log('work?');

	$('#name').html(Turtle.name)
	$('#health').html(Turtle.health);
	$('#strength').html(Turtle.strength);
	$('#defense').html(Turtle.defense);
})

function rollDice () {
	var diceNumber = document.getElementById('diceNumber');
	var diceTotal =	(Math.floor(Math.random()*6)+1)*10;
	diceNumber.innerHTML = diceTotal;
}

$('.diceclick').click(rollDice)

function attackstrength () {
	var diStrength = document.getElementById('diceNumbere');
	var currStrength = document.getElementById('strength');
	var ttlAttack = diStrength + currStrength;
	return (ttlAttack);
	
}

$('.finishturn').click(function(){
		console.log(attackstrength)
})


// ---------------------------------------------------------

// constructor 1
function car (type) {
	this.name = type || 'vroom vroom';
	this.color = 'red';
	this.starts = true;
	this.wheels = 4;
}

// constructor 2
function patient (name, problem, height, weight, haircolor) {
	this.name = name || '???';
	this.problem = problem;
	this.height = height;
	this.weight = weight;
	this.haircolor = haircolor;
}

// constructor 3
function member (name,userlevel) {
	this.name = name || '???';
	this.memberstatus = true;
	this.userlevel = userlevel || 'regular';
}

