var bg, text, blocks; // groups 
/* bg */
/* text */ var logo, limit;
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
		logo.y = winHeight * 0.05;

		// creating limit indicator
		limit = text.create(0, 0, 'limit');
		limit.scale.setTo((winHeight * 0.05) / limit.height);
		limit.anchor.x = 0;
		limit.anchor.y = 0;	
		limit.x = 0;
		limit.y = logo.height + (winHeight * 0.05) + (winHeight * 0.02);
	},

	update: function(){

	}
}