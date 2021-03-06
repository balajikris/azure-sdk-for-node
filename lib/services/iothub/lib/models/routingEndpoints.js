/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the RoutingEndpoints class.
 * @constructor
 * The properties related to the custom endpoints to which your IoT hub routes
 * messages based on the routing rules. A maximum of 10 custom endpoints are
 * allowed across all endpoint types for paid hubs and only 1 custom endpoint
 * is allowed across all endpoint types for free hubs.
 *
 * @member {array} [serviceBusQueues] The list of Service Bus queue endpoints
 * that IoT hub routes the messages to, based on the routing rules.
 *
 * @member {array} [serviceBusTopics] The list of Service Bus topic endpoints
 * that the IoT hub routes the messages to, based on the routing rules.
 *
 * @member {array} [eventHubs] The list of Event Hubs endpoints that IoT hub
 * routes messages to, based on the routing rules. This list does not include
 * the built-in Event Hubs endpoint.
 *
 */
class RoutingEndpoints {
  constructor() {
  }

  /**
   * Defines the metadata of RoutingEndpoints
   *
   * @returns {object} metadata of RoutingEndpoints
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoutingEndpoints',
      type: {
        name: 'Composite',
        className: 'RoutingEndpoints',
        modelProperties: {
          serviceBusQueues: {
            required: false,
            serializedName: 'serviceBusQueues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoutingServiceBusQueueEndpointPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoutingServiceBusQueueEndpointProperties'
                  }
              }
            }
          },
          serviceBusTopics: {
            required: false,
            serializedName: 'serviceBusTopics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoutingServiceBusTopicEndpointPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoutingServiceBusTopicEndpointProperties'
                  }
              }
            }
          },
          eventHubs: {
            required: false,
            serializedName: 'eventHubs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoutingEventHubPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoutingEventHubProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RoutingEndpoints;
