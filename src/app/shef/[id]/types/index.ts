export type ChefProps = {
  id: number
  name: string
  description: string
  image: string
  likes?: number
}

export type ChefSocialLinkProps = {
  chefId: number
  twitter?: {
    userName: string
    link: string
  }
  facebook?: {
    userName: string
    link: string
  }
  instagram?: {
    userName: string
    link: string
  }
}

export const chefData: ChefProps[] = [
  {
    id: 1,
    name: "Chef 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, vitae ultricies nisl nunc vitae nunc. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, vitae ultricies nisl nunc vitae nunc.",
    image: "https://picsum.photos/200/300",
    likes: 10,
  },
  {
    id: 2,
    name: "Chef 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, vitae ultricies nisl nunc vitae nunc. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, vitae ultricies nisl nunc vitae nunc.",
    image: "https://picsum.photos/200/300",
    likes: 20,
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
