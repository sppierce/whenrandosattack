Randos.MainMenu = function(game){
	Randos._name = prompt('What is your name, player?');
	Randos._name = Randos._name.toLowerCase();
	console.log(Randos._name);
};
Randos.MainMenu.prototype = {
	create: function(){

		

		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite((Randos.GAME_WIDTH / 2) - (this.cache.getImage('kaylah').width / 2), Randos.GAME_HEIGHT - this.cache.getImage('kaylah').height, 'kaylah');
		this.add.sprite((Randos.GAME_WIDTH-395)/2, -20, 'title');

		// Instructions
		this._fontStyle = { font: "30px Arial", fill: "#fff", align: "center" };
		this.add.text(100, (Randos.GAME_HEIGHT / 2) - 140, "Instructions:\nTap the enemies to protect Kaylah\nfrom the random guys!", this._fontStyle);

		// add the button that will start the game
		this.add.button((Randos.GAME_WIDTH / 2) - (this.cache.getImage('button-start').width / 2), Randos.GAME_HEIGHT - (this.cache.getImage('button-start').height / 3) - this.cache.getImage('kaylah').height - 5, 'button-start', this.startGame, this, 1, 0, 2);
	},
	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};