import { cn } from "@/lib/utils";
import React from "react";

export default function Video() {
  return (
    <div className="size-full">
      <video
        poster="https://api.wezom.com/storage/settings/home_poster/big/dNGONezZ8EOsZvK7hv3adcVGOmAqGvRQfayeHYhQ.jpg?v=1672741772"
        // src="https://api.wezom.com/storage/settings/uLwkmTbOejgA1dvqiDM8puX50Cz275bEVMKBjKRs.webm"
        autoPlay
        loop
        muted
        className="size-full object-cover overflow-clip"
      >
        <source
        //   src="https://api.wezom.com/storage/settings/uLwkmTbOejgA1dvqiDM8puX50Cz275bEVMKBjKRs.webm"
        src={"/wezom-video.webm"}

          type="video/webm"
        />
      </video>
    </div>
  );
}
