'use client';

import { useEffect, useState } from 'react';

export default function MobileDesktopNotice() {
  const [show, setShow] = useState(false);

 useEffect(() => {
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    setShow(true);
  }
}, []);

  const close = () => {
  setShow(false);
};

  if (!show) return null;

  return (
    <div className="w-[90%] max-w-md rounded-2xl border border-white/10 bg-[#181614] p-6 shadow-2xl">
  <div className="w-[90%] max-w-md rounded-2xl border border-white/10 bg-[#181614]/95 backdrop-blur-xl p-6 shadow-2xl">

    <p className="text-white/80 text-center text-sm leading-6">
      For the best experience, please view this website in{" "}
      <span className="text-primary font-semibold">
        Desktop Site
      </span>.
    </p>

    <button
      onClick={close}
      className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-black hover:opacity-90 transition"
    >
      Continue
    </button>

  </div>
</div>
  );
}