import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';

function CustomSection() {
  return (
    <div className="custom-section" style={{ marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '3rem' }}>JV's Brain Backup</h2>
      <p>Hi, I'm João Victor!</p>
      <p>Here you'll find posts about technology and some thoughts about life. Feel free to reach out, especially if you have a good book recommendation! :)</p>


      <ul>
        <li>
          <a href="https://github.com/joaovictornsv" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joaovictornsv/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:joaovictornsv@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@jvnsdev" target="_blank" rel="noopener noreferrer">YouTube</a>
        </li>
      </ul>
    </div>
  );
}

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      {/* Add your custom section here */}
      <CustomSection />

      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata {...props.metadata} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}