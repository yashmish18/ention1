import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      posts {
        title
        slug
        author {
          name
        }
        keywords
        excerpt
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        photo {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        keywords
        featuredImage {
          url
        }
        author{
          name
          bio
          degree
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
          photo {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}
                              orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              degree
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getSingleCategory = async (slug) => {
  const query = gql`
    query GetSingleCategory($slug : String!) {
      category(where: {slug: $slug}) {
        name
        slug
        description
        keywords
        photo {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts() {
      posts(where: {featuredPost: true}
        orderBy: createdAt_DESC
        first: 6) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        excerpt
        createdAt
        hoverText
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};



export const getTrendingPosts = async () => {
  const query = gql`
    query GetTrendingPosts() {
      postsConnection(where: {categories_some: {name: "Trending" }}
                      orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              degree
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            hoverText
            featuredImage {
              url
            }
            categories {
              name
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getLifestylePosts = async () => {
  const query = gql`
    query GetLifestylePosts() {
      postsConnection(where: {categories_some: {name: "Lifestyle" }}
                              orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              degree
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            hoverText
            featuredImage {
              url
            }
            categories {
              name
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getTravelPosts = async () => {
  const query = gql`
    query GetTravelPosts() {
      postsConnection(where: {categories_some: {name: "Travel" }}
                              orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              degree
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            hoverText
            featuredImage {
              url
            }
            categories {
              name
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const submitBlog = async (obj) => {
  const result = await fetch('/api/userblog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getOurTeams = async () => {
  const query = gql`
    query GetOurTeams() {
      ourTeams {
        name
        position
        firstPicture {
          url
        }
        secondPicture {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.ourTeams;
};

export const getSponsoredADs = async () => {
  const query = gql`
    query GetSponsoredADs() {
      sponsoredAds {
        name
        picture {
          url
        }
        description
        url
        publishedAt
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.sponsoredAds;
};
