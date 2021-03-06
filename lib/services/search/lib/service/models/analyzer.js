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
 * Initializes a new instance of the Analyzer class.
 * @constructor
 * Abstract base class for analyzers.
 *
 * @member {string} name The name of the analyzer. It must only contain
 * letters, digits, spaces, dashes or underscores, can only start and end with
 * alphanumeric characters, and is limited to 128 characters.
 *
 * @member {string} odatatype Polymorphic Discriminator
 *
 */
class Analyzer {
  constructor() {
  }

  /**
   * Defines the metadata of Analyzer
   *
   * @returns {object} metadata of Analyzer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Analyzer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Analyzer',
        className: 'Analyzer',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Analyzer;
