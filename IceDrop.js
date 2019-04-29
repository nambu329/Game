//낙하물 생성
class IceDrop extends ObjectMain{
	constructor(type, container, width, height, x, y, speedX, speedY, src, bg){
		super(type, container, width, height, x, y, speedX, speedY, src, bg);
	}
	tick(){
		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;
		//this.x 값을 증가시켜나가다가, 적군과 충돌했다면 제거
		for(var i=0; i<objectManager.objectArray.length; i++){			
			var obj = objectManager.objectArray[i];
			if(obj.type == "MAINCHAR"){
				if(hitCheck_ver1(this, obj)){//충돌시	
					objectManager.removeObject(this);
					if(life <= 0){
						mainChar.die();
					}
					life -= 1;
				}
			}
			if(obj.type == "FLOOR"){
				if(hitCheck_ver1(this, obj)){
					objectManager.removeObject(this);
				}
			}
		}
	}
}