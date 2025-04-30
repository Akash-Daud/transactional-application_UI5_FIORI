sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/gbis/fiori/app/util/lifeSaver",
],
function(Controller, lifeSaver) {
        "use strict";
        return Controller.extend("com.gbis.fiori.app.controller.BaseController", {
           formatter: lifeSaver
        });
    });