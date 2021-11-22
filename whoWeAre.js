// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function historyOpen(){
	Alloy.createController('history').getView().open();
}

function objectivesOpen(){
	Alloy.createController('objectives').getView().open();
}

function networkingOpen(){
	Alloy.createController('networking').getView().open();
}

function boardOpen(){
	Alloy.createController('board').getView().open();
}
