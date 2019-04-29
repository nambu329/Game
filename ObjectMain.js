//객체 메인
class ObjectMain{
	constructor(type, container, width, height, x, y, speedX, speedY, src,bg){
		this.type = type;
		this.container = container;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speedX = speedX;
		this.speedY = speedY;
		this.src = src;
		this.bg=bg;
		
		this.div=document.createElement("div");
		this.div.style.position = "absolute";
		this.div.style.left = this.x + "px";
		this.div.style.top = this.y + "px";
		this.div.style.width = this.width + "px";
		this.div.style.height = this.height +"px";
		this.div.style.background=this.bg;

		if(this.src != ""){ //이미지를 사용하겠다면...
			this.img=document.createElement("img");
			this.img.src=this.src;
			this.img.style.width = this.width + "px";
			this.img.style.height = this.height +"px";
			this.div.appendChild(this.img);
		}
		this.container.appendChild(this.div);					
	}

	tick(){
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}
	render(){
		this.div.style.left = this.x + "px";		
		this.div.style.top = this.y + "px";
	}
}