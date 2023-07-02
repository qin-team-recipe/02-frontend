import {
  ChefProps,
  ChefSocialLinkProps,
} from "@/app/shef/[id]/components/types"

export const chefData: ChefProps[] = [
  {
    id: 1,
    name: "Chef 1",
    description: "Chef 1 description",
    path: "/chef/1",
    likes: 100,
  },
  {
    id: 2,
    name: "Chef 2",
    description: "Chef 2 description",
    path: "/chef/2",
    likes: 200,
  },
  {
    id: 3,
    name: "Chef 3",
    description: "Chef 3 description",
    path: "/chef/3",
    likes: 300,
  },
]

export const chefSocialLinks: ChefSocialLinkProps[] = [
  {
    chefId: 1,
    instagram: {
      userName: "chef_1_insta",
      link: "https://www.instagram.com/",
    },
    facebook: {
      userName: "chef_1_fs",
      link: "https://www.facebook.com/",
    },
    twitter: {
      userName: "chef_1_tw",
      link: "https://www.twitter.com/",
    },
  },
  {
    chefId: 2,
    instagram: {
      userName: "chef_2_insta",
      link: "https://www.instagram.com/",
    },
    facebook: {
      userName: "chef_2_fs",
      link: "https://www.facebook.com/",
    },
    twitter: {
      userName: "chef_2_tw",
      link: "https://www.twitter.com/",
    },
  },
]
