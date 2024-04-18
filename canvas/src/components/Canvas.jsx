import React from "react";


const Canvas = (...props) => {
    const templateData = {
        caption: {
          text: props.content || "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
          position: { x: 50, y: 100 },
          font_size: 44,
          alignment: "left",
          text_color: "#FFFFFF",
          max_characters_per_line: 31,
        },
        cta: {
          text: props.ctaText || "Shop Now",
          position: { x: 190, y: 320 },
          font_size: 30,
          text_color: "#FFFFFF",
          background_color: "#000000",
          wrap_length: 200,
        },
        image_mask: {
          x: 56,
          y: 442,
          width: 970,
          height: 600,
        },
        urls: {
          mask: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
          stroke:
            "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
          design_pattern:
            "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png",
        },
      };

    return (
    <>
      <div className="flex items-center w-2/4 h-screen justify-center bg-zinc-300">
        <canvas
          height="1080"
          width="1080"
          style={{ height: 400, width: 400, backgroundColor: "white" }}
        ></canvas>
      </div>
    </>
  );
};

export default Canvas;
