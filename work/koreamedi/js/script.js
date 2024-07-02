// 2024-06-03 ssj 병원이미지 스와이퍼
const mainVisualSwiper = new Swiper('.main-visual-wrap', {});

// 2024-06-03 ssj 병원 진료시간 펼치기/접기
function hospitalHour(e){
    const buttonClass = $(e).hasClass('unfold-button');

    if(buttonClass){
        $(e).addClass('hide');
        $('.fold-button').slideDown(400).css({'display':'flex'});
    } else {
        $('.fold-button').hide();
        $(e).closest('.hospital-hour-wrap').find('.unfold-button').removeClass('hide');
    }
}

// 2024-06-12 ssj 링크 공유
function linkShareButton(e){
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(function() {
        alert('URL이 클립보드에 복사되었습니다.');
    }, function(err) {
        console.error('URL 복사 실패:', err);
    });
}

// 2024-06-03 ssj 주소복사
function copyAddress(){
    const address = $('.address').text();

    navigator.clipboard.writeText(address).then(function(){
        alert('주소가 클립보드에 복사되었습니다!');
    }).catch(function(err){
        alert('주소 복사 실패: ', err);
    });
}

// 2024-06-03 ssj 네이버 지도 주소 이동
function viewMap(){
    const address = $('.address').text();
    var naverMapUrl = 'https://map.naver.com/v5/search/' + encodeURIComponent(address);

    window.open(naverMapUrl, '_blank');
}

// 2024-06-03 ssj 제공 서비스 스와이퍼
const serviceProvideSwiper = new Swiper('.service-provide-wrap', {
    slidesPerView: 'auto',
    spaceBetween: 16,
});

// 2024-06-03 ssj 좋아요 버튼
function likeButton(event){
    event.preventDefault();
    event.stopPropagation();

    const $button = $(event.currentTarget);

    if($button.hasClass('active')) {
        $button.removeClass('active').find('img').attr('src', './images/btn_like.png');
    } else {
        $button.addClass('active').find('img').attr('src', './images/btn_like_active.png');
    }
}

// 2024-06-03 ssj 나에게 필요한 서비스 스와이퍼
const needServiceSwiper = new Swiper('.need-service-wrap',{
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
})

// 2024-06-04 ssj 중간 배너 스와이퍼
const middleBannerSwiper = new Swiper('.middle-banner-wrap',{})

// 2024-06-04 ssj 리뷰 정렬 버튼
function sortButton(e){
    $(e).closest('.sort-box').find('.sort-button').removeClass('active');
    $(e).addClass('active');
}

// 2024-06-04 ssj 리뷰 이미지 스와이퍼
const reviewImageSwiper = new Swiper('.review-image-wrap',{})

// 2024-06-12 ssj 도움이 됐어요
function helpButton(e){
    let text = $(e).closest('.help-button-box').find('.help-count').text()    ;
    let number = text.replace(/\D/g, '');

    $(e).toggleClass('active');
    if($(e).hasClass('active')){
        number++;
        $(e).find('img').attr('src','./images/helpful_h.png');
        $(e).closest('.help-button-box').find('.help-count').text(number + '명에게 도움이 되었습니다.')
    } else {
        number--;
        $(e).find('img').attr('src','./images/helpful.png');
        $(e).closest('.help-button-box').find('.help-count').text(number + '명에게 도움이 되었습니다.')
    }
}

// 2024-06-04 ssj 비포 애프터 스와이퍼
const beforeAfterSwiper = new Swiper('.before-after-wrap',{
    slidesPerView: 'auto',
    spaceBetween: 16,
})

// 2024-06-03 ssj 병원 진료시간 펼치기/접기
$('.hospital-link').on('click', function(e) {
    e.stopPropagation();
});

function hospitalHour(e){
    const buttonClass = $(e).hasClass('unfold-button');

    if(buttonClass){
        $(e).addClass('hide');
        $('.all-day-box').css({'display':'flex'});
        $('.fold-button').slideDown(400).addClass('active');
    } else {
        $('.fold-button').removeClass('active');
        $(e).closest('.hospital-hour-wrap').find('.unfold-button').removeClass('hide');
        $('.all-day-box').css({'display':'none'});
    }
}

// 2024-06-10 ssj 상세정보/리뷰/문의 탭 메뉴
function goodsTabMenu(e){
    const index = $(e).closest('.tab-menu-list').index();

    $(e).addClass('active').closest('.tab-menu-list').siblings().find('.tab-menu-button').removeClass('active');

    if(index == 0){
        $('.more-inform-wrap').addClass('active');
        $('.review-wrap').removeClass('active');
        $('.inquiry-wrap').removeClass('active');
    } else if(index == 1){
        $('.review-wrap').addClass('active');
        $('.more-inform-wrap').removeClass('active');
        $('.inquiry-wrap').removeClass('active');
    } else {
        $('.inquiry-wrap').addClass('active');
        $('.more-inform-wrap').removeClass('active');
        $('.review-wrap').removeClass('active');
    }
}

// 2024-06-10 ssj 상품 상세정보 펼쳐보기
function moreInformButton(e){
    $(e).closest('.more-inform-wrap').find('.more-inform-box').toggleClass('active');
    $(e).toggleClass('active');
    if($(e).hasClass('active')){
        $(e).find('.text').text('상품 상세정보 닫기');
    } else {
        $(e).find('.text').text('상품 상세정보 펼쳐보기');
    }
}

// 2024-06-04 ssj 리뷰 정렬 버튼
function sortButton(e){
    $(e).closest('.sort-box').find('.sort-button').removeClass('active');
    $(e).addClass('active');
}

// 2024-06-10 ssj 하단 서비스 스와이퍼
const serviceSwiper = new Swiper('.service-swiper-wrap',{
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
})

// 2024-06-10 ssj 날짜 선택
$(function () {
    var today = new Date();
    var dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    var formattedDate = $.datepicker.formatDate('yy.mm.dd', today) + '(' + dayNames[today.getDay()] + ')';

    $("#selectDateHidden").val(formattedDate).datepicker({
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy.mm.dd(D)',
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        showMonthAfterYear: true,
        defaultDate: today,
        onSelect: function(dateText) {
            $('#selectDate').val(dateText);
        }
    });

    $('#selectDate').on('click', function () {
        $("#selectDateHidden").datepicker('show');
    });

    $('#selectDateHidden').on('change', function () {
        $('#selectDate').val($(this).val());
    });

    $('#selectDate').val(formattedDate);
});

// 2024-06-10 ssj 예약 결제하기 팝업 열기
function paymentModalOpen(e){
    $('.payment-modal-wrap').addClass('active');
    $('.content-product-detail').addClass('active');
    $('.fixed-button-wrap').css({'z-index':'0'});
}

// 2024-06-10 ssj 예약 결제하기 팝업 닫기
function paymentModalClose(e){
    $('.payment-modal-wrap').removeClass('active');
    $('.content-product-detail').removeClass('active');
    $('.fixed-button-wrap').css({'z-index':'100'});
}

// 2024-06-12 ssj 카테고리 스와이퍼
const catePositionSlide = new Swiper('.catePosition',{
    slidesPerView: 'auto',
    mousewheelControl: true,
});

// 2024-06-12 ssj 카테고리 active
function categoryActive(e){
    const text = $(e).text();

    $(e).addClass('active').closest('.swiper-slide').siblings().find('a').removeClass('active');
    $('.sub_title').find('.text').text(text)
}

// 2024-06-14 ssj 상세검색 표시
function fnSearchView(){
    $(".sc_dtl_wrap").toggle();
}

// 2024-06-14 숫자입력 확인
String.prototype.stripspace = function() {
	return this.replace(/ /g, "");
}

function checkNum(value, isDec) {
	var RegExp;

	if (!isDec) isDec = false;
	RegExp = (isDec) ? /^-?[\d\.]*$/ : /^-?[\d]*$/;

	return RegExp.test(value)? true : false;
}

function stripCharFromNum(value, isDec) {
	var i;
	var minus = "-";
	var nums = "1234567890"+((isDec) ? "." : "");
	var result = "";

	for(i=0; i<value.length; i++) {
		numChk = value.charAt(i);
		if (i == 0 && numChk == minus) {
			result += minus;
		}
		else {
			for(j=0; j<nums.length; j++) {
				if(numChk == nums.charAt(j)) {
					result += nums.charAt(j);
					break;
				}
			}
		}
	}
	return result;
}

function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}

function numberOnly(obj, isDec) {
	if (!isDec) isDec = false;
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(num, isDec)) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, isDec);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), isDec);

	var arrNum = num.split(".");
	if (arrNum.length > 1) {
		obj.value = arrNum[0]+"."+arrNum[1];
	}
	else {
		obj.value = arrNum[0];
	}
}

// 2024-06-12 ssj 보기방식 변경
function viewChange(e){
    if($(e).hasClass('one-line')){
        $('.newList').removeClass('active');
        $('.cont_list.D').addClass('active');
    } else {
        $('.cont_list.D').removeClass('active');
        $('.newList').addClass('active');
    }
}

// 2024-06-13 ssj 마이페이지 프로필 사진
function myImgUpload(){
	var formData = new FormData();
	formData.append("workerPhoto", $("#workerPhoto")[0].files[0]);
}

// 2024-06-12 ssj a태그 안에 a태그 삽입 불가로 button태그로 링크 이동
function reserveLink(event){
    event.stopPropagation();
    event.preventDefault();
    const name = $(event.currentTarget).attr('class');

    if(name.includes('hospital-link')){
        location.href = '../mediGoods_content.html';
    } else if(name.includes('change-link')){
        location.href = '../edit_order.html';
    } else if(name.includes('cancel-link')){
        location.href = '../edit_order.html';
    }
}

$(document).on('click', '.link-button', reserveLink);

// 2024-06-12 ssj 다가오는 일정 스와이퍼
const scheduleSwiper = new Swiper('.schedule-container',{
    spaceBetween: 16,
    slidesPerView: 'auto',
})

// 2024-06-13 ssj 전/후 사진 추가하기 체크박스
function addPhotoShow(e){
    let value = $(e).val();

    if(value == 'F'){
        $('.add-photo-box').addClass('active');
        value = 'T'
    } else {
        $('.add-photo-box').removeClass('active');
        value = 'F'
    }
    $(e).val(value);
}

// 2024-06-13 ssj 전/후 사진 추가하기
function previewImage(event, type) {
    const input = event.target;
    const file = input.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const labelIcon = input.nextElementSibling;
            labelIcon.style.backgroundImage = `url(${e.target.result})`;
            labelIcon.style.backgroundSize = 'cover';

            input.setAttribute('data-has-image', 'true');

            const labelElement = input.parentElement;
            const deleteButton = labelElement.querySelector('.delete-button');
            deleteButton.style.display = 'flex';

            const photoList = input.closest(`.${type}-box`).querySelector(`.${type}-list`);
            if (photoList.querySelectorAll('input[data-has-image="true"]').length < 3 && photoList.querySelectorAll('input[data-has-image="false"]').length === 0) {
                addNewImageInput(photoList, type);
            }
        };
        reader.readAsDataURL(file);
    } else {
        alert('이미지 파일만 선택해주세요.');
        input.value = '';
    }
}

function addNewImageInput(photoList, type) {
    const newId = `${type}Photo${photoList.querySelectorAll('label').length}`;

    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', newId);
    newLabel.className = 'label-style file-image-preview';
    newLabel.innerHTML = `
        <input type="file" id="${newId}" name="${type}Photo${photoList.querySelectorAll('label').length}" accept="image/*" onchange="previewImage(event, '${type}')" data-has-image="false">
        <span class="label-icon"></span>
        <button type="button" class="delete-button" onclick="deleteButton(this, '${type}')" style="display: none;">
            <img src="./images/btn_delete.png" alt="">
        </button>
    `;
    photoList.appendChild(newLabel);
}

function deleteButton(button, type) {
    const labelElement = button.closest('label');
    const parentElement = labelElement.parentElement;

    if (parentElement) {
        const input = labelElement.querySelector('input[type="file"]');
        const labelIcon = labelElement.querySelector('.label-icon');
        labelIcon.style.backgroundImage = '';
        input.removeAttribute('data-has-image');

        labelElement.remove();

        const trueInputs = document.querySelectorAll(`.${type}-list input[type="file"][data-has-image="true"]`).length;

        const remainingLabels = Array.from(parentElement.querySelectorAll('.label-style'));
        remainingLabels.forEach((label, index) => {
            const newId = `${type}Photo${index}`;
            label.querySelector('input[type="file"]').id = newId;
            label.querySelector('input[type="file"]').setAttribute('name', `${type}Photo${index}`);
            label.querySelector('input[type="file"]').setAttribute('onchange', `previewImage(event, '${type}')`);
            label.querySelector('button').setAttribute('onclick', `deleteButton(this, '${type}')`);
            label.querySelector('button').querySelector('img').setAttribute('alt', '');

            label.setAttribute('for', newId);
        });

        if (trueInputs === 2) {
            addNewImageInput(parentElement, type);
        } else {
            return false;
        }
    }
}

// 2024-06-13 ssj 별점
$(document).ready(function() {
    if ($('.grade-box').length > 0) {
        $('.grade-box').raty({
            score: 5,
            path: './images/',
            starOn: 'ico_star_rate.png',
            starOff: 'ico_star_off.png'
        });
    }
});

// 2024-06-17 ssj input 커서 활성화 시 value 값 삭제, 입력 안하면 다시 원래 value 값으로 설정
const inputDefaultValues = {};

document.querySelectorAll('input[type="text"]').forEach(input => {
    const id = input.id;
    inputDefaultValues[id] = input.value;

    input.addEventListener('focus', () => {
        input.value = '';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.value = inputDefaultValues[id];
        }
    });
});

// 2024-06-17 ssj 파일 선택
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('passportPhoto');

    if (fileInput) {
        fileInput.addEventListener('change', () => {
            const fileNameSpan = fileInput.closest('label').querySelector('.text');
            const file = fileInput.files[0];
            console.log('aaa');

            if (file) {
                const fileType = file.type;
                const validTypes = ['image/png', 'image/jpeg'];

                if (validTypes.includes(fileType)) {
                    fileNameSpan.textContent = file.name;
                } else {
                    alert('png, jpg 파일만 업로드할 수 있습니다.');
                    fileInput.value = '';
                    fileNameSpan.textContent = '선택된 파일 없음';
                }
            } else {
                fileNameSpan.textContent = '선택된 파일 없음';
            }
        });
    }
});

// 2024-06-14 ssj 날짜 선택
$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
});

// 2024-06-10 ssj 날짜 선택
$(function () {
    var today = new Date();
    var dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    var formattedDate = $.datepicker.formatDate('yy.mm.dd', today) + '(' + dayNames[today.getDay()] + ')';

    $("#selectDateHidden").val(formattedDate).datepicker({
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy.mm.dd(D)',
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        showMonthAfterYear: true,
        defaultDate: today,
        onSelect: function(dateText) {
            $('#selectDate').val(dateText);
        }
    });

    $('#selectDate').on('click', function () {
        $("#selectDateHidden").datepicker('show');
    });

    $('#selectDateHidden').on('change', function () {
        $('#selectDate').val($(this).val());
    });

    $('#selectDate').val(formattedDate);
});

$(document).ready(function() {
    function filterOrders(days) {
        const today = new Date();
        const endDate = new Date();
        endDate.setDate(today.getDate() - days);

        let hasVisibleOrders = false;

        $('.order-total-list').each(function() {
            const orderDateText = $(this).find('.order-date-box .date').text().trim();
            const orderDateParts = orderDateText.split('.');
            const orderDate = new Date(orderDateParts[0], orderDateParts[1] - 1, orderDateParts[2]);

            if (orderDate >= endDate) {
                $(this).show();
                hasVisibleOrders = true;
            } else {
                $(this).hide();
            }
        });

        if (!hasVisibleOrders) {
            $('.no-order-box').addClass('active');
        } else {
            $('.no-order-box').removeClass('active');
        }
    }

    $('.listDate ul li').click(function(event) {
        event.preventDefault();
        $('.listDate ul li').removeClass('active');
        $(this).addClass('active');

        const text = $(this).text().trim();
        let days;

        switch (text) {
            case '2주일':
                days = 14;
                break;
            case '1개월':
                days = 30;
                break;
            case '3개월':
                days = 90;
                break;
            case '6개월':
                days = 180;
                break;
            case '12개월':
                days = 365;
                break;
            default:
                days = 0;
        }

        filterOrders(days);
    });

    // 기본적으로 2주일 필터 적용
    filterOrders(14);
});

// 2024-06-18 ssj 탭 메뉴
function favoriteTabMenu(e){
    const index = $(e).closest('.tab-menu-list').index();
    $('.tab-menu-link').removeClass('active');
    $(e).addClass('active');

    if(index == 0){
        $('.like-service-wrap').removeClass('hide');
        $('.cont_list').addClass('hide');
    } else {
        $('.cont_list').removeClass('hide');
        $('.like-service-wrap').addClass('hide');
    }
}

// 2024-06-20 ssj 검색 모달 창
function open_pop(){
    $('body', document).css({'overflow':'hidden', 'height':'98%'});
    go_topFast();
    $('.search_pop_new').fadeIn().css({'position':'fixed','height':'100vh','overflow':'auto'});
    $('.search_pop_new').addClass('_active');

    $('.popularSearchBox > li:first .goodsListWrap, .popularSearchBox > li:first .downArr').addClass('active');

    $('.downArr').on('click',function(){
        if($(this).hasClass('active')){
            $('.downArr').removeClass('active');
        } else{
            $('.downArr').removeClass('active');
            $(this).addClass('active');
        }

        if($(this).closest('li').find('.goodsListWrap').hasClass('active')){
            $('.goodsListWrap').removeClass('active');
        } else {
            $('.goodsListWrap').removeClass('active');
            $(this).closest('li').find('.goodsListWrap').addClass('active');
        }
    });
}

function srchClose_pop(){
    $('.search_pop_new').removeClass('_active');
    $('.search_pop_new').fadeOut().css({'position':'fixed','height':'100vh','overflow':'auto'});
    $('body', document).css({'overflow':'auto'});

}

function go_topFast(){
    $('html,body', document).stop().scrollTop(0);
}

// 2024-06-20 ssj 검색 모달 창 인기 키워드 스와이퍼
const popularKeywordSwiper = new Swiper('.popular-keyword-wrap',{
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observerParents: true,
});

// 2024-06-20 ssj 인기검색어 리스트 내부 스와이퍼 추가
const popularSwiper = new Swiper('.goodsListWrap', {
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    spaceBetween: 16,
});

// 2024-06-20 ssj 언어설정 모달 창
function openSetting (){
    $('.languageSettingWrap').addClass('on');
}

function closeSetting (){
    $('.languageSettingWrap').removeClass('on');
}

function openSubSet (obj){
    var chkKind = $(obj).attr('data-kind');

    $('.settingSubWrap').addClass('on');

    if(chkKind == 'country'){
        $('.ssSelectWrap').removeClass('on');
        $('.settingSub .ssTit .topTitle').text('Country/Region');
        $('.countryBox').addClass('on');
    }else if(chkKind == 'language'){
        $('.ssSelectWrap').removeClass('on');
        $('.settingSub .ssTit .topTitle').text('Language');
        $('.languageBox').addClass('on');
    }else if(chkKind == 'money'){
        $('.ssSelectWrap').removeClass('on');
        $('.settingSub .ssTit .topTitle').text('Currency');
        $('.moneyBox').addClass('on');
    }

}

function closeSubSet (){
    $('.settingSubWrap').removeClass('on');
}

function saveSubSet (obj){
    $('.lsSelectWrap div[data-kind='+$(obj).data('kind')+']').html($(obj).find('span:not(:empty)').clone());
    $('.settingSubWrap').removeClass('on');
}

// 2024-06-20 ssj 메인 배너 스와이퍼
const bannerSwiper = new Swiper('.banner-wrap', {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
});

// 2024-06-20 ssj 카테고리 펼쳐보기/접기
document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.querySelector('.more-button');

    if (moreButton) {
        function categoryFolding(){
            const categoryListHeight = document.querySelector('.category-icon-list').getBoundingClientRect().height;
            const collapseHeight = categoryListHeight * 2 + 32 + 'px';
            const expandHeight = categoryListHeight * 4 + 64 + 'px';
            document.documentElement.style.setProperty('--category-icon-padding-top', collapseHeight);
            const categoryWrapHeight = document.querySelector('.category-icon-wrap .container').getBoundingClientRect().height + 'px';

            if(categoryWrapHeight === collapseHeight){
                document.documentElement.style.setProperty('--category-icon-padding-top', expandHeight);
                document.documentElement.style.setProperty('--more-button-rotate', 'rotate(225deg)');
                document.documentElement.style.setProperty('--more-button-top', '14px');
            } else {
                document.documentElement.style.setProperty('--category-icon-padding-top', collapseHeight);
                document.documentElement.style.setProperty('--more-button-rotate', 'rotate(45deg)');
                document.documentElement.style.setProperty('--more-button-top', '8px');
            }
        }
        categoryFolding();
        window.addEventListener('resize', categoryFolding);
        moreButton.addEventListener('click', categoryFolding);
    }
});

// 2024-06-20 ssj 추천 서비스 스와이퍼
const eventSwiper = new Swiper('.recommend-service-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
});

// 2024-06-20 ssj 주목해야할 카테고리 스와이퍼
function progressbar(){
    const length = $('.attention-category-list').length;

    $('.attention-category-wrap').find('.swiper-pagination').width((length - 1) * 16);
}
progressbar()

const attentionCategorySwiper = new Swiper('.attention-category-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    on: {
        init: function () {
            updateProgressbar(this);
        },
        slideChange: function () {
            updateProgressbar(this);
        },
        resize: function () {
            updateProgressbar(this);
        }
    }
});

function updateProgressbar(swiper) {
    const progressbarFill = swiper.pagination.el.querySelector('.swiper-pagination-progressbar-fill');
    if (progressbarFill) {
        const progress = (swiper.activeIndex + 1) / (swiper.slides.length - 1);
        progressbarFill.style.width = (progress * 100) + '%';
    }
}

// 2024-06-20 ssj 지금 많이 찾는 병원 스와이퍼
const tabMenuSwiper = new Swiper('.tab-menu-container', {
    slidesPerView: 'auto',
    spaceBetween: 8,
});

// 2024-06-20 ssj 지금 많이 찾는 병원 탭메뉴 / 스와이퍼
function mainTabMenu(e){
    const tabMenuIndex = $(e).index();

    $(e).addClass('active').siblings().removeClass('active');
    $('.tab-category-wrap').removeClass('active');
    $('.tab-category-wrap.category' + tabMenuIndex).addClass('active');

    const tabCategorySwiper = new Swiper('.tab-category-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        observer : true,
        observeParents : true,
    });
}

// 2024-06-20 ssj 지금 많이 찾는 병원 탭메뉴 / 스와이퍼
const tabCategorySwiper = new Swiper('.tab-category-container', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer : true,
    observeParents : true,
});

// 2024-06-26 ssj 좋아요 버튼
function wishlistButton(e){
    $(e).toggleClass('active');
}

// 2024-06-26 ssj 사업자 정보 확인
function onopen(){
    var url = "http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no="+frm1.wrkr_no.value.replace(/-/g,"");
    window.open(url, "communicationViewPopup", "width=750, height=700;");
}

// 2024-06-26 ssj 푸터 메뉴 스와이퍼
const footerLinkSwiper = new Swiper('.footer-link-container', {
    slidesPerView: 'auto',
    spaceBetween: 8,
});

// 2024-07-02 ssj 무통장입금 시 입금자 정보 입력
$('input[name="payway"]').on('change',function(){
    if($(this).val() == 'ONLINE'){
        $('.depo').css({'display':'block'});
    } else {
        $('.depo').css({'display':'none'});
    }
});