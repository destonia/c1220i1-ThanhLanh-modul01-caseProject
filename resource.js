class GameImage {
    constructor(name) {
        this.img = null;
        this.name = name;
        this.loaded = false;
    }

    load() {
        this.img = new Image();
        this.img.onload = function () {
             this.loaded= true; // load xong ảnh thì đặt lại là true
        }
        this.img.src = 'image/' + this.name + '.png'; // tất cả ảnh là png hết nhé
    }
}

class Resource {
    constructor(game) {
        this.game = game;
        this.barrier = new GameImage('barrier');
        this.meteor = new GameImage('meteor');
        this.smallExplosion= new GameImage('smallExplosion')
    }

    load() {
        this.barrier.load();
        this.meteor.load();
        setInterval(function () {
            this.checkAllImageLoaded(); // chứ nửa giây, kiểm tra xem tất cả ảnh đã load xong chưa
        }, 500)
    }

    checkAllImageLoaded() {
        // nếu tất cả ảnh đã load xong
        if (
            (this.barrier.loaded) && (this.meteor.loaded)) {
            this.game.resourceLoaded = true;
        }
    }
}
