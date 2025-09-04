import SectionHeader from "../components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const BlogsPage = () => {
  return (
    <div>
      <SectionHeader
        sectionTitle="LATEST NEWS AND ARTICLES"
        sectionSubTitle="Insights at the Speed of Tech"
        text="From industry deep dives to practical how-tos, our blog is where ideas meet action. Whether you’re a founder, developer, or decision-maker, you’ll find content designed to help you build stronger systems and grow without chaos."
        // btns={[
        //   {
        //     text: "Subscribe to our newsletter",
        //     onClick: () => alert("Talk to our team"),
        //   },
        //   {
        //     text: "Contact us",
        //     onClick: () => alert("Explore Solutions"),
        //   },
        // ]}
      />
      <AllBlogs />
    </div>
  );
};

const AllBlogs = () => {
  const desc =
    "In today’s fast-moving digital economy, efficiency isn’t just a nice-to-have — it’s survival. Businesses that still rely on manual processes face bottlenecks, wasted resources, and higher risks of error. That’s where IT automation steps in. Whether you’re running a lean startup or managing an established enterprise, automation can be the difference between lagging behind and leading the market.";

  return (
    <div className="section px-4 !py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {new Array(8).fill().map((_, i) => (
          <a
            href="/"
            key={`Blog-post-card-${i}`}
            className="max-w-[350px] text-white min-h-[500px] bg-base-color"
          >
            <div className="w-full max-h-[200px] overflow-hidden relative">
              <img src="/empower.jpg" className="w-full h-full object-cover" />
               <h3 className="absolute text-xl p-1 px-4 font-semibold top-0 right-0 bg-base-color text-white uppercase">
                business
              </h3>
            </div>

            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg hover:underline">
                {"How startups and enterprises can leverage IT automation to cut costs, save time, and stay competitive.".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <p className="mt-4">{desc.slice(0, 200)}...</p>

              <div className="mt-4 flex-center-y gap-1">
                <Avatar className="size-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-base-color bg-white font-semibold">BM</AvatarFallback>
                </Avatar>
                <p className="text-lg">By <span className="font-semibold underline">Barsmiko</span></p>
              </div>
            </div>
            <div className="p-4">
                <p className="font-semibold">Sep 4, 2025</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
