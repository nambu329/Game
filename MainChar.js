//메인캐릭터
class MainChar extends ObjectMain{
	constructor(type, container, width, height, x, y, speedX, speedY, src, bg){
		super(type, container, width, height, x, y, speedX, speedY, src, bg);
		this.frame1 = ["./gameitem/MainChar/move1.png","./gameitem/MainChar/move2.png","./gameitem/MainChar/move3.png"];
		this.frame2 = ["./gameitem/MainChar/move1_left.png","./gameitem/MainChar/move2_left.png","./gameitem/MainChar/move3_left.png"]; 
		this.frame3 = "./gameitem/MainChar/jump2.png";
		this.frame4 = "./gameitem/MainChar/jump2_left.png";
		this.frame5 = "./gameitem/MainChar/hitby.png";
		this.frame6 = "./gameitem/MainChar/hitby_left.png";
		this.index = 0;
		this.tickCount = 0;
		this.jumpCoolDown = 0;
		this.gravity = 0.01;
		this.motionFlag = true;
		this.flag;
		
		this.topSensor = new Sensor("TOPSENSOR", container, width*(80/100), 3, x+10, y-5, 0, 0, "", "");
		this.leftSensor = new Sensor("LEFTSENSOR", container, 3, height*(80/100), x+10, y-5, 0, 0, "", "");
		this.rightSensor = new Sensor("RIGHTSENSOR", container, 3, height*(80/100), x+10, y-5, 0, 0, "", "");
		this.bottomSensor = new Sensor("BOTTOMSENSOR", container, width*(80/100), 3, x+10, y-4, 0, 0, "", "");
		objectManager.addObject(this.topSensor);
		objectManager.addObject(this.leftSensor);
		objectManager.addObject(this.rightSensor);
		objectManager.addObject(this.bottomSensor);
	}
	die(){
		on = false;
		record();
	}
	tick(){
//		var topHitCount = 0;
//		var leftHitCount = 0;
//		var rightHitCount = 0;
		var bottomHitCount = 0;
		this.tickCount += 1;	
		//점프쿨 확인
		this.jumpCoolDown -= 1;
		//바닥충돌검사
		if(hitCheck_ver2(this.bottomSensor, ground, this.speedX, this.speedY)){
//			bottomHitCount += 1;
			this.y = this.y - this.speedY - 2;
			this.speedY = 0;
		}
		else{
			this.speedY += this.gravity;
		}
		//공중벽돌충돌검사(아래)
		for(var i = 0; i < airBlock.length; i += 1){
			if(hitCheck_ver1(this.bottomSensor, airBlock[i], this.speedX, this.speedY)){
//				bottomHitCount += 1;
				this.y = this.y - this.speedY - 1;
				this.speedY = 0;			
			}
			else{
				this.speedY += this.gravity;
			}
		}

		//공중벽돌충돌검사(옆)
		for(var i = 0; i < airBlock.length; i += 1){
			if(hitCheck_ver1(this.rightSensor, airBlock[i])){
				this.speedX = 0;
				this.speedY += this.gravity;
			}
		}
		for(var i = 0; i < airBlock.length; i += 1){
			if(hitCheck_ver1(this.leftSensor, airBlock[i])){
				this.speedX = 0;
				this.speedY += this.gravity;
			}
		}
		//공중벽돌충돌검사(위)
		for(var i = 0; i < airBlock.length; i += 1){
			if(hitCheck_ver1(this.topSensor, airBlock[i])){
				this.speedY = -this.speedY;
				this.speedY += 1;
			}
		}
		//몬스터 충돌검사
		for(var i=0; i<objectManager.objectArray.length; i++){			
			var obj = objectManager.objectArray[i];
			if(obj.type == "MON1"){
				if(hitCheck_ver1(this, obj)){
					objectManager.removeObject(obj);
					mon1KillCount += 1;
					life -= 1;
					if(life <= 0){
						this.die();
					}
				}
			}
			if(obj.type == "MON2"){
				if(hitCheck_ver1(this, obj)){
					objectManager.removeObject(obj);
					mon2KillCount += 1;
					life -= 1;
					if(life <= 0){
						this.die();
					}
				}
			}
		}
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
		
		if((this.speedX != 0 || this.speedY !=0) && this.tickCount % 20 == 0){
			this.showFrame();
		}	

		//센서의 velX, velY 를 대입 
		//console.log("this.x"+ this.x , "speedX:"+this.speedX, "speedY"+this.speedY);
		this.topSensor.tick(this.x+10, this.y-3);
		this.leftSensor.tick(this.x - 3, this.y + 10);
		this.rightSensor.tick(this.x + 91, this.y + 10);
		this.bottomSensor.tick(this.x + 8, this.y + 152);
	}
	//애니메이션 처리메서드
	showFrame(){
		if(key == 39){	//우
			this.img.src = this.frame1[this.index];
			this.index += 1;
			if(this.index == 3){
				this.index = 0;
			}
			this.motionFlag = true;
		}
			//console.log(this.index);
		else if(key == 37){	//좌
			this.img.src = this.frame2[this.index];
			this.index += 1;
			if(this.index == 3){
				this.index = 0;
			}
			this.motionFlag = false;
		}		
		else if(key == 88){
			if(this.motionFlag){
				this.img.src = this.frame3;
			}
			else{
				this.img.src = this.frame4;
			}
		}
		else if(key == 90){
			if(this.motionFlag){
				this.img.src = this.frame5;
			}
			else{
				this.img.src = this.frame6;
			}
		}
	}
}