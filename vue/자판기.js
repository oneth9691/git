/*
1. 관리자 / 고객 (아이디로 구분)
2. 관리자 추가/삭제 하여 음료 추가 및 삭제 가능 [추가 시 수량 조절 화면]
3. 
4. .
5. 
6. 
7. 

*/

/*
1.

*/


new Vue({
    el: '.japangi',
    data: {
        query: '', //입력 검색어
        loginOk: true,
        loginPage: false, // 관리자 모드
        updatePage: false,
        List: [],
        EaList: [],
        priceList: [],
        modifyPageCheck: false,
        id: '', //아이디
        password: '', //비밀번호
        clickIdx: '',
        drinkName: '',
        drinkEa: '',
        price: '',
        hiddenIdx: '',

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
            this.modifyPageCheck = false;
        },
        updatePageMove(item) {
            console.log(item);
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

        modifyPageMove(index) {
            this.modifyPageCheck = "true";
            this.clickIdx = index;
            this.hiddenIdx = index;

            //debugger;
        },

        update(hiddenIdx) {
            this.hiddenIdx = "";
            this.clickIdx = "";
            this.hiddenIdx = hiddenIdx;
            console.log(this.hiddenIdx);
            this.List[this.hiddenIdx] = this.drinkName;
            this.EaList[this.hiddenIdx] = this.drinkEa;
            this.priceList[this.hiddenIdx] = this.price;
            console.log(this.List[this.hiddenIdx]);
            console.log(this.EaList[this.hiddenIdx]);
            this.modifyPageCheck = false;
            this.drinkName = "";
            this.drinkEa = "";
            this.hiddenIdx = "";
            this.clickIdx = "";
            console.log("배열길이" + this.EaList.length);
            //debugger;
        },

        listDelete(index) {
            //console.log(index);
            this.List.splice(index, 1);
            this.EaList.splice(index, 1);
            //console.log("배열길이" + this.List.length);
            //console.log("배열길이" + this.EaList.length);
        }

    }

})