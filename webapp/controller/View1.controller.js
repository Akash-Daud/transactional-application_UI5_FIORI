sap.ui.define([
    "com/gbis/fiori/app/controller/BaseController"
    , "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(BaseController,Filter, FilterOperator) {
    "use strict";
    return BaseController.extend("com.gbis.fiori.app.controller.View1", {
       
       
        onInit: function() {
            
        },
/////////////// Navigation function Start /////////////
             onPress : function() {

            //Step1 : Get the app container control object
            var oCurrentView = this.getView();
            var oAppCon = oCurrentView.getParent();

            //Step2 : Get the child view object
            oAppCon.to("idView2");
           
        },
        /////////////// Navigation function End /////////////





        //////////////// Search function Start /////////////
        onSearch: function(oEvent) {
            //step1 : What was the value user is trying to search on screen ?
            var sValu =oEvent.getParameter("query");
            if(!sValu){
                sValu = oEvent.getParameter("newValue");
            }

            //step2 : Create a filter object
             var oFilter1 = new Filter("name", FilterOperator.Contains, sValu);
             var oFilter2 = new Filter("type", FilterOperator.Contains, sValu);

             var aFilter=[oFilter1,oFilter2];

             var oFilter=new sap.ui.model.Filter({
                filters:aFilter,
                and:false
             });
            //step3 : Get Item of the list contro and filter all items
            this.getView().byId("idMyList").getBinding("items").filter(oFilter);
         },

        //////////////// Search function  END/////////////




        //////////////// List Item Delete function Start /////////////

        onItemDelete: function(oEvent) {
            //step1 : Obect of the item to be deleted from event parameter
            var oItemToBeDeleted = oEvent.getParameter("listItem");
            //step2 : print the inside the console
            console.log(oItemToBeDeleted.getTitle() + " is deleted from the list");
            //step3 : Get object of the list control
            // var oList = this.getView().byId("idMyList");  don`t take id refrance
           var oList = oEvent.getSource();
            //step5 : Delete the item from the list
            oList.removeItem(oItemToBeDeleted);
         },


         onItemsDelete: function(oEvent) {
            //step1 : Get the app container control object
            var oList = this.getView().byId("idMyList");
            //step2 : Get the selected items
            var aSelectedItems = oList.getSelectedItems();
            aSelectedItems.forEach(element =>{
                oList.removeItem(element);
            });
        },     
        //////////////// List Item Delete function END /////////////


        //////////////// List Item Navigatin function Start /////////////
         onNext: function() {
            //step1 : Get the app container control object
            var oCurrentView = this.getView();
            var oAppCon = oCurrentView.getParent();

            //Step2 : Get the child view object
            oAppCon.to("idView2");
           
         },



        onItemSelect: function(oEvent) {
            //step1 : et the path of the seeleced item inside the list control
            var sPath = oEvent.getParameter("listItem").getBindingContextPath();
            //step2 : Get the View 2 Object
            // var oAppCon = this.getView().getParent();
            // var oV2= oAppCon.getPages()[1];
    
            //Changes due to introduction of Split App Container Control
            //Which has master and detail section and v2 was shifted inside detail page
    
    
            var oV2 = this.getView().getParent().getParent().getDetailPage("idView2");
            //step3 : Elements binding with whle of v2
            oV2.bindElement(sPath);
            //step4 : Call the navigation function of the view 2
           this.onNext();
    
            },
        ///////////////// List Item Navigatin function END /////////////





        onExit: function() {
           
        }
    });

}); 