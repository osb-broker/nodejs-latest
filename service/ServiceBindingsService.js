'use strict';


/**
 * generate a service binding
 *
 * body ServiceBindingRequest  (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * instance_id String instance id of instance to create a binding on
 * binding_id String binding id of binding to create
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * returns ServiceBindingResponse
 **/
exports.serviceBindingBindingUsingPUT = function(body,accepts_incomplete,instance_id,binding_id,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpoints" : [ {
    "protocol" : "all",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  }, {
    "protocol" : "all",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  } ],
  "metadata" : {
    "expires_at" : "expires_at",
    "renew_before" : "renew_before"
  },
  "route_service_url" : "route_service_url",
  "credentials" : { },
  "syslog_drain_url" : "syslog_drain_url",
  "volume_mounts" : [ {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id",
      "mount_config" : null
    },
    "container_dir" : "container_dir"
  }, {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id",
      "mount_config" : null
    },
    "container_dir" : "container_dir"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance associated with the binding
 * binding_id String binding id of binding to fetch
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * returns ServiceBindingResource
 **/
exports.serviceBindingGetUsingGET = function(xBrokerAPIVersion,instance_id,binding_id,xBrokerAPIOriginatingIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpoints" : [ {
    "protocol" : "all",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  }, {
    "protocol" : "all",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  } ],
  "metadata" : {
    "expires_at" : "expires_at",
    "renew_before" : "renew_before"
  },
  "route_service_url" : "route_service_url",
  "credentials" : { },
  "syslog_drain_url" : "syslog_drain_url",
  "volume_mounts" : [ {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id",
      "mount_config" : null
    },
    "container_dir" : "container_dir"
  }, {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id",
      "mount_config" : null
    },
    "container_dir" : "container_dir"
  } ],
  "parameters" : null
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the last requested operation state for service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to find last operation applied to it
 * binding_id String binding id of service binding to find last operation applied to it
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * operation String a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceBindingLastOperationGetUsingGET = function(xBrokerAPIVersion,instance_id,binding_id,service_id,plan_id,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "instance_usable" : false,
  "update_repeatable" : false,
  "description" : "description",
  "state" : "failed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deprovision a service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String id of the instance associated with the binding being deleted
 * binding_id String id of the binding being deleted
 * service_id String id of the service associated with the instance for which a binding is being deleted
 * plan_id String id of the plan associated with the instance for which a binding is being deleted
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * returns Object
 **/
exports.serviceBindingUnbindingUsingDELETE = function(xBrokerAPIVersion,instance_id,binding_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

