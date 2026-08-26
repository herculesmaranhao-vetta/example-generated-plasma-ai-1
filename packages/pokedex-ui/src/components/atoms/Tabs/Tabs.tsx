import { Tabs as AntTabs } from "antd";
import React from "react";
import type { TabsProps } from "./Tabs.types";

export const Tabs: React.FC<TabsProps> = ({
  id,
  className,
  items,
  activeKey,
  onChange,
}) => (
  <AntTabs
    id={id}
    className={`ds-tabs ${className ?? ""}`}
    items={items}
    activeKey={activeKey}
    onChange={onChange}
  />
);