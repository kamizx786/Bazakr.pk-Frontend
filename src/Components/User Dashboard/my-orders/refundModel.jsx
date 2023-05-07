import React from "react";
import FileInput from "../../common/fileInput";

const RefundModal = ({ closeModal }) => {
    const [reason, setReason] = React.useState("");
    const [description, setDescription] = React.useState("");
  
    const handleReasonChange = (event) => {
      setReason(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform the refund request here using the reason and description values
      // ...
      // Once the refund request is submitted, close the modal
      closeModal();
    };
  
    return (
      <div className="fixed inset-0 overflow-y-auto  flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-2/3 sm:!w-1/2 p-5 rounded-lg">
          <h3 className="text-3xl text-center font-serif text-[#248F59] font-normal mb-3">
            ASK FOR REFUND
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block font-sans text-sm font-medium text-gray-700">
                Reason
              </label>
              <input
                type="text"
                value={reason}
                onChange={handleReasonChange}
                className="border border-[#f2f2f2] rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block font-sans text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="border border-[#f2f2f2] rounded-lg px-3 py-2 w-full  focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block font-sans text-sm font-medium text-gray-700">
                Product Image
              </label>
              <div className="flex h-fit">
                <FileInput/>
            </div>
            </div>
            <div className="flex flex-col sm:!flex-row gap-2 w-full font-sans justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#248F59] text-[#f2f2f2] rounded-lg "
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="mr-2 px-4 py-2 text-red-600 border-red-700 rounded-lg border-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default RefundModal;  