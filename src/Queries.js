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
  allPosts(first: "3") {
    id
    content
    title
    visible
    publishDate
    image {
      responsiveImage(imgixParams: {crop: focalpoint, h: "300", w: "300"}) {
        sizes
        src
        srcSet
        height
        title
        webpSrcSet
        width
        alt
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
    terms
    visible
  }
  hero {
    title
    subtitle
    heroImg {
      alt
      responsiveImage (imgixParams: {fit: fillmax}){
        src
        srcSet
        alt
        sizes
        width
        height
      }
    }
  }
}
`
