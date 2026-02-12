"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Loader2,
  X,
} from "lucide-react";

/* =========================
   1️⃣ Validation Schema
========================= */

const contactSchema = z.object({
  user_name: z.string().min(3, "Name must be at least 3 characters"),
  user_email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* =========================
   2️⃣ Props Type
========================= */

type StayInTouchProps = {
  onClose: () => void;
};

/* =========================
   3️⃣ Component
========================= */

const StayInTouch = ({ onClose }: StayInTouchProps) => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);

    try {
      await emailjs.send(
        "service_937avhg",
        "template_kldecwl",
        data,
        "lWH9fhDm34kgql5iv"
      );

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 w-full max-w-2xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <X size={28} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Stay{" "}
            <span className="text-[var(--chart-3)]">In Touch</span>
          </h2>
          <p className="text-gray-500 mt-2">
            I'll get back to you as soon as possible
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  {...register("user_name")}
                  placeholder="Full Name"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.user_name
                      ? "border-red-500"
                      : "border-gray-200"
                  } bg-gray-50 outline-none focus:ring-2 focus:ring-[var(--chart-3)] transition-all`}
                />
              </div>
              {errors.user_name && (
                <p className="text-red-500 text-xs font-medium pl-1">
                  {errors.user_name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  {...register("user_email")}
                  placeholder="Email Address"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.user_email
                      ? "border-red-500"
                      : "border-gray-200"
                  } bg-gray-50 outline-none focus:ring-2 focus:ring-[var(--chart-3)] transition-all`}
                />
              </div>
              {errors.user_email && (
                <p className="text-red-500 text-xs font-medium pl-1">
                  {errors.user_email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1">
            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                {...register("subject")}
                placeholder="Subject"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.subject
                    ? "border-red-500"
                    : "border-gray-200"
                } bg-gray-50 outline-none focus:ring-2 focus:ring-[var(--chart-3)] transition-all`}
              />
            </div>
            {errors.subject && (
              <p className="text-red-500 text-xs font-medium pl-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your message..."
              className={`w-full p-4 rounded-xl border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-200"
              } bg-gray-50 outline-none focus:ring-2 focus:ring-[var(--chart-3)] transition-all resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs font-medium pl-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : isSuccess ? (
              "Message Sent Successfully! ✅"
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default StayInTouch;
