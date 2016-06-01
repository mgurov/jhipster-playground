(function() {
    'use strict';

    angular
        .module('jhipsterpgrndApp')
        .controller('AuthorDetailController', AuthorDetailController);

    AuthorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Author'];

    function AuthorDetailController($scope, $rootScope, $stateParams, entity, Author) {
        var vm = this;

        vm.author = entity;

        var unsubscribe = $rootScope.$on('jhipsterpgrndApp:authorUpdate', function(event, result) {
            vm.author = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
