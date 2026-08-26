import { faArrowLeft, faChevronRight, faMoon, faQuestionCircle, faSearch, faSun } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { IconProps } from "./Icon.types";

const iconMap: Record<string, unknown> = {
  search: faSearch,
  moon: faMoon,
  sun: faSun,
  "arrow-left": faArrowLeft,
  "chevron-right": faChevronRight,
  "question-circle": faQuestionCircle,
};

const sizeMap = {
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
      <FontAwesomeIcon icon={icon as unknown as import("@fortawesome/fontawesome-svg-core").IconDefinition} fontSize={sizeMap[size]} />
    </span>
  );
};