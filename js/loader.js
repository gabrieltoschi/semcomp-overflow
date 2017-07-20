var assetLoader = {

	preload: function(){

		// enable ARCADE physics system
		this.physics.startSystem(Phaser.Physics.ARCADE);

		// print loading
		// TODO: a good loading scene
		var loadingLabel = this.add.text(10, 10, 'loading...', 
			{font: '30px Courier', fill: '#FFFFFF'});

		// LOAD ASSETS
		this.load.image('logo', 'images/overflow-logo.png');
		this.load.image('limit', 'images/limit.png');
		this.load.image('textbg', 'images/text.png');

		// bases
		this.load.image('lovelace-base', 'images/lovelace-base.png');
		this.load.image('neumann-base', 'images/neumann-base.png');
		this.load.image('shannon-base', 'images/shannon-base.png');
		this.load.image('turing-base', 'images/turing-base.png');


		// letters/block
		/*this.load.spritesheet('letters', 'images/letters.png', 383, 288);
		this.load.image('block1', 'images/block1.png');
		this.load.image('block2', 'images/block2.png');
		this.load.image('block3', 'images/block3.png');
		this.load.image('block4', 'images/block4.png');

		// monsters
		this.load.image('monster100', 'images/monster100.png');
		this.load.image('monster150', 'images/monster150.png');
		this.load.image('monster200', 'images/monster200.png');
		this.load.image('monster250', 'images/monster250.png');
		this.load.image('monster300', 'images/monster300.png');

		// play area/background
		this.load.image('playarea1', 'images/playarea1.png');
		this.load.image('playarea2', 'images/playarea2.png');
		this.load.image('playbound', 'images/playbound.png');
		this.load.image('playframe', 'images/playframe.png');
		this.load.image('menubg', 'images/menubg.png');
		this.load.image('helpbg', 'images/helpbg.png');

		// player
		this.load.image('player', 'images/player.png');
		this.load.image('player2', 'images/player2.png');

		// bars
		this.load.image('bar', 'images/bar.png');
		this.load.image('barCooldown', 'images/bar_cooldown.png');
		this.load.image('barPoints', 'images/bar_points.png');
		this.load.image('barEmpty', 'images/bar_empty.png');

		// logo/menu images
		this.load.image('logo', 'images/logo.png');
		this.load.image('startmenuimage', 'images/startmenuimage.png');
		this.load.image('between', 'images/between.png');

		// buttons
		this.load.image('playbuttonbg', 'images/playbuttonbg.png');
		this.load.image('playbuttontext', 'images/playbuttontext.png');
		this.load.image('helpbuttonbg', 'images/helpbuttonbg.png');
		this.load.image('helpbuttontext', 'images/helpbuttontext.png');
		this.load.image('nextbuttontext', 'images/nextbuttontext.png');
		this.load.image('againbuttontext', 'images/againbuttontext.png');
		this.load.image('greenbuttonbg', 'images/greenbuttonbg.png');
		this.load.image('soundon', 'images/soundon.png');
		this.load.image('soundoff', 'images/soundoff.png');
		this.load.image('whatsapp', 'images/share_wpp.png');
		this.load.image('twitter', 'images/share_twitter.png');

		// help
		this.load.image('help01', 'images/help01.png');
		this.load.image('help02', 'images/help02.png');
		this.load.image('help03', 'images/help03.png');
		this.load.image('help04', 'images/help04.png');
		this.load.image('help05', 'images/help05.png');
		this.load.image('help06', 'images/help06.png');

		// sound effects
		this.load.audio('sfx_letter', 'sfx/letterSfx.wav');
		this.load.audio('sfx_monster', 'sfx/monsterSfx.wav');

		// music
		this.load.audio('music_menu', 'music/menuMusic.mp3');
		this.load.audio('music_firstStage', 'music/firstMusic.mp3');
		this.load.audio('music_secondStage', 'music/secondMusic.mp3');*/
	},

	create: function(){
		// set game state to SCOREBOARD
		this.state.start('scoreboard');
	}
}