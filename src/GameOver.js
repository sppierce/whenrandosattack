Randos.GameOver = function(game){};
Randos.GameOver.prototype = {
	create: function(){
		
			if(Randos._score < 10) {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('lose').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('lose').height) / 2, 'lose');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);				
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else if (Randos._score >= 10 && Randos._name === 'corie') {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win').height) - 286, 'win');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else if (Randos._score >= 10 && Randos._name === 'ryan') {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win').height) - 286, 'win');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else if (Randos._score >= 10 && Randos._name === 'jake') {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win').height) - 286, 'win');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else if (Randos._score >= 10 && Randos._name === 'joey') {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win').height) - 286, 'win');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else if (Randos._score >= 10 && Randos._name === 'joe') {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win').height) - 286, 'win');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			} else {

				// display images: background, floor and score
				this.add.sprite(0, 0, 'background');
				// show the game over message
				this.add.image((Randos.GAME_WIDTH - this.cache.getImage('win-else').width) / 2, (Randos.GAME_HEIGHT - this.cache.getImage('win-else').height) - 286, 'win-else');				
				// show the reset button
				this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-reset').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-reset').height / 2) - 5, 'button-reset', this.resetGame, this, 1, 0, 2);			
				// this.add.sprite(-30, Randos.GAME_HEIGHT-160, 'floor');
				this.add.sprite(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width - 10, 5, 'score-bg');
				// set font style
				this._fontStyle = { font: "40px Arial", fill: "#7E3BFF", stroke: "#fff", strokeThickness: 5, align: "center" };				
				// initialize the score text with 0
				this.add.text(Randos.GAME_WIDTH - this.cache.getImage('score-bg').width + 75, 24, Randos._score, this._fontStyle);
				
				// Reset variables
				Randos._scoreText = null;
				Randos._score = 0;
				Randos._health = 0;

			}
  },

	resetGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};