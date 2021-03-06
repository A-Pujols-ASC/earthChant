var earthChant = earthChant || {};
//NOTES NOTES NOTES NOTES:

//MAJOR:
// TOO SIMILAR TO POKEMON! (keep button system)
// FOCUS GAME ON POLLUTION!!!
// TURN INTO MINI RPG ENGINE (easily manipulable)
	// BE MORE EFFICIENT (more phaser constructors, variables, etc..)
		// USE JSON ++ PHASER'S GROUP CONSTRUCTOR (pass objects and entire properties through parameters)
	// WRITE DOCUMENTAION ON CODE 
		// How to add/manipulate components (i.e. 'Add another enemy to scene by doing...')

//MINOR:
// FIX/ADD COMMENTS 
// STORE PLAYER'S LOCATION WHEN LEAVING BATTLE
// USE BOOTSTRAP TO RESIZE SCREEN  
// MAKE ENEMIES

earthChant.StartScreen = function(){};

earthChant.StartScreen.prototype = {

	create: function() {
		this.background = this.game.add.sprite(0,0,'background');
		this.game.stage.backgroundColor = '#808080'; //back ground color
		
		this.logo = this.game.add.sprite(100,150,'logo');  //logo
		this.logo.scale.setTo(.8, .8);  //resizing logo

		// cursor controls (arrow keys)
		this.cursors;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		// intial button (shows intro screen
		this.initialButton = this.game.add.button(550, 540,'buttons',  		// CHANGE TO ONMOUSE CLICKED
		this.startGame,this, 2, 1, 0);
		this.initialButton.scale.setTo(2,.7);    //rescale
		this.initialButton.anchor.set(0.5);  // sets at center
		
		this.introText = this.game.add.text(this.initialButton.x, this.initialButton.y, 'Click here to Start', {fill:'green',font:'impact',fontSize:'45px'}); //text for button
		this.introText.anchor.set(0.5);  // sets at center
	},
	
	// shows the intro screen (add images/text here)
	showIntro: function(){
		// remove previous items
		this.initialButton.kill();
		this.logo.kill();
		
		// start game button (similar to initial)
		this.startButton = this.game.add.button(550, 540,'buttons', 
		this.startGame,this, 2, 1, 0);
		this.startButton.scale.setTo(2,.7);
		this.startButton.anchor.set(0.5);  // sets at center

		//start text
		this.startText = this.game.add.text(this.startButton.x, this.startButton.y, 'PLAY!', {fill:'green',font:'impact',fontSize:'60px'});	// sends to start game()		
		this.startText.anchor.set(0.5);  // sets at center
	},
	
	// sends to World screen (Starts game)
	startGame: function(){
		this.game.state.start('World');
	},
	update: function() {
	}
};