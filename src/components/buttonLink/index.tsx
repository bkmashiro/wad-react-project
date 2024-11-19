import React from "react";
import Chip from "@mui/material/Chip";

interface ChipLinkProps {
  text: string; // 显示的文本
  link: string; // 跳转的链接
}

const ChipLink: React.FC<ChipLinkProps> = ({ text, link }) => {
  const handleClick = () => {
    window.location.href = link; // 跳转到指定链接
  };

  return (
    <Chip
      label={text}
      onClick={handleClick}
      clickable
      style={{
        backgroundColor: "#007BFF",
        color: "#fff",
        fontWeight: "bold",
      }}
    />
  );
};

export default ChipLink;
