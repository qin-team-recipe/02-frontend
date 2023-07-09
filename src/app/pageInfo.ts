type PageInfo = {
  title: string
  image: string
}

export const PAGE_INFO: Record<string, PageInfo> = {
  "/favorites": {
    title: "お気に入り",
    image: "/signin/favorites.png",
  },
  "/shoppinglist": {
    title: "買い物リスト",
    image: "/signin/shopping-list.png",
  },
}
