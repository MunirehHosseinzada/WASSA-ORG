// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openSaffron(){
	Alloy.createController('saffron').getView().open();
}

function openCode4Fun(){
	Alloy.createController('code4fun').getView().open();
}

function openNet(){
	Alloy.createController('net').getView().open();
}
