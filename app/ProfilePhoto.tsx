"use client";

import { useState } from "react";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="photo-fallback">NS</div>;
  }

  return (
    <img
      src="/profile.jpg"
      alt="Nimra Shoukat"
      onError={() => setFailed(true)}
    />
  );
}