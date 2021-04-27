import * as AccUtils from "../accUtils";

import * as ko from "knockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import { whenDocumentReady } from "ojs/ojbootstrap";
  
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

class MicroserviceViewModel {

    private readonly smQuery = ResponsiveUtils.getFrameworkQuery(
        ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );

    readonly isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
    private readonly data1 = [
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
    readonly dataProvider1 = new ArrayDataProvider<Product["id"], Product>(this.data1, { keyAttributes: "id" });
  constructor() {

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
