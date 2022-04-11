//引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器
class GameControl {
    //定义一个属性表示蛇的实例
    snake: Snake;
    //定义一个属性表示食物的实例
    food: Food;
    //定义一个属性表示记分牌的实例
    scorePanel: ScorePanel;

    //创建一个属性来表示蛇的方向
    direction: string = '';

    //创建一个属性表示游戏是否还在
    isLive: boolean = true;
//游戏开始
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
     //初始化游戏
    init() {
        //绑定键盘按键按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();

    }
    keydownHandler(e: KeyboardEvent): void {
        //检查是否是方向键

        this.direction = e.key;
    }

    //创建一个控制蛇移动的方法
    run() {

        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据方向，修改蛇的top和left值

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
            default:
                break;
        }
        this.checkFood(X, Y)
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e)  {
            alert((e as Error).message + '! Game Over!');
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1)*30);
    }

    //创建一个检查蛇吃没吃到食物的方法
    checkFood(X:number, Y:number): void {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.snake.addBody();
            this.scorePanel.addScore();
        }
    }


}
export default GameControl;
