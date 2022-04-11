//定义食物类Food
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById( 'food')!;
    }
    //定义一个获取食物X坐标的方法
    get X(): number {
        return this.element.offsetLeft;
    }
    //定义一个获取食物Y坐标的方法
    get Y(): number {
        return this.element.offsetTop;
    }
    //修改食物的位置
    change() {
        this.element.style.left = Math.round(Math.random() * 29)*10 + 'px';
        this.element.style.top =  Math.round(Math.random() * 29)*10 + 'px';
    }
}

export default Food;