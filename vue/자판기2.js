/*

자판기  고객 프로세스

1. 돈을 충전한다.
2. 음료수를 구매한다
4. 음료수 구매 시 재고 -1을 한다.
5. 음료수 구매 시 지갑에서 음료수 가격을 뺀다.
6. 음료수를 받고, 잔돈을 받는다.
7. 돈이 부족하면 구매를 못한다.
8. 재고가 부족하면 구매를 못한다.
9. 반환금 받기 시 반환금은은 0원이 된다.

*/


/*

자판기  고객 프로세스

1. 돈을 충전한다.
2. 음료수를 구매한다
4. 음료수 구매 시 재고 -1을 한다.
5. 음료수 구매 시 지갑에서 음료수 가격을 뺀다.
6. 음료수를 받고, 잔돈을 받는다.
7. 돈이 부족하면 구매를 못한다.
8. 재고가 부족하면 구매를 못한다.
9. 반환금 받기 시 반환금은은 0원이 된다.

*/


new Vue({
    el: '.japangi',
    data: {
        id: '', //아이디
        password: '', //비밀번호
        loginOk: false,     //로그인체크
        loginPage: false, // 관리자 모드
        updatePage: false, //수정페이지
        drinkName: 'aa', //음료수 임름
        drinkEA: '5',  //음료수 수량
        drinkPrice: 1000,  //음료수 가격
        wallet: 0,


        // tabs: ['추천검색어', '최근검색어'], // 탭 목록
        // selectedTab: '', // 선택한 택
        // selectedTabResultA: ['사이다', '콜라', '박카스'],
        // selectedTabResultB: [],
        // searchResult: [],  //검색값
        // submitted: false,
        // searchCount: 0,
    },

    // created() {
    //     this.selectedTab = this.tabs[0];
    // },

    methods: {
        login() { //로그인
            if ("" == this.id || "" == this.password) {   // 아이디 & 비밀번호 미입력시  //정규표현식추가하기
                alert("아이디 혹은 비밀번호를 입력해주세요");
            } else if ("admin" == this.id && "1234" == this.password) { // 아이디 & 비밀번호 체크
                alert("로그인되었습니다.");
                this.loginPage = false;
                this.loginOk = true;
            } else {
                alert("회원정보가 없습니다.");
            }
        },
        logout() { //로그아웃
            this.loginOk = false;
        },
        loginPageMove() {  // 로그인 모달 오픈
            this.loginPage = true;
        },
        mainPageMove() {    // 로그인 모달 종료
            this.loginPage = false;
            this.updatePage = false;

        },
        updatePageMove() {
            this.updatePage = true;
        },

        // onSubmit() { //검색어 엔터누르면
        //     console.log(this.searchCount)
        //     //this.selectedTabResultB[ this.searchCount ] = '';
        //     // this.selectedTabResultB[ this.searchCount ] = this.query;
        //     this.selectedTabResultB.push(this.query);
        //     //this.searchCount += 1;
        //     this.search();
        // },
        // search() {
        //     this.submitted = true;
        // },
        // tabClick(tab) {       // 탭 선택
        //     this.selectedTab = tab;
        //     this.submitted = false;
        // },

        // searchHistory() {

        // }


        update() {
            // console.log(this.drinkName);
            // console.log(this.drinkEA);
            // console.log(this.drinkPrice);
            this.mainPageMove();
        },

        Delete() {
            this.drinkName = '';
            this.drinkEA = '';
            this.drinkPrice = '';
        },

        deposit() {
            this.wallet += 1000;
        },
        buy() {
            if (this.wallet < this.drinkPrice) {
                alert("금액이 부족합니다.");
                return;
            }
            if (this.drinkEA > 0) {
                this.drinkEA -= 1;
                this.wallet -= this.drinkPrice;
            } else {
                alert("재고가 소진되었습니다.");
            }
        },
        Changes() {
            if (this.wallet == 0) {
                alert("반환금이 없습니다.");
                return;
            }
            alert(this.wallet + "원이 반환되었습니다.");
            this.wallet = 0;
        }

    }

})