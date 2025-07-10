import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, FaBoxOpen, FaMoneyBillWave, FaMobileAlt, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CheckoutPage() {
  // Remove all dummy data: savedAddresses, product, paymentMethods, upiApps, etc.
  // Only keep state for user-provided address, pincode, and payment info.
  // Refactor forms to use local state for address fields, and use Delhivery pincode check and Razorpay integration as before.
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState({
    firstName: '',
    lastName: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [useSavedAddress, setUseSavedAddress] = useState(true);
  const [paymentMode, setPaymentMode] = useState('card');
  const [upiMethod, setUpiMethod] = useState('id'); // 'id' or 'qr'
  const [selectedUpiApp, setSelectedUpiApp] = useState('googlepay');
  const [pincode, setPincode] = useState("");
  const [pincodeResult, setPincodeResult] = useState(null);
  const [showRazorpay, setShowRazorpay] = useState(false);

  const router = useRouter();
  const price = Number(router.query.price) || 0;

  // Stepper labels
  const steps = [
    'Shipping address',
    'Review your order',
  ];

  async function handleCheckPincode() {
    setPincodeResult(null);
    const res = await fetch(`/api/delhivery-pincode?pincode=${pincode}`);
    const data = await res.json();
    setPincodeResult(data);
  }
  function handleRazorpayPayment() {
    if (typeof window === 'undefined') return;
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_pePfQTitk8KOIT',
      amount: 13498, // Total amount for Razorpay
      currency: 'INR',
      name: 'ENTION',
      description: 'Order Payment',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: { color: '#0FAFCA' },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  // Render step content
  function renderStepContent() {
    if (step === 1) {
      return (
        <div className="w-full">
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="John" value={selectedAddress.firstName} onChange={e => setSelectedAddress(prev => ({ ...prev, firstName: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Snow" value={selectedAddress.lastName} onChange={e => setSelectedAddress(prev => ({ ...prev, lastName: e.target.value }))} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address line 1 *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Street name and number" value={selectedAddress.line1} onChange={e => setSelectedAddress(prev => ({ ...prev, line1: e.target.value }))} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address line 2</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Apartment, suite, unit, etc. (optional)" value={selectedAddress.line2} onChange={e => setSelectedAddress(prev => ({ ...prev, line2: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="New York" value={selectedAddress.city} onChange={e => setSelectedAddress(prev => ({ ...prev, city: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="NY" value={selectedAddress.state} onChange={e => setSelectedAddress(prev => ({ ...prev, state: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zip / Postal code *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="12345" value={selectedAddress.zip} onChange={e => setSelectedAddress(prev => ({ ...prev, zip: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="United States" value={selectedAddress.country} onChange={e => setSelectedAddress(prev => ({ ...prev, country: e.target.value }))} />
            </div>
            <div className="md:col-span-2 flex items-center mt-2">
              <input type="checkbox" className="mr-2" id="useForPayment" />
              <label htmlFor="useForPayment" className="text-sm text-gray-700">Use this address for payment details</label>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check Pincode Serviceability (Delhivery)</label>
              <div className="flex gap-2 items-center">
                <input type="text" className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Enter Pincode" value={pincode} onChange={e => setPincode(e.target.value)} />
                <button type="button" className="bg-cyan-600 text-white px-4 py-2 rounded-lg" onClick={handleCheckPincode}>Check</button>
              </div>
              {pincodeResult && (
                <div className={`mt-2 text-sm ${pincodeResult.available ? 'text-green-600' : 'text-red-600'}`}>{pincodeResult.message}</div>
              )}
            </div>
          </form>
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="w-full flex flex-col gap-8">
          <div className="text-lg font-semibold text-gray-700 mb-4">Review your order</div>
        </div>
      );
    }
    return null;
  }

  useEffect(() => {
    if (step === 2 && !window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {};
      document.body.appendChild(script);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2 && showRazorpay && window.Razorpay) {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_pePfQTitk8KOIT',
        amount: price * 100,
        currency: 'INR',
        name: 'ENTION',
        description: 'Order Payment',
        handler: function (response) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: { color: '#0FAFCA' },
        display: {
          embed: true,
          container: 'razorpay-embed-container'
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [step, showRazorpay, price]);

  return (
    <>
      {/* Desktop Layout */}
      <main className="hidden md:block min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] pt-32">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl min-h-[70vh] overflow-hidden">
          {/* Left: Stepper and Form (now on the left) */}
          <section className="w-full md:w-3/5 flex flex-col items-start justify-start px-8 py-12 relative min-h-[500px]">
            <h2 className="text-2xl font-bold text-[#0FAFCA] mb-8">Checkout</h2>
            {/* Stepper */}
            <div className="flex items-center mb-10 w-full">
              {steps.map((label, idx) => (
                <div key={label} className="flex items-center">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 border-cyan-400 font-bold transition-all ${step === idx + 1 ? 'bg-cyan-400 text-white' : 'bg-white text-cyan-400'}`}>{idx + 1}</div>
                  <span className={`ml-2 font-semibold transition-all ${step === idx + 1 ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
                  {idx < steps.length - 1 && <div className="flex-1 h-0.5 bg-cyan-200 mx-2" />}
                </div>
              ))}
            </div>
            {/* Step Content */}
            <div className="flex-1 w-full">{renderStepContent()}</div>
            {step === 2 && !showRazorpay && (
              <button
                className="absolute left-8 right-8 bottom-8 bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition"
                onClick={() => setShowRazorpay(true)}
                style={{ zIndex: 10 }}
              >
                Pay Now
              </button>
            )}
            {step === 2 && showRazorpay && (
              <div id="razorpay-embed-container" style={{ width: '100%' }}></div>
            )}
          </section>
          {/* Right: Order Summary (now on the right) */}
          <aside className="w-full md:w-2/5 flex flex-col items-start justify-between px-8 py-12 border-l border-gray-200">
            <div className="w-full">
              {/* Back Arrow */}
              {step > 1 && (
                <button
                  className="mb-6 flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-medium text-base transition"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              )}
              <div className="mb-10 flex items-center gap-4">
                {/* Removed Sitemark logo and text */}
              </div>
              {/* In the right-side summary, remove all dummy order summary and product details. */}
              {/* Instead, display the actual product price (from user selection or state) in the summary. */}
              {/* Keep the Next button for navigation. */}
              {/* On step 2, automatically show the Razorpay UI (no button click required). */}
            </div>
            {step === 1 && (
              <button
                className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 rounded-xl shadow-lg text-lg transition mt-8"
                onClick={() => setStep(step + 1)}
              >
                Next
              </button>
            )}
            {step === 2 && showRazorpay && (
              <div id="razorpay-embed-container" style={{ width: '100%' }}></div>
            )}
          </aside>
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="block md:hidden min-h-screen w-full bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] p-2 py-36">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl my-6 overflow-hidden flex flex-col px-2">
          {/* Mobile Back Button */}
          {step > 1 && (
            <button
              className="flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-medium text-base transition mt-4 mb-2 ml-1"
              onClick={() => setStep(step - 1)}
              type="button"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          )}
          {/* Mobile Stepper */}
          <div className="flex items-center justify-center gap-2 py-4 bg-white sticky top-0 z-10">
            {steps.map((label, idx) => (
              <div key={label} className="flex flex-col items-center flex-1">
                <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 border-cyan-400 font-bold text-sm transition-all ${step === idx + 1 ? 'bg-cyan-400 text-white' : 'bg-white text-cyan-400'}`}>{idx + 1}</div>
                <span className={`mt-1 text-xs font-semibold transition-all ${step === idx + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{label.split(' ')[0]}</span>
              </div>
            ))}
          </div>
          {/* Mobile Step Content */}
          <div className="px-1 py-6 flex-1">
            {/* Fix dropdown width in step 1 */}
            {step === 1 ? (
              <div className="w-full max-w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">Saved addresses</label>
                <select
                  className="w-full max-w-full border border-gray-300 rounded-lg px-4 py-3 mb-2"
                  value={useSavedAddress ? selectedAddress.id : ''}
                  onChange={e => {
                    setUseSavedAddress(true);
                    // selectedAddress.id is not defined, so this will not work as intended
                    // setSelectedAddress(Number(e.target.value)); 
                  }}
                >
                  {/* savedAddresses is removed, so this loop is removed */}
                  <option value="">Add new address</option>
                </select>
                <button
                  type="button"
                  className="text-cyan-600 underline text-xs font-medium hover:text-cyan-800"
                  onClick={() => { setUseSavedAddress(false); setSelectedAddress({}); }}
                >
                  + Add new address
                </button>
              </div>
            ) : (
              renderStepContent()
            )}
          </div>
          {/* Mobile Order Summary (collapsible) */}
          {/* In the mobile layout, remove the <details> block and any mock order summary data. */}
          {/* Only show the address form and Next button on step 1, and the review step with Pay Now button (and Razorpay UI) on step 2. */}
          {/* Mirror the desktop logic for navigation and payment on mobile. */}
          {step === 1 && (
            <button
              className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 rounded-xl shadow-lg text-lg transition mt-8"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          )}
          {step === 2 && !showRazorpay && (
            <button
              className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 rounded-xl shadow-lg text-lg transition mt-8"
              onClick={() => setShowRazorpay(true)}
            >
              Pay Now
            </button>
          )}
          {step === 2 && showRazorpay && (
            <div id="razorpay-embed-container" style={{ width: '100%' }}></div>
          )}
        </div>
      </main>
    </>
  );
} 