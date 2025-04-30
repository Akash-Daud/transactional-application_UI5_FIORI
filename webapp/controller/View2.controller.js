sap.ui.define([
    "com/gbis/fiori/app/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    'sap/ui/core/Fragment',

], function (BaseController, MessageBox, MessageToast, Fragment) {
    "use strict";
    return BaseController.extend("com.gbis.fiori.app.controller.View2", {
        onInit: function () {

        },


        onBack: function () {
            this.getView().getParent().to("idView1");
        },


        onSave: function () {

            var oResourceModel = this.getView().getModel("i18n");
            var oBundle = oResourceModel.getResourceBundle();
            var msgSuccess = oBundle.getText('msgSuccess', ["858585"]);
            var msgError = oBundle.getText('msgError');



            MessageBox.confirm("Do you want to Save?", {
                title: "Confirmation",
                onClose: function (status) {
                    if (status === "OK") {
                        MessageToast.show(msgSuccess);

                    } else {
                        MessageBox.error(msgError);

                    }
                }

            });


        },

        onCancel: function () {
            var oResourceModel = this.getView().getModel("i18n");
            var oBundle = oResourceModel.getResourceBundle();
            var msgCancelConfirm = oBundle.getText("msgCancelConfirm");
            var msgCancelled = oBundle.getText("msgCancelled");
            var msgContinued = oBundle.getText("msgContinued");

            MessageBox.confirm(msgCancelConfirm, {
                title: "Confirmation",
                onClose: function (status) {
                    if (status === "OK") {
                        MessageToast.show(msgCancelled);
                        // Navigate back to previous view or clear form
                        this.getView().getParent().to("idView1");
                    } else {
                        // User clicked Cancel on the confirmation dialog
                        MessageToast.show(msgContinued);
                    }
                }.bind(this)
            });
        },

        //  PBO
        // ALV -- Avoid creating ALV Again and Again

        oPopupSuplier: null,

        onFilter: function () {
            //   MessageBox.alert("This funcionality is under construction");
            var that = this;
            if (!this.oPopupSuplier) {
                Fragment.load({

                    name: "com.gbis.fiori.app.fragments.popup",

                }).then(function (oFragment) {


                  // inside the promise and cal back functions,we conot access his poiter
                 // controller Object,so we need to create  local varialbe fr controller Object
                 // outsde promise/ calback

                   that.oPopupSuplier = oFragment;
                   // Check sdk fnctio for select dialog
                   that.oPopupSuplier.open();
                });
            }
            else {
                this.oPopupSuplier.open();
            }

        },
        onF4Help: function () {
            MessageBox.alert("This funcionality is under construction");
        },



        onExit: function () {

        }
    });

});