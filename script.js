
window.onload = function () {
    var game = new Phaser.Game('100', '100', Phaser.AUTO, '',
        { preload: preload, create: create, update: update }
    );

    function preload() {
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

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
};
