import { Sections } from "@/app/Utils/Interface/type";

export const sections: Sections[] = [
  {
    title: "ГОТОВЫЕ БУКЕТЫ\n ИЗ СУХОЦВЕТОВ",
    items: ["Букеты", "Для интерьера", "Композиции"],
    href: "/",
    grid: { xs: 12, md: 5 },
    sx: { order: { xs: 2, md: 1 } }
  },

  {
    title: "ЦВЕТЫ",
    items: [
      "Сборные букеты",
      "Монобукеты",
      "Композиции из цветов",
      "Розы",
      "Свадебные",
    ],
    href: "/",
    grid: { xs: 12, md: 6 },
    sx: {
      position: "relative", order: { xs: 1, md: 2 },
      top: { xs: 0, lg: "-80px" }
    },
  },
  {
    title: "ДОПОЛНИТЕЛЬНО",
    items: ["Шары", "Игрушки", "Открытки", "Упаковка"],
    href: "/",
    grid: { xs: 12, md: 6 },
    sx: { order: { xs: 3, md: 3 }, },
  },
];
