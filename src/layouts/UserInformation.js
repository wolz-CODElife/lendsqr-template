import React from 'react'
import styled from 'styled-components'

const UserInformation = () => {
  return (
      <UserInfoContainer>
          <div className="field">
              <h2>Personal Information</h2>
              <div className="row">
                  <div className="col">
                      <h3>full Name</h3>
                      <p>Grace Effiom</p>
                  </div>
                  <div className="col">
                      <h3>Phone Number</h3>
                      <p>07060780922</p>
                  </div>
                  <div className="col">
                      <h3>Email Address</h3>
                      <p>grace@gmail.com</p>
                  </div>
                  <div className="col">
                      <h3>Bvn</h3>
                      <p>07060780922</p>
                  </div>
                  <div className="col">
                      <h3>Gender</h3>
                      <p>Female</p>
                  </div>
                  <div className="col">
                      <h3>Marital status</h3>
                      <p>Single</p>
                  </div>
                  <div className="col">
                      <h3>Children</h3>
                      <p>None</p>
                  </div>
                  <div className="col">
                      <h3>Type of residence</h3>
                      <p>Parent’s Apartment</p>
                  </div>
              </div>
          </div>
          <div className="field">
              <h2>Education and Employment</h2>
              <div className="row">
                  <div className="col">
                      <h3>level of education</h3>
                      <p>B.Sc</p>
                  </div>
                  <div className="col">
                      <h3>employment status</h3>
                      <p>Employed</p>
                  </div>
                  <div className="col">
                      <h3>sector of employment</h3>
                      <p>FinTech</p>
                  </div>
                  <div className="col">
                      <h3>Duration of employment</h3>
                      <p>2 years</p>
                  </div>
                  <div className="col">
                      <h3>office email</h3>
                      <p>grace@lendsqr.com</p>
                  </div>
                  <div className="col">
                      <h3>Monthly income</h3>
                      <p>₦200,000.00- ₦400,000.00</p>
                  </div>
                  <div className="col">
                      <h3>loan repayment</h3>
                      <p>40,000</p>
                  </div>
              </div>
          </div>
          
          <div className="field">
              <h2>Socials</h2>
              <div className="row">
                  <div className="col">
                      <h3>Twitter</h3>
                      <p>@grace_effiom</p>
                  </div>
                  <div className="col">
                      <h3>Facebook</h3>
                      <p>Grace Effiom</p>
                  </div>
                  <div className="col">
                      <h3>Instagram</h3>
                      <p>@grace_effiom</p>
                  </div>
              </div>
          </div>
          
          <div className="field">
              <h2>Guarantor</h2>
              <div className="row">
                  <div className="col">
                      <h3>full Name</h3>
                      <p>Debby Ogana</p>
                  </div>
                  <div className="col">
                      <h3>Phone Number</h3>
                      <p>07060780922</p>
                  </div>
                  <div className="col">
                      <h3>Email Address</h3>
                      <p>debby@gmail.com</p>
                  </div>
                  <div className="col">
                      <h3>Relationship</h3>
                      <p>Sister</p>
                  </div>
              </div>
          </div>
          <div className="field">
            <div className="row">
                  <div className="col">
                      <h3>full Name</h3>
                      <p>Debby Ogana</p>
                  </div>
                  <div className="col">
                      <h3>Phone Number</h3>
                      <p>07060780922</p>
                  </div>
                  <div className="col">
                      <h3>Email Address</h3>
                      <p>debby@gmail.com</p>
                  </div>
                  <div className="col">
                      <h3>Relationship</h3>
                      <p>Sister</p>
                  </div>
              </div>
          </div>
      </UserInfoContainer>
  )
}

export default UserInformation

const UserInfoContainer = styled.div`
    padding: 0px 30px;
    margin: 30px 0px;
    background: #FFFFFF;
    box-shadow: 3px 5px 20px #0000000A;
    border: 1px solid #213F7D0F;
    border-radius: 4px;

    .field {
        color: #213F7D;
        margin: 30px 25px;
        
        h2 {
            font-size: 16px;
            font-weight: 500;
        }

        .row {
            display: flex;
            justify-content: space-start;
            flex-wrap: wrap;
            padding: 0px;
            margin: 0px -25px;
            padding-bottom: 30px;
            border-bottom: 1px solid #213F7D1A;

            .col {
                margin: 0px 25px;
                margin-top: 30px;

                h3 {
                    font-size: 12px;
                    font-weight: 400;
                    text-transform: uppercase;
                }
                p {
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }

        &:last-of-type {
            .row {
                border-bottom: none;
            }
        }
    }
`