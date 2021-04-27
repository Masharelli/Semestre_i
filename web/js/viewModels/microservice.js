define(["require", "exports", "../accUtils", "knockout", "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojselector", "ojs/ojlistitemlayout", "ojs/ojlistview"], function (require, exports, AccUtils, ko, ResponsiveUtils, ResponsiveKnockoutUtils, ojbootstrap_1, ArrayDataProvider) {
    "use strict";
    class MicroserviceViewModel {
        constructor() {
            this.smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            this.isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
            this.data1 = [
                {
                    id: "id1",
                    image: "../images/rake.png",
                    model: "2351654564",
                    name: "22-tine steel leaf rake",
                    status: "Not available",
                    cost: "$25.99"
                },
                {
                    id: "id2",
                    image: "../images/shrubrake.png",
                    model: "2351654297",
                    name: "Collector series 8in, Poly Shrub Rake",
                    status: "In Stock",
                    cost: "$15.50"
                },
                {
                    id: "id3",
                    image: "../images/specialtyrake.png",
                    model: "2351654982",
                    name: "15in, Adjustable Thatch Rake",
                    status: "In Stock",
                    cost: "$22.00"
                }
            ];
            this.dataProvider1 = new ArrayDataProvider(this.data1, { keyAttributes: "id" });
        }
        /**
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         * This method might be called multiple times - after the View is created
         * and inserted into the DOM and after the View is reconnected
         * after being disconnected.
         */
        connected() {
            AccUtils.announce("Microservice page loaded.");
            document.title = "Microservice";
            // implement further logic if needed
        }
        /**
         * Optional ViewModel method invoked after the View is disconnected from the DOM.
         */
        disconnected() {
            // implement if needed
        }
        /**
         * Optional ViewModel method invoked after transition to the new View is complete.
         * That includes any possible animation between the old and the new View.
         */
        transitionCompleted() {
            // implement if needed
        }
    }
    ojbootstrap_1.whenDocumentReady().then(() => {
        ko.applyBindings(new MicroserviceViewModel(), document.getElementById("listitemlayout"));
    });
    return MicroserviceViewModel;
});
//# sourceMappingURL=microservice.js.map