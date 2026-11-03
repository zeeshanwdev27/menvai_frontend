import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Check, Banknote, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearCart } from "../../features/Cart/CartSlice";

const SHIPPING_PRICE = 5;
const REDIRECT_DELAY = 3000; // ms before going back to the home page

const emptyForm = {
  fullName: "",
  phone: "",
  city: "",
  address: "",
  note: "",
};

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Works whether your store gives you the array or the slice object
  const cartState = useSelector((state) => state.carts);
  const items = Array.isArray(cartState) ? cartState : cartState?.carts ?? [];

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subTotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subTotal + SHIPPING_PRICE;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // After the success popup, redirect to the home page
  useEffect(() => {
    if (!orderPlaced) return;
    const timer = setTimeout(() => navigate("/"), REDIRECT_DELAY);
    return () => clearTimeout(timer);
  }, [orderPlaced, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (form.fullName.trim().length < 3)
      newErrors.fullName = "Please enter your full name.";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15)
      newErrors.phone = "Please enter a valid phone number.";
    if (form.city.trim().length < 2) newErrors.city = "Please enter your city.";
    if (form.address.trim().length < 8)
      newErrors.address = "Please enter your complete shipping address.";
    return newErrors;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const order = {
      orderId: nanoid(10),
      createdAt: new Date().toISOString(),
      paymentMethod: "COD",
      customer: {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        address: form.address.trim(),
        note: form.note.trim(),
      },
      items: items.map((item) => ({
        title: item.title,
        size: item.size,
        sizeType: item.sizeType,
        color: item.color,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        lineTotal: item.price,
      })),
      subTotal,
      shipping: SHIPPING_PRICE,
      total,
    };

    // No backend yet: just log the order
    console.log("NEW ORDER:", order);

    setOrderPlaced(true);
    dispatch(clearCart());
  };

  const inputClass = (name) =>
    `w-full py-6 lg:py-5 lg:px-3 bg-white lg:text-lg ${
      errors[name] ? "border-red-500" : ""
    }`;

  const textareaClass = (name) =>
    `w-full border px-3 py-3 text-base lg:text-lg bg-white rounded-md outline-none focus:ring-2 focus:ring-black/20 ${
      errors[name] ? "border-red-500" : "border-input"
    }`;

  // Empty cart (and no order just placed)
  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center gap-5 items-center w-full px-5 mt-19 lg:mt-0">
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <h2 className="text-lg font-bold truncate">YOUR BAG IS EMPTY</h2>
          <p className="text-sm text-gray-700 text-center">
            Add some products to your bag before checking out.
          </p>
        </div>
        <Button
          onClick={() => navigate("/collections/mens")}
          className="h-auto w-1/2 lg:w-1/6 py-3 text-sm font-bold cursor-pointer rounded-4xl"
        >
          SHOP MENS
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* First Row: heading */}
      <div className="flex flex-col gap-10 px-5 lg:px-10 mt-5 md:mt-19 lg:mt-0 py-7">
        <div className="flex flex-col gap-2">
          <Link
            to="/collections/mens"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold hover:opacity-70 w-fit"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
            CONTINUE SHOPPING
          </Link>
          <h1 className="text-[30px] lg:text-[44px] font-bold truncate">
            CHECKOUT
          </h1>
          <p className="text-md lg:text-xl text-gray-800 leading-snug text-balance max-w-[65rem]">
            Review your bag and enter your delivery details. Pay in cash when
            your order arrives.
          </p>
        </div>
      </div>

      {/* Second Row: form + summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full px-5 lg:px-10 pb-8 mb-19 lg:mt-10">
        {/* ---------- Shipping form ---------- */}
        <form
          onSubmit={handlePlaceOrder}
          noValidate
          className="flex flex-col gap-10 bg-gray-50 px-4 py-4 lg:px-10 lg:py-5 rounded-2xl"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold">SHIPPING DETAILS</h2>

            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-[13px] font-bold">
                FULL NAME
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                autoComplete="name"
                className={inputClass("fullName")}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[13px] font-bold">
                PHONE NUMBER
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="0300 1234567"
                autoComplete="tel"
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-[13px] font-bold">
                CITY
              </label>
              <Input
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                autoComplete="address-level2"
                className={inputClass("city")}
              />
              {errors.city && (
                <p className="text-xs text-red-600">{errors.city}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-[13px] font-bold">
                SHIPPING ADDRESS
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={form.address}
                onChange={handleChange}
                placeholder="House / flat no., street, area"
                autoComplete="street-address"
                className={textareaClass("address")}
              />
              {errors.address && (
                <p className="text-xs text-red-600">{errors.address}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="note" className="text-[13px] font-bold">
                ORDER NOTE{" "}
                <span className="font-normal text-gray-500">(optional)</span>
              </label>
              <textarea
                id="note"
                name="note"
                rows={3}
                value={form.note}
                onChange={handleChange}
                placeholder="Anything we should know about your delivery?"
                className={textareaClass("note")}
              />
            </div>
          </div>

          {/* Payment method: COD only */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[13.5px] font-bold">PAYMENT METHOD</h2>
            <div className="flex items-center gap-3 border border-black p-4">
              <Banknote className="w-6 h-6" strokeWidth={1.5} />
              <div className="flex flex-col">
                <p className="text-sm font-bold">Cash on Delivery (COD)</p>
                <p className="text-xs opacity-70">
                  Pay in cash when your order arrives.
                </p>
              </div>
              <div className="ml-auto w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={orderPlaced}
            className="w-full rounded-2xl py-6 font-bold text-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            PLACE ORDER · ${total.toFixed(2)}
          </Button>
          
        </form>

        {/* ---------- Order summary ---------- */}
        <div className="bg-gray-100 h-fit lg:sticky lg:top-24">
          <div className="px-7 py-7 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-[13.5px] font-bold">
                YOUR ORDER ({items.length}{" "}
                {items.length === 1 ? "ITEM" : "ITEMS"})
              </h2>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[19%_79%] w-full gap-3"
                >
                  <img
                    className="w-19 h-21 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-[13.1px] truncate">{item.title}</p>
                    <p className="text-[13.1px] truncate opacity-60">
                      {item.size} · {item.color}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[13.1px] truncate opacity-60">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-[13.1px] font-semibold truncate">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[13.5px] font-bold pb-1">ORDER SUMMARY</h2>
              <div className="w-full flex justify-between">
                <p className="text-[14px]">Sub Total</p>
                <p className="text-[14px]">${subTotal.toFixed(2)}</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="text-[14px]">Estimated Shipping</p>
                <p className="text-[14px]">${SHIPPING_PRICE.toFixed(2)}</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-bold text-[14px]">Total</p>
                <p className="font-bold text-[14px]">${total.toFixed(2)}</p>
              </div>
              <div className="flex gap-1.5 items-center">
                <CircleAlert className="w-3.5 h-3.5" strokeWidth={2} />
                <p className="text-xs opacity-70">
                  Cash on Delivery is the only payment method available.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ---------- Success popup ---------- */}
<AnimatePresence>
  {orderPlaced && (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-success-title"
        className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center shadow-xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Animated Success Checkmark */}
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-100"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
        >
          <Check className="h-8 w-8" strokeWidth={3} />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-2">
          <h2 id="order-success-title" className="text-xl font-extrabold tracking-tight text-gray-900">
            Order Placed Successfully!
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 text-balance">
            Thank you for your order. Pay in cash when it arrives. Taking you back to the home page...
          </p>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => navigate("/")}
          className="w-full rounded-xl bg-gray-950 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
        >
          Back to Home
        </Button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}

export default Checkout;