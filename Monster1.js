//몬스터 생성
class Monster1 extends ObjectMain{
	constructor(type, container, width, height, x, y, speedX, speedY, src,bg){
		super(type, container, width, height, x, y, speedX, speedY, src,bg);
		this.flagX = true;
	}
		//몬스터의 움직임
	tick(){
		if(this.flagX){
			this.x += this.speedX; 
		}
		else{
			this.x -= this.speedX;
		}
		this.showAnimation();
		for(var i=0; i<objectManager.objectArray.length; i++){			
			var obj = objectManager.objectArray[i];
			if(obj.type == "MAINCHAR"){
				if(hitCheck_ver1(this, obj)){
				}
			}
		}
	}
	showAnimation(){
		if(this.x >= 1700 || this.x <= 200){
			this.flagX = !this.flagX;
		}
		var path = (this.flagX)? "./gameitem/green_right.png":"./gameitem/green_left.png";
		this.img.src = path;
	}

}