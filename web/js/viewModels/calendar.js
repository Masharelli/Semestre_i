define(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojconverterutils-i18n", "ojs/ojtable", "ojs/ojknockout", "ojs/ojselectcombobox", "ojs/ojformlayout"], function (require, exports, ko, ojbootstrap_1, ArrayDataProvider, ConverterUtilsI18n) {
    "use strict";
    class CalendarModel {
        constructor() {
            this.deptArray = [
                {
                    ComponentId: 1,
                    Year: "2020-21-02",
                    MicroserviceName: "Microservice",
                    ComponentName: "Component",
                    Status: "Outage",
                },
                {
                    ComponentId: 2,
                    Year: "2019-21-01",
                    MicroserviceName: "ADFPM 1001 neverending",
                    ComponentName: 200,
                    Status: 300,
                },
                {
                    ComponentId: 3,
                    Year: "2020-21-01",
                    MicroserviceName: "ADFPM 1001 neverending",
                    ComponentName: 200,
                    Status: 300,
                },
                {
                    ComponentId: 4,
                    Year: "2020-21-01",
                    MicroserviceName: "ADFPM 1001 neverending",
                    ComponentName: 200,
                    Status: 300,
                },
                {
                    ComponentId: 5,
                    Year: "2020-21-01",
                    MicroserviceName: "ADFPM 1001 neverending",
                    ComponentName: 200,
                    Status: 300,
                },
                {
                    ComponentId: 6,
                    Year: "2020-21-01",
                    MicroserviceName: "ADFPM 1001 neverending",
                    ComponentName: 200,
                    Status: 300,
                },
            ];
            this.dataprovider = new ArrayDataProvider(this.deptArray, {
                keyAttributes: "ComponentId",
                implicitSort: [{ attribute: "ComponentId", direction: "ascending" }],
            });
            this.value = ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date()));
        }
    }
    ojbootstrap_1.whenDocumentReady().then(function () {
        ko.applyBindings(new CalendarModel(), document.getElementById("table"));
    });
    return CalendarModel;
});
//# sourceMappingURL=calendar.js.map