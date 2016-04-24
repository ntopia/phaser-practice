
window.onload = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '',
        { preload: preload, create: create, update: update }
    );

    function preload() {
        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        game.scale.setResizeCallback(onResize, this);

        game.load.image('logo', 'Original_Doge_meme.jpg');
    }

    var logo;
    function create() {
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.width = 500;
        logo.height = 500;
    }

    function update() {
        logo.x = game.world.centerX;
        logo.y = game.world.centerY;
    }

    function onResize(scale, parentBounds) {
        var modelRatio = 800.0 / 600.0;

        var screenWidth = parentBounds.width;
        var screenHeight = parentBounds.height;
        var screenRatio = screenWidth / screenHeight;

        if (screenRatio >= modelRatio) {
            scale.setGameSize(screenWidth, screenHeight);
            scale.setUserScale(1, 1);
        }
        else {
            scale.setGameSize(screenWidth, screenWidth / modelRatio);
            scale.setUserScale(1, 1);
        }
    }
};
