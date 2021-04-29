define(["require", "exports", "../accUtils", "knockout", "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojselector", "ojs/ojlistitemlayout", "ojs/ojlistview"], function (require, exports, AccUtils, ko, ResponsiveUtils, ResponsiveKnockoutUtils, ojbootstrap_1, ArrayDataProvider) {
    "use strict";
    class MicroserviceViewModel {
        constructor() {
            this.smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            this.promedioStatus = 0;
            this.isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
            this.data1 = [
                {
                    id: "id1",
                    image: "../images/rake.png",
                    model: "2351654564",
                    name: "Component 1",
                    status: "danger",
                    cost: "$25.99",
                    color: "green"
                },
                {
                    id: "id2",
                    image: "../images/shrubrake.png",
                    model: "2351654297",
                    name: "Component 2",
                    status: "success",
                    cost: "$15.50",
                    color: "yellow"
                },
                {
                    id: "id3",
                    image: "../images/specialtyrake.png",
                    model: "2351654982",
                    name: "Component 3",
                    status: "warning",
                    cost: "$22.00",
                    color: "red"
                },
                {
                    id: "id4",
                    image: "../images/rake.png",
                    model: "2351654564",
                    name: "Component 4",
                    status: "danger",
                    cost: "$25.99",
                    color: "green"
                },
                {
                    id: "id5",
                    image: "../images/shrubrake.png",
                    model: "2351654297",
                    name: "Component 5",
                    status: "success",
                    cost: "$15.50",
                    color: "yellow"
                },
                {
                    id: "id6",
                    image: "../images/specialtyrake.png",
                    model: "2351654982",
                    name: "Component 6",
                    status: "warning",
                    cost: "$22.00",
                    color: "red"
                }
            ];
            this.dataProvider1 = new ArrayDataProvider(this.data1, { keyAttributes: "id" });
            this.promedio = (data) => {
                var suma = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].status === 'danger') {
                        suma = suma + 1;
                    }
                    if (data[i].status === 'warning') {
                        suma = suma + 2;
                    }
                    if (data[i].status === 'success') {
                        suma = suma + 3;
                    }
                }
                var prom = suma / data.length;
                console.log(prom);
                if (prom > 2) {
                    return "success";
                }
                else if (prom > 1 && prom < 2) {
                    return "warning";
                }
                else {
                    return "danger";
                }
            };
            this.estatusTotal = this.promedio(this.data1);
            this.promedio(this.data1);
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