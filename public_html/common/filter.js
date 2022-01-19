class Filter {
    constructor() {
        this.init();
    }

    // 초기화
    init() {
        this.searchInput = document.querySelector('#searchInput');
        this.dataList = document.querySelectorAll('table tbody tr');
        this.gbList = document.querySelectorAll('.gb');
        this.gbType = '';
    }

    // 구분
    getGb(item, gbType) {
        // class에 current 처리
        if (item) {
            this.searchInput.value = ''; // 검색 초기화
            this.gbType = gbType;
            this.gbList.forEach((e) => {
                e.classList.remove('current');
            });
            item.classList.add('current');
        }

        // 전체, 공식, 비공식
        this.dataList.forEach((e) => {
            // 전체인 경우
            if (this.gbType == '') {
                e.style.display = 'table-row';
            }
            // 공식, 비공식인 경우
            else {
                if (e.children[1].getAttribute('gb').indexOf(this.gbType) > -1) {
                    e.style.display = 'table-row';
                } else {
                    e.style.display = 'none';
                }
            }
        });
    }

    // 검색
    getSearch() {
        let input = this.searchInput.value;
        input = input.toLowerCase().replace(/ /g, '');
        if (input) {
            this.dataList.forEach((e) => {
                if (this.gbType != '') e.style.display = e.children[1].getAttribute('gb').indexOf(this.gbType) > -1 && e.innerText.indexOf(input) > -1 ? 'table-row' : 'none';
                else e.style.display = e.innerText.indexOf(input) > -1 ? 'table-row' : 'none';
            });
        } else this.getGb(null, this.gbType);
    }
}
