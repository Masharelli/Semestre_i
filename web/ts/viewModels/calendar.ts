import * as ko from "knockout";
  import { whenDocumentReady } from "ojs/ojbootstrap";
  import ArrayDataProvider = require("ojs/ojarraydataprovider");
  import "ojs/ojtable";
  import "ojs/ojknockout";
  import * as ConverterUtilsI18n from "ojs/ojconverterutils-i18n";
  import "ojs/ojselectcombobox";
  import "ojs/ojformlayout";
  
  class CalendarModel {

    private readonly deptArray = [
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
    readonly dataprovider = new ArrayDataProvider(this.deptArray, {
      keyAttributes: "ComponentId",
      implicitSort: [{ attribute: "ComponentId", direction: "ascending" }],
    });

    value: ko.Observable<string>;

    constructor(){
      this.value = ko.observable(
        ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date())
      );

    }

    
  }
  
  whenDocumentReady().then(function () {
    ko.applyBindings(new CalendarModel(), document.getElementById("table"));
  });

  export = CalendarModel;