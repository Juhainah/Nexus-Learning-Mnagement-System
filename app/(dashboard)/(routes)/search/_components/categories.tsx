"use client";

import { Category } from "@prisma/client";
import {
  FcFilmReel,
  FcMultipleDevices,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcLineChart,
  FcCalculator,
  FcReading,
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Digital Media Productionand Editing": FcFilmReel,
  "Computer Science": FcMultipleDevices,
  "Data and Analytics": FcLineChart,
  "Business and Economics": FcSalesPerformance,
  "Mathematics": FcCalculator,
  "Arts and Design": FcReading,
  "Humanities": FcReading,
};
 

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}