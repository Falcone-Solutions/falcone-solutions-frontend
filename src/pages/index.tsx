import React, { useCallback, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  const resolveContent = useCallback(() => {
    if (isOpen) {
      return (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 70,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            onClick={(e) => {
              window.location.href = "mailto:falcone@test.com";
              e.preventDefault();
            }}
            href="https://t.me/andreasfalcone"
            style={{ alignItems: "center", display: "flex" }}
          >
            <NextImage
              src="/static/email.png"
              alt="Email"
              width={50}
              height={50}
            />
          </Link>

          <Link
            href="https://t.me/andreasfalcone"
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <NextImage
              src="/static/telegram.png"
              alt="Telegram"
              width={50}
              height={50}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <NextImage
          alt="Contact Mail"
          src="/static/contact-mail.png"
          width={50}
          height={50}
          color="#1D2532"
        />
      );
    }
  }, [isOpen]);

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: "30%",
        left: "24%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo src="/static/logo.png" width={1000} height={150} alt="Brand Logo" />
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity .5s ease-in-out",
        }}
      >
        <motion.div
          layout
          data-isOpen={isOpen}
          whileHover={{ scale: 1.08 }}
          className="parent"
          onClick={() => setIsOpen(!isOpen)}
          style={{ marginTop: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 17 }}
        >
          {resolveContent()}
        </motion.div>
      </div>
    </div>
  );
}
