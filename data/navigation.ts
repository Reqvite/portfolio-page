interface Page {
  id: number;
  title: string;
  path: string;
}

export const navigation: Page[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Works", path: "/works" },
];
