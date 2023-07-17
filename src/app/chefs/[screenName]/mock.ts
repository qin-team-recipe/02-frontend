import { LinkType } from "@/app/recipes/commonComponents/organisms/LinkIcons"

import { RecipeImage } from "./type"

// シェフ概要ダミーデータ
export const dummyChefDataList = [
  {
    screenName: "hogescreen",
    outline: {
      title: "山田シェフ",
      description:
        "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
      followerCount: 768,
      imageUrl: "/takada-images/chefs/chef1.jpg",
      isMyFavorite: false,
      isFamousChef: true,
      recipeCount: 123,
      userId: 100,
    },
  },
  {
    screenName: "hoge",
    outline: {
      title: "鈴木太郎",
      description: "初心者です。料理を作ったことが２回しかありません。",
      followerCount: 1768,
      imageUrl: undefined,
      isMyFavorite: false,
      isFamousChef: false,
      recipeCount: 246,
      userId: 101,
    },
  },
  {
    screenName: "hogehoge3",
    outline: {
      title: "田中シェフ",
      description:
        "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
      followerCount: 8,
      imageUrl: "/takada-images/chefs/chef2.jpg",
      isMyFavorite: false,
      isFamousChef: true,
      recipeCount: 568,
      userId: 102,
    },
  },
]

// リンクダミーデータ
export const dummyLinkDataList: {
  screenName: string
  links: LinkType[]
}[] = [
  {
    screenName: "hogescreen",
    links: [
      {
        name: "YouTube",
        type: "YouTube",
        url: "http://www.youtube.com/",
        image: undefined,
      },
      {
        name: "Twitter",
        url: "http://www.twitter.com/",
        type: "Twitter",
        image: undefined,
      },
      {
        name: "Instagram",
        url: "http://www.instagram.com/",
        type: "Instagram",
        image: undefined,
      },
      {
        name: "Facebook",
        url: "http://www.facebook.com/",
        type: "Facebook",
        image: undefined,
      },
      {
        name: "ほげほげ.com",
        url: "http://www.hogehoge.com/",
        type: undefined,
        image: "/takada-images/my-recipes/recipe1.jpg",
      },
    ],
  },
  {
    screenName: "hoge",
    links: [
      {
        name: "Twitter",
        url: "http://www.twitter.com/",
        type: "Twitter",
        image: undefined,
      },
      {
        name: "ほげほげ.com",
        url: "http://www.hogehoge.com/",
        type: undefined,
        image: "/takada-images/my-recipes/recipe1.jpg",
      },
      {
        name: "ほげほげ2.com",
        url: "http://www.hogehoge.com/",
        type: undefined,
        image: "/takada-images/my-recipes/recipe1.jpg",
      },
      {
        name: "ほげほげ3.com",
        url: "http://www.hogehoge.com/",
        type: undefined,
        image: "/takada-images/my-recipes/recipe1.jpg",
      },
    ],
  },
]

// 新着レシピ
export const newRecipeImages: RecipeImage[] = [
  {
    id: 1,
    name: "長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1長いマイレシピ1",
    description:
      "長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1長い説明1",
    path: "/takada-images/new-recipes/recipe1.jpg",
    favoriteCount: 123,
  },
  {
    id: 2,
    name: "新レシピ2",
    description: "説明2",
    path: "/takada-images/new-recipes/recipe2.jpg",
    favoriteCount: 45,
  },
  {
    id: 3,
    name: "新レシピ3",
    description: "説明3",
    path: "/takada-images/new-recipes/recipe3.jpg",
    favoriteCount: 0,
  },
  {
    id: 4,
    name: "新レシピ4",
    description: "説明4",
    path: "/takada-images/new-recipes/recipe4.jpg",
    favoriteCount: 1234,
  },
  {
    id: 5,
    name: "新レシピ5",
    description: "説明5",
    path: "/takada-images/new-recipes/recipe5.jpg",
    favoriteCount: 12345,
  },
]

// 人気レシピ
export const popularRecipeImages: RecipeImage[] = [
  {
    id: 1,
    name: "人気グラタン",
    description: "グラタン",
    path: "/takada-images/my-recipes/recipe1.jpg",
    favoriteCount: 10,
  },
  {
    id: 2,
    name: "人気ラーメン",
    description: "説明2",
    path: "/takada-images/my-recipes/recipe2.jpg",
    favoriteCount: 0,
  },
  {
    id: 3,
    name: "人気そば",
    description: "説明3",
    path: "/takada-images/my-recipes/recipe3.jpg",
    favoriteCount: 1234,
  },
  {
    id: 4,
    name: "人気チャーハン",
    description: "説明4",
    path: "/takada-images/my-recipes/recipe4.jpg",
    favoriteCount: 12345,
  },
  {
    id: 5,
    name: "人気ハンバーグ",
    description: "説明5",
    path: "/takada-images/my-recipes/recipe5.jpg",
    favoriteCount: 1234,
  },
  {
    id: 6,
    name: "人気スイーツ",
    description: "説明6",
    path: "/takada-images/my-recipes/recipe6.jpg",
    favoriteCount: 1234,
  },
  {
    id: 7,
    name: "カレー",
    description: "説明7",
    path: "/takada-images/my-recipes/recipe7.jpg",
    favoriteCount: 1234,
  },
]
