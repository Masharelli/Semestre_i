define(["require", "exports", "../accUtils", "knockout", "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojselector", "ojs/ojlistitemlayout", "ojs/ojlistview"], function (require, exports, AccUtils, ko, ResponsiveUtils, ResponsiveKnockoutUtils, ojbootstrap_1, ArrayDataProvider) {
    "use strict";
    class DashboardViewModel {
        constructor() {
            this.smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            this.promedioStatus = 0;
            this.isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
            this.dataMicroservices = [
                {
                    id: "id1",
                    image: "../images/rake.png",
                    model: "2351654564",
                    name: "Microservices 1",
                    status: "danger",
                    cost: "$25.99",
                    color: "green"
                },
                {
                    id: "id2",
                    image: "../images/shrubrake.png",
                    model: "2351654297",
                    name: "Microservices 2",
                    status: "success",
                    cost: "$15.50",
                    color: "yellow"
                },
                {
                    id: "id3",
                    image: "../images/specialtyrake.png",
                    model: "2351654982",
                    name: "Microservices 3",
                    status: "warning",
                    cost: "$22.00",
                    color: "red"
                },
                {
                    id: "id4",
                    image: "../images/rake.png",
                    model: "2351654564",
                    name: "Microservices 4",
                    status: "danger",
                    cost: "$25.99",
                    color: "green"
                },
                {
                    id: "id5",
                    image: "../images/shrubrake.png",
                    model: "2351654297",
                    name: "Microservices 5",
                    status: "success",
                    cost: "$15.50",
                    color: "yellow"
                },
                {
                    id: "id6",
                    image: "../images/specialtyrake.png",
                    model: "2351654982",
                    name: "Microservices 6",
                    status: "warning",
                    cost: "$22.00",
                    color: "red"
                }
            ];
            this.dataProvider1 = new ArrayDataProvider(this.dataMicroservices, { keyAttributes: "id" });
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
            this.estatusTotal = this.promedio(this.dataMicroservices);
            this.promedio(this.dataMicroservices);
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
            AccUtils.announce("Home page loaded.");
            document.title = "Oracle AI - Home";
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
        ko.applyBindings(new DashboardViewModel(), document.getElementById("listitemlayout"));
    });
    return DashboardViewModel;
});
//# sourceMappingURL=dashboard.js.map