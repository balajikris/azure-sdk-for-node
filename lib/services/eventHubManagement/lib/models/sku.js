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
 * Initializes a new instance of the Sku class.
 * @constructor
 * SKU of the namespace.
 *
 * @member {string} [name] Name of this SKU. Possible values include: 'Basic',
 * 'Standard'
 *
 * @member {string} tier The billing tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard', 'Premium'
 *
 * @member {number} [capacity] The EventHubs throughput units.
 *
 */
class Sku {
  constructor() {
  }

  /**
   * Defines the metadata of Sku
   *
   * @returns {object} metadata of Sku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Sku',
      type: {
        name: 'Composite',
        className: 'Sku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: true,
            serializedName: 'tier',
            type: {
              name: 'String'
            }
          },
          capacity: {
            required: false,
            serializedName: 'capacity',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Sku;
