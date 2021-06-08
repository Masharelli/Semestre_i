import * as ko from "knockout";
  import { whenDocumentReady } from "ojs/ojbootstrap";
  import ArrayDataProvider = require("ojs/ojarraydataprovider");
  import "ojs/ojtable";
  import "ojs/ojknockout";
  import * as ConverterUtilsI18n from "ojs/ojconverterutils-i18n";
  import axios, { AxiosRequestConfig, AxiosPromise } from "../../js/axios";
  import "ojs/ojselectcombobox";
  import "ojs/ojformlayout";

  interface DayMicro{
    checkID: number,
    summary: string,
    day: string,
    status: string,
  }
  
  class CalendarModel {

    private dataArray: ko.ObservableArray<DayMicro>;

    public dataProvider2: ArrayDataProvider<DayMicro['checkID'], DayMicro>;

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

    month: ko.Observable<string>;

    microserviceId: ko.Observable<string>;

    constructor(){

      this.month = ko.observable("june");

      this.microserviceId = ko.observable("M1");

      this.dataArray = ko.observableArray();

      this.dataProvider2 = new ArrayDataProvider(this.dataArray, {
        keyAttributes: "checkId",
      });

      this.value = ko.observable(
        ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date())
      );
    }

    public onChange = () => {

      const tempmonth= (<HTMLInputElement>document.getElementById("combobox3")).value;
      const tempmicro= (<HTMLInputElement>document.getElementById("combobox4")).value;
      

      this.dataArray.removeAll();

      axios.get('http://localhost:3000/getcalendar/' + tempmonth + '/'+tempmicro).then(resp => {

      var cont = 0;
      resp.data.forEach(user => {
        
        const date = user.date.split('T')[0];
        console.log(date);
        
        this.dataArray.push({checkID: user.checkID, summary: user.summary,  day: date, status: user.status });
        cont++
      });

    
      }).catch(error => {
        console.log(error);
      });


      //console.log((<HTMLInputElement>document.getElementById("combobox3")).value);
    };

    
  }
  
  whenDocumentReady().then(function () {
    ko.applyBindings(new CalendarModel(), document.getElementById("table"));
  });

  export = CalendarModel;