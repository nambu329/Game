/* 사각 테두리에 장착할 센서를 정의한다*/
class Sensor extends ObjectMain{
	constructor(type, container, width, height, x, y, speedX, speedY, src,bg){
		super(type, container, width, height, x, y, speedX, speedY, src,bg);
	}

	//언제나 주인공과 일치해야 하므로, velX, velY 를 주인공과 동일하게
	tick(x, y){
		this.x=x;
		this.y=y;
		//console.log("x:"+velX, "y"+velY);
	}
}