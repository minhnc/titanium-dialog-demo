Titanium.UI.setBackgroundColor('#fff');

//

var win = Ti.UI.createWindow({ navBarHidden: true, backgroundColor: '#fff', exitOnClose: true });
	var button = Ti.UI.createButton({ title: 'Show Popup', height: 42, left: 20, right: 20, color: '#fff', backgroundColor: '#000', font: { fontSize: 14 } });
	button.addEventListener('click', showDialog);
	win.add(button);

if (Ti.Platform.osname == 'android') {
	win.addEventListener('open', function(e) { e.source.activity.actionBar.hide(); });
}
	
win.open();

//

var dialog;

function showDialog() {
	if (dialog == null) {
		var iDialog = require('lib/iDialog');
		
		// Init Dialog
		dialog = new iDialog({
			container: win,
			content: loadDialogContent()
		});
		
		// listen to event: show
		dialog.on('show', function() {
			Ti.API.log('iDialog: show');
		});
		
		// listen to event: hide
		dialog.on('hide', function() {
			Ti.API.log('iDialog: hide');
		});
	}
		
	// Show dialog		
	dialog.show();
};

/**
 * Define templates 
 */
function loadDialogContent(e) {
  	var template_1 = {
  		properties: { height: 60, backgroundColor: '#bc5606', selectedBackgroundColor: '#000' },
	    childTemplates: [
	        {
	            type: 'Ti.UI.ImageView',
	            bindId: 'icon',
	            properties: { width: 24, height: 24, left: 18 }
	        },
	        { 
	            type: 'Ti.UI.Label',
	            bindId: 'title',
	            properties: { left: 60, color: '#fff', font: { fontSize: 30 } }
	        }
	    ]
	};
	
	var template_2 = {
  		properties: { height: 60, backgroundColor: '#bc5606', selectedBackgroundColor: '#000' },
	    childTemplates: [
	        {
	            type: 'Ti.UI.ImageView',
	            bindId: 'icon',
	            properties: { width: 24, height: 24, left: 18 }
	        },
	        {
	            type: 'Ti.UI.View',
	            properties: { height: Ti.UI.SIZE, left: 60, layout: 'horizontal' },
	            childTemplates: [
		            { 
			            type: 'Ti.UI.Label',
			            bindId: 'title',
			            properties: { color: '#fff', font: { fontSize: 30, fontStyle: 'italic' } }
			        },
			        { 
			            type: 'Ti.UI.ImageView',
			            bindId: 'icon_2',
			            properties: { width: 30, height: 30, left: 10 }
			        }
	            ]
	        }
	    ]
	};
	
	var template_3 = {
  		properties: { height: 60, backgroundColor: '#bc5606', selectedBackgroundColor: '#000' },
	    childTemplates: [
	        {
	            type: 'Ti.UI.ImageView',
	            bindId: 'icon',
	            properties: { width: 24, height: 24, left: 18 }
	        },
	        { 
	            type: 'Ti.UI.Label',
	            bindId: 'title',
	            properties: { left: 60, color: '#fff', font: { fontSize: 30, fontStyle: 'italic' } }
	        },
	        { 
	            type: 'Ti.UI.Label',
	            bindId: 'number',
	            properties: { right: 10, color: '#fff', font: { fontSize: 30, fontStyle: 'italic' } }
	        }
	    ]
	};
	
	var template_4 = {
  		properties: { height: 60, backgroundColor: '#bc5606', selectedBackgroundColor: '#000' },
	    childTemplates: [
	        {
	            type: 'Ti.UI.ImageView',
	            bindId: 'icon',
	            properties: { width: 24, height: 24, left: 18 }
	        },
	        { 
	            type: 'Ti.UI.Label',
	            bindId: 'title',
	            properties: { left: 60, color: '#fff', font: { fontSize: 30, fontStyle: 'italic' } }
	        },
	        {
	            type: 'Ti.UI.View',
	            properties: { width: Ti.UI.SIZE, height: Ti.UI.SIZE, right: 10, layout: 'vertical' },
	            childTemplates: [
		            { 
			            type: 'Ti.UI.Label',
			            bindId: 'row_right_uppper',
			            properties: { right: 0, color: '#fff', font: { fontSize: 16, fontStyle: 'italic' } }
			        },
			    	{
			            type: 'Ti.UI.View',
			            properties: { width: Ti.UI.SIZE, height: Ti.UI.SIZE, right: 0, layout: 'horizontal' },
			            childTemplates: [
				            { 
					            type: 'Ti.UI.Label',
					            properties: { text: 'was:', color: '#fff', font: { fontSize: 16, fontStyle: 'italic' } }
					        },
					        { 
					            type: 'Ti.UI.ImageView',
					            bindId: 'icon_2',
					            properties: { visible: false, width: 0, height: 20, left: 0, image: '/images/mic.png' }
					        },
					        { 
					            type: 'Ti.UI.Label',
					            bindId: 'row_right_lower',
					            properties: { left: 10, color: '#fff', font: { fontSize: 16, fontStyle: 'italic' } }
					        }
			            ]
			        }
	            ]
	        }
	    ]
	};
	
	//
	
	var sections = [];
	for (var i=0; i < 3; i++) {
	 	var items = [];
	 	
	 	for (var j=0; j < 5; j++) {
			switch( j % 5 ) {
				case 0: 
					items.push({ 
						icon: { image: '/images/refresh.png' },
						title: { text: 'Row 0' }
					});
				break;
				
				case 1:
					items.push({ 
						template: 'template_2',
						icon: { image: '/images/refresh.png' },
						title: { text: 'Row 1' },
						icon_2: { image: '/images/users.png' }
					});
				break;
				
				case 2: 
					items.push({ 
						template: 'template_3',
						icon: { image: '/images/refresh.png' },
						title: { text: 'Row 2' },
						number: { text: '-25%' }
					});
				break;
				
				case 3: 
					items.push({ 
						template: 'template_4',
						icon: { image: '/images/refresh.png' },
						title: { text: 'Row 3' },
						row_right_uppper: { text: 26.50 },
						icon_2: { },
						row_right_lower: { text: 29.44 }
					});
				break;
				
				case 4: 
					items.push({ 
						template: 'template_4',
						icon: { image: '/images/refresh.png' },
						title: { text: 'Row 4' },
						row_right_uppper: { text: 'Ms Mary Jone' },
						icon_2: { visible: true, width: 10, left: 10 },
						row_right_lower: { text: '15:45' }
					});
				break;
			}
		};
		
	 	sections.push( Ti.UI.createListSection({ items: items, headerView: Ti.UI.createView({ height: i ? 4 : 0, backgroundColor: '#fff' }) }) );
	};
		
	//
	
	var listview = Ti.UI.createListView({
	    templates: { 'template_1': template_1, 'template_2': template_2, 'template_3': template_3, 'template_4': template_4 },
	    defaultItemTemplate: 'template_1',
	    sections: sections,
	    
	    left: 10, right: 10, top: 40, bottom: 40,
	    backgroundColor: '#bc5606', borderRadius: 10,
	    separatorColor: '#fff', separatorInsets: { left: 0, right: 0 }
	});
	
	return listview;
}