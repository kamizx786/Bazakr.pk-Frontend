import React from 'react'
import { FacebookFilled } from '@ant-design/icons'
const ShopeSidebarCard = ({shop}) => {
  return (
    <>
    <div className="w-full">
            <div className="flex flex-col items-center w-full border-b border-gray-200 p-7">
              <div className="relative mx-auto mb-8 overflow-hidden bg-gray-200 border border-gray-100 rounded-lg w-44 h-44">
                <img src={shop?.main_pic?.url} className="object-cover" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-heading">
                {shop?.Storename}
              </h3>

              {shop?.description && (
                <p className="mb-2 text-sm leading-relaxed text-center text-body">
                  {shop?.discription}
                </p>
              )}

              <div className="flex items-center justify-start mt-3">
                <a
                  target="_blank"
                  className={`text-muted focus:outline-none ltr:mr-6 rtl:ml-6 ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300`}
                  rel="noreferrer"
                >
                 <FacebookFilled/>
                </a>
              </div>
            </div>

            <div className="p-7">
              <div className="flex flex-col mb-7 last:mb-0">
                <span className="mb-2 text-sm font-semibold text-heading">
                  Address
                </span>
                <span className="text-sm text-body">
                  {shop?.mapAddress}
                </span>
              </div>

              <div className="flex flex-col mb-7 last:mb-0">
                <span className="mb-2 text-sm font-semibold text-heading">
                  Phone
                </span>
                <span className="text-sm text-body">{shop?.Storewhatsapp}</span>
              </div>

              {/* {shop?.settings?.website && (
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold text-heading">
                    {t('text-website')}
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-body">
                      {shop.settings.website}
                    </span>
                    <a
                      href={shop.settings.website}
                      target="_blank"
                      className="text-sm font-semibold text-accent hover:text-accent-hover focus:outline-none focus:text-accent-hover"
                      rel="noreferrer"
                    >
                      {t('text-visit-site')}
                    </a>
                  </div>
                </div>
              )} */}
            </div>
          </div>
    </>
  )
}

export default ShopeSidebarCard