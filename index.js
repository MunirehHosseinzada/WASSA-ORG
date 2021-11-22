$.myWin.open();

// $.myWin.activity.actionBar.hide();

function goToOne() {
	$.centersSLB.scrollToView(0);
	$.fc.backgroundColor = '#089ece';
	$.sc.backgroundColor = 'white';
	$.tc.backgroundColor = 'white';
}

function goToTwo() {
	$.centersSLB.scrollToView(1);
	$.sc.backgroundColor = '#089ece';
	$.fc.backgroundColor = 'white';
	$.tc.backgroundColor = 'white';
}

function goToThree() {
	$.centersSLB.scrollToView(2);
	$.tc.backgroundColor = '#089ece';
	$.sc.backgroundColor = 'white';
	$.fc.backgroundColor = 'white';
}

function sGoToOne() {
	$.testimoSLV.scrollToView(0);
	$.sfc.backgroundColor = '#8a8a8a';
	$.ssc.backgroundColor = 'transparent';
	$.stc.backgroundColor = 'transparent';
}

function sGoToTwo() {
	$.testimoSLV.scrollToView(1);
	$.ssc.backgroundColor = '#8a8a8a';
	$.sfc.backgroundColor = 'transparent';
	$.stc.backgroundColor = 'transparent';
}

function sGoToThree() {
	$.testimoSLV.scrollToView(2);
	$.stc.backgroundColor = '#8a8a8a';
	$.ssc.backgroundColor = 'transparent';
	$.sfc.backgroundColor = 'transparent';
}

function civilClicked() {
	Alloy.createController('civil_society').getView().open();
}

function legalClicked() {
	Alloy.createController('legal_protection').getView().open();
}

function conflictClicked() {
	Alloy.createController('peace_building').getView().open();
}

var currentPage = 0;

function sayHi(e) {
	currentPage = e.currentPage;
	if (currentPage == 1) {
		$.sc.backgroundColor = '#089ece';
		$.fc.backgroundColor = 'white';
		$.tc.backgroundColor = 'white';
	} else if (currentPage == 2) {
		$.tc.backgroundColor = '#089ece';
		$.fc.backgroundColor = 'white';
		$.sc.backgroundColor = 'white';
	} else if (currentPage == 0) {
		$.fc.backgroundColor = '#089ece';
		$.tc.backgroundColor = 'white';
		$.sc.backgroundColor = 'white';
	}
}

var secondCP = 0;
function secondSayHi(e) {
	secondCP = e.currentPage;
	if (secondCP == 1) {
		$.ssc.backgroundColor = '#8a8a8a';
		$.sfc.backgroundColor = 'white';
		$.stc.backgroundColor = 'white';
	} else if (secondCP == 2) {
		$.stc.backgroundColor = '#8a8a8a';
		$.sfc.backgroundColor = 'white';
		$.ssc.backgroundColor = 'white';
	} else if (secondCP == 0) {
		$.sfc.backgroundColor = '#8a8a8a';
		$.stc.backgroundColor = 'white';
		$.ssc.backgroundColor = 'white';
	}
}

function openNewsList() {
	Alloy.createController('newsList').getView().open();
}

function openWhoWeAre() {
	Alloy.createController('whoWeAre').getView().open();
}

function openPublication() {
	if (Ti.Platform.openURL('http://wassa.org.af/publications/')) {

	} else {
		alert('No internet connection!');
	}
}
