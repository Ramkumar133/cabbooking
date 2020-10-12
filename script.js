var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { no: "1", type: "Mini", pass: 4, faci: "Compact , Air Condition" },
                { no: "2", type: "Micro", pass: 3, faci: "Cheapest , compact , air-condition" },
                { no: "3", type: "Lux", pass: 4, faci: "luxuary" },
                { no: "4", type: "Share", pass: 2, faci: "shared ride" },
                { no: "5", type: "Prime", pass: 7, faci: "free wifi" },
            ];

            $scope.employees = employees;
        });

