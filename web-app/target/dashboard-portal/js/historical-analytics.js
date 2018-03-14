/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/

analyticsHistory= {

    historicalChartOneLabel: ['0s'],
    historicalChartOneSeries: [0],
    historicalChartTwoLabel: ['0s'],
    historicalChartTwoSeries: [0],
    historicalChartThreeLabel: ['0s'],
    historicalChartThreeSeries: [0],
    historicalChartFourLabel: ['0s'],
    historicalChartFourSeries: [0],
    historicalChartFiveLabel: ['0s'],
    historicalChartFiveSeries: [0],
    historicalChartSixLabel: ['0s'],
    historicalChartSixSeries: [0],
    historicalChartSevenLabel: ['0s'],
    historicalChartSevenSeries: [0],
    historicalChartEightLabel: ['0s'],
    historicalChartEightSeries: [0],
    historicalChartNineLabel: ['0s'],
    historicalChartNineSeries: [0],

    historicalChartOne: {},
    historicalChartTwo: {},
    historicalChartThree: {},
    historicalChartFour: {},
    historicalChartFive : {},
    historicalChartSix:{},
    historicalChartSeven :{},
    historicalChartEight :{},
    historicalChartNine :{},


    initDashboardPageCharts: function () {

        /* ----------==========     Historical Chart One initialization    ==========---------- */
        dataHistoricalChartOne = {
            labels: analyticsHistory.historicalChartOneLabel,
            series: [
                analyticsHistory.historicalChartOneSeries
            ]
        };

        optionsHistoricalChartOne = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            showPoint: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartOne =
            new Chartist.Line('#HistoricalChartOne', dataHistoricalChartOne, optionsHistoricalChartOne);
        md.startAnimationForLineChart(analyticsHistory.historicalChartOne);

        /* ----------==========     Historical Chart Two initialization    ==========---------- */
        dataHistoricalChartTwo = {
            labels: analyticsHistory.historicalChartTwoLabel,
            series: [
                analyticsHistory.historicalChartTwoSeries
            ]
        };

        optionsHistoricalChartTwo = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartTwo =
            new Chartist.Line('#HistoricalChartTwo', dataHistoricalChartTwo, optionsHistoricalChartTwo);
        md.startAnimationForLineChart(analyticsHistory.historicalChartTwo);

        /* ----------==========     Historical Chart Three initialization    ==========---------- */
        dataHistoricalChartThree = {
            labels: analyticsHistory.historicalChartThreeLabel,
            series: [
                analyticsHistory.historicalChartThreeSeries
            ]
        };

        optionsHistoricalChartThree = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartThree =
            new Chartist.Line('#HistoricalChartThree', dataHistoricalChartThree, optionsHistoricalChartThree);
        md.startAnimationForLineChart(analyticsHistory.historicalChartThree);


        /* ----------==========     Historical Chart Four initialization    ==========---------- */
        dataHistoricalChartFour = {
            labels: analyticsHistory.historicalChartFourLabel,
            series: [
                analyticsHistory.historicalChartFourSeries
            ]
        };

        optionsHistoricalChartFour = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartFour =
            new Chartist.Line('#HistoricalChartFour', dataHistoricalChartFour, optionsHistoricalChartFour);
        md.startAnimationForLineChart(analyticsHistory.historicalChartFour);

        /* ----------==========     Historical Chart Five initialization    ==========---------- */
        dataHistoricalChartFive = {
            labels: analyticsHistory.historicalChartFiveLabel,
            series: [
                analyticsHistory.historicalChartFiveSeries
            ]
        };

        optionsHistoricalChartFive = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartFive =
            new Chartist.Line('#HistoricalChartFive', dataHistoricalChartFive, optionsHistoricalChartFive);
        md.startAnimationForLineChart(analyticsHistory.historicalChartFive);

        /* ----------==========     Historical Chart Six initialization    ==========---------- */
        dataHistoricalChartSix = {
            labels: analyticsHistory.historicalChartSixLabel,
            series: [
                analyticsHistory.historicalChartSixSeries
            ]
        };

        optionsHistoricalChartSix = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartSix =
            new Chartist.Line('#HistoricalChartSix', dataHistoricalChartSix, optionsHistoricalChartSix);
        md.startAnimationForLineChart(analyticsHistory.historicalChartSix);

        /* ----------==========     Historical Chart Seven initialization    ==========---------- */
        dataHistoricalChartSeven = {
            labels: analyticsHistory.historicalChartSevenLabel,
            series: [
                analyticsHistory.historicalChartSevenSeries
            ]
        };

        optionsHistoricalChartSeven = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartSeven =
            new Chartist.Line('#HistoricalChartSeven', dataHistoricalChartSeven, optionsHistoricalChartSeven);
        md.startAnimationForLineChart(analyticsHistory.historicalChartSeven);

        /* ----------==========     Historical Chart Eight initialization    ==========---------- */
        dataHistoricalChartEight = {
            labels: analyticsHistory.historicalChartEightLabel,
            series: [
                analyticsHistory.historicalChartEightSeries
            ]
        };

        optionsHistoricalChartEight = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartEight =
            new Chartist.Line('#HistoricalChartEight', dataHistoricalChartEight, optionsHistoricalChartEight);
        md.startAnimationForLineChart(analyticsHistory.historicalChartEight);

        /* ----------==========     Historical ChartNine Chart initialization    ==========---------- */
        dataHistoricalChartNine = {
            labels: analyticsHistory.historicalChartNineLabel,
            series: [
                analyticsHistory.historicalChartNineSeries
            ]
        };

        optionsHistoricalChartNine = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartNine =
            new Chartist.Line('#HistoricalChartNine', dataHistoricalChartNine, optionsHistoricalChartNine);
        md.startAnimationForLineChart(analyticsHistory.historicalChartNine);
    },

    timeDifference: function (current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
            return  Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
            return  Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
            return  Math.round(elapsed / msPerYear) + ' years ago';
        }
    },

    updateGraphs: function () {
        analyticsHistory.historicalChartOne.update();
        analyticsHistory.historicalChartTwo.update();
        analyticsHistory.historicalChartThree.update();


    },

    redrawGraphs: function (events) {

        var sumChartOne = 0;
        var sumChartTwo = 0;
        var sumChartThree=0;
  ;

        if (events.count > 0) {

            var currentTime = new Date();
            analyticsHistory.historicalChartOneLabel.length = 0;
            analyticsHistory.historicalChartOneSeries.length = 0;
            analyticsHistory.historicalChartTwoLabel.length = 0;
            analyticsHistory.historicalChartTwoSeries.length = 0;
            analyticsHistory.historicalChartThreeLabel.length = 0;
            analyticsHistory.historicalChartThreeSeries.length = 0;
            analyticsHistory.historicalChartFourLabel.length = 0;
            analyticsHistory.historicalChartFourSeries.length = 0;
            analyticsHistory.historicalChartFiveLabel.length = 0;
            analyticsHistory.historicalChartFiveSeries.length = 0;
            analyticsHistory.historicalChartSixLabel.length = 0;
            analyticsHistory.historicalChartSixSeries.length = 0;
            analyticsHistory.historicalChartSevenLabel.length = 0;
            analyticsHistory.historicalChartSevenSeries.length = 0;
            analyticsHistory.historicalChartEightLabel.length = 0;
            analyticsHistory.historicalChartEightSeries.length = 0;
            analyticsHistory.historicalChartNineLabel.length = 0;
            analyticsHistory.historicalChartNineSeries.length = 0;


            for (var i = events.records.length - 1; i >= 0; i--) {
                console.log('point '+i);
                var record= events.records[i];
                var sinceText;
                var dataPoint=record.values;
                var varOne = dataPoint[typeParameter1];
                var varTwo = dataPoint[typeParameter2];
                var varThree=dataPoint[typeParameter3];



                if (varOne)
                    sumChartOne += varOne;

                if (varTwo)
                    sumChartTwo += varTwo;

                if (varThree)
                    sumChartThree += varThree;




                if (i === 0) {

                    var avgChartOne = sumChartOne / events.records.length;
                    var avgChartTwo = sumChartTwo / events.records.length;
                    var avgChartThree = sumChartThree / events.records.length;



                    $("#historicalChartOneLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartOne.toFixed(2) + " </span>average "+displayName1+units1);
                    $("#historicalChartTwoLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartTwo.toFixed(2) + " </span> average "+displayName2+units2);
                    $("#historicalChartThreeLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartThree.toFixed(2) + " </span> average "+displayName3+units3);

                }
              sinceText=null;
                if(i=== events.records.length - 1 || i===0 || i===Math.floor(events.records.length/2)){
                    sinceText = analyticsHistory.timeDifference(currentTime, new Date(record.timestamp));
                }
                analyticsHistory.historicalChartOneSeries.push(varOne);
                analyticsHistory.historicalChartTwoSeries.push(varTwo);
                analyticsHistory.historicalChartThreeSeries.push(varThree);

                analyticsHistory.historicalChartOneLabel.push(sinceText);
                analyticsHistory.historicalChartTwoLabel.push(sinceText);
                analyticsHistory.historicalChartThreeLabel.push(sinceText);

                analyticsHistory.historicalChartOne.update();
                analyticsHistory.historicalChartTwo.update();
                analyticsHistory.historicalChartThree.update();

            }

        } else {
            //if there is no records in this period display no records
                analyticsHistory.historicalChartOneLabel= ['0s'],
                analyticsHistory.historicalChartOneSeries= [0],
                analyticsHistory.historicalChartTwoLabel= ['0s'],
                analyticsHistory.historicalChartTwoSeries= [0],
                analyticsHistory.historicalChartThreeLabel= ['0s'],
                analyticsHistory.historicalChartThreeSeries= [0]


            analyticsHistory.historicalChartOne.update({
                labels: analyticsHistory.historicalChartOneLabel,
                series: [
                    analyticsHistory.historicalChartOneSeries
                ]
            });
            analyticsHistory.historicalChartTwo.update({
                labels: analyticsHistory.historicalChartTwoLabel,
                series: [
                    analyticsHistory.historicalChartTwoSeries
                ]
            });
            analyticsHistory.historicalChartThree.update({
                labels: analyticsHistory.historicalChartThreeLabel,
                series: [
                    analyticsHistory.historicalChartThreeSeries
                ]
            });


        }
        chartsLoaded();
    }



};