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


      //get?Micro[1-6]?Mes[abril-junes]
      
      //getM1


      /*axios.get('http://localhost:3000/getposts/june/M1').then(resp => {
      console.log(resp.data);
      resp.data.forEach(user => {
        console.log(user)
        this.dataArray.push({checkID: user.checkID, summary: user.summary,  day: user.date, status: user.status });
        console.log(user.date);
      });

        //console.log(this.dataArray);
      }).catch(error => {
        console.log(error);
      });*/
    }

    public onChange = () => {

      const tempmonth= (<HTMLInputElement>document.getElementById("combobox3")).value;
      const tempmicro= (<HTMLInputElement>document.getElementById("combobox4")).value;

      //console.log((<HTMLInputElement>document.getElementById("combobox3")).value);
      //console.log((<HTMLInputElement>document.getElementById("combobox4")).value);
      
      this.dataArray.removeAll();
      axios.get('http://localhost:3000/getposts/' + tempmonth + '/'+tempmicro).then(resp => {
      console.log(resp.data);
      var cont = 0;
      resp.data.forEach(user => {
        
        const day = user.date.split('T')[0];
        console.log(day);
        //if(this.dataArray[cont].day != day){
            //console.log(user)
          this.dataArray.push({checkID: user.checkID, summary: user.summary,  day: day, status: user.status });
        //}
        
        cont++
      });

        //console.log(this.dataArray);
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