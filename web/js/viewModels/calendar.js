define(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojconverterutils-i18n", "../../js/axios", "ojs/ojtable", "ojs/ojknockout", "ojs/ojselectcombobox", "ojs/ojformlayout"], function (require, exports, ko, ojbootstrap_1, ArrayDataProvider, ConverterUtilsI18n, axios_1) {
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
            this.onChange = () => {
                const tempmonth = document.getElementById("combobox3").value;
                const tempmicro = document.getElementById("combobox4").value;
                //console.log((<HTMLInputElement>document.getElementById("combobox3")).value);
                //console.log((<HTMLInputElement>document.getElementById("combobox4")).value);
                this.dataArray.removeAll();
                axios_1.default.get('http://localhost:3000/getposts/' + tempmonth + '/' + tempmicro).then(resp => {
                    console.log(resp.data);
                    var cont = 0;
                    resp.data.forEach(user => {
                        const day = user.date.split('T')[0];
                        console.log(day);
                        //if(this.dataArray[cont].day != day){
                        //console.log(user)
                        this.dataArray.push({ checkID: user.checkID, summary: user.summary, day: day, status: user.status });
                        //}
                        cont++;
                    });
                    //console.log(this.dataArray);
                }).catch(error => {
                    console.log(error);
                });
                //console.log((<HTMLInputElement>document.getElementById("combobox3")).value);
            };
            this.month = ko.observable("june");
            this.microserviceId = ko.observable("M1");
            this.dataArray = ko.observableArray();
            this.dataProvider2 = new ArrayDataProvider(this.dataArray, {
                keyAttributes: "checkId",
            });
            this.value = ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date()));
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
    }
    ojbootstrap_1.whenDocumentReady().then(function () {
        ko.applyBindings(new CalendarModel(), document.getElementById("table"));
    });
    return CalendarModel;
});
//# sourceMappingURL=calendar.js.map