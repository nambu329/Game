<h1>SnowBrother</h1>
<ul>
  <li>개발기간 : 2018-11-30 ~ 2018-12-14</li>
  <li>인원 : 1명</li>
  <li>개발환경 : JavaScript</li>
  <li>개발목적 : 1.플랫포머 형식의 게임제작 2.다양한 객체활용과 상속을 이용해 코드작성 숙달</li>
</ul>

<table style="text-align:center;">
  <tr>
    <td>UI</td>
    <td>상세 설명</td>
  </tr>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58056914-de3afb00-7b9d-11e9-928d-7f82f8745a8d.PNG" width="250px"/>
    </td>
    <td>
      ▶ 프로그램 구조<br>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58056954-06c2f500-7b9e-11e9-94a7-d2483d8de2c3.PNG" width="250px"/>
    </td>
    <td>
      ▶ 프로그램 최초 실행 메인화면<br>
    </td>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58058303-5657ef80-7ba3-11e9-9963-b858e488ad3f.PNG" width="250px"/>
    </td>
    <td>
      ▶ 구조물 구현<br>
      <ul>
        <li>최상위 객체인 objectmain을 상속받은 후 각 구조물마다 클래스를 생성한다.</li>
        <li>메인 페이지에서 정의한 클래스를 new로 생성해서 맵에 배치시킨다.</li>
        <table>
          <tr>
            <td colspan="2">상속 후 구조물구현 코드와 메인에서의 구현</td>
          </tr>
          <tr>
            <td>
            <img src="https://user-images.githubusercontent.com/47166170/58057142-cca62300-7b9e-11e9-8863-96f0c62fa39e.PNG" width="250px"/> 
            </td>
            <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057143-cca62300-7b9e-11e9-905b-702bbffadc66.PNG" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58057354-88675280-7b9f-11e9-8b23-8651bed1e7e4.PNG" width="250px"/>
    </td>
    <td>
      ▶ 장애물과 몬스터 구현<br>
      <ul>
        <li>ObjectMain을 상속받은 채로 각각 클래스를 만든다.</li>
        <li>메인페이지에 new로 생성하여 objectmanager의 배열에 객체 요소로 등록한다.</li>
        <li>일정 좌표를 이동한경우 반대로 이동하도록 함수를 설정한다.</li>
        <table>
          <tr>
            <td colspan="1">몬스터 생성</td>
          </tr>
          <tr>
            <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057436-d1b7a200-7b9f-11e9-9f68-4329f6a3c6ad.PNG" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58057355-88ffe900-7b9f-11e9-8996-ab149f949206.PNG" width="250px"/>
    </td>
    <td>
      ▶ 메인 캐릭터 구현<br>
      <ul>
        <li>캐릭터 이미지 프레임을 위해 여러 개의 이미지를 등록한다.</li>
        <li>방향키마다 이미지 순서를 순환시켜 자연스러운 이동이 가능하게한다.</li>
        <li>특정키를 누르면 투사체(눈) 객체를 생성하여 매개변수로 넣은 x의 속도만큼 이동하도록 구현한다.</li>
        <li>캐릭터 이미지에 충돌을 감지할 수 있는 바를 만들어 충돌감지를 할 수 있게 한다..</li>
        <table>
          <tr>
            <td colspan="2">캐릭터 생성(충돌감지용 바와 애니메이션 처리)</td>
          </tr>
          <tr>
            <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057664-a8e3dc80-7ba0-11e9-8880-48736393816c.PNG" width="250px"/>
            </td>
             <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057665-a8e3dc80-7ba0-11e9-9ca9-8959f8cedea0.PNG" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      객체별(ex : 눈과 몬스터) 충돌감지와 제거호출
    </td>
    <td>
      ▶ 충돌 처리<br>
      <ul>
        <li>충돌이 일어난 타입에 따라 objectManager의 배열에서 각 타입의 배열인덱스를 제거.</li>
        <table>
          <tr>
            <td colspan="2">충돌에 따른 처리</td>
          </tr>
          <tr>
            <td>
              <img src="https://user-images.githubusercontent.com/47166170/58058262-26a8e780-7ba3-11e9-87eb-8af41c50b31d.PNG" width="250px"/>
            </td>
             <td>
              <img src="https://user-images.githubusercontent.com/47166170/58058263-26a8e780-7ba3-11e9-9653-1a94e86cebdf.PNG" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/47166170/58058104-8fdc2b00-7ba2-11e9-97f6-8edaea56f184.PNG" width="250px"/>
    </td>
    <td>
      ▶ 게임 진행<br>
      <ul>
        <li>게임 시작시 방향키로 조종하며 z키로 미사일, x키로 점프하며 진행한다.</li>
        <li>시간이 일정시간 경과하면 장애물의 속도가 단계적으로 일정비율 상승.</li>
        <li>몬스터나 장애물에 맞으면 장애물이나 몬스터가 사라짐과 동시에 체력이 -1.</li>
        <li>눈에 맞은 몬스터는 일정시간 후에 다시 나타난다.</li>
        <li>좌측 위에있는 캐릭터의 목숨이 다 깎이면 게임이 종료되며 점수가 집계된다.</li>
        <table>
          <tr>
            <td colspan="3">게임 엔진과 결과출력로직, 게임 종료시 화면</td>
          </tr>
          <tr>
            <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057933-e7c66200-7ba1-11e9-8552-b97adfe71705.PNG" width="250px"/>
            </td>
             <td>
              <img src="https://user-images.githubusercontent.com/47166170/58057860-9d44e580-7ba1-11e9-81cf-122e3232a4fe.PNG" width="250px"/>
            </td>
          </tr>
        </table>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    후기
    </td>
    <td>
      ▶ 부모자식 객체간 상속에 대해 더 깊게 이해하게 된 프로젝트.<br>
      ▶ 점프나 중력 처리등에 대해 어려움이 많았고 실제 점프부분이 잘 안되는 경우가있어서 개선필요.<br>
    </td>
  </tr>
</table>
