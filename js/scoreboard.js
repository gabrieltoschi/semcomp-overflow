var bg, text, blocks; // groups 
/* bg */
/* text */ var logo;
/* blocks */

var scoreboard = {
	preload: function(){
		// paint the background
		this.stage.backgroundColor = bgColor;
	},

	create: function(){
		// creating groups
		bg = this.add.group();
		text = this.add.group();
		blocks = this.add.group();

		// creating logo
		logo = text.create(0, 0, 'logo');
		logo.anchor.x = 0.5;
		logo.anchor.y = 0;
		logo.scale.setTo((winWidth * (0.9)) / logo.width);
		logo.x = winWidth / 2;
		logo.y = winWidth * 0.05;
	},

	update: function(){

	}
}