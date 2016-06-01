(function() {
    'use strict';

    angular
        .module('jhipsterpgrndApp')
        .controller('AuthorController', AuthorController);

    AuthorController.$inject = ['$scope', '$state', 'Author', 'ParseLinks', 'AlertService'];

    function AuthorController ($scope, $state, Author, ParseLinks, AlertService) {
        var vm = this;
        
        vm.authors = [];
        vm.loadPage = loadPage;
        vm.page = 0;
        vm.predicate = 'id';
        vm.reset = reset;
        vm.reverse = true;

        loadAll();

        function loadAll () {
            Author.query({
                page: vm.page,
                size: 20,
                sort: sort()
            }, onSuccess, onError);
            function sort() {
                var result = [vm.predicate + ',' + (vm.reverse ? 'asc' : 'desc')];
                if (vm.predicate !== 'id') {
                    result.push('id');
                }
                return result;
            }
            function onSuccess(data, headers) {
                vm.links = ParseLinks.parse(headers('link'));
                vm.totalItems = headers('X-Total-Count');
                for (var i = 0; i < data.length; i++) {
                    vm.authors.push(data[i]);
                }
            }
            function onError(error) {
                AlertService.error(error.data.message);
            }
        }

        function reset () {
            vm.page = 0;
            vm.authors = [];
            loadAll();
        }

        function loadPage(page) {
            vm.page = page;
            loadAll();
        }
    }
})();
