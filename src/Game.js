Randos.Game = function(game){
	// define needed variables for Randos.Game
	this._player = null;
	this._enemyGroup = null;
	this._spawnEnemyTimer = 0;
	this._fontStyle = null;
	// define Randos variables to reuse them in Randos.item functions
	Randos._scoreText = null;
	Randos._score = 0;
	Randos._health = 0;
};
Randos.Game.prototype = {
	create: function(){
		// start the physics engine
		this.physics.startSystem(Phaser.Physics.ARCADE);
		// set the global gravity
		this.physics.arcade.gravity.y = 75;
		// display images: background, floor and score
		this.add.sprite(0, 0, 'background');
		// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
		this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
		// // add pause button
		// this.add.button(Randos.GAME_WIDTH-96-10, 5, 'button-pause', this.managePause, this);
		// create the player
		this._player = this.add.sprite((Randos.GAME_WIDTH / 2) - (this.cache.getImage('kaylah').width / 2), Randos.GAME_HEIGHT - this.cache.getImage('kaylah').height, 'kaylah');
		// set font style
		this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };
		// initialize the spawn timer
		this._spawnEnemyTimer = 0;
		// initialize the score text with 0
		Randos._scoreText = this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, 0, this._fontStyle);
		// set health of the player
		Randos._health = 30;
		// create new group for enemy
		this._enemyGroup = this.add.group();
		// spawn first enemy
		Randos.item.spawnEnemy(this);
	},
	// managePause: function(){
	// 	// pause the game
	// 	this.game.paused = true;
	// 	// add proper informational text
	// 	var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
	// 	// set event listener for the user's click/tap the screen
	// 	this.input.onDown.add(function(){
	// 		// remove the pause text
	// 		pausedText.destroy();
	// 		// unpause the game
	// 		this.game.paused = false;
	// 	}, this);
	// },
	update: function(){
		// update timer every frame
		this._spawnEnemyTimer += this.time.elapsed;
		// if spawn timer reach one second (1000 miliseconds)
		if(this._spawnEnemyTimer > 225) {
			// reset it
			this._spawnEnemyTimer = 0;
			// and spawn new enemy
			Randos.item.spawnEnemy(this);
		}
		// loop through all enemy on the screen
		this._enemyGroup.forEach(function(enemy){
			// to rotate them accordingly
			enemy.angle += enemy.rotateMe;
		});
		// if the health of the player drops to 0, the player dies = game over
		if(!Randos._health) {			
			this.state.start('GameOver');
		}
	}
};

Randos.item = {
	spawnEnemy: function(game){
		// calculate drop position (from 0 to game width) on the x axis
		var dropPos = Math.floor(Math.random()*(Randos.GAME_WIDTH - 136) + 36);
		// define the offset for every enemy
		var dropOffset = -50;
		// randomize enemy type
		var enemyType = Math.floor(Math.random()*6);
		// create new enemy
		var enemy = game.add.sprite(dropPos, dropOffset, 'enemy');
		// add new animation frame
		enemy.animations.add('anim', [enemyType], 10, true);
		// play the newly created animation
		enemy.animations.play('anim');
		// enable enemy body for physic engine
		game.physics.enable(enemy, Phaser.Physics.ARCADE);
		// enable enemy to be clicked/tapped
		enemy.inputEnabled = true;
		// add event listener to click/tap
		enemy.events.onInputDown.add(this.clickEnemy, this);
		// be sure that the enemy will fire an event when it goes out of the screen
		enemy.checkWorldBounds = true;
		// reset enemy when it goes out of screen
		enemy.events.onOutOfBounds.add(this.removeEnemy, this);
		// set the anchor (for rotation, position etc) to the middle of the enemy
		enemy.anchor.setTo(0.5, 0.5);
		// set the random rotation value
		enemy.rotateMe = (Math.random()*4)-2;
		// add enemy to the group
		game._enemyGroup.add(enemy);
	},
	clickEnemy: function(enemy){
		// kill the enemy when it's clicked
		enemy.kill();
		// add points to the score
		Randos._score += 2;
		// update score text
		Randos._scoreText.setText(Randos._score);
	},
	removeEnemy: function(enemy){
		// kill the enemy
		enemy.kill();
		// decrease player's health
		Randos._health -= 30;
	}
};
