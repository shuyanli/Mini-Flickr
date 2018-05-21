var app = angular.module("miniFlickr", []);

app.controller("photoController", ["$http", "$scope",function ($http, $scope) {
    $http.get("/api/v1/photos")
        .then(function (response) {
            $scope.photos = response.data;
    });
}]);