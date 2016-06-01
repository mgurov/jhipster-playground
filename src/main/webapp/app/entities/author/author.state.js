(function() {
    'use strict';

    angular
        .module('jhipsterpgrndApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('author', {
            parent: 'entity',
            url: '/author',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Authors'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/author/authors.html',
                    controller: 'AuthorController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('author-detail', {
            parent: 'entity',
            url: '/author/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Author'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/author/author-detail.html',
                    controller: 'AuthorDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Author', function($stateParams, Author) {
                    return Author.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('author.new', {
            parent: 'author',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/author/author-dialog.html',
                    controller: 'AuthorDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                description: null,
                                timestamp: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('author', null, { reload: true });
                }, function() {
                    $state.go('author');
                });
            }]
        })
        .state('author.edit', {
            parent: 'author',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/author/author-dialog.html',
                    controller: 'AuthorDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Author', function(Author) {
                            return Author.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('author', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('author.delete', {
            parent: 'author',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/author/author-delete-dialog.html',
                    controller: 'AuthorDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Author', function(Author) {
                            return Author.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('author', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
