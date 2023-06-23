'use strict';

var utils = require('../utils/writer.js');
var ServiceBindings = require('../service/ServiceBindingsService');

module.exports.serviceBindingBindingUsingPUT = function serviceBindingBindingUsingPUT (req, res, next, body, accepts_incomplete, instance_id, binding_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceBindings.serviceBindingBindingUsingPUT(body, accepts_incomplete, instance_id, binding_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBindingGetUsingGET = function serviceBindingGetUsingGET (req, res, next, xBrokerAPIVersion, instance_id, binding_id, xBrokerAPIOriginatingIdentity, service_id, plan_id) {
  ServiceBindings.serviceBindingGetUsingGET(xBrokerAPIVersion, instance_id, binding_id, xBrokerAPIOriginatingIdentity, service_id, plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBindingLastOperationGetUsingGET = function serviceBindingLastOperationGetUsingGET (req, res, next, xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, operation) {
  ServiceBindings.serviceBindingLastOperationGetUsingGET(xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBindingUnbindingUsingDELETE = function serviceBindingUnbindingUsingDELETE (req, res, next, xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete) {
  ServiceBindings.serviceBindingUnbindingUsingDELETE(xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
