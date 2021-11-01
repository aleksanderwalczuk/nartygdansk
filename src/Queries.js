export const POSTS_QUERY = `query allPosts {
  allPosts {
    id
    content
    title
    visible
    publishDate
    image {
      alt
      id
      url
    }
  }
}
`;

export const INFO_QUERY = `query info {
  info {
    id
    title
    content
    visible
    publishDate
    image {
      alt
      id
      url
    }
  }
}
`

export const ALL_IN_ONE_QUERY = `query AllInOne {
  allPosts {
    id
    content
    title
    visible
    publishDate
    image {
      alt
      id
      url
      responsiveImage {
        sizes
        srcSet
      }
    }
  }
  info {
    hoursFriday
    hoursMonday
    hoursSaturday
    hoursSunday
    hoursThursday
    hoursTuesday
    hoursWednesday
    phonePrimary
    phoneSecondary
    postcodeCity
    street
  }
  term {
    conditions {
      value
    }
  }
  hero {
    title
    heroImg {
      alt
      responsiveImage {
        src
        srcSet
        alt
      }
    }
  }
}
`
