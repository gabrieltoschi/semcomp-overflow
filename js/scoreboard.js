var bg, text, bases, blocks; // groups 
/* bg */
/* text */ var logo, limit, textbg;
/* bases */ var lovelaceBase, neumannBase, shannonBase, turingBase;
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
		bases = this.add.group();
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

		// text background
		textbg = text.create(0, 0, 'textbg');
		textbg.width = winWidth;
		textbg.height = (winHeight * 0.1);
		textbg.y = winHeight - textbg.height;

		var allBasesY = textbg.y;

		// bases
		lovelaceBase = bases.create(0, 0, 'lovelace-base');
		lovelaceBase.scale.setTo((winWidth * 0.215) / lovelaceBase.width);
		lovelaceBase.anchor.y = 1.0;
		lovelaceBase.x = winWidth * 0.04;
		lovelaceBase.y = allBasesY;

		neumannBase = bases.create(0, 0, 'neumann-base');
		neumannBase.scale.setTo((winWidth * 0.215) / neumannBase.width);
		neumannBase.anchor.y = 1.0;
		neumannBase.x = winWidth * 0.275;
		neumannBase.y = allBasesY;

		shannonBase = bases.create(0, 0, 'shannon-base');
		shannonBase.scale.setTo((winWidth * 0.215) / shannonBase.width);
		shannonBase.anchor.y = 1.0;
		shannonBase.x = winWidth * 0.510;
		shannonBase.y = allBasesY;

		turingBase = bases.create(0, 0, 'turing-base');
		turingBase.scale.setTo((winWidth * 0.215) / turingBase.width);
		turingBase.anchor.y = 1.0;
		turingBase.x = winWidth * 0.745;
		turingBase.y = allBasesY;
	},

	update: function(){

	}
}