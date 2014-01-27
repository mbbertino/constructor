// make a dice click function to call when I click the dice roll

// make a recent role through functions

// constructor personal example below
function rollDice () {
	var diceNumber = document.getElementById('diceNumber');
	var diceTotal =	Math.floor(Math.random()*6)+1;
	diceNumber.innerHTML = diceTotal;

}

function champion (name, health, strength, defense) {
	this.name = name || '??';
	this.health = health || 100;
	this.strength = strength || 10
	this.defense = defense || 10
	this.lvl = 1
	this.lvluphp = 10
	this.lvlupst = 1
	this.lvlupde = 1
}

var Bear = new champion()
var Wolf = new champion()
var Rhino = new champion()


$('.diceclick').click(rollDice)

// constructor 1
function car (type) {
	this.name = type || 'vroom vroom';
	this.color = 'red';
	this.starts = true;
	this.wheels = 4;
}

// constructor 2
function patient (name, problem) {
	this.name = name || '???';
	this.problem = problem;
	this.height = 72;
	this.weight = 200;
	this.haircolor = black;
}

// constructor 3
function member (name,userlevel) {
	this.name = name || '???';
	this.memberstatus = true;
	this.userlevel = userlevel || 'regular';
}

