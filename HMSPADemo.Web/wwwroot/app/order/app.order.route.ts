((): void => {
    "use strict";

    angular.module("app.order")
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("orders", {
            url: "/orders",
            templateUrl: "/app/order/orders.html",
            controller: "OrdersController",
            controllerAs: "vm"
        })
            .state("orders.details", {
                url: "/details",
                templateUrl: "/app/order/order-details.html",
                controller: "OrderDetailsController",
                controllerAs: "vm",

            });
    }

})();