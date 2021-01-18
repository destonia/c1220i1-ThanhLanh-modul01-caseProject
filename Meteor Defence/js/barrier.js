class Barrier {
    constructor(name) {
        this.game = game;
        this.x = 0;
        this.y = 350;
    }

    draw() {
        this.game.context.drawImage(
            this.game.resource.barrier.img,
            this.x,
            this.y
        );
    }
}