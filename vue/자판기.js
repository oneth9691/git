/*
1. 관리자가 음료수 목록 및 수량을 추가, 삭제 할 수 있다. v-model query //
2. 관리자가 자판기에 돈을 넣을 수 있고 돈을 뺄수도 있다.
3. 관리자인지 확인하기 위해서 열쇠가 필요하다.(아이디/비번 대체)
4. 고객은 100원 500원 1000원으로 음료수를 구매할 수 있다,.
5. 음료수는 여러개 구매할 수 있다.
6. 동전을 투입한 후 반환하기 버튼을 누르면 돈(잔돈)을 반환 받을 수 있다.
7. 재고가 없으면 구매할 수 없다.
8. 금액이 부족하면 구매할 수 없다.
9. 음료수를 정상적으로 구매하면 재고에서 -1이 된다.
*/

/*
1.

*/


new Vue({
    el: '#japangi',
    data: {
        query: '', //입력 검색어
        loginOk: 'true',
        loginPage: false, // 관리자 모드
        updatePage: true,
        id: '', //아이디
        password: '', //비밀번호
        menu: ['사이다', '콜라'], // 탭 목록
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
        },
        updatePageMove() {
            this.updatePage = true;
        }

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

    }

})