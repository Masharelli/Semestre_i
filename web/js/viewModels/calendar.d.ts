/// <reference types="ojarraydataprovider" />
import * as ko from "knockout";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";
import "ojs/ojknockout";
import "ojs/ojselectcombobox";
import "ojs/ojformlayout";
interface DayMicro {
    checkID: number;
    summary: string;
    day: string;
    status: string;
}
declare class CalendarModel {
    private dataArray;
    dataProvider2: ArrayDataProvider<DayMicro['checkID'], DayMicro>;
    private readonly deptArray;
    readonly dataprovider: ArrayDataProvider<unknown, {
        ComponentId: any;
    }>;
    value: ko.Observable<string>;
    month: ko.Observable<string>;
    microserviceId: ko.Observable<string>;
    constructor();
    onChange: () => void;
}
export = CalendarModel;
