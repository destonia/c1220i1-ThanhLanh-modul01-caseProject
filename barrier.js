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

    moveBarrier() {
        let canvas = document.getElementById("canvas1");
        canvas.addEventListener('mousemove', function (event) {
            processMouseMove(event);
        })

        let ctx = canvas.getContext('2d');
        //ctx.clearRect(0, 350, canvas.width, canvas.height);
        barrier.render(canvas);

        function processMouseMove(event) {
            let rect = canvas.getBoundingClientRect();
            barrier.x = event.clientX - 50;
        }
    }
    render(canvas){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}

