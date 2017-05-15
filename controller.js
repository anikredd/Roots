var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

    .when("/", {

        templateUrl : "query.html"

    })

    .when("/clickme", {

        templateUrl : "Document2.html"
        
        

    })

    .when("/doitagain", {

        templateUrl : "Document3.html"
        /*controller: "twoControl"*/

    });

});
app.controller("firstControl",function($scope){
    $scope.message="please";
})

app.controller("oneControl",function($scope){
    $scope.name="dont mess with me";
});

app.controller("twoControl",function($scope){
    $scope.fame="mess with me your a dead man";
    $scope.customers= [{name:"ras au gul", job:"System Architect", place:"Edinburgh", zip:"5421", joined:"2011/04/25", salary:"$320,800" },
     {name:"alan scott",job: "Accountant", place:"Tokyo", zip:"8422", joined:"2011/07/25",salary: "$170,750" },
     
                        {name:"barry allen", job:"Jr Technical Author",place: "Virginia", zip:"1562", joined:"2009/01/12",salary: "$86,000" },
     
                        {name:"oliver queen",job: "Sr.Javascript Developer",place: "Edinburgh",zip: "6224",joined: "2012/03/29",salary: "$433,060" },
     
                        {name:"bruce wayne",job: "Accountant",place: "Tokyo",zip: "5407", joined:"2008/11/28",salary: "$162,700" },
     
                        {name:"clark kent", job:"Integration Specialist", place:"New York",zip: "4804",joined: "2012/12/02", salary:"$372,000" },
     
                        {name:"sara lance", job:"Sales Assistant",place: "Austin",zip: "9608",joined: "2012/08/06",salary: "$137,500" },
     
                        {name:"Ray palmer", job:"Integration Specialist",place: "Tokyo",zip: "6200",joined: "2010/10/14", salary:"$327,900" },
     
                        {name:"diana prince", job:"Javascript Developer", place:"San Francisco",zip: "2360",joined: "2009/09/15",salary: "$205,500" },
     
                        {name:"lex luther", job:"Software Engineer",place: "Edinburgh", zip:"1667",joined: "2008/12/13",salary: "$103,600" }];
        
});
