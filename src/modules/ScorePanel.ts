//定义记分牌类
class ScorePanel {
    score = 0;
    level = 1;

    //设置最大等级
    maxLevel: number;
    //设置一个变量表示多少分升一级
    upScore: number;
    //定义一个属性表示记分牌所对应的元素
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel:number = 10, upScore:number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    //定义一个方法用来修改记分牌的值
    addScore() {
        this.score += 1;
        this.scoreEle.innerHTML = this.score.toString();
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level += 1;
            this.levelEle.innerHTML = this.level.toString();
        }
        
    }
}

export default ScorePanel;