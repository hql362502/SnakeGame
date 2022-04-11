//定义蛇类
class Snake {
    //表示蛇头的元素
    head: HTMLElement;
    //表示蛇身的元素(包括蛇头)
    body: HTMLCollection;
    //表示蛇的容器
    container: HTMLElement;
    constructor() {
        this.container = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.body = document.getElementById('snake')!.getElementsByTagName('div');
    }

    //获取蛇的坐标
    get X(): number {
        return this.head.offsetLeft;
    }
    get Y(): number {
        return this.head.offsetTop;
    }
    //设置蛇的坐标
    set X(value: number) {
        if (value === this.X)
            return;
        if (value < 0 || value > 290)
            throw new Error('蛇越界了');
        this.moveBody();
        this.head.style.left = value + 'px';
        
    }
    set Y(value: number) {
        if (value === this.Y)
            return;
        if (value < 0 || value > 290)
            throw new Error('蛇越界了');
        this.moveBody();
        this.head.style.top = value + 'px';
    }
    //设置蛇增加身体的方法
    addBody() {
        //在结束符之前增加一个div
        this.container.insertAdjacentHTML('beforeend', "<div></div>");
    }

    //设置蛇的身体移动的方法
    moveBody() {
        //获取蛇的身体
        for (let i = this.body.length - 1; i > 0; i--) {
            //获取蛇的身体的坐标
            let x = (this.body[i - 1] as HTMLElement).offsetLeft;
            let y = (this.body[i - 1] as HTMLElement).offsetTop;
            //设置蛇的身体的坐标
            (this.body[i] as HTMLElement).style.left = x + 'px';
            (this.body[i] as HTMLElement).style.top = y + 'px';
        }
    }

}

export default Snake;