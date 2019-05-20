<h1>SnowBrother</h1>
<ul>
  <li>개발기간 : 2019-11-30 ~ 2019-12-14</li>
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
    <img src="https://user-images.githubusercontent.com/47166170/58057025-60c3ba80-7b9e-11e9-87f7-47567cb95c44.PNG" width="250px"/>
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
    후기
    </td>
    <td>
      ▶ 단순 cmd창에서의 번거로운 접속 및 테이블 조회과정을 생략하고 오라클에 자동 접속 및 계정확인이 가능하다.<br>
      ▶ 테이블 컬럼 자동조회 및 CRUD의 반영결과를 즉시 확인 할 수 있다.<br>
      ▶ Oracle에 대해 보다 깊은 이해에 도움이 됐고, DB쿼리 관련공부에 집중 할 수 있는 프로젝트였다.<br>
      ▶ 차후 쿼리문 용어 입력시 자동완성 기능 추가.<br>
    </td>
  </tr>
</table>
