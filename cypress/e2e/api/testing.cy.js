const { expect } = require("chai")
const dateCheck = require('../../utils/dateTime_check')

describe('Unix convert api test', () => {
    let check = dateCheck.default.unixCheck
    let endP = '/UnixTime/fromunixtimestamp'
    let param = ''
    let resp = ''
    
    it('Perform various successful checks', () => {
      for (let i = 0; i < check.length; i+=2){
        let param = `unixtimestamp=${check[i]}`
        let resp = {Datetime:`${check[i+1]}`}
        cy.testUnix(endP, param, resp, 200)
      }
    })

    it('Verify an incorrect parameter value', () => {

      param = 'unixtimestamp=1549892a80'
      resp = 'Input string was not in a correct format.'

      cy.testUnix(endP, param, resp, 400)
    })

    it('Perform a check for a missing parameter', () => {
        param = ''
        resp = 'Value cannot be null'

        cy.testUnix(endP, param, resp, 400)
    })
        
    it('Verify the check for no parameter value being sent', () => {
       let param = 'unixtimestamp=""'
       let resp = 'Input string was not in a correct format.'

       cy.testUnix(endP, param, resp, 400)
    })

    
    it('verify a 404 for a incorrect endpoint', () => {
      let param = 'unixtimestamp="1549892080"'
      let resp = ''
      endP = '/UnixTime/fromunixtimesamp'

      cy.testUnix(endP, param, resp, 404)
    })
})