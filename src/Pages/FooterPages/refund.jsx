import {useEffect} from "react";
const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4 font-serif text-[#248F59]">
          Refund Policy
        </h1>
        <p class="mb-4 font-sans">
          At Bazar.pk, we strive to provide the best shopping experience. If you
          are not entirely satisfied with your purchase, we're here to help.
        </p>

        <h2 class="text-xl font-bold mb-2 font-sans">Returns</h2>
        <p class="mb-4 font-sans">
          You have{" "}
          <span className="font-serif text-[#248f59] font-bold"> 2 days </span>{" "}
          to return an item from the date of purchase. To be eligible for a
          return, your item must be unused, in the same condition that you
          received it, and in its original packaging.
        </p>

        <h2 class="text-xl font-bold mb-2 font-sans">Refunds</h2>
        <p class="mb-4 font-sans">
          Once we receive your returned item, we will inspect it and notify you
          that we have received your returned item. We will immediately notify
          you on the status of your refund after inspecting the item.
        </p>
        <p class="mb-4 font-sans">
          If your return is approved, we will initiate a refund to your original
          method of payment. The time it takes for the refund to reflect in your
          account may vary depending on your payment provider's policies.
        </p>

        <h2 class="text-xl font-bold mb-2 font-sans">Shipping</h2>
        <p class="mb-4 font-sans">
          You will be responsible for paying the shipping costs for returning
          your item. Shipping costs are non-refundable.
        </p>
        <p class="mb-4 font-sans">
          If you receive a refund, the cost of return shipping will be deducted
          from your refund.
        </p>

        <h2 class="text-xl font-bold mb-2 font-sans">Contact Us</h2>
        <p class="mb-4 font-sans">
          If you have any questions or concerns about our refund policy, please
          contact us:
        </p>
        <ul class="list-disc pl-6 mb-4 font-sans">
          <li>Email: info@bazar.pk</li>
          <li>Phone: 123-456-7890</li>
        </ul>

        <p class="text-gray-500 text-right font-sans">
          Last updated: [25/5/23]
        </p>
      </div>
    </>
  );
};

export default RefundPolicy ;