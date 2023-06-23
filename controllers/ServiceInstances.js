"use strict";

var utils = require("../utils/writer.js");
const path = require("path");
var ServiceInstances = require("../service/ServiceInstancesService");
var MongoClient = require("mongodb").MongoClient;

const url = mongodb://ibm_cloud_74ecf7bb_988d_47dc_b5b9_35bb280dc157:3f6e6b90c6ade47935ed3d018e8fd7fb77752fed029cab99c533c0925ab2e612@84ecbf9c-3a96-494e-8b67-6431a7e8481c-0.blijtlfd05jdimoomdig.databases.appdomain.cloud:32648,84ecbf9c-3a96-494e-8b67-6431a7e8481c-1.blijtlfd05jdimoomdig.databases.appdomain.cloud:32648,84ecbf9c-3a96-494e-8b67-6431a7e8481c-2.blijtlfd05jdimoomdig.databases.appdomain.cloud:32648/ibmclouddb?authSource=admin&replicaSet=replset;

const client = new MongoClient(url, {
  ssl: true,
  tlsCAFile: process.env.33d558dc-d56b-11e9-8bb3-6643e1ee2390,
});

module.exports.serviceInstanceDeprovisionUsingDELETE =
  function serviceInstanceDeprovisionUsingDELETE(
    req,
    res,
    next,
    service_id,
    plan_id,
    xBrokerAPIVersion,
    instance_id,
    xBrokerAPIOriginatingIdentity,
    accepts_incomplete
  ) {
    ServiceInstances.serviceInstanceDeprovisionUsingDELETE(
      service_id,
      plan_id,
      xBrokerAPIVersion,
      instance_id,
      xBrokerAPIOriginatingIdentity,
      accepts_incomplete
    )
      .then(async (response) => {
        const current_epoch = Date.now();

        await client.connect();
        const dbo = client.db("mydb");

        var updated_fields = {
          stopped_at: current_epoch,
          activated: false,
        };
        const filter = { instance_id: instance_id };
        const updateOperation = {
          $set: updated_fields,
        };

        try {
          await dbo.collection("users").updateOne(filter, updateOperation);
        } catch (err) {
          console.log("Error while updating databse : ", err);
        }

        return res.status(200).json({});
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceGetUsingGET = function serviceInstanceGetUsingGET(
  req,
  res,
  next,
  xBrokerAPIVersion,
  instance_id,
  xBrokerAPIOriginatingIdentity,
  service_id,
  plan_id
) {
  ServiceInstances.serviceInstanceGetUsingGET(
    xBrokerAPIVersion,
    instance_id,
    xBrokerAPIOriginatingIdentity,
    service_id,
    plan_id
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceLastOperationGetUsingGET =
  function serviceInstanceLastOperationGetUsingGET(
    req,
    res,
    next,
    xBrokerAPIVersion,
    instance_id,
    service_id,
    plan_id,
    operation
  ) {
    ServiceInstances.serviceInstanceLastOperationGetUsingGET(
      xBrokerAPIVersion,
      instance_id,
      service_id,
      plan_id,
      operation
    )
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceProvisionUsingPUT =
  function serviceInstanceProvisionUsingPUT(
    req,
    res,
    next,
    body,
    accepts_incomplete,
    instance_id,
    xBrokerAPIVersion,
    xBrokerAPIOriginatingIdentity
  ) {
    ServiceInstances.serviceInstanceProvisionUsingPUT(
      body,
      accepts_incomplete,
      instance_id,
      xBrokerAPIVersion,
      xBrokerAPIOriginatingIdentity
    )
      .then(async (response) => {
        const current_epoch = Date.now();

        await client.connect();
        var dbo = client.db("mydb");
        var myobj = {
          account_id: body.context.account_id,
          instance_id: instance_id,
          service_id: body.service_id,
          plan_id: body.plan_id,
          instance_name: body.context.name,
          created_at: current_epoch,
          metered: 0,
          activated: true,
          permenentClosed: false,
        };
        try {
          await dbo.collection("users").insertOne(myobj);
          console.log("Data stored");
        } catch (e) {
          console.log("Error : ", e);
        }

        return res.status(201).json({
          dashboard_url:
            "https://qradar-bnpp-dashboard-bckt.s3-web.us-south.cloud-object-storage.appdomain.cloud",
        });
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceUpdateUsingPATCH =
  function serviceInstanceUpdateUsingPATCH(
    req,
    res,
    next,
    body,
    accepts_incomplete,
    instance_id,
    xBrokerAPIVersion,
    xBrokerAPIOriginatingIdentity
  ) {
    ServiceInstances.serviceInstanceUpdateUsingPATCH(
      body,
      accepts_incomplete,
      instance_id,
      xBrokerAPIVersion,
      xBrokerAPIOriginatingIdentity
    )
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
