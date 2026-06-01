import Seo from "@/components/Seo";

const NotFound = () => {
  return (
    <><Seo title="Page Not Found" description="The requested ESSGEE Projects page could not be found." noIndex />
    <div className="flex min-h-screen items-center justify-center bg-slate-navy text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-white/65">The requested page could not be found.</p>
        <a href="/" className="text-teal-accent underline hover:text-white">
          Return to Home
        </a>
      </div>
    </div></>
  );
};

export default NotFound;
