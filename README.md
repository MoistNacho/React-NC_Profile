# NightCity Profile

> 사이버펑크2077 식 디자인에 감명을 받아 만들게 된 프로필 카드를 생성 및 관리하는 ReactJS 웹 프로젝트 입니다.

## Demo

> https://moistnacho.github.io/React-NC_Profile/

## Tools

- Google Chrome (동작환경)
- ReactJS
- React Router
- Firebase Authentication
- Firebase Cloud Firestore
- Cloudinary
- dom-to-image && file-saver
- PostCSS

## Detailed description

- React Router를 이용해 로그인하기 위한 페이지와 프로필 수정 및 프리뷰를 볼 수있는 페이지를 나누었습니다.
- Firebase의 Auth를 이용하여 Google 및 Github 계정으로 로그인 할 수 있도록 하였습니다.
- Firebase의 Firestore를 통해 각각의 사용자별로 데이터를 관리하고 프로필이 업데이트 될때마다 클라이언트에게 업데이트 된 정보를 전달 해 줍니다.
- Cloudinary를 이용하여 사용자가 업로드한 이미지를 클라우드에 저장하고 받아온 이미지URL을 통해 다시 클라이언트에게 이미지를 보여 주도록 했습니다.
- dom-to-image와 file-saver를 이용하여 사용자가 완성된 프로필카드를 파일로 저장 할 수 있도록 하였습니다.
  - Preview 섹션의 프로필카드 우측 상단의 아이콘을 클릭시 해당하는 프로필 컴포넌트를 저장합니다.

## Preview

1. 로그인 페이지
   ![Login Page](https://user-images.githubusercontent.com/59498305/104169489-021e1500-5443-11eb-818c-e1804f22ee72.gif)

2. 로그인 완료후 페이지 전환
   ![Login to Profile Page](https://user-images.githubusercontent.com/59498305/104169918-a6a05700-5443-11eb-8136-fb9ae0fd1872.gif)

3. 프로필 추가
   ![Profile Create](https://user-images.githubusercontent.com/59498305/104169797-78bb1280-5443-11eb-86eb-20c90940baa6.gif)

4. 프로필 삭제
   ![Profile Delete](https://user-images.githubusercontent.com/59498305/104170001-c8014300-5443-11eb-8afd-a54c8a95cbac.gif)

5. 프로필 수정
   ![Profile Edit](https://user-images.githubusercontent.com/59498305/104169968-ba4bbd80-5443-11eb-877a-7b1101493941.gif)

---

## Mobile Preview

1. 모바일 로그인 페이지

   ![Mobile Login Page](https://user-images.githubusercontent.com/59498305/104170083-e8310200-5443-11eb-8473-b6baf3337cb3.gif)

2. 모바일 프로필 페이지

   ![Mobile Profile Page](https://user-images.githubusercontent.com/59498305/104170087-e9622f00-5443-11eb-8fe4-cfeb3bdad7f3.gif)
