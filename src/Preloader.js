Randos.Preloader = function(game){
	// define width and height of the game
	Randos.GAME_WIDTH = 640;
	Randos.GAME_HEIGHT = 960;
};
Randos.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#F0A32C';
		this.preloadBar = this.add.sprite((Randos.GAME_WIDTH-311)/2, (Randos.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/bg.png');
		this.load.image('floor', 'img/floor.png');
		this.load.image('kaylah', 'img/kaylah.png');
		this.load.image('title', 'img/title.png');
		this.load.image('game-over', 'img/gameover.png');
		this.load.image('lose', 'img/lose.png');
		this.load.image('win', 'img/win.png');
		this.load.image('win-else', 'img/win-else.png');
		this.load.image('score-bg', 'img/score-bg.png');
		this.load.image('button-pause', 'img/button-pause.png');
		// load spritesheets
		this.load.spritesheet('enemy', 'img/enemy.png', 72.5, 99.998);
		this.load.spritesheet('monster-idle', 'img/monster-idle.png', 103, 131);
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
		this.load.spritesheet('button-reset', 'img/button-reset.png', 401, 143);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};