import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import "./about-us.scss";
import AboutUsSvg from "./AboutUsSvg";
import AboutUsMusicSvg from "./AboutUsMusicSvg";

const AboutUs = () => {
  const { isBangla } = useContext(UserContext)
  return (
    <>
      {isBangla ?
        <div className="about_us">
          <h4
            className="about_us_our_story_text"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="500"
          >
            আমাদের গল্প
          </h4>

          <div className="about_us_main">
            <div
              className="about_us_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <p>
                আইসিনেমা বিভিন্ন বয়স এবং পছন্দের মানুষের মধ্যে সিনেমা দেখার ও গান শোনার আনন্দ ছড়িয়ে দিতে উৎসাহী। আইসিনেমায় আপনি পাবেন সকল সেরা বিনোদন সমূহ। আইসিনেমা এর বিশেষত্ব হল আমরা সিনেমা এবং সঙ্গীত, দুই জগতের সকল সেরা বিনোদন গুলো দিয়ে থাকি একটি মাত্র অ্যাপ এর মাধ্যমে। সীমাহীন ফিল্ম, সঙ্গীত এবং দুর্দান্ত সকল সিরিজের বিস্তর পরিসর সহজেই অনলাইনে দেখার জন্য আইসিনেমা সরবরাহ করে থাকে। সিনেমা, সঙ্গীত এবং সিরিজ অ্যাক্সেস করার জন্য আপনাকে আমাদের যেকোনো একটি সাবস্ক্রিপশন প্ল্যান নিতে হবে। উপভোগ করুন সীমাহীন বিনোদন।
              </p>
            </div>
            {/* <div className="about_us_right">
            <AboutUsSvg />
          </div> */}
          </div>

          {/* <h4
            className="about_us_services_text"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="500"
          >
            Services
          </h4> */}

          <div className="about_us_services1">
            <div
              className="about_us_services1_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <AboutUsSvg />
            </div>
            <div
              className="about_us_services1_right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h4>ভিডিও কনটেন্ট</h4>
              <p>
                আপনি কি অনলাইনে সিনেমা দেখতে ভালোবাসেন? আপনি কি এমন কোনো ওয়েবসাইট খুঁজছেন যেখানে আপনি অনলাইনে সিনেমা দেখতে পারেন? ঘরে বসে অনলাইনে সিনেমা দেখা একটি সাম্প্রতিক প্রবণতায় পরিণত হয়েছে। যা সস্তা, সুবিধাজনক, এবং চলতি ট্রেন্ড!
                আইসিনেমা আপনার বিনোদনের জন্য সব ধরনের সিনেমা এবং সিরিজ নিয়ে এসেছে- অ্যাকশন, হরর, ফ্যামিলি, ইত্যাদি। তাই, আপনি যদি অনলাইনে এইচডি কোয়ালিটিতে দেখার জন্য কোনো সিরিজ বা ফিল্ম খুঁজছেন, অবশ্যই এখানে পাবেন। আইসিনেমায় আমাদের আছেঃ
                সমস্ত ঘরানার সীমাহীন সংখ্যক আইকনিক এবং পুরস্কার বিজয়ী সিনেমার সঙ্কলন।
                সাম্প্রতিক, অসাধারণ এবং ক্লাসিক সমস্ত সিরিজের একটি বিশাল লাইব্রেরি-যেমন কোরিয়ান টিভি শো, পুরস্কার বিজয়ী টিভি শো, পারিবারিক টিভি শো, ভারতীয় টিভি শো, সুপার ন্যাচারাল সোপস, অ্যানেমে ইত্যাদি।
                উচ্চ-মানের সিনেমা এবং সিরিজ দেখুন যেকোনো জায়গায় এবং যেকোনো ডিভাইসে।
                ডাউনলোডযোগ্য ভিডিও সামগ্রী প্রদান।
                উপভোগ করুন বিজ্ঞাপন-মুক্ত ভিডিও।
              </p>
            </div>
          </div>

          <div className="about_us_services2">
            <div
              className="about_us_services2_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h4>সঙ্গীত কনটেন্ট</h4>
              <p>
                শরীর ও মনকে শিথিল করতে এমনকি ভাল করে কাজ সম্পন্ন করতে সঙ্গীত একটি দারুন টুল হিসেবে কাজ করে। প্রেরণার উৎস হিসাবে কিংবা ঘুমানোর সময় নিজেকে চাপমুক্ত করার উপায় হিসাবে সঙ্গীত ব্যবহার করা যেতে পারে। সঙ্গীতের সবচেয়ে ভাল দিক হল এর বিচিত্রতা। আপনার পছন্দের সঙ্গীত বাছাই করতে সাহায্য করার জন্য, আইসিনেমা নিয়ে এসেছে হাজার হাজার চমৎকার সঙ্গীতের বিশাল সম্ভার - ইংরেজি, হিন্দি, কে-পপ, বাংলা, আপনি যেটাই চান পাবেন এখানে!
                আইসিনেমায় পাবেন সব ধরনের গান- দুঃখের সময় শোনার গান, ক্ষোভের গান, কাউকে মিস করলে শোনার মতো গান ইত্যাদি। কানে হেডফোন লাগিয়ে মিউজিকের আকর্ষণীয় জগতে হারিয়ে যান আইসিনেমার সাথে। আইসিনেমায় আমাদের আছেঃ
                নানা পছন্দের সব ধরনের আনন্দদায়ক সঙ্গীতের বিস্তর সঙ্কলন।
                ডাউনলোডযোগ্য সঙ্গীত সামগ্রী।
                উপভোগ করুন বিজ্ঞাপন-মুক্ত সঙ্গীত।
              </p>
            </div>
            <div
              className="about_us_services2_right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <AboutUsMusicSvg />
            </div>
          </div>
        </div>
        :
        <div className="about_us">
          <h4
            className="about_us_our_story_text"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="500"
          >
            Our Story
          </h4>

          <div className="about_us_main">
            <div
              className="about_us_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <p>
                iCinema is passionate about spreading the joy of watching movies
                and listening to music among people of different ages and tastes.
                You can get the best of entertainment with iCinema. What’s so
                special about iCinema is that we give you the best of both worlds-
                movies and music- all in one place. We provide a wide range of
                great films, music, and series to watch online without limits. All
                you need to do is take our subscription plan to access the movies,
                music, and series. Enjoy unlimited entertainment.
              </p>
            </div>
            {/* <div className="about_us_right">
            <AboutUsSvg />
          </div> */}
          </div>

          <h4
            className="about_us_services_text"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="500"
          >
            Services
          </h4>

          <div className="about_us_services1">
            <div
              className="about_us_services1_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <AboutUsSvg />
            </div>
            <div
              className="about_us_services1_right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h4>Video Content</h4>
              <p>
                Do you love to binge-watch movies online? Are you looking for
                websites where you can watch movies online? Watching movies online
                at home has become the latest trend. It’s cheaper, convenient, and
                trendy! iCinema has brought all genres of movies and series for
                you to choose from- Action, Horror, Family, etc. So, if you are
                looking for a series or film to watch online in HD quality, you
                will definitely find it here. Unlimited number of iconic and
                award-winning movies of all genres A massive library of all the
                latest, phenomenal and classic series-e.g. Korean TV shows,
                Award-winning TV shows, Family TV shows, Indian TV shows, Super
                Natural Soaps, Anime, etc. Watch high-quality movies and series
                anywhere and on any device. Providing you downloadable video
                content. Enjoy ad-free videos.
              </p>
            </div>
          </div>

          <div className="about_us_services2">
            <div
              className="about_us_services2_left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h4>Music Content</h4>
              <p>
                Music is a great tool to help you relax and even work better. It
                can be used as a motivator or as a way to de-stress yourself
                before going to bed. The best thing about music is that there is
                so much variety available, and to help you choose what to listen
                to, iCinema provides thousands and thousands of great music-
                English, Hindi, K-pop, Bangla, you name it! iCinema has got it all
                covered-songs to listen to when sad, songs to listen to when mad,
                songs to listen to when you miss someone, etc. Just put on your
                headphones and get lost in the fascinating world of music with us.
                A broad collection of satisfying music of all tastes. Providing
                you downloadable music content. Enjoy ad-free music
              </p>
            </div>
            <div
              className="about_us_services2_right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <AboutUsMusicSvg />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AboutUs;
