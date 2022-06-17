# Cloud Functions
파이어 베이스는 서버가 없고 클라이언트에서 대부분의 요청이 이루어지지만 백엔드 환경에서만 작성 가능한 코드를 아예 쓰지 못하는 건 아니다.
구글 클라우드의 이벤트 기반 서버리스 프레임워크인 cloud function을 사용하면 node js 환경에서 실행 가능한 타사 API 라던지 자사의 REST API도 제작할 수 있다.
 
한마디로 서버는 없지만 서버의 역활을 대신해줄 수 있는 환경이 있기에, 코드만 작성해둔다면 구글이 필요한 서버 프로비저닝과 배포 환경 구성을 전부 알아서 처리해주고 함수가 실행되기 위해 필요한 최소 조건에 맞춰서 비용을 청구한다. 그렇기 때문에 개발자들은 서버 운영은 맘 편히 구글에게 맡겨두고 더 좋은 제품을 만드는데만 집중할 수 있는 것이다.
AWS에 익숙하다면 Lambda랑 유사한 기능이라고 보면 되겠다.
출처: https://mingeesuh.tistory.com/entry/Firebase-웹-Cloud-Function이란-초기-세팅하기 [코딩마차:티스토리]


```
npm install firebase-functions@latest firebase-admin@latest --save // functions
npm install -g firebase-tools // 파이어베이스 cli
출처: https://mingeesuh.tistory.com/entry/Firebase-웹-Cloud-Function이란-초기-세팅하기 [코딩마차:티스토리]
```