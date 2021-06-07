import * as AccUtils from "../accUtils";

import * as ko from "knockout"; 
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import axios, { AxiosRequestConfig, AxiosPromise } from "../../js/axios";
import { whenDocumentReady } from "ojs/ojbootstrap";
  
import ArrayDataProvider = require("ojs/ojarraydataprovider");
  
import "ojs/ojknockout";
import "ojs/ojselector";
import "ojs/ojlistitemlayout";
import "ojs/ojlistview";


  interface StoredMicro{
    componentID: number,
    componentName: string,
    date: string,
    status: string,
  }

class MicroserviceViewModel {

    private readonly smQuery = ResponsiveUtils.getFrameworkQuery(
        ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );

    promedioStatus = 0;

    readonly isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
    private data2 = [];

   
    private dataArray: ko.ObservableArray<StoredMicro>;
    public dataProvider2: ArrayDataProvider<StoredMicro['componentID'], StoredMicro>;
    
    /*sql = 'SELECT * FROM M1';
    query = db.query(this.sql, (err, result)=>{
        //if(err) throw err;
        //console.log(result);
        //var r2 = result.map(v => Object.assign({}, v));
        //var normalResults = result.map((mysqlObj, index) => {
        //    return Object.assign({}, mysqlObj);
        //});
        //console.log(normalResults);
        //console.log(r2);
        console.log('hello');
        //res.send('Posts fetched');
    });()
    */
  constructor() {

    this.dataArray = ko.observableArray();
  
    this.dataProvider2 = new ArrayDataProvider(this.dataArray, {
      keyAttributes: 'componentID'
    });

    axios.get('http://localhost:3000/getposts').then(resp => {
      //console.log(resp.data);
      resp.data.forEach(user => {
        this.dataArray.push({  componentID: user.componentID.toString(), componentName: user.componentName,date: user.date, status: user.status });
      });

      console.log(this.dataArray);
    }).catch(error => {
      console.log(error);
    });
    
  }

  private promedio = (data) => {
    var suma = 0;
    for(var i = 0;i<data.length;i++) { 
      if (data[i].status === 'danger'){
        suma=suma +1;
      }
      if (data[i].status === 'warning'){
        suma=suma +2;
      }
      if (data[i].status === 'success'){
        suma=suma +3;
      }
   }
   var prom = suma/data.length;
   console.log(prom);
   if(prom > 2){
     return "success";
   }else if(prom>1 && prom < 2){
     return "warning"
   }else{
     return "danger"
   }
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Microservice page loaded.");
    document.title = "Microservice";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}
whenDocumentReady().then(() => {
    ko.applyBindings(new MicroserviceViewModel(), document.getElementById("listitemlayout"));
});

export = MicroserviceViewModel;