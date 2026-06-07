import { Helmet } from "react-helmet-async";
import { site } from "@/data/siteContent";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

const Seo = ({ title, description, path = "", noIndex = false }: SeoProps) => {
  const url = `${site.url}${path}`;
  const fullTitle = title === site.shortName ? "ESSGEE Projects | Sustainability Through Strategy" : `${title} | ESSGEE Projects`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${site.socialImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${site.socialImage}`} />
    </Helmet>
  );
};

export default Seo;
