import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getCategoryPost, getSingleCategory } from '../../../services';
import { PostCard, SideCategories } from '../../../components';
import {Loader} from '../../../components/Utils'
import { Footer, Navbar } from 'components'

const CategoryPost = ({ categoryPost, posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{categoryPost.name} category blog posts - ention</title>
        <meta name="description" content={categoryPost.description} />
        <meta name="keywords" content={categoryPost.keywords} />
      </Head>
<main className='bg-[#000F29]'>
<Navbar />
      <div className="container mx-auto px-10 pt-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-28">
              <SideCategories />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </main>
    </>
  );
};
export default CategoryPost;

// getStaticPaths is used by Next.js to pre-render dynamic category pages at build time based on available categories from the CMS.
export async function getStaticPaths() {
  // Disabled GraphQL calls due to missing endpoint
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  // Disabled GraphQL calls due to missing endpoint
  return {
    props: { 
      categoryPost: { name: 'Category', description: '', keywords: '' }, 
      posts: [] 
    },
  };
}
