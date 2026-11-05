import Layout from '@/components/layout/Layout'
import BlogLibrary from '@/components/blog/BlogLibrary'
import { BLOG_POSTS } from '@/lib/blog-posts.mjs'

export const metadata = {
    title: 'Blogs | TraqAll Field Journal',
    description: 'Practical construction articles covering timecards, equipment, materials, purchasing, tools, issues, budgets, and project setup.',
}

export default function BlogPage() {
    return <Layout headerStyle={2} footerStyle={1}><BlogLibrary posts={BLOG_POSTS} /></Layout>
}
