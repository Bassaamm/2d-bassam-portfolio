type AppShortcut = {
  name: string;
  shortcutIcon: string;
  onOpen: (value: boolean) => boolean;
};

const appShortcuts: AppShortcut[] = [
  {
    name: "Home",
    shortcutIcon: "home",
    onOpen: (value: boolean) => value,
  },
  {
    name: "Credit",
    shortcutIcon: "credit",
    onOpen: (value: boolean) => value,
  },
];
