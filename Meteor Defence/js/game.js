class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.resource = null;
        this.chickens = [];
        this.eggs = [];
        this.bar = null;
        this.bowl = null;
        this.resourceLoaded = false; // cái này kiểm tra tất cả ảnh đã tải xong chưa
        this.score = 0;
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 450; // chiều rộng game
        this.canvas.height = 400; // chiều cao game
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas)//chèn canvas vừa tạo vào body
    }
}