import { faArrowLeft, faChevronRight, faHome, faMoon, faQuestionCircle, faSearch, faSun, faThLarge } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import type { IconProps } from "./Icon.types";

const iconMap: Record<string, IconProp> = {
  search: faSearch,
  moon: faMoon,
  sun: faSun,
  "arrow-left": faArrowLeft,
  "chevron-right": faChevronRight,
  "question-circle": faQuestionCircle,
  home: faHome,
  apps: faThLarge,
};

const sizeMap: Record<string, number> = {
  sm: 14,
  md: 16,
  lg: 24,
};

export const Icon: React.FC<IconProps> = ({ id, className, name, size = "md" }) => {
  const icon = iconMap[name];
  if (!icon) {
    return null;
  }
  return (
    <span id={id} className={`ds-icon ${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} fontSize={sizeMap[size]} />
    </span>
  );
};
