class Barrier {
    constructor(width,height) {
        this.x = 150;
        this.y = 350;
        this.width = width;
        this.height=height;
        this.color = "brown";
        this.visible = true;
        this.explosed=false;
    }

    setColor(color){
        this.color = color;
    }

    init(canvas) {
        canvas.addEventListener('mousemove', function (event) {
            processMouseMove(event);
        })

        function processMouseMove(event) {
            let rect = canvas.getBoundingClientRect();
            barrier.x = event.clientX - 50;
        }
    }

    render(canvas){
        let ctx = canvas.getContext('2d');
       /* ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();*/
        ctx.drawImage(barrierImg,this.x,this.y,this.width,this.height)
    }
}

