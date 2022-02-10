import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import "./privacy.scss";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Privacy = () => {
  const { isBangla } = useContext(UserContext)
  return (
    <>
      <div className="privacy">
        <Link to="/browse" className="privacy_back">
          <GrFormPrevious className="privacy_prev_icon" />
          <p>Back to home</p>
        </Link>

        {isBangla ?
          <div className="privacy_statement">
            <h4>গোপনীয়তা বিবৃতি</h4>
            <p>
              এই গোপনীয়তা বিবৃতি <strong>আইসিনেমা</strong> পরিষেবার সাথে সম্পর্কিত আমাদের প্রাকটিসগুলোর পাশাপাশি আপনার ব্যক্তিগত তথ্যসহ নির্দিষ্ট তথ্য সংগ্রহ, ব্যবহার এবং প্রকাশ সংক্রান্ত নির্বাচনে আপনার পছন্দগুলি ব্যাখ্যা করে৷
            </p>
            <div className="privacy_contacting_us">
              <p>আমাদের সাথে যোগাযোগ </p>
              <p>
                আপনার অ্যাকাউন্ট সম্পর্কে সাধারণ প্রশ্ন থাকলে বা যেকোনো সহায়তার জন্য কীভাবে গ্রাহক পরিষেবার সাথে যোগাযোগ করবেন জানতে, অনুগ্রহ করে{" "}
                <a href="mailto:support@icinemabd.com">support@icinemabd.com</a>.
                এ আমাদের অনলাইন সহায়তা কেন্দ্রে যান। এই গোপনীয়তা বিবৃতি, বা আমাদের আপনার ব্যক্তিগত তথ্য ব্যবহার, কুকি বা অনুরূপ প্রযুক্তির সম্পর্কে বিশেষ প্রশ্নগুলির জন্য, অনুগ্রহ করে{" "}
                <a href="mailto:privacy@icinemabd.com">privacy@icinemabd.com.</a>
                এ ইমেলের মাধ্যমে আমাদের ডেটা সুরক্ষা অফিসার/গোপনীয়তা অফিসের সাথে যোগাযোগ করুন।
                <br />
                <br />
                আপনার ব্যক্তিগত তথ্যের ডেটা কন্ট্রোলার হল{" "}
                <a href="https://icinemabd.com">আইসিনেমা লিমিটেড</a> অনুগ্রহ করে মনে রাখবেন যে আপনি যদি আমাদের সাথে আপনাকে সহায়তা করার জন্য যোগাযোগ করেন, আপনার এবং আমাদের নিরাপত্তার জন্য আপনার অনুরোধ পূরণের আগে আমাদের আপনার পরিচয় প্রমাণীকরণের প্রয়োজন হতে পারে৷
              </p>
            </div>

            <div className="privacy_contacting_us">
              <p>তথ্য সংগ্রহ</p>
              <p>আমরা আপনার সম্পর্কে তথ্য পাই এবং সঞ্চয় করি যেমন:</p>
              <p>
                <li>
                  তথ্য যা আপনি আমাদের প্রদান করেন:{" "}
                  <span>
                    আমরা আপনার দেওয়া তথ্য সংগ্রহ করি যার মধ্যে রয়েছে:
                  </span>
                  <li>
                    আপনার নাম, ইমেল ঠিকানা, অর্থপ্রদানের পদ্ধতি(গুলি), টেলিফোন নম্বর এবং অন্যান্য আইডেন্টিফায়ার যা আপনি ব্যবহার করতে পারেন (যেমন একটি ইন-গেম নাম)। আমরা এই তথ্যগুলো বিভিন্ন উপায়ে সংগ্রহ করি, উপায়গুলোর মধ্যে রয়েছে আপনি যখন আমাদের পরিষেবা ব্যবহার করার সময় প্রবেশ করেন, আমাদের গ্রাহক পরিষেবার সাথে ইন্টারঅ্যাক্ট করেন, বা সমীক্ষা বা বিপণন প্রচারে অংশগ্রহণ করেন।
                  </li>
                  <li>
                    তথ্য যখন আপনি রেটিং, পছন্দ, অ্যাকাউন্ট সেটিংস (আমাদের ওয়েবসাইটের "অ্যাকাউন্ট" বিভাগে সেট করা পছন্দগুলি সহ) অথবা আমাদের পরিষেবার দ্বারা বা অন্য কোন মাধ্যমে আমাদের কাছে তথ্য সরবরাহ করতে চান।
                  </li>
                </li>
              </p>

              <p>
                <li>
                  যে তথ্য আমরা স্বয়ংক্রিয়ভাবে সংগ্রহ করি:{" "}
                  <span>
                    আমরা আপনার এবং আপনার আমাদের পরিষেবার ব্যবহার, আমাদের এবং আমাদের বিজ্ঞাপনের সাথে আপনার মিথস্ক্রিয়া, সেইসাথে আপনার নেটওয়ার্কের, নেটওয়ার্কের সাথে যুক্ত ডিভাইস এবং আপনার কম্পিউটার বা অন্যান্য আইসিনেমা সক্ষম ডিভাইস সম্পর্কে তথ্য সংগ্রহ করি যা আপনি আমাদের পরিষেবা অ্যাক্সেস করতে ব্যবহার করতে পারেন (যেমন গেমিং সিস্টেম, স্মার্ট টিভি, মোবাইল ডিভাইস, সেট টপ বক্স এবং অন্যান্য স্ট্রিমিং মিডিয়া ডিভাইস)। এই তথ্যের অন্তর্ভুক্ত:
                  </span>
                  <li>
                    আইসিনেমা পরিষেবাতে আপনার কার্যকলাপ, যেমন শিরোনাম নির্বাচন, যেসকল শো আপনি দেখেছেন, যা অনুসন্ধান করছেন এবং আইসিনেমা গেমগুলিতে আপনার কার্যকলাপ;
                  </li>
                  <li>
                    আমাদের ইমেল, টেক্সট এবং পুশ ও অনলাইন মেসেজিং চ্যানেলের সাহায্যে পাঠানো বার্তাগুলির সাথে আপনার মিথস্ক্রিয়া;
                  </li>
                  <li>
                    আমাদের গ্রাহক পরিষেবার সাথে আপনার ইন্টারঅ্যাকশনের বিশদ বিবরণ, যেমন আমাদের সাথে যোগাযোগ করার তারিখ, সময় এবং কারণ, যেকোনো চ্যাট কথোপকথনের প্রতিলিপি এবং আপনি যদি আমাদের কল করেন, আপনার ফোন নম্বর এবং কল রেকর্ডিং;
                  </li>
                  <li>
                    ডিভাইস আইডি বা অন্যান্য ইউনিক শনাক্তকারী, আপনার নেটওয়ার্ক ডিভাইস এবং আপনার ওয়াই-ফাই নেটওয়ার্কে আইসিনেমা সক্ষম ডিভাইসগুলো;
                  </li>
                  <li>
                    রিসেটযোগ্য ডিভাইস শনাক্তকারী (বিজ্ঞাপন শনাক্তকারী হিসাবেও পরিচিত), যেমন মোবাইল ডিভাইস, ট্যাবলেট এবং স্ট্রিমিং মিডিয়া ডিভাইসগুলিতে এই ধরনের শনাক্তকারী অন্তর্ভুক্ত রয়েছে (আরো তথ্যের জন্য নীচের "কুকিজ এবং ইন্টারনেট বিজ্ঞাপন" বিভাগটি দেখুন);
                  </li>
                  <li>
                    ডিভাইস এবং সফ্টওয়্যারের বৈশিষ্ট্যসমূহ (যেমন প্রকার এবং কনফিগারেশন), সংযোগের তথ্য এবং প্রকার (ওয়াইফাই, সেলুলার), পৃষ্ঠা দর্শনের পরিসংখ্যান, রেফারিইং সোর্স (উদাহরণস্বরূপ, রেফারেল ইউআরএল), আইপি ঠিকানা (যেটি আমাদের আপনার সাধারণ অবস্থান বলতে পারে), ব্রাউজার এবং স্ট্যান্ডার্ড ওয়েব সার্ভার লগ তথ্য;
                  </li>
                  <li>
                    কুকিজ, ওয়েব বীকন এবং অন্যান্য প্রযুক্তি ব্যবহারের মাধ্যমে সংগৃহীত তথ্য, বিজ্ঞাপন ডেটা (যেমন বিজ্ঞাপনের প্রাপ্যতা এবং বিতরণের তথ্য, সাইটের ইউআরএল, সেইসাথে তারিখ এবং সময়)। (আরো বিস্তারিত জানার জন্য আমাদের "কুকিজ এবং ইন্টারনেট বিজ্ঞাপন" বিভাগটি দেখুন।)
                  </li>
                </li>
              </p>

              <p>
                <li>
                  পার্টনার কাছ থেকে তথ্য:{" "}
                  <span>
                    আমরা অন্যান্য কোম্পানি থেকে তথ্য সংগ্রহ করি যাদের সাথে আপনার সম্পর্ক রয়েছে ("অংশীদার")। এই পার্টনারের অন্তর্ভুক্ত থাকতে পারে (আপনার ব্যবহৃত পরিষেবাগুলির উপর নির্ভরশীল): আপনার টিভি বা ইন্টারনেট পরিষেবা প্রদানকারী, বা অন্যান্য স্ট্রিমিং মিডিয়া ডিভাইস প্রদানকারী যারা তাদের ডিভাইসে আমাদের পরিষেবা দিয়ে থাকে; মোবাইল ফোন ক্যারিয়ার বা অন্যান্য কোম্পানি যারা আপনাকে পরিষেবা প্রদান করে এবং আইসিনেমা পরিষেবা সরবরাহের বিনিময়ে আমাদের দেয়ার জন্য অর্থ সংগ্রহ করে বা আইসিনেমা পরিষেবার জন্য প্রি-পেইড প্রচার করে; এবং ভয়েস সহকারী প্ল্যাটফর্ম প্রদানকারক যারা ভয়েস কমান্ডের মাধ্যমে আমাদের পরিষেবার সাথে মিথস্ক্রিয়া সক্ষম করে। অংশীদাররা আমাদের যে তথ্য সরবরাহ করে তা অংশীদার পরিষেবাগুলির প্রকৃতির উপর নির্ভর করে পরিবর্তিত হয় এবং এতে অন্তর্ভুক্ত থাকতে পারে:
                  </span>
                  <li>
                    আপনার পার্টনার ডিভাইস বা ভয়েস সহকারী প্ল্যাটফর্মের মাধ্যমে তৈরি আইসিনেমা -তে প্রযোজ্য অনুসন্ধান প্রশ্ন এবং কমান্ড;
                  </li>
                  <li>
                    পরিষেবা সক্রিয়করণ তথ্য যেমন আপনার ইমেল ঠিকানা বা অন্যান্য যোগাযোগের তথ্য;
                  </li>
                  <li>
                    আইপি ঠিকানা, ডিভাইস আইডি বা অন্যান্য অনন্য শনাক্তকারী সমূহ, সেইসাথে সংশ্লিষ্ট প্রি-পেইড প্রচার, বিলিং এবং ইউজার ইন্টারফেস তথ্য, যা ব্যবহারকারীর প্রমাণীকরণে সহায়তা করে, আইসিনেমা পরিষেবার নিবন্ধন অভিজ্ঞতা, পার্টনার অর্থপ্রদান প্রক্রিয়াকরণ, এবং পার্টনার ইউজার ইন্টারফেস অংশগুলির মাধ্যমে আপনার কাছে উপস্থিত আইসিনেমার কন্টেন্ট ।
                  </li>
                </li>
              </p>

              <p>
                <li>
                  অন্যান্য উৎস থেকে তথ্য:{" "}
                  <span>
                    আমরা অন্যান্য উৎস থেকেও তথ্য পাই। আমরা এই গোপনীয়তা বিবৃতিতে বর্ণিত অনুশীলনের মাধ্যমে এবং পাশাপাশি ডেটা উৎস আরোপিত কোনও অতিরিক্ত বিধিনিষেধ অনুসারে এই তথ্যগুলো রক্ষা করি৷ এই উৎস গুলো সময়ের সাথে পরিবর্তিত হয়, তবে এতে অন্তর্ভুক্ত থাকতে পারে:
                  </span>
                  <li>
                    আমাদের পরিষেবা কাস্টমাইজ করার জন্য এবং এই গোপনীয়তা বিবৃতির সাথে সামঞ্জস্যপূর্ণ অন্যান্য ব্যবহারের জন্য আইপি ঠিকানার উপর ভিত্তি করে আপনার অবস্থান নির্ণয় করতে সাহায্যকারী পরিষেবা প্রদানকারীরা;
                  </li>
                  <li>
                    নিরাপত্তা পরিষেবা প্রদানকারীরা যারা আমাদের সিস্টেমকে সুরক্ষিত করতে, জালিয়াতি প্রতিরোধ করতে এবং আইসিনেমা অ্যাকাউন্টের নিরাপত্তা রক্ষা করতে আমাদেরকে তথ্য প্রদান করে;
                  </li>
                  <li>
                    অর্থপ্রদান পরিষেবা প্রদানকারীরা যারা তাদের সাথে আপনার সম্পর্কের ভিত্তিতে আমাদের পেমেন্ট বা ব্যালেন্স তথ্য প্রদান ও আপডেট করে;
                  </li>
                  <li>
                    অনলাইন এবং অফলাইন ডেটা প্রদানকারী, যেখান থেকে আমরা সামগ্রিক জনতাত্ত্বিক, আগ্রহ ভিত্তিক এবং অনলাইন বিজ্ঞাপন সম্পর্কিত ডেটা পাই;
                  </li>
                  <li>
                    সর্বজনীনভাবে-উপলভ্য উৎস সমূহ যেমন সোশ্যাল মিডিয়া প্ল্যাটফর্মে করা পাবলিক পোস্ট এবং ইন্টারনেট পরিষেবা প্রদানকারীর (আইএসপি) সাথে আইপি ঠিকানাগুলিকে সংযুক্ত করে পাবলিক ডাটাবেসের মাধ্যমে উপলব্ধ তথ্য
                  </li>
                  <li>
                    তৃতীয় পক্ষের পরিষেবাগুলো যাতে আপনি সাইন ইন করেছেন এবং যেগুলি আইসিনেমা গেমগুলির মধ্যে ফাংশন প্রদান করে, যেমন মাল্টিপ্লেয়ার গেমপ্লে, লিডারবোর্ড এবং গেম সংরক্ষণের অপশন।
                  </li>
                </li>
              </p>
            </div>

            <div className="use_of_information">
              <p>তথ্য ব্যবহার</p>
              <p>
                আমরা তথ্য গুলো ব্যবহার করি আমাদের পরিষেবা এবং বিপণন প্রচেষ্টাগুলো প্রদান, বিশ্লেষণ, পরিচালনা, উন্নত এবং ব্যক্তিগতকৃত করতে, সদস্য রেফারেলগুলি পরিচালনা করতে, আপনার নিবন্ধন, আপনার অর্ডার এবং আপনার অর্থপ্রদান প্রক্রিয়া গুলো সম্পন্ন করতে এবং এসকল বিষয়াদি সহ অন্যান্য বিষয়ে আপনার সাথে যোগাযোগ করতে । উদাহরণস্বরূপ, আমরা এই ধরনে তথ্য ব্যবহার করি:
              </p>
              <p>
                <li>
                  আপনার সাধারণ ভৌগলিক অবস্থান নির্ধারণ করে, স্থানীয় বিষয়বস্তু প্রদান করে, আপনার আগ্রহের বিষয় যা যা হতে পারে তার ভিত্তিতে সিনেমা এবং টিভি শোগুলির কাস্টমাইজ এবং ব্যক্তিগতকৃত করে সুপারিশ প্রদান, আপনার জন্য নেটওয়ার্ক সমস্যা সমাধানে সহায়তা করার জন্য আপনার আইএসপি নির্ধারণ (আমরা অপারেশনাল এবং ব্যবসায়িক উদ্দেশ্যে সমষ্টিগত আইএসপি তথ্যও ব্যবহার করি), এবং তা আমাদের দ্রুত এবং দক্ষতার সাথে অনুসন্ধান এবং অনুরোধের প্রতিক্রিয়া জানাতে সাহায্য করে; {" "}
                </li>
              </p>

              <p>
                <li>
                  পার্টনারদের সাথে আপনার নির্দিষ্ট সম্পর্কের ভিত্তিতে আইসিনেমা তার পরিষেবা গুলো সদস্যদের কাছে সুলভ করতে এবং অ-সদস্যদের কাছে এর প্রাপ্যতা সম্পর্কে তথ্য প্রদান করতে সমন্বয় সাধন করে থাকে।{" "}
                </li>
              </p>

              <p>
                <li>
                  আমাদের সিস্টেম সুরক্ষিত করতে, জালিয়াতি প্রতিরোধ করতে এবং আইসিনেমা অ্যাকাউন্টগুলির নিরাপত্তা রক্ষা করতে আমাদের সাহায্য করে;
                </li>
              </p>

              <p>
                <li>
                  প্রতারণা ও সম্ভাব্য সকল নিষিদ্ধ বা অবৈধ কার্যকলাপ প্রতিরোধ, সনাক্ত ও তদন্ত করতে এবং আমাদের শর্তাবলী প্রয়োগ করতে (যেমন আইসিনেমা সাইনআপের জন্য আপনি যোগ্য কিনা তা নির্ধারণ করা এবং আমাদের শর্তাবলীর সাথে সামঞ্জস্যপূর্ণ একটি নির্দিষ্ট ডিভাইস ব্যবহার করার অনুমতি দেওয়া হয়েছে কিনা তা নির্ধারণ করা);
                </li>
              </p>

              <p>
                <li>
                  আমাদের দর্শকদের বিশ্লেষণ এবং বুঝতে, আমাদের পরিষেবা উন্নত করতে (আমাদের ব্যবহারকারী ইন্টারফেস অভিজ্ঞতা এবং পরিষেবা কার্যকারিতা সহ) এবং কনটেন্ট নির্বাচন, সুপারিশ অ্যালগরিদম এবং বিতরণ অপ্টিমাইজকরনে;
                </li>
              </p>

              <p>
                <li>
                  আমাদের পরিষেবা সম্পর্কে আপনার সাথে যোগাযোগ করা যাতে আইসিনেমা সম্পর্কে খবর, আইসিনেমার নতুন ফিচার এবং কন্টেন্ট সম্পর্কে বিশদ বিবরণ, বিশেষ অফার, প্রচারমূলক ঘোষণা, ভোক্তা সমীক্ষা, এবং পাসওয়ার্ড রিসেটের মতো অপারেশনাল অনুরোধে আমরা আপনাকে সহায়তা করতে পারি। এই যোগাযোগগুলি বিভিন্ন পদ্ধতিতে হতে পারে, যেমন ইমেল, পুশ বিজ্ঞপ্তি, পাঠ্য বার্তা, অনলাইন বার্তাপ্রেরণ চ্যানেল এবং মিলিত আইডেন্টিফায়ার কমিউনিকেশনস (নীচে বর্ণিত)। আপনার যোগাযোগের পছন্দগুলি কীভাবে নির্ধারণ বা পরিবর্তন করবেন তা শিখতে দয়া করে এই গোপনীয়তা বিবৃতির "আপনার পছন্দগুলি" বিভাগটি দেখুন৷
                </li>
              </p>
              <p>
                আমাদের সুপারিশ সিস্টেম আপনি যখন লগইন করবেন তখন আপনি কী দেখার মুডে থাকবেন তা অনুমান করার চেষ্টা করে৷ যাইহোক, আমাদের সুপারিশ সিস্টেমটি আপনার সোশিও-ডেমোগ্রাফিক সংক্রান্ত তথ্য (যেমন লিঙ্গ বা জাতি) অনুমান বা সংযুক্ত করে না৷ আমাদের একটি সহায়তা নিবন্ধ রয়েছে যা ব্যাখ্যা করে যে কীভাবে আমাদের সুপারিশ সিস্টেম কাজ করে - স্পয়লার: সুপারিশগুলির সবচেয়ে বড় চালক হল আপনি আসলে আমাদের পরিষেবার মাধ্যমে কী দেখতে চান৷ আপনি www.iCinema.com/recommendations এ নিবন্ধটি পড়তে পারেন।
              </p>
            </div>

            <div className="privacy_contacting_us">
              <p>তথ্যের উন্মাচন </p>
              <p>
                আমরা আপনার তথ্য কিছু নির্দিষ্ট উদ্দেশ্যে এবং তৃতীয় পক্ষের কাছে প্রকাশ করি, যেমন নীচে বর্ণনা করা হয়েছে:
              </p>
              <p>
                <li>
                  কোম্পানির গুলোর আইসিনেমা পরিবার:{" "}
                  <span>
                    আমরা আপনার তথ্য শেয়ার করি থাকি কোম্পানিগুলির আইসিনেমা পরিবারের (help.iCinema.com/legal/corpinfo) সাথে: আমাদের পরিষেবাগুলিতে আপনাকে অ্যাক্সেস প্রদান করা; গ্রাহক সমর্থন প্রদান; পরিষেবার উন্নতি সম্পর্কে সিদ্ধান্ত নেওয়া; কন্টেন্টের উন্নয়ন; এবং এই গোপনীয়তা বিবৃতির তথ্যের ব্যবহার বিভাগে বর্ণিত অন্যান্য উদ্দেশ্যে সাধনের জন্য।
                  </span>
                </li>
              </p>

              <p>
                <li>
                  পরিষেবা প্রদানকারী:{" "}
                  <span>
                    পরিষেবাগুলি সম্পাদন করতে বা আপনার পরিষেবায় সহায়তা করতে আমরা আমাদের পক্ষ থেকে অন্যান্য কোম্পানি, এজেন্ট বা ঠিকাদার ("পরিষেবা প্রদানকারী") ব্যবহার করে থাকি। উদাহরণস্বরূপ, আমরা বিপণন, বিজ্ঞাপন, যোগাযোগ, নিরাপত্তা, অবকাঠামো এবং আইটি পরিষেবা প্রদান করতে, আমাদের পরিষেবা কাস্টমাইজ, ব্যক্তিগতকৃত এবং অপ্টিমাইজ করতে, ব্যাঙ্ক অ্যাকাউন্ট বা ব্যালেন্স তথ্য প্রদান করতে, ক্রেডিট কার্ড লেনদেন বা অন্যান্য অর্থপ্রদান পদ্ধতিগুলি প্রক্রিয়াকরন, গ্রাহক পরিষেবা প্রদান, ডেটা বিশ্লেষণ এবং উন্নত করতে(আমাদের পরিষেবার সাথে ব্যবহারকারীদের মিথস্ক্রিয়া সম্পর্কিত ডেটা সহ), এবং ভোক্তা সমীক্ষা প্রক্রিয়া ও পরিচালনা করার জন্য পরিষেবা প্রদানকারীদের নিযুক্ত করে থাকি। এই ধরনের পরিষেবা প্রদানের সময়, এই পরিষেবা প্রদানকারীরা আপনার ব্যক্তিগত বা অন্যান্য তথ্য অ্যাক্সেস করতে পারে। আমরা তাদের পরিষেবাগুলি প্রদানের (যার মধ্যে পরিষেবাগুলি বজায় রাখা এবং উন্নত করা অন্তর্ভুক্ত) ছাড়া আপনার ব্যক্তিগত তথ্য ব্যবহার বা প্রকাশ করার জন্য তাদের অনুমোদন করি না।
                  </span>
                </li>
              </p>

              <p>
                <li>
                  পার্টনার{" "}
                  <span>
                    উপরের বর্ণনা মতে, আমাদের এক বা একাধিক পার্টনারের সাথে আপনার সম্পর্ক থাকতে পারে, সেক্ষেত্রে আমরা তাদের সাথে কিছু তথ্য শেয়ার করতে পারি যাতে তাদের সাথে সমন্বয় করে সদস্যদের আইসিনেমা পরিষেবা প্রদান এবং আইসিনেমা পরিষেবার লভ্যতা সম্পর্কে তথ্য প্রদানের করা যায়। উদাহরণস্বরূপ, আপনি কোন পার্টনার পরিষেবাগুলি ব্যবহার করেন তার উপর নির্ভর করে, আমরা তথ্য শেয়ার করতে পারি
                  </span>
                  <li>
                    আইসিনেমা পরিষেবার জন্য পার্টনারের প্রি-পেইড প্রচার অথবা আমাদের বিতরণের জন্য অর্থ সংগ্রহের সুবিধার্থে;
                  </li>
                  <li>
                    পার্টনার যারা ভয়েস সহকারী প্ল্যাটফর্ম পরিচালনা করে যা আপনাকে ভয়েস কমান্ড ব্যবহার করে আমাদের পরিষেবার সাথে যোগাযোগ করতে দেয় তাদের সাথে;
                  </li>
                  <li>
                    যাতে আইসিনেমা পরিষেবাতে উপস্থিত কনটেন্ট এবং ফিচার গুলো আপনার পার্টনারের ব্যবহারকারী ইন্টারফেসে প্রস্তাব করা যায়। সদস্যদের জন্য, এই প্রস্তাব গুলো আইসিনেমা পরিষেবার অংশ এবং এতে কাস্টমাইজড এবং ব্যক্তিগতকৃত ভাবে দেখার সুপারিশ অন্তর্ভুক্ত থাকতে পারে।
                  </li>
                </li>
              </p>

              <p>
                <li>
                  প্রচারমূলক অফার:{" "}
                  <span>
                    আমরা যৌথ প্রচার বা প্রোগ্রাম অফার করতে পারি যে, আপনার অংশগ্রহণের জন্য, আমাদের তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করতে হবে। এই ধরনের প্রচারগুলো পূরণে আমরা আপনার নাম এবং প্রচারের উদ্দেশ্যের সাথে সম্পর্কিত আপনার অন্যান্য তথ্য শেয়ার করতে পারি। অনুগ্রহ করে মনে রাখবেন যে তৃতীয় পক্ষগুলি তাদের নিজস্ব গোপনীয়তা অনুশীলনের জন্য দায়ী।
                  </span>
                </li>
              </p>

              <p>
                <li>
                  আইসিনেমা এবং অন্যান্যদের সুরক্ষা:{" "}
                  <span>
                    আইসিনেমা এবং এর পরিষেবা প্রদানকারীরা আপনার ব্যক্তিগত এবং অন্যান্য তথ্য প্রকাশ করতে পারে এবং অন্যথায় ব্যবহার করতে পারে যেখানে আমরা বা তারা যুক্তিসঙ্গতভাবে বিশ্বাস করি যে এই ধরনের প্রকাশের প্রয়োজন রয়েছে (ক) কোনো প্রযোজ্য আইন, প্রবিধান, আইনি প্রক্রিয়া, বা সরকারী অনুরোধ সন্তুষ্টে, (খ) ব্যবহারের শর্তাবলী প্রয়োগ সহ তার সম্ভাব্য লঙ্ঘনের তদন্তে, (গ) সনাক্ত, প্রতিরোধ অথবা অবৈধ বা সন্দেহজনক বেআইনি কার্যকলাপ (পেমেন্ট জালিয়াতি সহ), নিরাপত্তা বা প্রযুক্তিগত সমস্যাগুলির সমাধান করায়, বা (ঘ) আইসিনেমা, ব্যবহারকারী বা জনসাধারণের অধিকার,  সম্পত্তি বা নিরাপত্তার বিরুদ্ধে যেকোনো ক্ষতির সুরক্ষায়, যেমনটা প্রয়োজন বা আইন দ্বারা অনুমোদিত।\
                  </span>
                </li>
              </p>

              <p>
                <li>
                  ব্যবসায়িক স্থানান্তর:{" "}
                  <span>
                    কোনো পুনর্গঠন, পুননির্মাণ, একত্রীকরণ বা বিক্রয়, বা সম্পদের অন্য স্থানান্তরের ক্ষেত্রে, আমরা তথ্য স্থানান্তর করব আপনার ব্যক্তিগত তথ্য সহ, তবে শর্ত থাকে যে প্রাপক পক্ষ আপনার ব্যক্তিগত তথ্যকে আমাদের গোপনীয়তার বিবৃতির সাথে সামঞ্জস্যপূর্ণভাবে সম্মান করতে সম্মত হয়।
                  </span>
                </li>
              </p>
            </div>

            <div className="access_to_account">
              <p>অ্যাকাউন্ট এবং প্রোফাইল অ্যাক্সেস</p>
              <p>
                <li>
                  "আমাকে মনে রাখুন" ফাংশন:{" "}
                  <span>
                    আপনার অ্যাকাউন্টে সহজে অ্যাক্সেসের জন্য, আপনি যখন ওয়েবসাইটে লগ ইন করবেন তখন আপনি "এই ডিভাইসে আমাকে মনে রাখবেন" ফাংশনটি ব্যবহার করতে পারেন৷ এই ফাংশনটি এমন প্রযুক্তি ব্যবহার করে যা আমাদের সরাসরি অ্যাকাউন্ট অ্যাক্সেস প্রদান করতে এবং আপনার ব্রাউজার পরিষেবাটি পুনরায় দেখার সময় কোনো পাসওয়ার্ড বা অন্য ব্যবহারকারী সনাক্তকরণের প্রয়োজন ছাড়াই আইসিনেমা পরিষেবা পরিচালনা করতে সহায়তা করে। {" "}
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  অন্যদেরকে আপনার অ্যাকাউন্টে অ্যাক্সেস দেওয়া:{" "}
                  <span>
                    আপনি যদি আপনার অ্যাকাউন্ট শেয়ার করেন বা অন্যদেরকে আপনার অ্যাকাউন্টে অ্যাক্সেস করার অনুমতি দেন তবে তারা আপনার দেখা শো, রেটিং, অ্যাকাউন্টের তথ্য (আপনার ইমেল ঠিকানা বা আমাদের ওয়েবসাইটের "অ্যাকাউন্ট" এলাকায় আপনার অন্যান্য তথ্য), এবং গেম সম্পর্কিত তথ্য (যেমন আপনার ইন-গেম নাম এবং সংরক্ষিত গেমের অগ্রগতি) দেখতে সক্ষম হবেন। আমাদের প্রোফাইল ফিচারটি ব্যবহারের ক্ষেত্রেও এটি একই থাকে। আপনার কাছে আইসিনেমা মোবাইল অ্যাপের মাধ্যমে নিরবিচ্ছিন্ন অ্যাকাউন্ট লগইন ব্যবহার করার অপশনটি থাকতে পারে, যা স্মার্ট টিভি, সেট টপ বক্স এবং আপনার  ওয়াই-ফাই নেটওয়ার্ক সংযুক্ত অন্যান্য স্ট্রিমিং মিডিয়াতে আইসিনেমা অ্যাপে লগইন করতে সক্ষম করে। আপনি যদি ফিচারটি ব্যবহার করেন, ডিভাইসগুলোতে আপনার অ্যাকাউন্টে সাইন ইন করা থাকবে যতক্ষণ না আপনি সেই ডিভাইসগুলি থেকে লগ আউট করেন৷   .{" "}
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  প্রোফাইল:{" "}
                  <span>
                    প্রোফাইলগুলি ব্যবহারকারীদের একটি স্বতন্ত্র, ব্যক্তিগতকৃত আইসিনেমা অভিজ্ঞতা তৈরি করার সুযোগ দেয় যা তাদের আগ্রহের মুভি, শো, সেইসাথে দেখা কনটেন্টের পৃথক হিস্ট্রি নিয়ে গঠিত হয়। অনুগ্রহ করে মনে রাখবেন যে প্রোফাইলগুলি আপনার আইসিনেমা অ্যাকাউন্ট ব্যবহার করে এমন প্রত্যেকের জন্য লভ্য, যাতে আপনার আইসিনেমা অ্যাকাউন্টে অ্যাক্সেস থাকা যে কেউ প্রোফাইলগুলো ব্যবহার ও সম্পাদনার জন্যে নেভিগেট করতে অথবা মুছে ফেলতে পারে। আপনার অ্যাকাউন্টে অ্যাক্সেস আছে এমন সকলের কাছে এটি ব্যাখ্যা করা উচিত এবং আপনি যদি চান তারা আপনার প্রোফাইল ব্যবহার বা পরিবর্তন না করে তবে তাদের তা জানাতে ভুলবেন না। প্রোফাইল ব্যবহারকারীদের প্রোফাইলে ইমেল ঠিকানা, ফোন নম্বর বা অন্যান্য তথ্য যোগ করার সুযোগ দেওয়া হতে পারে এবং এই ধরনের তথ্যে অনুরোধের সময়ই তথ্য সংগ্রহ ও ব্যবহারের নোটিশ প্রদান করা হবে (প্রোফাইল গোপনীয়তা বিজ্ঞপ্তি প্রযোজ্য (<a href="https://icinemabd.com">iCinema BD</a>
                    )). আমাদের বিভিন্ন অভিভাবকীয় নিয়ন্ত্রণ পদ্ধতি চালু রয়েছে, আপনি{" "}
                    <a href="https://icinemabd.com">https://icinemabd.com </a>
                    এ অবস্থিত আমাদের সহায়তা নিবন্ধটি পড়ে এ সম্পর্কে আরও জানতে পারবেন।
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  আপনার আইসিনেমা অ্যাকাউন্টে ডিভাইস অ্যাক্সেস সরানো:{" "}
                  <span>
                    আপনার ডিভাইস থেকে আপনার আইসিনেমা অ্যাকাউন্টের অ্যাক্সেস সরাতে, আমাদের ওয়েবসাইটের "অ্যাকাউন্ট" বিভাগে যান, "সকল ডিভাইস থেকে সাইন আউট করুন" নির্বাচন করুন এবং ডিভাইসগুলি ডিএক্টিভেট করার নির্দেশাবলী অনুসরণ করুন (দ্রষ্টব্য, ডিএক্টিভেশন অবিলম্বে নাও ঘটতে পারে)। সম্ভব হলে, পাবলিক বা শেয়ার্ড  ডিভাইস ব্যবহারকারীদের প্রতিটি ভিজিট শেষ হওয়ার সাথে সাথে লগ আউট করা উচিত। আপনি যদি একটি কম্পিউটার বা আইসিনেমা রেডি ডিভাইস বিক্রি করেন বা ফেরত দেন, তাহলে তা করার আগে আপনাকে লগ আউট করে ডিভাইসটি নিষ্ক্রিয় করতে হবে। আপনি যদি আপনার পাসওয়ার্ড বা ডিভাইসের নিরাপত্তা বজায় না রাখেন, বা আপনার ডিভাইস লগ আউট বা নিষ্ক্রিয় করতে ব্যর্থ হন, তাহলে পরবর্তী ব্যবহারকারীরা আপনার ব্যক্তিগত তথ্য সহ আপনার অ্যাকাউন্ট অ্যাক্সেস করতে সক্ষম হতে পারে।{" "}
                  </span>{" "}
                </li>
              </p>
            </div>
          </div>
          :
          <div className="privacy_statement">
            <h4>Privacy Statement</h4>
            <p>
              This Privacy Statement explains our practices, including your
              choices, regarding the collection, use, and disclosure of certain
              information, including your personal information in connection with
              the iCinema service.
            </p>
            <div className="privacy_contacting_us">
              <p>Contacting Us</p>
              <p>
                If you have general questions about your account or how to contact
                customer service for assistance, please visit our online help
                center at{" "}
                <a href="mailto:support@icinemabd.com">support@icinemabd.com</a>.
                For questions specifically about this Privacy Statement, or our
                use of your personal information, cookies or similar technologies,
                please contact our Data Protection Officer/Privacy Office by email
                at{" "}
                <a href="mailto:privacy@icinemabd.com">privacy@icinemabd.com.</a>
                <br />
                <br />
                The data controller of your personal information is{" "}
                <a href="https://icinemabd.com">iCinema Ltd.</a> Please note that
                if you contact us to assist you, for your safety and ours we may
                need to authenticate your identity before fulfilling your request.
              </p>
            </div>

            <div className="privacy_contacting_us">
              <p>Collection of Information</p>
              <p>We receive and store information about you such as:</p>
              <p>
                <li>
                  Information you provide to us:{" "}
                  <span>
                    We collect information you provide to us which includes:
                  </span>
                  <li>
                    your name, email address, payment method(s), telephone number,
                    and other identifiers you might use (such as an in-game name).
                    We collect this information in a number of ways, including
                    when you enter it while using our service, interact with our
                    customer service, or participate in surveys or marketing
                    promotions.
                  </li>
                  <li>
                    information when you choose to provide ratings, taste
                    preferences, account settings (including preferences set in
                    the "Account" section of our website), or otherwise provide
                    information to us through our service or elsewhere.
                  </li>
                </li>
              </p>

              <p>
                <li>
                  Information we collect automatically:{" "}
                  <span>
                    We collect information about you and your use of our service,
                    your interactions with us and our advertising, as well as
                    information regarding your network, network devices, and your
                    computer or other iCinema capable devices you might use to
                    access our service (such as gaming systems, smart TVs, mobile
                    devices, set top boxes, and other streaming media devices).
                    This information includes:
                  </span>
                  <li>
                    your activity on the iCinema service, such as title
                    selections, shows you have watched, search queries, and
                    activity in iCinema games;
                  </li>
                  <li>
                    your interactions with our emails and texts, and with our
                    messages through push and online messaging channels;
                  </li>
                  <li>
                    details of your interactions with our customer service, such
                    as the date, time and reason for contacting us, transcripts of
                    any chat conversations, and if you call us, your phone number
                    and call recordings;
                  </li>
                  <li>
                    device IDs or other unique identifiers, including for your
                    network devices, and devices that are iCinema capable on your
                    Wi-Fi network;
                  </li>
                  <li>
                    resettable device identifiers (also known as advertising
                    identifiers), such as those on mobile devices, tablets, and
                    streaming media devices that include such identifiers (see the
                    "Cookies and Internet Advertising" section below for more
                    information);
                  </li>
                  <li>
                    device and software characteristics (such as type and
                    configuration), connection information including type (wifi,
                    cellular), statistics on page views, referring source (for
                    example, referral URLs), IP address (which may tell us your
                    general location), browser and standard web server log
                    information;
                  </li>
                  <li>
                    information collected via the use of cookies, web beacons and
                    other technologies, including ad data (such as information on
                    the availability and delivery of ads, the site URL, as well as
                    the date and time). (See our "Cookies and Internet
                    Advertising" section for more details.)
                  </li>
                </li>
              </p>

              <p>
                <li>
                  Information from partners:{" "}
                  <span>
                    We collect information from other companies with whom you have
                    a relationship (“Partners”). These Partners might include
                    (depending on what services you use): your TV or internet
                    service provider, or other streaming media device providers
                    who make our service available on their device; mobile phone
                    carriers or other companies who provide services to you and
                    collect payment for the iCinema service for distribution to us
                    or provide pre-paid promotions for the iCinema service; and
                    voice assistant platform providers who enable interaction with
                    our service through voice commands. The information Partners
                    provide us varies depending on the nature of the Partner
                    services, and may include:
                  </span>
                  <li>
                    search queries and commands applicable to iCinema that you
                    make through Partner devices or voice assistant platforms;
                  </li>
                  <li>
                    service activation information such as your email address or
                    other contact information;
                  </li>
                  <li>
                    IP addresses, device IDs or other unique identifiers, as well
                    as associated pre-paid promotion, billing and user interface
                    information, that support user authentication, the iCinema
                    service registration experience, Partner payment processing,
                    and the presentation of iCinema content to you through
                    portions of the Partner user interface.
                  </li>
                </li>
              </p>

              <p>
                <li>
                  Information from other sources:{" "}
                  <span>
                    We also obtain information from other sources. We protect this
                    information according to the practices described in this
                    Privacy Statement, plus any additional restrictions imposed by
                    the source of the data. These sources vary over time, but
                    could include:
                  </span>
                  <li>
                    service providers that help us determine a location based on
                    your IP address in order to customize our service and for
                    other uses consistent with this Privacy Statement;
                  </li>
                  <li>
                    security service providers who provide us with information to
                    secure our systems, prevent fraud and help us protect the
                    security of iCinema accounts;
                  </li>
                  <li>
                    payment service providers who provide us with payment or
                    balance information, or updates to that information, based on
                    their relationship with you;
                  </li>
                  <li>
                    online and offline data providers, from which we obtain
                    aggregated demographic, interest based and online advertising
                    related data;
                  </li>
                  <li>
                    publicly-available sources such as publicly available posts on
                    social media platforms and information available through
                    public databases associating IP addresses with internet
                    service providers (ISPs);
                  </li>
                  <li>
                    third party services that you are signed into and that provide
                    functions within iCinema games, such as multiplayer gameplay,
                    leaderboards, and game saving options.
                  </li>
                </li>
              </p>
            </div>

            <div className="use_of_information">
              <p>Use of Information</p>
              <p>
                We use information to provide, analyze, administer, enhance and
                personalize our services and marketing efforts, to manage member
                referrals, to process your registration, your orders and your
                payments, and to communicate with you on these and other topics.
                For example, we use such information to:
              </p>
              <p>
                <li>
                  determine your general geographic location, provide localized
                  content, provide you with customized and personalized viewing
                  recommendations for movies and TV shows we think will be of
                  interest to you, determine your ISP to support network
                  troubleshooting for you (we also use aggregated ISP information
                  for operational and business purposes), and help us quickly and
                  efficiently respond to inquiries and requests;{" "}
                </li>
              </p>

              <p>
                <li>
                  coordinate with Partners on making the iCinema service available
                  to members and providing information to non members about the
                  availability of the iCinema service, based on the specific
                  relationship you have with the Partner;{" "}
                </li>
              </p>

              <p>
                <li>
                  secure our systems, prevent fraud and help us protect the
                  security of iCinema accounts;
                </li>
              </p>

              <p>
                <li>
                  prevent, detect and investigate potentially prohibited or
                  illegal activities, including fraud, and to enforce our terms
                  (such as determining whether and for which iCinema signup offers
                  you are eligible and determining whether a particular device is
                  permitted to use the account consistent with our Terms of Use);
                </li>
              </p>

              <p>
                <li>
                  analyze and understand our audience, improve our service
                  (including our user interface experiences and service
                  performance) and optimize content selection, recommendation
                  algorithms and delivery;
                </li>
              </p>

              <p>
                <li>
                  communicate with you concerning our service so that we can send
                  you news about iCinema, details about new features and content
                  available on iCinema, special offers, promotional announcements,
                  consumer surveys, and to assist you with operational requests
                  such as password reset requests. These communications may be by
                  various methods, such as email, push notifications, text
                  message, online messaging channels, and matched identifier
                  communications (described below). Please see the "Your Choices"
                  section of this Privacy Statement to learn how to set or change
                  your communications preferences.
                </li>
              </p>
              <p>
                Our recommendations system strives to predict what you will be in
                the mood to watch when you log in. However, our recommendations
                system does not infer or attach socio-demographic information
                (like gender or race) to you. We have a Help article that explains
                how our recommendations system works - spoilers: the biggest
                driver of recommendations is what you actually choose to watch
                through our service. You can read the article at
                www.iCinema.com/recommendations.
              </p>
            </div>

            <div className="privacy_contacting_us">
              <p>Disclosure of Information</p>
              <p>
                We disclose your information for certain purposes and to third
                parties, as described below:
              </p>
              <p>
                <li>
                  The iCinema family of companies:{" "}
                  <span>
                    We share your information among the iCinema family of
                    companies (help.iCinema.com/legal/corpinfo) as needed for:
                    providing you with access to our services; providing customer
                    support; making decisions about service improvements; content
                    development; and for other purposes described in the Use of
                    Information section of this Privacy Statement.
                  </span>
                </li>
              </p>

              <p>
                <li>
                  Service Providers:{" "}
                  <span>
                    We use other companies, agents or contractors ("Service
                    Providers") to perform services on our behalf or to assist us
                    with the provision of services to you. For example, we engage
                    Service Providers to provide marketing, advertising,
                    communications, security, infrastructure and IT services, to
                    customize, personalize and optimize our service, to provide
                    bank account or balance information, to process credit card
                    transactions or other payment methods, to provide customer
                    service, to analyze and enhance data (including data about
                    users' interactions with our service), and to process and
                    administer consumer surveys. In the course of providing such
                    services, these Service Providers may have access to your
                    personal or other information. We do not authorize them to use
                    or disclose your personal information except in connection
                    with providing their services (which includes maintaining and
                    improving their services).
                  </span>
                </li>
              </p>

              <p>
                <li>
                  Partners{" "}
                  <span>
                    As described above, you may have a relationship with one or
                    more of our Partners, in which case we may share certain
                    information with them in order to coordinate with them on
                    providing the iCinema service to members and providing
                    information about the availability of the iCinema service. For
                    example, depending on what Partner services you use, we may
                    share information:
                  </span>
                  <li>
                    in order to facilitate Partner pre-paid promotions or
                    collection of payment for the iCinema service for distribution
                    to us;
                  </li>
                  <li>
                    with Partners who operate voice assistant platforms that allow
                    you to interact with our service using voice commands;
                  </li>
                  <li>
                    so that content and features available in the iCinema service
                    can be suggested to you in the Partner’s user interface. For
                    members, these suggestions are part of the iCinema service and
                    may include customized and personalized viewing
                    recommendations.
                  </li>
                </li>
              </p>

              <p>
                <li>
                  Promotional offers:{" "}
                  <span>
                    We may offer joint promotions or programs that, in order for
                    your participation, will require us to share your information
                    with third parties. In fulfilling these types of promotions,
                    we may share your name and other information in connection
                    with fulfilling the incentive. Please note that these third
                    parties are responsible for their own privacy practices.
                  </span>
                </li>
              </p>

              <p>
                <li>
                  Protection of iCinema and others:{" "}
                  <span>
                    iCinema and its Service Providers may disclose and otherwise
                    use your personal and other information where we or they
                    reasonably believe such disclosure is needed to (a) satisfy
                    any applicable law, regulation, legal process, or governmental
                    request, (b) enforce applicable terms of use, including
                    investigation of potential violations thereof, (c) detect,
                    prevent, or otherwise address illegal or suspected illegal
                    activities (including payment fraud), security or technical
                    issues, or (d) protect against harm to the rights, property or
                    safety of iCinema, its users or the public, as required or
                    permitted by law.
                  </span>
                </li>
              </p>

              <p>
                <li>
                  Business transfers:{" "}
                  <span>
                    In connection with any reorganization, restructuring, merger
                    or sale, or other transfer of assets, we will transfer
                    information, including personal information, provided that the
                    receiving party agrees to respect your personal information in
                    a manner that is consistent with our Privacy Statement.
                  </span>
                </li>
              </p>
            </div>

            <div className="access_to_account">
              <p>Access to Account and Profiles</p>

              <p>
                <li>
                  “Remember me” function:{" "}
                  <span>
                    For ease of access to your account, you can use the "Remember
                    me on this device" function when you log in to the website.
                    This function uses technology that enables us to provide
                    direct account access and to help administer the iCinema
                    service without requiring reentry of any password or other
                    user identification when your browser revisits the service.{" "}
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  Giving others access to your account:{" "}
                  <span>
                    If you share or otherwise allow others to have access to your
                    account, they will be able to see shows you have watched,
                    ratings, account information (including your email address or
                    other information in the "Account" area of our website), and
                    game related information (such as your in-game name and saved
                    game progress). This remains true even if you use our profiles
                    feature. You might have the option to use seamless account
                    login through the iCinema mobile app, which enables login to
                    the iCinema app on smart TVs, set top boxes, and other
                    streaming media devices on the Wi-Fi network to which you are
                    connected. If you use that feature, those devices will remain
                    signed into your account unless you later log out of those
                    devices.{" "}
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  Profiles:{" "}
                  <span>
                    Profiles allow users to have a distinct, personalized iCinema
                    experience, built around the movies and shows of interest to
                    them, as well as separate watch histories. Please note that
                    profiles are available to everyone who uses your iCinema
                    account, so that anyone with access to your iCinema account
                    can navigate to and use, edit or delete profiles. You should
                    explain this to others with access to your account, and if you
                    do not wish them to use or change your profile, be sure to let
                    them know. Profile users may be offered the opportunity to add
                    an email address, phone number or other information to the
                    profile and will be provided with notice of collection and use
                    at the time such information is requested (the Profile Privacy
                    Notice applies (<a href="https://icinemabd.com">iCinema BD</a>
                    )). We have various parental controls available, you can learn
                    more by reading our Help article located at{" "}
                    <a href="https://icinemabd.com">https://icinemabd.com </a>
                  </span>{" "}
                </li>
              </p>

              <p>
                <li>
                  Removing device access to your iCinema account:{" "}
                  <span>
                    To remove access to your iCinema account from your devices,
                    visit the "Account" section of our website, choose "Sign out
                    of all devices," and follow the instructions to deactivate
                    your devices (note, deactivation may not occur immediately).
                    Where possible, users of public or shared devices should log
                    out at the completion of each visit. If you sell or return a
                    computer or iCinema ready device, you should log out and
                    deactivate the device before doing so. If you do not maintain
                    the security of your password or device, or fail to log out or
                    deactivate your device, subsequent users may be able to access
                    your account, including your personal information.{" "}
                  </span>{" "}
                </li>
              </p>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Privacy;
