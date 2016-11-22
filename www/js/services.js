/**
 * Created by Diego Cuervo on 22/11/16.
 */
angular.module('starter.services', [])
    .factory('Camara', ['$q', function($q) {
        return {
            tomaFoto: function(options) {
                var q = $q.defer();
                navigator.camera.getPicture(function(result) {
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);
                return q.promise;
            }
        }
    }]);