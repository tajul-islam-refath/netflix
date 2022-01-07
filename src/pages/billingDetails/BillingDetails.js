import React from "react";
import "./billingDetails.scss";

const BillingDetails = () => {
  return (
    <>
      <div className="billing_details_div">
        <h4 className="billing_details_header">Billing Details</h4>

        <div className="gifts_and_promo">
          <p>GIFTS & PROMOTIONS</p>
          <div className="gifts_and_promo_card">
            <p className="gifts_and_promo_card_para1">1000 TK iCinema credit</p>
            <p className="gifts_and_promo_card_para2">
              Your account is paid until January 29, 2022
            </p>
          </div>
          <p className="gifts_and_promo_footer">
            Date is estimated and may be updated based on plan chnages, taxes
            and fees
          </p>
        </div>

        <div className="your_membership">
          <p>YOUR MEMBERSHIP</p>
          <div className="your_membership_card">
            <p className="your_membership_your_plan">Your Plan</p>
            <p className="your_membership_card_para1">
              Premium for 1000 TK/month
            </p>
            <p className="your_membership_card_para2">4 screens</p>
            <div className="your_membership_card_paras">
              <p className="your_membership_your_plan">Your Next Bill</p>
              <p className="your_membership_card_para1">January 5, 2022</p>
              <p className="your_membership_card_para2">
                This will be paid by your iCinema credit.
              </p>
            </div>
          </div>
          <p className="your_membership_footer">
            Membership fees are billed at the beginning of each period and may
            take a few days after the billing date to appear on your account.
          </p>
        </div>

        <div className="billing_details_table">
          <table className="table">
            <thead>
              <tr>
                <td>Date</td>
                <td>Description</td>
                <td>Service Period</td>
                <td>Payment Method</td>
                <td>Subtotal</td>
                <td>Total</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
              <tr>
                <td>12/5/21</td>
                <td>Streaming Service</td>
                <td>12/5/21—1/4/22</td>
                <td>Credit</td>
                <td>46.60 TL (+8.39 TL VAT)</td>
                <td>54.99 TL</td>
              </tr>
            </tbody>
          </table>

          <p className="billing_details_table_footer">
            NOTE: We only show up to 1 year of billing history
          </p>
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
