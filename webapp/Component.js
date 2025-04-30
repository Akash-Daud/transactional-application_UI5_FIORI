sap.ui.define(["sap/ui/core/UIComponent"],
	function(UIComponent) {
        "use strict";

		return UIComponent.extend("com.gbis.fiori.app.Component", {
            
			metadata: {
				manifest: "json"
			},

            init : function() {
                //UIComponet is the base class here we will call base class constructor
                // super-->constructor (ABAP)
                UIComponent.prototype.init.apply(this);
            },

            createContent : function() {
                //this is the method where we will create the view
                var oView = new sap.ui.view( "idRootView",{
                    viewName : "com.gbis.fiori.app.view.App",
                    type : "XML"
                   
                });

                //Step1 : Create the child views (View1 and View2)
                var oView1 = new sap.ui.view( "idView1",{
                    viewName : "com.gbis.fiori.app.view.View1",
                    type : "XML"
                   
                });
                var oView2 = new sap.ui.view( "idView2",{
                    viewName : "com.gbis.fiori.app.view.View2",
                    type : "XML"
                   
                });

                //Step2 : Get the app container control object
                 var oAppCon = oView.byId("idAppCon");

                //Step3 : Attach the view to the container control
                // AppContainer = Mother, View1 ,View2 = Child

                oAppCon.addMasterPage(oView1).addDetailPage(oView2);

                return oView ;


            },

            destroyContent : function() {
            }
                
		});
	}
);