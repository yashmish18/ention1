import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, FaBoxOpen, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function CheckoutSummary() {
  // Dummy addresses
  const addresses = [
    {
      id: 1,
      name: 'John Doe',
      line1: '123 Main Street',
      line2: 'Apt 4B',
      city: 'New Delhi',
      state: 'Delhi',
      zip: '110001',
      phone: '+91 9876543210',
    },
    {
      id: 2,
      name: 'Jane Smith',
      line1: '456 Park Avenue',
      line2: 'Suite 12',
      city: 'Mumbai',
      state: 'Maharashtra',
      zip: '400001',
      phone: '+91 9123456789',
    },
  ];
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [showAddressSelect, setShowAddressSelect] = useState(false);

  // Dummy payment methods
  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: <FaCreditCard className="inline mr-2" /> },
    { id: 'upi', label: 'UPI', icon: <FaMobileAlt className="inline mr-2" /> },
    { id: 'cod', label: 'Cash on Delivery', icon: <FaMoneyBillWave className="inline mr-2" /> },
  ];
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);

  const deliveryDate = 'Monday, 10 June 2024';
  const product = {
    name: 'ENTION E3 Laptop',
    image: '/assets/product_/e3/1.jpg',
    price: 49999,
    quantity: 1,
  };
  const subtotal = product.price * product.quantity;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] flex flex-col items-center pt-32 pb-4 px-2">
      {/* Order Summary Heading */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">Order Summary</h1>
        <div className="h-1 w-20 bg-cyan-400 rounded-full mb-1" />
      </div>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Merged Left Card */}
        <div className="flex-1 flex flex-col">
          <div className="rounded-2xl bg-white shadow-2xl p-5 flex flex-col gap-4">
            {/* Delivery Address */}
            <section>
              <div className="flex items-center gap-2 mb-1">
                <FaMapMarkerAlt className="text-lg text-cyan-600" />
                <h2 className="text-base font-bold text-[#133B5C]">Delivery Address</h2>
              </div>
              <div className="text-[#133B5C] mb-0.5 text-sm">{selectedAddress.name}</div>
              <div className="text-[#133B5C] mb-0.5 text-sm">{selectedAddress.line1}, {selectedAddress.line2}</div>
              <div className="text-[#133B5C] mb-0.5 text-sm">{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</div>
              <div className="text-[#133B5C]/80 text-xs mb-0.5">Phone: {selectedAddress.phone}</div>
              <button
                className="mt-1 text-cyan-600 underline text-xs font-medium hover:text-cyan-800"
                onClick={() => setShowAddressSelect(!showAddressSelect)}
              >
                Change Address
              </button>
              {showAddressSelect && (
                <div className="mt-2 border-t border-cyan-200 pt-2">
                  <div className="font-semibold text-[#133B5C] mb-1 text-sm">Select Address:</div>
                  {addresses.map(addr => (
                    <div key={addr.id} className="mb-1 flex items-center">
                      <input
                        type="radio"
                        id={`address-${addr.id}`}
                        name="address"
                        checked={selectedAddress.id === addr.id}
                        onChange={() => { setSelectedAddress(addr); setShowAddressSelect(false); }}
                        className="mr-2 accent-cyan-600"
                      />
                      <label htmlFor={`address-${addr.id}`} className="text-[#133B5C] cursor-pointer text-xs">
                        {addr.name}, {addr.line1}, {addr.city}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </section>
            <hr className="my-2 border-cyan-100" />
            {/* Estimated Delivery */}
            <section>
              <div className="flex items-center gap-2 mb-1">
                <FaCalendarAlt className="text-lg text-cyan-600" />
                <h2 className="text-base font-bold text-[#133B5C]">Estimated Delivery</h2>
              </div>
              <div className="text-[#133B5C] text-sm">{deliveryDate}</div>
            </section>
            <hr className="my-2 border-cyan-100" />
            {/* Payment Method */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <FaCreditCard className="text-lg text-cyan-600" />
                <h2 className="text-base font-bold text-[#133B5C]">Payment Method</h2>
              </div>
              <div className="flex flex-col gap-2">
                {paymentMethods.map(method => (
                  <label key={method.id} className={`flex items-center cursor-pointer border-2 rounded-xl px-3 py-2 text-base font-semibold transition-all ${selectedPayment === method.id ? 'border-cyan-500 bg-cyan-50 shadow-lg' : 'border-gray-200 bg-white'}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={() => setSelectedPayment(method.id)}
                      className="mr-2 w-5 h-5 accent-cyan-600"
                    />
                    <span className="text-[#133B5C] text-base flex items-center">{method.icon}{method.label}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>
        </div>
        {/* Order Summary Card */}
        <aside className="w-full md:w-[320px] flex-shrink-0">
          <div className="rounded-2xl bg-white shadow-2xl p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <FaBoxOpen className="text-lg text-cyan-600" />
              <h2 className="text-base font-bold text-[#133B5C]">Order Summary</h2>
            </div>
            <div className="flex gap-3 mb-3">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg border border-cyan-100" />
              <div className="flex-1">
                <div className="font-bold text-[#133B5C] text-sm mb-0.5">{product.name}</div>
                <div className="text-[#133B5C]/80 text-xs mb-0.5">Qty: {product.quantity}</div>
                <div className="text-[#133B5C] font-semibold text-base">₹{product.price.toLocaleString()}</div>
              </div>
            </div>
            <div className="border-t border-cyan-100 pt-3 mt-3">
              <div className="flex justify-between mb-1 text-[#133B5C] text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-1 text-[#133B5C] text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between font-bold text-base text-[#133B5C] mb-3">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-2.5 rounded-xl shadow-lg text-base transition mb-1">Place Order</button>
              <div className="text-xs text-cyan-600 text-center">By placing your order, you agree to ENTION's terms and conditions.</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
} 