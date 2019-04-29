//---------------------------------------------------------------------------
function getRandom(num){
	var ranNum = (parseInt(Math.random() * num)); //int화
	return ranNum; //반환 함수 : 함수 중 return에 값을 명시하여 호출한 함수가 그 값을 반환받도록 처리하는 함수
				  //여기선 n값을 반환
}
//---------------------------------------------------------------------------
//최소최대 범위를 지정해 난수를 뽑아내는 함수
//if 5~7을 원하면 min = 5 max = 8하면됨
function getRandomRange(min, max){
	var ranNum = (parseInt(Math.random() * (max-min)) + min);
	return ranNum;
}
//---------------------------------------------------------------------------
//함수명 인수로 넘긴 n이 10보다 작으면 앞에 "0" 문자를 조합해서
//결과를 반환
function getTimeString(num){
	if(num < 10){
		num = "0" + num;
	}
	return num;
}
//---------------------------------------------------------------------------
//충돌검사 함수(사후판단)
//인수1 : 나의 객체
//인수2 : 상대방 객체
function hitCheck_ver1(me, target) {
 //나의 너비가 상대의 범위에 있는지 체크
	var horizon1=me.x+me.width >= target.x;  //좌측에서 우측으로 접근시
	var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시
 //나의 높이가 상대의 범위에 있는지 체크
	var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시
	var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시
	return (horizon1 && horizon2) && (vertical1 && vertical2);
}
//---------------------------------------------------------------------------
//충돌검사 함수(사전판단)
//인수1 : 나의 객체
//인수2 : 상대방 객체
function hitCheck_ver2(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단 
	me_x= parseInt(me.div.style.left);
	me_y= parseInt(me.div.style.top);
	me_width=parseInt(me.div.style.width);
	me_height=parseInt(me.div.style.height);
	
	target_x= parseInt(target.div.style.left);
	target_y= parseInt(target.div.style.top);
	target_width=parseInt(target.div.style.width);
	target_height=parseInt(target.div.style.height);
	
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	
	var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width)); 	//나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	
	var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	
	return (result1 || result2) && (result3 || result4);
}

//---------------------------------------------------------------------------
//원하는 달이 몇일까지 있는지 구하는 함수 
//알고싶은 달이 5월일 경우 : (2018, 4); 월은 0월부터 시작하니까
function getLastDateOfMonth(year, month){
	var date = new Date();
	//조작하기
	date.setFullYear(year);
	date.setMonth(month + 1); //5를 입력받으면 6월을 찾아가야하므로
	date.setDate(0); //6월의 0일 = 5월의 말일 
	//반환
	return date.getDate(); 
}
//---------------------------------------------------------------------------
//해당월의 시작요일 구하기
//알고싶은 월이 5월일 경우 : Date객체를 5월 세팅 + 날짜는 1일세팅 -> 요일물어보기
//호출시 5월이 궁금할때 month에는 4가 들어가야함
function getStartDayOfMonth(year, month){
	var date = new Date();
	date.setFullYear(year);
	date.setMonth(month);
	date.setDate(1); //그 월의 시작일
	date.getDay();
	return date.getDay();
}