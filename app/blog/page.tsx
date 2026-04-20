import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <main id="main-content" role="main" className="mx-auto max-w-6xl px-5 pt-[116px] pb-16 md:pt-[132px] md:pb-20">
      <section className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-xs font-medium text-slate-600">
          Blog
        </div>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
          Practical notes on Power Platform, Copilot, and automation delivery
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
          Implementation lessons, adoption patterns, and governance decisions from real-world
          consulting engagements.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Blog posts">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time>
              {Array.isArray(post.metadata.tag) && post.metadata.tag.length > 0 ? (
                <Badge variant="secondary" className="text-xs">
                  {post.metadata.tag[0]}
                </Badge>
              ) : null}
            </div>

            <h2 className="mt-3 text-lg font-semibold text-slate-900">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.metadata.title}
              </Link>
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.metadata.summary}</p>

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                Read article
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
