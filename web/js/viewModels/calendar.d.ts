/// <reference types="ojarraydataprovider" />
import * as ko from "knockout";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";
import "ojs/ojknockout";
import "ojs/ojselectcombobox";
import "ojs/ojformlayout";
declare class CalendarModel {
    private readonly deptArray;
    readonly dataprovider: ArrayDataProvider<unknown, {
        ComponentId: any;
    }>;
    value: ko.Observable<string>;
    constructor();
}
export = CalendarModel;
