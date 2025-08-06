import { Calendar, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsArticles = [
  {
    id: "property-buying-guide",
    title: "Property Buying Guide: Essential Documents and Information for Bangalore Real Estate",
    excerpt:
      "A comprehensive guide covering all essential documents, approvals, and processes you need to know before making your property investment in Bangalore.",
    date: "January 20, 2025",
    author: "Prashi Group",
    category: "Property Guide",
    readTime: "15 min read",
    featured: true,
  },
  {
    id: "market-trends-2025",
    title: "Bangalore Real Estate Market Trends 2025",
    excerpt:
      "Discover the latest trends shaping Bangalore's real estate market in 2025, including price movements, emerging localities, and investment opportunities.",
    date: "January 15, 2025",
    author: "Market Research Team",
    category: "Market Analysis",
    readTime: "8 min read",
  },
  {
    id: "smart-investment-strategies",
    title: "Smart Investment Strategies for First-Time Property Buyers",
    excerpt:
      "Essential tips and strategies for first-time property buyers to make informed investment decisions in today's competitive market.",
    date: "January 10, 2025",
    author: "Investment Advisory",
    category: "Investment Tips",
    readTime: "6 min read",
  },
  {
    id: "rera-karnataka-compliance",
    title: "Understanding RERA Compliance in Karnataka",
    excerpt: "A detailed overview of RERA regulations in Karnataka and how they protect property buyers' interests.",
    date: "January 5, 2025",
    author: "Legal Team",
    category: "Legal Updates",
    readTime: "10 min read",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Latest News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest trends, insights, and updates from the real estate market
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {newsArticles[0].category}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">{newsArticles[0].title}</h3>
                  <p className="text-blue-100">{newsArticles[0].excerpt}</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{newsArticles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{newsArticles[0].author}</span>
                    </div>
                    <span className="text-blue-600 font-medium">{newsArticles[0].readTime}</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What you'll learn:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Essential documents to verify before property purchase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Understanding different property area calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Bangalore-specific approvals and legal requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Registration processes and fee structures</span>
                      </li>
                    </ul>
                  </div>

                  <Link href={`/news/${newsArticles[0].id}`}>
                    <Button className="w-full md:w-auto">
                      Read Full Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.slice(1).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-sm">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest real estate news, market insights, and property
                investment tips directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
