
window.onload = function () {
    var game = new Phaser.Game('100', '100', Phaser.AUTO, 'screen',
        { preload: preload, create: create, update: update }
    );

    function preload() {
        game.load.image('logo', 'Original_Doge_meme.jpg');
    }

    function create() {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.width = 500;
        logo.height = 500;
    }

    function update() {
        
    }
};
