/**
 * Alerts Controller
 */

angular
    .module('Seminar')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Success! Success meaasges will be shown here.!'
    }, {
        type: 'danger',
        msg: 'Error! Error messages will be shown here.'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}
