/*
 * ---- NOTES ----
 * - 'datePublished' needs to be formatted as dd/mm/yyyy.
 * - the post at the top of the file will show as the most recent, and the one at the bottom will show as the oldest, etc.
 * - every line needs to end with a comma, except for the last line under a certain section (e.g. the last line under 'comments' or the last entry won't have one and the last blog entry won't have one, etc.)
 * - double quotes and backslashes are considered 'special characters' and and if you want to include them inside a post, make sure to 'escape' it with \" or \\ (they will appear without the backslash before them on the site).
 *
 */

{
  rss = {
    "feedTitle": "Potatocat",
    "feedDescription": "Potatocat's blog"
  }
  blog = [
    {
      "title": "Example Blog Entry 2",
      "subheading": "This is another blog post",
      "datePublished": "17/10/2024",
      "categories": ["Category2", "Category3"]
    },
    {
      "title": "Example Blog Entry",
      "subheading": "This is a blog post",
      "datePublished": "16/10/2024",
      "categories": ["Category1", "Category2"]
    }
  ]
}