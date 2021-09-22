import React from 'react';
import { useRouter } from 'next/router'; 

const BlogPostPage = () => {
    const {pathname, query} = useRouter();
    return <>
    <h1>Blog Post Page</h1>
    <code>
        pathname : {JSON.stringify(pathname)}
        <br/>
        <hr/>
        query    : {JSON.stringify(query)}
        <br/>
        <hr/>
      </code>
    </>
}

export default BlogPostPage;