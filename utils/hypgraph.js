import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient((process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
});

const getNewsList = async () => {
    try{

        const query = gql`
        `
        let newsList = (await graphQLClient.request(query))
        newsList = newsList.newsList || []
        return newsList

    }catch(err) {
        return []
    }

}

const getNews = async (slug) => {
    try{

        const query = gql`
        `
        let news = (await graphQLClient.request(query))
        news = news.news || []
        return news

    }catch(err) {
        return []
    }
}

const getBusinessList = async () => {
    try{

        const query = gql`
        `
        let businessList = (await graphQLClient.request(query))
        businessList = businessList.businessList || []
        return businessList

    }catch(err) {
        return []
    }

}

const getBusiness = async (slug) => {
    try{

        const query = gql`
        `
        let business = (await graphQLClient.request(query))
        business = business.business || []
        return business

    }catch(err) {
        return []
    }
}

export { getNewsList, getNews, getBusinessList, getBusiness }