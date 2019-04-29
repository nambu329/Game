class ObjectManager{
	constructor(){
		this.objectArray=[]; //게임에 등장할 모든 종류의 객체
	}
	addObject(obj){ //객체들을 담음
		this.objectArray.push(obj);
	}
	//함수 호출시 객체를 objectArray에서 제거
	removeObject(obj){
		//화면에서 제거
		stage.removeChild(obj.div);
		//배열에서 제거
		this.objectArray.splice(this.objectArray.indexOf(obj), 1);
	}
	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}