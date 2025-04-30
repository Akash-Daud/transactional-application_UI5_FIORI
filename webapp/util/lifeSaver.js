sap.ui.define([

]
    , function () {
        "use strict";
        return {
            getStatus: function (Status) {
                switch (Status) {
                    case "Available":
                        return "Success";
                        break;
                    case "out of stock":
                        return "Warning";
                        break;


                    case "discontinue":
                        return "Error";

                        break;
                    default:
                        break;
                }


            }
        };
    });