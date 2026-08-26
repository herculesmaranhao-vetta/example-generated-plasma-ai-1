import { Avatar as AntAvatar } from "antd";
import React from "react";
import type { AvatarProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarProps> = ({
  id,
  className,
  src,
  text,
  icon,
  shape = "rounded",
  size = 64,
}) => (
  <AntAvatar
    id={id}
    className={`ds-avatar ${className ?? ""}`}
    src={src}
    icon={icon}
    shape={shape}
    size={size}
  >
    {text}
  </AntAvatar>
);