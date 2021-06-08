import * as AccUtils from "../accUtils";

import * as ko from "knockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import { whenDocumentReady } from "ojs/ojbootstrap";
import axios, { AxiosRequestConfig, AxiosPromise } from "../../js/axios";

import CoreRouter = require ("ojs/ojcorerouter");
  
import ArrayDataProvider = require("ojs/ojarraydataprovider");
  
  import "ojs/ojknockout";
  import "ojs/ojselector";
  import "ojs/ojlistitemlayout";
  import "ojs/ojlistview";


  interface Product {
    id: string,
    image: string,
    model: string,
    name: string,
    status: string,
    cost: string
}

class DashboardViewModel {

    router: CoreRouter;

    private readonly smQuery = ResponsiveUtils.getFrameworkQuery(
        ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );

    promedioStatus = 0;

    readonly isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
    private readonly dataMicroservices = [
        {
            id: "id1",
            image: "../images/rake.png",
            model: "2351654564",
            name: "Microservices 1",
            status: "outage",
            cost: "$25.99",
            color: "green"
        },
        
    ];
    readonly dataProvider1 = new ArrayDataProvider<Product["id"], Product>(this.dataMicroservices, { keyAttributes: "id" });
    
    

  constructor() {
    this.promedio(this.dataMicroservices);
  }

  public onClick = () => {

    const tempID= (<HTMLInputElement>document.getElementById("m1")).value;
    console.log()


  };

  public goToMicro= () => {
    this.router.go({ path: "microservice", params: { message: (<HTMLInputElement>document.getElementById("m1")).value}})
  }

  private promedio = (data) => {
    var suma = 0;
    for(var i = 0;i<data.length;i++) { 
      if (data[i].status === 'outage'){
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
   //console.log(prom);
   if(prom > 2){
     return "success";
   }else if(prom>1 && prom < 2){
     return "warning"
   }else{
     return "outage"
   }
  }

  readonly estatusTotal = this.promedio(this.dataMicroservices);
  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Home page loaded.");
    document.title = "Oracle AI - Home";
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
    ko.applyBindings(new DashboardViewModel(), document.getElementById("listitemlayout"));
});

export = DashboardViewModel;
