class Meteor {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.visible = true;
        this.speed=0;
    }

    init() {
        let positions = [78, 178, 278, 378];// tọa độ x xuất hiện trứng
        this.x = positions[this.getRandomInt(0, 3)]; //lấy trong mảng position phần tử từ 0 đến 3

    }

    getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;//tạo hàm lấy số ngẫu nhiên
    }


    update() {
        if (this.y <= 350) {
            this.y +=(2+ this.speed);
        }
        this.checkInBarrier();
    }

    checkInBarrier() {

        if (this.y+20 >= 350) {
            if (
                (this.x > barrier.x) &&
                (this.x < (barrier.x + barrier.width))
            ) {
                getPoint();
                this.y=0;
                score+=1;
                this.speed+=1;
                if(score>10&&score%5===0){
                    this.speed=10
                }
                this.init();
            } else {
                //saveData();

                //alert('game over');
                //drawGameOver();
                clearSky();
                clearInterval(timerId);
            }
        }

    }

    render(canvas) {
            let ctx = canvas.getContext('2d');
            ctx.drawImage(meteorImg,this.x,this.y,20,50);
    }
}

// let c = document.getElementById('myCanvas');
// let circle = new Circle(100,100,40);
// circle.render(c);

/*function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    let circle = new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}*/
