import type { NextConfig } from "next";

/**
 * Inside the Base44 sandbox the dev server is reached through the preview proxy.
 * The browser sends an Origin of https://3000-<BASE44_PUBLIC_HOST_SUFFIX> while the
 * server sees a different Host, so Next blocks dev assets and HMR unless that
 * origin is explicitly allowed. Only applied when BASE44_PREVIEW_MODE === "1";
 * everywhere else the allowlist stays empty and the default behaviour is kept.
 */
const allowedDevOrigins =
  process.env.BASE44_PREVIEW_MODE === "1" && process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
    : [];

const nextConfig: NextConfig = {
  allowedDevOrigins,
};

export default nextConfig;
