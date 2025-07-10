const axios = require('axios');
const winston = require('winston');

class DelhiveryService {
  constructor() {
    this.apiUrl = process.env.DELHIVERY_API_URL;
    this.apiKey = process.env.DELHIVERY_API_KEY;
    
    if (!this.apiUrl || !this.apiKey) {
      throw new Error('Delhivery API configuration missing. Please check DELHIVERY_API_URL and DELHIVERY_API_KEY in environment variables.');
    }
  }

  /**
   * Create a shipment using Delhivery API
   * @param {Object} shipmentData - Shipment data object
   * @returns {Promise<Object>} - API response
   */
  async createShipment(shipmentData) {
    try {
      const url = `${this.apiUrl}/api/cmu/create.json`;
      
      const headers = {
        'Authorization': `Token ${this.apiKey}`,
        'Content-Type': 'application/json'
      };

      winston.info('Creating Delhivery shipment', { 
        url, 
        shipmentData: { 
          waybill: shipmentData.waybill,
          order: shipmentData.order,
          consignee: shipmentData.consignee?.name 
        } 
      });

      const response = await axios.post(url, shipmentData, { headers });

      winston.info('Delhivery shipment created successfully', { 
        waybill: response.data?.waybill,
        status: response.data?.status 
      });

      return response.data;
    } catch (error) {
      winston.error('Delhivery API error', {
        error: error.message,
        status: error.response?.status,
        data: error.response?.data,
        shipmentData: { 
          waybill: shipmentData.waybill,
          order: shipmentData.order 
        }
      });

      if (error.response) {
        // API responded with error status
        throw new Error(`Delhivery API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('Delhivery API Error: No response received from server');
      } else {
        // Something else happened
        throw new Error(`Delhivery API Error: ${error.message}`);
      }
    }
  }

  /**
   * Get shipment tracking details
   * @param {string} waybill - Waybill number
   * @returns {Promise<Object>} - Tracking response
   */
  async trackShipment(waybill) {
    try {
      const url = `${this.apiUrl}/api/packages/json/?waybill=${waybill}`;
      
      const headers = {
        'Authorization': `Token ${this.apiKey}`,
        'Content-Type': 'application/json'
      };

      winston.info('Tracking Delhivery shipment', { waybill });

      const response = await axios.get(url, { headers });

      winston.info('Delhivery tracking successful', { 
        waybill,
        status: response.data?.ShipmentData?.[0]?.Shipment?.Status 
      });

      return response.data;
    } catch (error) {
      winston.error('Delhivery tracking error', {
        error: error.message,
        waybill,
        status: error.response?.status
      });

      if (error.response) {
        throw new Error(`Delhivery Tracking Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        throw new Error('Delhivery Tracking Error: No response received from server');
      } else {
        throw new Error(`Delhivery Tracking Error: ${error.message}`);
      }
    }
  }

  /**
   * Cancel a shipment
   * @param {string} waybill - Waybill number
   * @param {string} reason - Cancellation reason
   * @returns {Promise<Object>} - Cancellation response
   */
  async cancelShipment(waybill, reason = 'Customer request') {
    try {
      const url = `${this.apiUrl}/api/packages/edit`;
      
      const headers = {
        'Authorization': `Token ${this.apiKey}`,
        'Content-Type': 'application/json'
      };

      const cancelData = {
        waybill: waybill,
        cancellation_reason: reason
      };

      winston.info('Cancelling Delhivery shipment', { waybill, reason });

      const response = await axios.post(url, cancelData, { headers });

      winston.info('Delhivery shipment cancelled successfully', { waybill });

      return response.data;
    } catch (error) {
      winston.error('Delhivery cancellation error', {
        error: error.message,
        waybill,
        status: error.response?.status
      });

      if (error.response) {
        throw new Error(`Delhivery Cancellation Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        throw new Error('Delhivery Cancellation Error: No response received from server');
      } else {
        throw new Error(`Delhivery Cancellation Error: ${error.message}`);
      }
    }
  }
}

module.exports = new DelhiveryService(); 