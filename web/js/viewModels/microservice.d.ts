/// <reference types="ojarraydataprovider" />
import * as ko from "knockout";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojknockout";
import "ojs/ojselector";
import "ojs/ojlistitemlayout";
import "ojs/ojlistview";
interface StoredMicro {
    componentID: number;
    componentName: string;
    date: string;
    status: string;
}
declare class MicroserviceViewModel {
    private readonly smQuery;
    promedioStatus: number;
    readonly isSmall: ko.Observable<boolean>;
    private data2;
    private dataArray;
    dataProvider2: ArrayDataProvider<StoredMicro['componentID'], StoredMicro>;
    constructor();
    private promedio;
    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    connected(): void;
    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    disconnected(): void;
    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    transitionCompleted(): void;
}
export = MicroserviceViewModel;
