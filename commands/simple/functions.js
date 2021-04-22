module.exports = {
    /**
     * @param {number} n How many numbers you want
     * @param {number} min The minimum number
     * @param {number} max The maximum number
     * @param {boolean} duplicates Should duplicates appear?
     * @returns {number|Array} Number or Array of numbers
     * @example getRandomNumber(1, 0, 100, false)
     */
    getRandomNumber: async function(n, min, max, duplicates) {
  
      var test;
      const fetch = require('node-fetch')
      const body = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
          "apiKey": "ccdff80d-2a47-4715-90d5-b44c6f634b29",
          "n": n,
          "min": min,
          "max": max,
          "replacement": duplicates
        },
        "id": 669051415074832
      }
    
      const chance = await fetch('https://api.random.org/json-rpc/2/invoke', {
        method: 'post',
        body:  JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        console.log(json.result["random"].data)
        
        test = json.result["random"].data
      });
      return test;
    }
}