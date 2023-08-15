"use client";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

import "./auth.css";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <h1>这是一个模态框</h1>
      <Modal
        open={true}
        //   onClose={handleClose}
      >
        <div className="authWrapper">
          <span onClick={() => router.back()}>Close modal</span>
          <h1>Login</h1>
        </div>
      </Modal>
    </>
  );
}
