(function () {
    'use strict';

    angular
        .module('jhipsterpgrndApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
