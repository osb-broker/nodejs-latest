'use strict';


/**
 * get the catalog of services that the service broker offers
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * returns Catalog
 **/
exports.catalogGetUsingGET = function(xBrokerAPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "services" : [ {
    "bindable" : false,
    "metadata" : { },
    "plan_updateable" : false,
    "plans" : [ {
      "bindable" : false,
      "metadata" : null,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : false,
      "schemas" : {
        "service_binding" : {
          "create" : {
            "parameters" : { }
          }
        },
        "service_instance" : {
          "create" : null,
          "update" : null
        }
      },
      "binding_rotatable" : false,
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "free" : false,
      "maximum_polling_duration" : 0
    }, {
      "bindable" : false,
      "metadata" : null,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : false,
      "schemas" : {
        "service_binding" : {
          "create" : {
            "parameters" : { }
          }
        },
        "service_instance" : {
          "create" : null,
          "update" : null
        }
      },
      "binding_rotatable" : false,
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "free" : false,
      "maximum_polling_duration" : 0
    } ],
    "binding_rotatable" : false,
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "dashboard_client" : {
      "id" : "id",
      "redirect_uri" : "redirect_uri",
      "secret" : "secret"
    },
    "requires" : [ "route_forwarding", "route_forwarding" ],
    "tags" : [ "tags", "tags" ]
  }, {
    "bindable" : false,
    "metadata" : { },
    "plan_updateable" : false,
    "plans" : [ {
      "bindable" : false,
      "metadata" : null,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : false,
      "schemas" : {
        "service_binding" : {
          "create" : {
            "parameters" : { }
          }
        },
        "service_instance" : {
          "create" : null,
          "update" : null
        }
      },
      "binding_rotatable" : false,
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "free" : false,
      "maximum_polling_duration" : 0
    }, {
      "bindable" : false,
      "metadata" : null,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : false,
      "schemas" : {
        "service_binding" : {
          "create" : {
            "parameters" : { }
          }
        },
        "service_instance" : {
          "create" : null,
          "update" : null
        }
      },
      "binding_rotatable" : false,
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "free" : false,
      "maximum_polling_duration" : 0
    } ],
    "binding_rotatable" : false,
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "dashboard_client" : {
      "id" : "id",
      "redirect_uri" : "redirect_uri",
      "secret" : "secret"
    },
    "requires" : [ "route_forwarding", "route_forwarding" ],
    "tags" : [ "tags", "tags" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

