import React from "react";

const OrderCard = () => {
  return (
    <>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4">
        <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            Tracking Number
          </h3>
          <p className="text-sm text-body-dark">
            {/* {order?.tracking_number} */}112233445566
          </p>
        </div>
        <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            {/* {t('text-date')} */} Date
          </h3>
          <p className="text-sm text-body-dark">
            {/* {dayjs(order?.created_at).format('MMMM D, YYYY')} */}
            12/12/12
          </p>
        </div>
        <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            {/* {t('text-total')} */}Total
          </h3>
          <p className="text-sm text-body-dark">{/*total*/}2456890PKR</p>
        </div>
        <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            {/* {t('text-payment-method')} */} Payment Method
          </h3>
          <p className="text-sm text-body-dark">Stripe/COD</p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
