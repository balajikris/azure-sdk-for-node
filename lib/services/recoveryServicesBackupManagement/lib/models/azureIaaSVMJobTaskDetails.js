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

/**
 * @class
 * Initializes a new instance of the AzureIaaSVMJobTaskDetails class.
 * @constructor
 * Azure IaaS VM workload-specific job task details.
 *
 * @member {string} [taskId] The task display name.
 *
 * @member {date} [startTime] The start time.
 *
 * @member {date} [endTime] The end time.
 *
 * @member {string} [instanceId] The instance ID.
 *
 * @member {moment.duration} [duration] The time elapsed for the task.
 *
 * @member {string} [status] The status.
 *
 * @member {number} [progressPercentage] The progress of the task, as a
 * percentage.
 *
 */
class AzureIaaSVMJobTaskDetails {
  constructor() {
  }

  /**
   * Defines the metadata of AzureIaaSVMJobTaskDetails
   *
   * @returns {object} metadata of AzureIaaSVMJobTaskDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureIaaSVMJobTaskDetails',
      type: {
        name: 'Composite',
        className: 'AzureIaaSVMJobTaskDetails',
        modelProperties: {
          taskId: {
            required: false,
            serializedName: 'taskId',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          instanceId: {
            required: false,
            serializedName: 'instanceId',
            type: {
              name: 'String'
            }
          },
          duration: {
            required: false,
            serializedName: 'duration',
            type: {
              name: 'TimeSpan'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          progressPercentage: {
            required: false,
            serializedName: 'progressPercentage',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSVMJobTaskDetails;
