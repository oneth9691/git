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


new Vue({
    el: '#japangi',
    data: {
        loginOk:false, // 관리자 모드
        title: '',
        id:'',
        password:'',
        serchResult:[],
        list: ['소갈비', '감자', '당근', '무', '깐 밤', '소갈비찜 양념']
    },
    methods: {
        login() {
            if("" == this.id || "" == this.password) {   // 아이디 & 비밀번호 미입력시
                alert("아이디 혹은 비밀번호를 입력해주세요");
            } else if ( "admin" == this.id && "1234" == this.password) { // 아이디 & 비밀번호 체크
                alert("로그인되었습니다.");
                this.loginOk = true;
            } else {
                alert("회원정보가 없습니다.");
            }
        },
        logout() {
            this.loginOk = false;
            
        },
        buyBtn() {
            alert("112221");
        },
        onSubmit() {
         
        },
        onclick(keyword){
            this.query =keyword;
            this.serch();
        }
    }

})