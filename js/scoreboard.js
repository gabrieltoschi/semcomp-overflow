var bg, text, bases, blocks; // groups 
/* bg */ var parallax, parallaxCount;
/* text */ var logo, limit, textbg, teamName;
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

		// creating bg
		parallax = this.add.tileSprite(0, 0, 245, 122, 'parallax');
		bg.add(parallax);
		parallax.width = winHeight * 4;
		parallax.height = winHeight * 4;
		parallax.anchor.set(0.5);
		parallax.rotation = game.math.degToRad(45);
		parallaxCount = 0;

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
		textbg = this.add.tileSprite(0, 0, 245, 122, 'textbg');
		text.add(textbg);
		textbg.width = winWidth;
		textbg.height = (winHeight * 0.1);
		textbg.y = winHeight - textbg.height;

		var allBasesY = textbg.y - (winWidth - textbg.y) * 0.27;

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

		// blocks
		var firstBlockY = allBasesY - lovelaceBase.height;
		var maxBlockHeight = firstBlockY - (limit.y + limit.height);
		var blockWidth = lovelaceBase.width * 0.8;
		var block, current, color, blockHeight, blockX, variant;
		var variantWidth = winWidth * 0.05;
		var variantXMax = winWidth * 0.20;

		// LOVELACE BLOCKS
		current = firstBlockY;
		blockX = lovelaceBase.x + (lovelaceBase.width / 2);
		color = 0;
		for (i = 0; i < lovelacePoints.length; i++){
			if (color % 2 == 0)
				block = this.add.tileSprite(0, 0, 245, 122, 'lovelace-block1');
			else
				block = this.add.tileSprite(0, 0, 245, 122, 'lovelace-block2');
			color++;

			blocks.add(block);
			block.anchor.x = 0.5;
			block.anchor.y = 1.0;
			block.width = blockWidth + game.rnd.integerInRange(-winWidth * 0.05, winWidth * 0.02);
			block.height = maxBlockHeight * (lovelacePoints[i] / limitPoints);
			variant = (variantXMax - block.width) / 2;
			block.x = blockX + game.rnd.integerInRange(-variant, variant);
			block.y = current;
			current -= block.height;
		}

		teamName = text.create(0, 0, 'lovelace-name');
		teamName.scale.setTo(lovelaceBase.width / teamName.width);
		teamName.anchor.x = 0.5;
		teamName.anchor.y = 1.0;
		teamName.y = current - (winWidth * 0.02);
		teamName.x = blockX;

		// NEUMANN BLOCKS
		current = firstBlockY;
		blockX = neumannBase.x + (neumannBase.width / 2);
		color = 0;
		for (i = 0; i < neumannPoints.length; i++){
			if (color % 2 == 0)
				block = this.add.tileSprite(0, 0, 245, 122, 'neumann-block1');
			else
				block = this.add.tileSprite(0, 0, 245, 122, 'neumann-block2');
			color++;

			blocks.add(block);
			block.anchor.x = 0.5;
			block.anchor.y = 1.0;
			block.width = blockWidth + game.rnd.integerInRange(-winWidth * 0.05, winWidth * 0.02);
			block.height = maxBlockHeight * (neumannPoints[i] / limitPoints);
			variant = (variantXMax - block.width) / 2;
			block.x = blockX + game.rnd.integerInRange(-variant, variant);
			block.y = current;
			current -= block.height;
		}

		teamName = text.create(0, 0, 'neumann-name');
		teamName.scale.setTo(neumannBase.width / teamName.width);
		teamName.anchor.x = 0.5;
		teamName.anchor.y = 1.0;
		teamName.y = current - (winWidth * 0.02);
		teamName.x = blockX;

		// SHANNON BLOCKS
		current = firstBlockY;
		blockX = shannonBase.x + (shannonBase.width / 2);
		color = 0;
		for (i = 0; i < shannonPoints.length; i++){
			if (color % 2 == 0)
				block = this.add.tileSprite(0, 0, 245, 122, 'shannon-block1');
			else
				block = this.add.tileSprite(0, 0, 245, 122, 'shannon-block2');
			color++;

			blocks.add(block);
			block.anchor.x = 0.5;
			block.anchor.y = 1.0;
			block.width = blockWidth + game.rnd.integerInRange(-winWidth * 0.05, winWidth * 0.02);
			block.height = maxBlockHeight * (shannonPoints[i] / limitPoints);
			variant = (variantXMax - block.width) / 2;
			block.x = blockX + game.rnd.integerInRange(-variant, variant);
			block.y = current;
			current -= block.height;
		}

		teamName = text.create(0, 0, 'shannon-name');
		teamName.scale.setTo(shannonBase.width / teamName.width);
		teamName.anchor.x = 0.5;
		teamName.anchor.y = 1.0;
		teamName.y = current - (winWidth * 0.02);
		teamName.x = blockX;

		// TURING BLOCKS
		current = firstBlockY;
		blockX = turingBase.x + (turingBase.width / 2);
		color = 0;
		for (i = 0; i < turingPoints.length; i++){
			if (color % 2 == 0)
				block = this.add.tileSprite(0, 0, 245, 122, 'turing-block1');
			else
				block = this.add.tileSprite(0, 0, 245, 122, 'turing-block2');
			color++;

			blocks.add(block);
			block.anchor.x = 0.5;
			block.anchor.y = 1.0;
			block.width = blockWidth + game.rnd.integerInRange(-winWidth * 0.05, winWidth * 0.02);
			block.height = maxBlockHeight * (turingPoints[i] / limitPoints);
			variant = (variantXMax - block.width) / 2;
			block.x = blockX + game.rnd.integerInRange(-variant, variant);
			block.y = current;
			current -= block.height;
		}

		teamName = text.create(0, 0, 'turing-name');
		teamName.scale.setTo(turingBase.width / teamName.width);
		teamName.anchor.x = 0.5;
		teamName.anchor.y = 1.0;
		teamName.y = current - (winWidth * 0.02);
		teamName.x = blockX;
	},

	update: function(){
		parallaxCount += 0.005;

		parallax.tilePosition.x -= Math.sin(parallaxCount) * 2;
    	parallax.tilePosition.y -= Math.cos(parallaxCount) * 2;

    	console.log(game.time.totalElapsedSeconds());
    	if (game.time.totalElapsedSeconds() >= 300){
    		window.location.reload(true);
    	}
	}
}