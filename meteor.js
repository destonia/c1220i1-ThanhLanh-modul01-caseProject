class Meteor {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.radius = 20;
        this.color = "blue";
        this.visible = true;
        this.explosed=false;
        this.addedScore=false;
        this.popped=false;
    }
    init(){
        let positions = [78, 178, 278, 378];// tọa độ x xuất hiện trứng
        this.x = positions[this.getRandomInt(0, 3)]; //lấy trong mảng position phần tử từ 0 đến 3
    }

    getRandomInt = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;//tạo hàm lấy số ngẫu nhiên
    }
    setColor(color){
        this.color = color;
    }

    update(){
        if (this.y <= 350){
            this.y += 2;
        }
        else {
            this.popped = true;
        }
            this.checkInBarrier();

    }
    checkInBarrier(){
        if (
            (this.x > barrier.x) &&
            (this.x < (barrier.x + barrier.width)) &&
            (this.y >= 350)
        ){
            // ẩn trứng đi
            this.visible = false;

            // cộng điểm
            if (this.addedScore === false){
                score += 1;
                this.addedScore = true;
            }
        }
    }
    render(canvas){
        // let ctx = document.getElementById("myCanvas").getContext('2d');
        if(this.visible){
            let ctx = canvas.getContext('2d');
            ctx.beginPath();

            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }


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
