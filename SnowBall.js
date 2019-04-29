class SnowBall extends ObjectMain{
	constructor(type,container,x,y,width,height,speedX,speedY,bg,src){
		super(type,container,x,y,width,height,speedX,speedY,bg,src);
	}
	tick(){
		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;
		for(var i=0;i<objectManager.objectArray.length;i++){			
			var obj=objectManager.objectArray[i];
			if(obj.type=="MON1"){
				if(hitCheck_ver1(this, obj)){
					objectManager.removeObject(obj);		
					objectManager.removeObject(this);
					mon1KillCount += 1;
				}
			}
			if(obj.type=="MON2"){
				if(hitCheck_ver1(this, obj)){
					objectManager.removeObject(obj);		
					objectManager.removeObject(this);
					mon2KillCount += 1;
				}
			}
		}
		if(this.x+this.width > screen.width){
			objectManager.removeObject(this);
		}
	}
}