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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[92%] max-w-sm rounded-2xl border border-white/10 bg-[#181614]/95 backdrop-blur-xl p-5 shadow-2xl">

      <p className="text-white text-center text-sm leading-6">
  For the best experience, view this website in{" "}
  <span className="text-primary font-semibold">
    Desktop Site
  </span>.
</p>

      <button
  onClick={close}
  className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-black transition hover:opacity-90"
>
  Continue
</button>

    </div>
  );
}