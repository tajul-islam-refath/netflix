import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import "./terms.scss";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Terms = () => {
  const { isBangla } = useContext(UserContext)
  return (
    <>
      {isBangla ?
        <div className="terms">
          <Link to="/browse" className="privacy_back">
            <GrFormPrevious className="privacy_prev_icon" />
            <p>Back to home</p>
          </Link>

          <div className="terms_of_use">
            <h4>আইসিনেমা ব্যবহারের শর্তাবলী</h4>
            <p>
              আইসিনেমা ব্যক্তিগতকৃত সাবস্ক্রিপশন পরিষেবা সরবরাহ করে থাকে যা আমাদের সদস্যদের ইন্টারনেট-সংযুক্ত টিভি, কম্পিউটার এবং অন্যান্য ডিভাইসে ("আইসিনেমা প্রস্তুত ডিভাইস") বিনোদন কনটেন্ট ("আইসিনেমা কনটেন্ট ") অ্যাক্সেস করতে দেয়।
              <br />
              <br />
              এই ব্যবহারের শর্তাবলী আপনার আমাদের পরিষেবার ব্যবহারকে নিয়ন্ত্রণ করে৷ এই ব্যবহারের শর্তাবলীতে ব্যবহার করা শব্দ যেমন "আইসিনেমা পরিষেবা", "আমাদের পরিষেবা" বা "পরিষেবা" অর্থ আইসিনেমা প্রদত্ত ব্যক্তিগতকৃত পরিষেবা যা আইসিনেমা কনটেন্ট আবিষ্কার এবং অ্যাক্সেস করার পাশাপাশি এর সকল ফিচার ও কার্যাবলী, সুপারিশ এবং পর্যালোচনা, আমাদের ওয়েবসাইট, ব্যবহারকারী ইন্টারফেস, সেইসাথে আমাদের পরিষেবার সাথে যুক্ত সমস্ত সামগ্রী এবং সফ্টওয়্যার।
            </p>
          </div>

          <div className="membership">
            <h4>1. সদস্যপদ  </h4>
            <div className="membership_points">
              <p>
                1.1. আপনার আইসিনেমা সদস্যতা বন্ধ না হওয়া পর্যন্ত চলতে থাকবে। আইসিনেমা পরিষেবা ব্যবহার করার জন্য আপনার অবশ্যই ইন্টারনেট অ্যাক্সেস এবং একটি আইসিনেমা রেডি ডিভাইস থাকতে হবে এবং আমাদেরকে এক বা একাধিক অর্থপ্রদানের পদ্ধতি প্রদান করতে হবে। "পেমেন্ট মেথড" মানে বর্তমান, বৈধ, স্বীকৃত অর্থপ্রদানের পদ্ধতি, যা সময়ে সময়ে আপডেট করা হতে পারে, এবং এতে তৃতীয় পক্ষের সাথে আপনার অ্যাকাউন্টের মাধ্যমে অর্থপ্রদান অন্তর্ভুক্ত থাকতে পারে। আপনি যদি আপনার বিলিংয়ের তারিখের আগে আপনার সদস্যতা বাতিল না করেন, তাহলে আপনি আমাদেরকে আপনার অর্থপ্রদানের পদ্ধতিতে পরবর্তী বিলিং চক্রের জন্য সদস্যতা ফি চার্জ করার অনুমোদন দিয়ে থাকেন (নীচে "বাতিলকরণ" দেখুন)।
                <br />
                <br />
                1.2. আইসিনেমা বেশ কয়েকটি সদস্যপদ পরিকল্পনা অফার করতে পারে তাদের মধ্যে তৃতীয় পক্ষের নিজস্ব পণ্য এবং পরিষেবার বিধানের সাথে সামঞ্জস্য  রেখে করা সদস্যতাও প্রদত্ত  হয়। আমরা এই ধরনের তৃতীয় পক্ষের দ্বারা প্রদত্ত পণ্য এবং পরিষেবাগুলির জন্য দায়ী নই। কিছু সদস্যতা পরিকল্পনার বিভিন্ন শর্ত এবং সীমাবদ্ধতা থাকতে পারে, যা আপনার সাইন-আপে বা আপনার জন্য করা অন্যান্য যোগাযোগের মাধ্যমে প্রকাশ করা হবে। আপনি iCinema.com ওয়েবসাইট পরিদর্শন করে এবং আপনার প্রোফাইল নামের নীচে পৃষ্ঠাগুলির শীর্ষে বিদ্যমান "অ্যাকাউন্ট" লিঙ্কে ক্লিক করে আপনার আইসিনেমা সদস্যতা সম্পর্কিত নির্দিষ্ট বিবরণ খুঁজে পেতে পারেন৷
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>2. প্রচারমূলক অফার</h4>
            <div className="membership_points">
              <p>
                আমরা সময়ে সময়ে বিশেষ প্রচারমূলক অফার, পরিকল্পনা বা সদস্যপদ ("ছাড়") অফার করতে পারি। অফারের যোগ্যতা আইসিনেমার নিজস্ব বিবেচনার ভিত্তিতে নির্ধারিত হয় এবং আমরা অফার প্রত্যাহার করার এবং আপনার অ্যাকাউন্ট হোল্ডে রাখার অধিকার সংরক্ষণ করি যদি আমরা নির্ধারণ করতে পারি যে আপনি যোগ্য নন৷ একটি বিদ্যমান বা সাম্প্রতিক আইসিনেমা সদস্যপদ যুক্ত পরিবারের সদস্যরা নির্দিষ্ট পরিচায়ক অফারগুলির জন্য যোগ্য নাও হতে পারে৷ অফারের যোগ্যতা নির্ধারণ করতে আমরা ডিভাইস আইডি, অর্থপ্রদানের পদ্ধতি অথবা বিদ্যমান বা সাম্প্রতিক আইসিনেমা সদস্যতার সাথে ব্যবহৃত একটি অ্যাকাউন্টের ইমেল ঠিকানার মতো তথ্য ব্যবহার করতে পারি। যোগ্যতার প্রয়োজনীয়তাসমূহ এবং অন্যান্য সীমাবদ্ধতা এবং শর্তাবলী প্রকাশ করা হবে যখন আপনি অফারটির জন্য সাইন-আপ করবেন অথবা আপনার জন্য উপলব্ধ অন্যান্য যোগাযোগের মাধ্যমে।
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>3. বিলিং এবং বাতিলকরণ </h4>
            <div className="membership_points">
              <p>
                3.1. বিলিং চক্র. আইসিনেমা পরিষেবার জন্য সদস্যতা ফি এবং আপনার পরিষেবাটি ব্যবহার করার ক্ষেত্রে আপনার যে কোনো চার্জ, যেমন ট্যাক্স এবং সম্ভাব্য লেনদেন ফি, "অ্যাকাউন্ট" পৃষ্ঠায় নির্দেশিত নির্দিষ্ট অর্থপ্রদানের তারিখে আপনার নির্বাচিত অর্থপ্রদানের পদ্ধতিতে চার্জ করা হবে। আপনার বিলিং চক্রের সময়সীমা নির্ভর করবে আপনি পরিষেবার জন্য সাইন আপ করার সময় আপনি যে ধরনের সদস্যতা বেছে নিবেন তার উপর। কিছু ক্ষেত্রে আপনার অর্থপ্রদানের তারিখ পরিবর্তিত হতে পারে, উদাহরণস্বরূপ যদি আপনার অর্থপ্রদানের পদ্ধতি সফলভাবে নিষ্পত্তি না হয়, আপনি যখন আপনার সদস্যতা পরিকল্পনা পরিবর্তন করেন বা আপনার অর্থপ্রদানের সদস্যতা এমন একটি দিনে শুরু হয় যেটি নির্দিষ্ট মাসে থাকে না। আপনার পরবর্তী অর্থপ্রদানের তারিখ দেখতে iCinema.com ওয়েবসাইটে যান এবং "অ্যাকাউন্ট" পৃষ্ঠায় "বিলিং বিশদ" লিঙ্কে ক্লিক করুন৷ আমরা আপনার সদস্যপদ বা পরিষেবা-সম্পর্কিত চার্জের প্রত্যাশায় বিভিন্ন পদ্ধতির মাধ্যমে আপনার অর্থপ্রদানের পদ্ধতি অনুমোদন করতে পারি, যার মধ্যে রয়েছে নিবন্ধন করার সাথে সাথে প্রায় এক মাস পর্যন্ত পরিষেবার জন্য অনুমোদন । আপনি যদি অর্থপ্রদানের পদ্ধতি হিসাবে তৃতীয় পক্ষের সাথে আপনার অ্যাকাউন্ট ব্যবহার করে আইসিনেমা -এর জন্য সাইন আপ করেন, তাহলে প্রযোজ্য তৃতীয় পক্ষের সাথে আপনার অ্যাকাউন্টে গিয়ে আপনি আপনার আইসিনেমা সদস্যতা সম্পর্কে বিলিং তথ্য পেতে পারেন।.
                <br />
                <br />
                3.2. মুল্য পরিশোধ পদ্ধতি. আইসিনেমা পরিষেবা ব্যবহার করতে আপনাকে অবশ্যই এক বা একাধিক অর্থপ্রদানের পদ্ধতি প্রদান করতে হবে। আপনার প্রাথমিক অর্থপ্রদানের পদ্ধতিটি প্রত্যাখ্যান করা হলে বা আমাদের কাছে পদ্ধতিটি আর উপলব্ধ না থাকলে আপনি আপনার অ্যাকাউন্টের সাথে যুক্ত যেকোন অর্থপ্রদানের পদ্ধতি চার্জ করার জন্য আমাদের অনুমোদন দিয়ে থাকেন। যেকোন অসংগৃহীত পরিমাণের জন্য আপনি দায়ী থাকবেন। মেয়াদ শেষ হওয়ার কারণে, অপর্যাপ্ত তহবিল বা অন্যথায় যদি কোনো অর্থপ্রদান সফলভাবে নিষ্পত্তি না হয় এবং আপনি আপনার অ্যাকাউন্ট বাতিল না করেন, আমরা সফলভাবে একটি বৈধ অর্থপ্রদানের পদ্ধতি চার্জ না করা পর্যন্ত আমরা আইসিনেমা পরিষেবাটিতে আপনার অ্যাক্সেস স্থগিত করতে পারি। কিছু অর্থপ্রদানের পদ্ধতির জন্য, ইস্যুকারী আপনা থেকে কিছু ফি নিতে পারে, যেমন বিদেশী লেনদেন ফি বা আপনার অর্থপ্রদানের পদ্ধতির প্রক্রিয়াকরণ সম্পর্কিত অন্যান্য ফি। স্থানীয় ট্যাক্স চার্জ ব্যবহৃত অর্থপ্রদান পদ্ধতির উপর নির্ভর করে পরিবর্তিত হতে পারে। বিস্তারিত জানার জন্য আপনার পেমেন্ট পদ্ধতি পরিষেবা প্রদানকারীর সাথে যোগাযোগ করুন।
                <br />
                <br />
                3.3. পেমেন্ট পদ্ধতি আপডেটকরন. আপনি "অ্যাকাউন্ট" পৃষ্ঠায় গিয়ে আপনার পেমেন্ট পদ্ধতি আপডেট করতে পারেন। আমরা পেমেন্ট পরিষেবা প্রদানকারীদের দ্বারা প্রদত্ত তথ্য ব্যবহার করে আপনার অর্থপ্রদানের পদ্ধতিগুলিও আপডেট করতে পারি। যেকোনো আপডেটের পরে, আপনি প্রযোজ্য অর্থপ্রদানের পদ্ধতি(গুলি) চার্জ করা চালিয়ে যাওয়ার জন্য আমাদের অনুমোদন করে থাকেন।.
                <br />
                <br />
                3.4. বাতিলকরণ। আপনি যে কোনো সময় আপনার আইসিনেমা সদস্যপদ বাতিল করতে পারেন, এবং বিলিং সময়কালের শেষ পর্যন্ত আপনার আইসিনেমা পরিষেবাতে অ্যাক্সেস থাকবে। যতদূর প্রযোজ্য আইন দ্বারা অনুমোদিত, প্রদানকৃত অর্থ গুলি অ-ফেরতযোগ্য এবং আমরা কোনও আংশিক মেয়াদ সদস্যতা বা অব্যবহৃত আইসিনেমা সামগ্রীর জন্য রিফান্ড বা ক্রেডিট প্রদান করি না। বাতিল করতে, "অ্যাকাউন্ট" পৃষ্ঠায় যান এবং বাতিলকরণের নির্দেশাবলী অনুসরণ করুন৷ আপনি যদি আপনার সদস্যপদ বাতিল করেন, আপনার বর্তমান বিলিং সময়কালের শেষে আপনার অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যাবে। আপনার অ্যাকাউন্ট কখন বন্ধ হবে তা দেখতে, "অ্যাকাউন্ট" পৃষ্ঠায় "বিলিং বিবরণ" এ ক্লিক করুন। আপনি যদি কোনো তৃতীয় পক্ষের সাথে আপনার অ্যাকাউন্টটি অর্থপ্রদানের পদ্ধতি হিসাবে ব্যবহার করে আইসিনেমা-এর জন্য সাইন আপ করেন এবং আপনার আইসিনেমা সদস্যপদ বাতিল করতে চান, তাহলে আপনাকে এই বাতিলিকরন তৃতীয় পক্ষের মাধ্যমে তা করতে হতে পারে, উদাহরণস্বরূপ প্রযোজ্য তৃতীয় পক্ষের মাধ্যমে আপনার অ্যাকাউন্টে গিয়ে এবং বন্ধ করা, আইসিনেমা পরিষেবা স্বয়ংক্রিয় পুনর্নবীকরণ করা অথবা সদস্যতা ত্যাগ করা।
                <br />
                <br />
                3.5. মূল্য এবং সদস্যতা পরিকল্পনা পরিবর্তন। আমরা সময়ে সময়ে আমাদের সদস্যতা পরিকল্পনা এবং আমাদের পরিষেবার মূল্য পরিবর্তন করতে পারি; যাইহোক, যেকোনো মূল্য পরিবর্তন অথবা আপনার সাবস্ক্রিপশন প্ল্যানের কোনো পরিবর্তন আপনাকে নোটিশ প্রদানের ৩০দিনের আগে প্রযোজ্য হবে না।
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>4. আইসিনেমা পরিষেবা</h4>
            <div className="membership_points">
              <p>
                4.1. আইসিনেমা পরিষেবার সদস্য হওয়ার জন্য আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে বা আপনার প্রদেশ, অঞ্চল বা দেশের সংখ্যাগরিষ্ঠদের বয়স হতে হবে। অপ্রাপ্তবয়স্করা শুধুমাত্র একজন প্রাপ্তবয়স্কের তত্ত্বাবধানে পরিষেবাটি ব্যবহার করতে পারে।
                <br />
                <br />
                4.2. আইসিনেমা পরিষেবা এবং পরিষেবার মাধ্যমে অ্যাক্সেস করা যেকোনো বিষয়বস্তু শুধুমাত্র আপনার ব্যক্তিগত এবং অ-বাণিজ্যিক ব্যবহারের জন্য এবং আপনার পরিবারের বাইরের ব্যক্তিদের সাথে শেয়ার করা যাবে না। আপনার আইসিনেমা সদস্যতা গ্রহনের সময় আমরা আপনাকে আইসিনেমা পরিষেবা এবং আইসিনেমা বিষয়বস্তু অ্যাক্সেস করার একটি সীমিত, অ-একচেটিয়া, অ-হস্তান্তরযোগ্য অধিকার প্রদান করি। পূর্বোক্ত ব্যতীত, কোন অধিকার, শিরোনাম বা স্বার্থ আপনার কাছে হস্তান্তর করা হবে না। আপনি পাবলিক পারফরম্যান্সের জন্য পরিষেবাটি ব্যবহার না করতে সম্মত হন৷
                <br />
                <br />
                4.3. আপনি আইসিনেমা বিষয়বস্তু অ্যাক্সেস করতে পারেন প্রাথমিকভাবে সেই দেশের মধ্যে যেখানে আপনি আপনার অ্যাকাউন্ট প্রতিষ্ঠা করেছেন এবং শুধুমাত্র সেই ভৌগলিক অবস্থানে যেখানে আমরা আমাদের পরিষেবা অফার করি এবং এই ধরনের কনটেন্ট লাইসেন্স করেছি৷ উপলভ্য কনটেন্ট ভৌগলিক অবস্থান অনুসারে এবং সময়ে সময়ে পরিবর্তিত হবে। আপনি একযোগে দেখতে পারেন এমন ডিভাইসের সংখ্যা নির্ভর করে আপনার নির্বাচিত সদস্যতা পরিকল্পনার উপর যা "অ্যাকাউন্ট" পৃষ্ঠায় নির্দিষ্ট করা আছে।
                <br />
                <br />
                4.4. কনটেন্ট লাইব্রেরি সহ আইসিনেমা পরিষেবা নিয়মিত আপডেট করা হয়। উপরন্তু, আমরা ক্রমাগত আমাদের ওয়েবসাইট, ব্যবহারকারী ইন্টারফেস, প্রচারমূলক ফিচার এবং আইসিনেমা কনটেন্টের উপলব্ধতা সহ আমাদের পরিষেবার বিভিন্ন দিক পরীক্ষা করি৷ আপনি "অ্যাকাউন্ট" পৃষ্ঠায় গিয়ে এবং "পরীক্ষায় অংশগ্রহণ" সেটিংস পরিবর্তন করে যেকোনো সময় পরীক্ষায় অংশগ্রহণ বন্ধ করতে পারেন।
                <br />
                <br />
                4.5. কিছু আইসিনেমা বিষয়বস্তু অস্থায়ী ডাউনলোডের জন্য এবং নির্দিষ্ট সমর্থিত ডিভাইসগুলিতে অফলাইনে দেখার জন্য লভ্য ("অফলাইন শিরোনাম")৷ সীমাবদ্ধতা প্রযোজ্য, যার মধ্যে রয়েছে অ্যাকাউন্ট প্রতি অফলাইন শিরোনামের সংখ্যার উপর বিধিনিষেধ, অফলাইন শিরোনাম থাকতে পারে এমন ডিভাইসগুলির সর্বাধিক সংখ্যা, আপনার অফলাইন শিরোনামগুলি দেখা শুরু করার সময়কাল এবং কতক্ষণ অফলাইন শিরোনামগুলি অ্যাক্সেসযোগ্য থাকবে। কিছু অফলাইন শিরোনাম নির্দিষ্ট দেশে চালু যোগ্য নাও হতে পারে এবং আপনি যদি এমন একটি দেশে অনলাইনে যান যেখানে আপনি সেই অফলাইন শিরোনামটি স্ট্রিম করতে সক্ষম হবেন না, আপনি সেই দেশে থাকাকালীন অফলাইন শিরোনামটি চালুর যোগ্য হবে না৷
                <br />
                <br />
                4.6. আপনি আইসিনেমা পরিষেবা ব্যবহার করতে সম্মত হন, এর সাথে যুক্ত সমস্ত বৈশিষ্ট্য এবং কার্যকারিতা, প্রযোজ্য সমস্ত আইন, নিয়ম এবং বিধান, অথবা পরিষেবা বা বিষয়বস্তু ব্যবহারের উপর অন্যান্য সকল বিধিনিষেধ অনুসারে। আপনি বিষয়বস্তু এবং তথ্য যা থেকে প্রাপ্ত বা প্রাপ্ত অথবা আইসিনেমা পরিষেবার মাধ্যমে প্রাপ্ত বিষয়বস্তু এবং তথ্য আপনি সংরক্ষন,পুনুরুৎপাদন, বিতরণ, সংশোধন, প্রদর্শন,  সম্পাদন, প্রকাশ, লাইসেন্স, থেকে ডেরিভেটিভ কাজ তৈরি, বিক্রয়ের জন্য অফার, বা ব্যবহার করতে সম্মত নন (ব্যবহারের এই শর্তাবলীতে স্পষ্টভাবে উল্লিখিত অনুমোদন ব্যতীত)। এছাড়াও আপনি সম্মত হন না যে: আইসিনেমা পরিষেবার কোনো বিষয়বস্তুর সুরক্ষাকে ফাঁকি দেওয়া, অপসারণ করা, পরিবর্তন করা, নিষ্ক্রিয় করা, অবনমিত করা বা ব্যর্থ করা; আইসিনেমা পরিষেবা অ্যাক্সেস করতে যে কোনও রোবট, মাকড়সা, স্ক্র্যাপার বা অন্যান্য স্বয়ংক্রিয় উপায় ব্যবহার করা; আইসিনেমা পরিষেবার মাধ্যমে অ্যাক্সেসযোগ্য যে কোনও সফ্টওয়্যার বা অন্যান্য পণ্য বা প্রক্রিয়াগুলি ডিকম্পাইল, রিভার্স ইঞ্জিনিয়ার বা বিচ্ছিন্ন করা; কোনো কোড বা পণ্য সন্নিবেশ করা বা আইসিনেমা পরিষেবার সাথে যুক্ত কোনো কম্পিউটার সফ্টওয়্যার বা হার্ডওয়্যার বা টেলিকমিউনিকেশন সরঞ্জামের কার্যকারিতায় বাধা, ধ্বংস বা সীমিত করার জন্য কোনো উপাদান, সফ্টওয়্যার ভাইরাস, কম্পিউটার কোড, ফাইল বা প্রোগ্রাম আপলোড, পোস্ট, ই-মেইল বা অন্যথায় পাঠাতে বা প্রেরণ না করতে সম্মত হন। আপনি যদি এই ব্যবহারের শর্তাবলী লঙ্ঘন করেন বা পরিষেবাটির অবৈধ বা প্রতারণামূলক ব্যবহারে জড়িত হন তবে আমরা আমাদের পরিষেবার আপনার ব্যবহার বন্ধ বা সীমাবদ্ধ করতে পারি।
                <br />
                <br />
                4.7. আইসিনেমা বিষয়বস্তুর প্রদর্শনের গুণমান ডিভাইস থেকে ডিভাইসে পরিবর্তিত হতে পারে এবং বিভিন্ন কারণের দ্বারা প্রভাবিত হতে পারে, যেমন আপনার অবস্থান, আপনার ইন্টারনেট ব্যান্ডউইথ এবং/অথবা ইন্টারনেট গতি। এইচডি, আল্ট্রা এইচডি এবং এইচডিআর প্রাপ্যতা আপনার ইন্টারনেট পরিষেবা এবং ডিভাইসের ক্ষমতার সাপেক্ষে। সব কন্টেন্ট সব ফরম্যাটে পাওয়া যায় না যেমন- এইচডি, আল্ট্রা এইচডি এবং এইচডিআর এবং সবধরনের সাবস্ক্রিপশন প্ল্যান সব ফরম্যাটে আপনাকে কন্টেন্ট পাওয়ার অনুমতি দেয় না। সেলুলার নেটওয়ার্কে ডিফল্ট প্লেব্যাক সেটিংস এইচডি, আল্ট্রা এইচডি এবং এইচডিআর বিষয়বস্তু বাদ দেয়। এসডি মানের জন্য সর্বনিম্ন সংযোগ গতি হল ১.০ এমবিপিএস; যাইহোক, উন্নত ভিডিও মানের জন্য আমরা একটি দ্রুত সংযোগের সুপারিশ করি। এইচডি কন্টেন্ট (720P বা উচ্চতর রেজোলিউশন হিসাবে সংজ্ঞায়িত) পাওয়ার জন্য প্রতি স্ট্রিমে কমপক্ষে ৩.০ এমবিপিএস ডাউনলোডের গতি বাঞ্ছনীয়। আল্ট্রা এইচডি (4k বা উচ্চতর রেজোলিউশন হিসাবে সংজ্ঞায়িত) পাওয়ার জন্য প্রতি স্ট্রিমে কমপক্ষে ১৫.০ এমবিপিএস-এর ডাউনলোড গতি বাঞ্ছনীয়। আপনি সমস্ত ইন্টারনেট অ্যাক্সেস চার্জের জন্য দায়ী। সম্ভাব্য ইন্টারনেট ডেটা ব্যবহারের চার্জ সম্পর্কে তথ্যের জন্য অনুগ্রহ করে আপনার ইন্টারনেট প্রদানকারীর সাথে যোগাযোগ করুন। আইসিনেমা বিষয়বস্তু দেখা শুরু করতে যে সময় লাগে তা আপনার অবস্থান, সেই সময়ে উপলব্ধ ব্যান্ডউইথ, আপনার নির্বাচিত সামগ্রী এবং আপনার আইসিনেমা রেডি ডিভাইসের কনফিগারেশন সহ বিভিন্ন কারণের উপর ভিত্তি করে পরিবর্তিত হবে৷ .
                <br />
                <br />
                4.8. আইসিনেমা সফ্টওয়্যার আইসিনেমার দ্বারা বা আইসিনেমার জন্য তৈরি করে নেয়া হয়েছে এবং এটি শুধুমাত্র অনুমোদিত স্ট্রিমিং এবং আইসিনেমা রেডি ডিভাইসগুলির মাধ্যমে আইসিনেমা সামগ্রী অ্যাক্সেস করার জন্য ব্যবহার করা যেতে পারে। এই সফ্টওয়্যারটি ডিভাইস এবং মাধ্যম অনুসারে পরিবর্তিত হতে পারে এবং কার্যকারিতা এবং বৈশিষ্ট্যগুলি ডিভাইসগুলির মধ্যেও আলাদা হতে পারে। আপনি স্বীকার করেন যে পরিষেবাটি ব্যবহার করার জন্য তৃতীয় পক্ষের সফ্টওয়্যার প্রয়োজন হতে পারে যা তৃতীয় পক্ষের লাইসেন্সের বিষয়। আপনি সম্মত হন যে আপনি স্বয়ংক্রিয়ভাবে আইসিনেমা সফ্টওয়্যার এবং সংশ্লিষ্ট তৃতীয় পক্ষের সফ্টওয়্যারের আপডেট হওয়া সংস্করণগুলি পেতে পারেন৷ .
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>5. পাসওয়ার্ড এবং অ্যাকাউন্ট অ্যাক্সেস </h4>
            <div className="membership_points">
              <p>
                যে সদস্য আইসিনেমা অ্যাকাউন্ট তৈরি করেছেন এবং যার অর্থপ্রদানের পদ্ধতি চার্জ করা হয়েছে সে ("অ্যাকাউন্টের মালিক") আইসিনেমা অ্যাকাউন্টের মাধ্যমে যে কোনও কার্যকলাপের জন্য দায়ী৷ অ্যাকাউন্টের উপর নিয়ন্ত্রণ বজায় রাখতে এবং কাউকে অ্যাকাউন্ট অ্যাক্সেস করতে বাধা দিতে (যা অ্যাকাউন্টের ইতিহাস দেখার তথ্য অন্তর্ভুক্ত করে), অ্যাকাউন্টের মালিকের উচিত আইসিনেমা রেডি ডিভাইসগুলির উপর নিয়ন্ত্রণ বজায় রাখা যা পরিষেবাটি অ্যাক্সেস করতে ব্যবহৃত হয় এবং পাসওয়ার্ড বা অ্যাকাউন্টের সাথে সম্পর্কিত অর্থপ্রদান পদ্ধতির বিশদ বিবরণ কারো সাথে প্রকাশ না করা। আপনার অ্যাকাউন্ট সম্পর্কিত আপনি আমাদেরকে যে তথ্য প্রদান করেন তার আপডেট এবং যথার্থতা বজায় রাখার জন্য আপনি দায়ী। পরিচয় চুরি বা অন্যান্য প্রতারণামূলক কার্যকলাপ থেকে আপনাকে, আইসিনেমা বা আমাদের পার্টনারদের রক্ষা করার জন্য আমরা আপনার অ্যাকাউন্ট বন্ধ করতে পারি বা আপনার অ্যাকাউন্ট হোল্ডে রাখতে পারি।
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>6. ওয়ারেন্টি এবং দায়বদ্ধতার সীমাবদ্ধতা</h4>
            <div className="membership_points">
              <p>
                আইসিনেমা পরিষেবা প্রদান করা হয়ওয়ারেন্টি বা শর্ত ছাড়াই এটি "যেমন আছে" সেভাবে ৷ বিশেষ করে, আমাদের পরিষেবা নিরবচ্ছিন্ন বা ত্রুটি মুক্ত নাও হতে পারে। আপনি আমাদের বিরুদ্ধে সমস্ত বিশেষ, পরোক্ষ এবং ফলস্বরূপ ক্ষতিপূরণ পরিত্যাগ করে থাকেন। এই শর্তাবলী আপনার বসবাসের দেশের বাধ্যতামূলক আইনের অধীনে আপনার প্রাপ্য হতে পারে এমন কোনো অ-মওকুফযোগ্য ওয়ারেন্টি বা ভোক্তা সুরক্ষা অধিকারকে সীমাবদ্ধ করবে না।
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>7. ক্লাস অ্যাকশন মওকুফ</h4>
            <div className="membership_points">
              <p>
                যেখানে প্রযোজ্য আইনের অধীনে অনুমোদিত, আপনি এবং আইসিনেমা সম্মত হন যে প্রত্যেকে ব্যক্তিগত ক্ষমতার অধীনে শুধুমাত্র একে অন্যের বিরুদ্ধে দাবি আনতে পারে, এবং কোন উদ্দেশ্যমূলক শ্রেণীর বাদী বা প্রতিনিধিত্বমূলক কার্যধারার বাদী বা শ্রেণী সদস্য হিসাবে নয়। অধিকন্তু, যেখানে প্রযোজ্য আইনের অধীনে অনুমতি দেওয়া হয়, যদি না আপনি এবং আইসিনেমা উভয়েই অন্যথায় সম্মত হন, আদালত আপনার দাবির সাথে একাধিক ব্যক্তির দাবি একত্রিত করতে পারে না, এবং অন্যথায় কোনো প্রকারের প্রতিনিধি বা শ্রেণি কার্যক্রমের সভাপতিত্ব করতে পারে না।
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>8. বিবিধ</h4>
            <div className="membership_points">
              <p>
                8.1. সরকারি আইন। এই ব্যবহারের শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের আইন অনুসারে পরিচালিত এবং বোঝানো হবে।
                <br />
                <br />
                8.2. অযাচিত উপকরণ। আইসিনেমা এর কনটেন্ট জন্য কোন অযাচিত উপকরণ বা ধারনা গ্রহণ করে না এবং আইসিনেমা -এ প্রেরিত উপকরণ বা ধারণার সাথে কোনো মিডিয়াতে এর কোনো বিষয়বস্তু বা প্রোগ্রামিংয়ের মিলের জন্য দায়ী নয়।
                <br />
                <br />
                8.3. গ্রাহক সমর্থন। আমাদের পরিষেবা এবং এর বৈশিষ্ট্য সম্পর্কে আরও তথ্য পেতে বা আপনার অ্যাকাউন্টে সহায়তার প্রয়োজন হলে, অনুগ্রহ করে আইসিনেমা সহায়তা কেন্দ্রে যান, যা iCinema.com ওয়েবসাইটের মাধ্যমে অ্যাক্সেসযোগ্য। নির্দিষ্ট কিছু ক্ষেত্রে, গ্রাহক পরিষেবা একটি দূরবর্তী অ্যাক্সেস সমর্থন টুল ব্যবহার করে আপনাকে সাহায্য করতে পারে যার মাধ্যমে আমাদের আপনার কম্পিউটারে সম্পূর্ণ অ্যাক্সেস রয়েছে। আপনি যদি আমাদের এই অ্যাক্সেস পেতে না চান, তাহলে আপনার রিমোট অ্যাক্সেস টুলের মাধ্যমে সমর্থন করতে সম্মতি দেওয়া উচিত নয় এবং আমরা আপনাকে অন্যান্য উপায়ে সহায়তা করব। এই ব্যবহারের শর্তাবলী এবং গ্রাহক সহায়তা বা আমাদের ওয়েবসাইটগুলির অন্যান্য অংশ দ্বারা প্রদত্ত তথ্যের মধ্যে কোনও বিরোধের ক্ষেত্রে, এই ব্যবহারের শর্তাবলী নিয়ন্ত্রণ করবে।
                <br />
                <br />
                8.4. সারভাইভাল। যদি এই ব্যবহারের শর্তাবলীর কোন বিধান বা বিধান অবৈধ, বেআইনি, বা অপ্রয়োগযোগ্য বলে ধরে নেওয়া হয়, তবে অবশিষ্ট বিধানগুলির ভ্যালিডিটি, বৈধতা এবং প্রয়োগযোগ্যতা সম্পূর্ণরূপে কার্যকর ও বহাল থাকবে৷
                <br />
                <br />
                8.5. ব্যবহার এবং নিয়োগের শর্তাবলী পরিবর্তন। আইসিনেমা, সময়ে সময়ে, এই ব্যবহারের শর্তাবলী পরিবর্তন করতে পারে। এই ধরনের পরিবর্তনগুলি আপনার ক্ষেত্রে প্রযোজ্য হওয়ার অন্তত ৩০ দিন আগে আমরা আপনাকে অবহিত করব। আমরা যেকোন সময় আমাদের সংশ্লিষ্ট অধিকার এবং বাধ্যবাধকতা সহ আপনার সাথে আমাদের চুক্তি বরাদ্দ বা স্থানান্তর করতে পারি এবং আপনি এই ধরনের একটি নিয়োগ বা স্থানান্তর সংক্রান্ত বিষয়ে আমাদের সাথে সহযোগিতা করতে সম্মত হন।
                <br />
                <br />
                8.6. ইলেকট্রনিক কমিউনিকেশনস। আমরা আপনাকে আপনার অ্যাকাউন্ট সম্পর্কিত তথ্য পাঠাব (যেমন, অর্থপ্রদানের অনুমোদন, বিল, পাসওয়ার্ড বা অর্থপ্রদানের পদ্ধতিতে পরিবর্তন, নিশ্চিতকরণ বার্তা, বিজ্ঞপ্তি) শুধুমাত্র ইলেকট্রনিক আকারে, উদাহরণস্বরূপ নিবন্ধনের সময় প্রদত্ত আপনার ইমেল ঠিকানায় পাঠানো ইমেল।
              </p>
            </div>
          </div>
        </div>
        :
        <div className="terms">
          <Link to="/browse" className="privacy_back">
            <GrFormPrevious className="privacy_prev_icon" />
            <p>Back to home</p>
          </Link>

          <div className="terms_of_use">
            <h4>iCinema Terms of Use</h4>
            <p>
              iCinema provides a personalized subscription service that allows our
              members to access entertainment content (“iCinema content”) over the
              Internet on certain Internet-connected TVs, computers and other
              devices ("iCinema ready devices").
              <br />
              <br />
              These Terms of Use govern your use of our service. As used in these
              Terms of Use, "iCinema service", "our service" or "the service"
              means the personalized service provided by iCinema for discovering
              and accessing iCinema content, including all features and
              functionalities, recommendations and reviews, our websites, and user
              interfaces, as well as all content and software associated with our
              service.
            </p>
          </div>

          <div className="membership">
            <h4>1. Membership</h4>
            <div className="membership_points">
              <p>
                1.1. Your iCinema membership will continue until terminated. To
                use the iCinema service you must have Internet access and a
                iCinema ready device, and provide us with one or more Payment
                Methods. “Payment Method” means a current, valid, accepted method
                of payment, as may be updated from time to time, and which may
                include payment through your account with a third party. Unless
                you cancel your membership before your billing date, you authorize
                us to charge the membership fee for the next billing cycle to your
                Payment Method (see "Cancellation" below).
                <br />
                <br />
                1.2. We may offer a number of membership plans, including
                memberships offered by third parties in conjunction with the
                provision of their own products and services. We are not
                responsible for the products and services provided by such third
                parties. Some membership plans may have differing conditions and
                limitations, which will be disclosed at your sign-up or in other
                communications made available to you. You can find specific
                details regarding your iCinema membership by visiting the
                iCinema.com website and clicking on the "Account" link available
                at the top of the pages under your profile name.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>2. Promotional Offers</h4>
            <div className="membership_points">
              <p>
                We may from time to time offer special promotional offers, plans
                or memberships (“Offers”). Offer eligibility is determined by
                iCinema at its sole discretion and we reserve the right to revoke
                an Offer and put your account on hold in the event that we
                determine you are not eligible. Members of households with an
                existing or recent iCinema membership may not be eligible for
                certain introductory Offers. We may use information such as device
                ID, method of payment or an account email address used with an
                existing or recent iCinema membership to determine Offer
                eligibility. The eligibility requirements and other limitations
                and conditions will be disclosed when you sign-up for the Offer or
                in other communications made available to you.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>3. Billing and Cancellation</h4>
            <div className="membership_points">
              <p>
                3.1. Billing Cycle. The membership fee for the iCinema service and
                any other charges you may incur in connection with your use of the
                service, such as taxes and possible transaction fees, will be
                charged to your Payment Method on the specific payment date
                indicated on the "Account" page. The length of your billing cycle
                will depend on the type of subscription that you choose when you
                signed up for the service. In some cases your payment date may
                change, for example if your Payment Method has not successfully
                settled, when you change your subscription plan or if your paid
                membership began on a day not contained in a given month. Visit
                the iCinema.com website and click on the "Billing details" link on
                the "Account" page to see your next payment date. We may authorize
                your Payment Method in anticipation of membership or
                service-related charges through various methods, including
                authorizing it for up to approximately one month of service as
                soon as you register. If you signed up for iCinema using your
                account with a third party as a Payment Method, you can find the
                billing information about your iCinema membership by visiting your
                account with the applicable third party.
                <br />
                <br />
                3.2. Payment Methods. To use the iCinema service you must provide
                one or more Payment Methods. You authorize us to charge any
                Payment Method associated to your account in case your primary
                Payment Method is declined or no longer available to us for
                payment of your subscription fee. You remain responsible for any
                uncollected amounts. If a payment is not successfully settled, due
                to expiration, insufficient funds, or otherwise, and you do not
                cancel your account, we may suspend your access to the service
                until we have successfully charged a valid Payment Method. For
                some Payment Methods, the issuer may charge you certain fees, such
                as foreign transaction fees or other fees relating to the
                processing of your Payment Method. Local tax charges may vary
                depending on the Payment Method used. Check with your Payment
                Method service provider for details.
                <br />
                <br />
                3.3. Updating your Payment Methods. You can update your Payment
                Methods by going to the "Account" page. We may also update your
                Payment Methods using information provided by the payment service
                providers. Following any update, you authorize us to continue to
                charge the applicable Payment Method(s).
                <br />
                <br />
                3.4. Cancellation. You can cancel your iCinema membership at any
                time, and you will continue to have access to the iCinema service
                through the end of your billing period. To the extent permitted by
                the applicable law, payments are non-refundable and we do not
                provide refunds or credits for any partial membership periods or
                unused iCinema content. To cancel, go to the "Account" page and
                follow the instructions for cancellation. If you cancel your
                membership, your account will automatically close at the end of
                your current billing period. To see when your account will close,
                click "Billing details" on the "Account" page. If you signed up
                for iCinema using your account with a third party as a Payment
                Method and wish to cancel your iCinema membership, you may need to
                do so through such third party, for example by visiting your
                account with the applicable third party and turning off
                auto-renew, or unsubscribing from the iCinema service through that
                third party.
                <br />
                <br />
                3.5. Changes to the Price and Subscription Plans. We may change
                our subscription plans and the price of our service from time to
                time; however, any price changes or changes to your subscription
                plans will apply no earlier than 30 days following notice to you.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>4. iCinema Service</h4>
            <div className="membership_points">
              <p>
                4.1. You must be at least 18 years of age, or the age of majority
                in your province, territory or country, to become a member of the
                iCinema service. Minors may only use the service under the
                supervision of an adult.
                <br />
                <br />
                4.2. The iCinema service and any content accessed through the
                service are for your personal and non-commercial use only and may
                not be shared with individuals beyond your household. During your
                iCinema membership we grant you a limited, non-exclusive,
                non-transferable right to access the iCinema service and iCinema
                content. Except for the foregoing, no right, title or interest
                shall be transferred to you. You agree not to use the service for
                public performances.
                <br />
                <br />
                4.3. You may access the iCinema content primarily within the
                country in which you have established your account and only in
                geographic locations where we offer our service and have licensed
                such content. The content that may be available will vary by
                geographic location and will change from time to time. The number
                of devices on which you may simultaneously watch depends on your
                chosen subscription plan and is specified on the "Account" page.
                <br />
                <br />
                4.4. The iCinema service, including the content library, is
                regularly updated. In addition, we continually test various
                aspects of our service, including our websites, user interfaces,
                promotional features and availability of iCinema content. You can
                turn off test participation at any time by visiting the "Account"
                page and changing the "Test participation" settings.
                <br />
                <br />
                4.5. Some iCinema content is available for temporary download and
                offline viewing on certain supported devices (“Offline Titles”).
                Limitations apply, including restrictions on the number of Offline
                Titles per account, the maximum number of devices that can contain
                Offline Titles, the time period within which you will need to
                begin viewing Offline Titles and how long the Offline Titles will
                remain accessible. Some Offline Titles may not be playable in
                certain countries and if you go online in a country where you
                would not be able to stream that Offline Title, the Offline Title
                will not be playable while you are in that country.
                <br />
                <br />
                4.6. You agree to use the iCinema service, including all features
                and functionalities associated therewith, in accordance with all
                applicable laws, rules and regulations, or other restrictions on
                use of the service or content therein. You agree not to archive,
                reproduce, distribute, modify, display, perform, publish, license,
                create derivative works from, offer for sale, or use (except as
                explicitly authorized in these Terms of Use) content and
                information contained on or obtained from or through the iCinema
                service. You also agree not to: circumvent, remove, alter,
                deactivate, degrade or thwart any of the content protections in
                the iCinema service; use any robot, spider, scraper or other
                automated means to access the iCinema service; decompile, reverse
                engineer or disassemble any software or other products or
                processes accessible through the iCinema service; insert any code
                or product or manipulate the content of the iCinema service in any
                way; or use any data mining, data gathering or extraction method.
                In addition, you agree not to upload, post, e-mail or otherwise
                send or transmit any material designed to interrupt, destroy or
                limit the functionality of any computer software or hardware or
                telecommunications equipment associated with the iCinema service,
                including any software viruses or any other computer code, files
                or programs. We may terminate or restrict your use of our service
                if you violate these Terms of Use or are engaged in illegal or
                fraudulent use of the service.
                <br />
                <br />
                4.7. The quality of the display of the iCinema content may vary
                from device to device, and may be affected by a variety of
                factors, such as your location, the bandwidth available through
                and/or speed of your Internet connection. HD, Ultra HD and HDR
                availability is subject to your Internet service and device
                capabilities. Not all content is available in all formats, such as
                HD, Ultra HD or HDR and not all subscription plans allow you to
                receive content in all formats. Default playback settings on
                cellular networks exclude HD, Ultra HD and HDR content. The
                minimum connection speed for SD quality is 1.0 Mbps; however, we
                recommend a faster connection for improved video quality. A
                download speed of at least 3.0 Mbps per stream is recommended to
                receive HD content (defined as a resolution of 720p or higher). A
                download speed of at least 15.0 Mbps per stream is recommended to
                receive Ultra HD (defined as a resolution of 4K or higher). You
                are responsible for all Internet access charges. Please check with
                your Internet provider for information on possible Internet data
                usage charges. The time it takes to begin watching iCinema content
                will vary based on a number of factors, including your location,
                available bandwidth at the time, the content you have selected and
                the configuration of your iCinema ready device.
                <br />
                <br />
                4.8. iCinema software is developed by, or for, iCinema and may
                solely be used for authorized streaming and to access iCinema
                content through iCinema ready devices. This software may vary by
                device and medium, and functionalities and features may also
                differ between devices. You acknowledge that the use of the
                service may require third party software that is subject to third
                party licenses. You agree that you may automatically receive
                updated versions of the iCinema software and related third-party
                software.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>5. Passwords and Account Access</h4>
            <div className="membership_points">
              <p>
                The member who created the iCinema account and whose Payment
                Method is charged (the "Account Owner") is responsible for any
                activity that occurs through the iCinema account. To maintain
                control over the account and to prevent anyone from accessing the
                account (which would include information on viewing history for
                the account), the Account Owner should maintain control over the
                iCinema ready devices that are used to access the service and not
                reveal the password or details of the Payment Method associated
                with the account to anyone. You are responsible for updating and
                maintaining the accuracy of the information you provide to us
                relating to your account. We can terminate your account or place
                your account on hold in order to protect you, iCinema or our
                partners from identity theft or other fraudulent activity.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>6. Warranties and Limitations on Liability</h4>
            <div className="membership_points">
              <p>
                The iCinema service is provided "as is" and without warranty or
                condition. In particular, our service may not be uninterrupted or
                error-free. You waive all special, indirect and consequential
                damages against us. These terms will not limit any non-waivable
                warranties or consumer protection rights that you may be entitled
                to under the mandatory laws of your country of residence.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>6. Class Action Waiver</h4>
            <div className="membership_points">
              <p>
                WHERE PERMITTED UNDER THE APPLICABLE LAW, YOU AND iCinema AGREE
                THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
                INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, where
                permitted under the applicable law, unless both you and iCinema
                agree otherwise, the court may not consolidate more than one
                person's claims with your claims, and may not otherwise preside
                over any form of a representative or class proceeding.
              </p>
            </div>
          </div>

          <div className="membership">
            <h4>8. Miscellaneous</h4>
            <div className="membership_points">
              <p>
                8.1. Governing Law. These Terms of Use shall be governed by and
                construed in accordance with the laws of the Republic of
                Singapore.
                <br />
                <br />
                8.2. Unsolicited Materials. iCinema does not accept unsolicited
                materials or ideas for iCinema content and is not responsible for
                the similarity of any of its content or programming in any media
                to materials or ideas transmitted to iCinema.
                <br />
                <br />
                8.3. Customer Support. To find more information about our service
                and its features or if you need assistance with your account,
                please visit the iCinema Help Center, which is accessible through
                the iCinema.com website. In certain instances, Customer Service
                may best be able to assist you by using a remote access support
                tool through which we have full access to your computer. If you do
                not want us to have this access, you should not consent to support
                through the remote access tool, and we will assist you through
                other means. In the event of any conflict between these Terms of
                Use and information provided by Customer Support or other portions
                of our websites, these Terms of Use will control.
                <br />
                <br />
                8.4. Survival. If any provision or provisions of these Terms of
                Use shall be held to be invalid, illegal, or unenforceable, the
                validity, legality and enforceability of the remaining provisions
                shall remain in full force and effect.
                <br />
                <br />
                8.5. Changes to Terms of Use and Assignment. iCinema may, from
                time to time, change these Terms of Use. We will notify you at
                least 30 days before such changes apply to you. We may assign or
                transfer our agreement with you including our associated rights
                and obligations at any time and you agree to cooperate with us in
                connection with such an assignment or transfer.
                <br />
                <br />
                8.6. Electronic Communications. We will send you information
                relating to your account (e.g. payment authorizations, invoices,
                changes in password or Payment Method, confirmation messages,
                notices) in electronic form only, for example via emails to your
                email address provided during registration.
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Terms;
