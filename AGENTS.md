<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site pages compose shared pieces from src/components/site (Layout, Sections); per-page SEO via src/lib/seo.ts `seo()` in each route head() — keeps meta/canonical/JSON-LD consistent.
- Page copy is client-provided SEO text rendered verbatim in route files; don't rewrite it.
