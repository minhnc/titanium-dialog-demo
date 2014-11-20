
/*
args = {
 	container: Ti.UI.View,
 	content: Ti.UI.View,
 	
 	persistent: false,
 	visible: false
}
 * */
function iDialog(args) {
	var events = {},
		wrapper;
	
	init();
	args = null;
		
	// PRIVATE FUNCTIONS ========================================================
	
	function init() {
		wrapper = Ti.UI.createView();
	  	
	  		// overlay
	  		var overlay = Ti.UI.createView({ backgroundColor: '#000', opacity: 0.7 });
	  		args.persistent !== true && overlay.addEventListener('click', hide);
	  		wrapper.add(overlay);
	  		
	  		// content
	  		wrapper.add(args.content);
	  	
	  	if (args.visible === true) {
	  		wrapper.opacity = 1;
	  		wrapper.visible = true;
	  	}
	  	
	  	args.container.add( wrapper );
	}
	
	function destroy() {
	  	ENV = null;
	  	events = null;
	}

	//
	
	function show() {
		wrapper.visible = true;
		wrapper.animate({ opacity : 1 }, function() {
			fireEvent('show');
		});
	}
	
	function hide() {
	  	wrapper.animate({ opacity : 0 }, function() { 
			wrapper.visible = false;
			fireEvent('hide'); 
		});
	}
	
	//

	function on(type, callback) {
	  	if (events[type]) {
	  		events[type].push(callback);
	  	} else {
	  		events[type] = [callback];
	  	}
	  	return this;
	}
	
	function fireEvent(type, data) {
	  	var callbacks = events[type];
	  	if (callbacks) {
	  		for(var i=0,ii=callbacks.length; i<ii; i++){
				callbacks[i](data, { type: type });
			};
	  	}
	}
	
	// PUBLIC FUNCTIONS ========================================================
	
	return {
		on: on,
		destroy: destroy,
		show: show,
		hide: hide
	};
};

module.exports = iDialog;