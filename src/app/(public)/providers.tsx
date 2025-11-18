"use client";

import { useEffect } from "react";

export default function Providers() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@/mocks").then(({ initMocks }) => initMocks());
    }
  }, []);

  return null;
}
