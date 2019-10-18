
// 
sap.ui.core.UIComponent.extend("com.smax.batch39.ex2.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	
});