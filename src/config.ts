export const siteConfig: SiteConfig = {
    title: "四季如春",
    language: "zh",
    description: "明明都向前走，方向却渐渐不同",
    keywords: "",
    author: "GEMILUXVII",
    avatar: "pngs/sss.jpg",
    favicon: "pngs/favicon-2.png",
    site: "https://www.uxvii.uno/",

    page_size: 4,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Links',
            url: '/links'
        },
        {
            name: 'Others',
            url: '/projects'
        },
        {
            name: 'About',
            url: '/about'
        }
    ]
}

export const socialLinks: SocialLink[] = [
  // https://icon-sets.iconify.design/material-symbols/
  {
      label: 'BiliBili',
      icon: 'SimpleIconsBilibili',
      url: 'https://space.bilibili.com/403039446'
  },
  {
      label: 'CloudMusic',
      icon: 'neteasecloudmusic',
      url: 'https://music.163.com/#/user/home?id=1551269993'
  },
  {
      label: 'QQMusic',
      icon: 'qqmusic',
      url: 'https://c6.y.qq.com/base/fcgi-bin/u?__=5NyOw1LcTMcE'
  },
  {
      label: 'Telegram',
      icon: 'telegram',
      url: 'https://t.me/forSeasons7'
  }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string

    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}
