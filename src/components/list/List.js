import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, Suspense, lazy } from "react";
//import ListItem from "../listItem/ListItem";
import "./list.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  InfoOutlined,
} from "@material-ui/icons";
//import { FiMoreHorizontal } from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ListItem = lazy(() => import("../listItem/ListItem"));

export default function List({ list_header }) {
  const [isMoved, setIsMoved] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);

  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);

  const navigate = useNavigate();

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  if (selectedId !== null) {
    setTimeout(() => {
      setStartVideo(true);
    }, 4000);
  }

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    setIsMovedRight(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    if (direction === "left" && slideNumber === 1) {
      setIsMoved(false);
    }
    if (direction === "right" && slideNumber === 3) {
      setIsMovedRight(false);
    }
  };

  const watch_movie = () => {
    navigate("/watch/" + 1);
  };

  let cw = [];

  if (list_header === "Continue Watching") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Action Movies") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Horror Movies") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Family Movies") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Samson",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Korean TV Shows") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Award-winning TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Family TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Indian TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Recently Added") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Trending Now") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Indian Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Comedy Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "New on Icinema") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Coming This Week") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Coming Next Week") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Worth The Wait") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "K-Dramas") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Anime") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Super Natural Soaps") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Recently Added") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Samson",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Korean TV Shows") {
    cw = [
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        title: "",
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Award-winning TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Family TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Indian TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Recently Added") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Trending Now") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Indian Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Comedy Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "New on Icinema") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Coming This Week") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Coming Next Week") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegK2Y5ordgaCmFTJfHA8Hsz8vdXMLvq_GcGvK8NjVGFsF2I9yJsZ7LxleRpuS8X-P1dT0LgmpoC8vtaz0oRFewDezyJ0DprEVJN69MDTdO_odX_j2ZHHVcfRwbazg.jpg?r=231",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVgazqRTH6NqLmjq0bLvpmzKjpRfCSyRio55WDXXu5P4korQnb93swJHxhh8jskwqh0IVngQVCnLjTtLt3zpAGZONvg6Zefdv27HTDQWdA8EPWHXPOPZ0PuUt0msU8uEQ0dS2J2C8JnlaP2iEAhoc3vQLEXv9_IOvsGfbUh0AlKF.webp?r=748",
        des: "When two siblings stumble on a strange hole in the wall of their grandparents’ house, horrifying incidents reveal sinister secrets about their family.",
        year: "2021",
        age: "18+",
        time: "2h 5m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Horror, Gruesome",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8ykbycKEvO4tkNi5JT0PjhZKf_xp-iNMNtXXdSgImbUfC_ajD6LI8pxJ4uIk2J6ISb6Ftn6FVp86Le4cNj8qeAKi1t.webp?r=2dd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbJc23QPt2XJkS3lKgDebWHwG6K2UcNBel4Eb8PDFVl8d-xGvQGjt5APj6WkbntVNGb28Ncrxwt0tFslgHzWvBL92INEs93ljCA.webp?r=436",
        des: "He's blind and rich -- the perfect target for robbery. But the tables turn when three teen thieves find themselves in a lethal game of cat and mouse.",
        year: "2016",
        age: "18+",
        time: "1h 28m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmndOzmCP0gMq1q3EHeHTUn9xQhFvfeNDqz3gNGa6oOlTjbwal17jGpDYKuImE8iF0BiTfj-zEFEfpAysp2NO8DDFfl.webp?r=d8d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRok3bwB6YoSiE6oMAxItA0ffBwZ0m94dno37qPSIHGUJ3H8jg6Fk2t7pMgR3zBz6bBxToEBP5B5CgBj-2PFHBc4t-zSf-_2nj0.webp?r=ae3",
        des: "Kate and John Coleman adopt 9-year-old Esther from an orphanage, but it doesn't take long for Kate to see through Esther's angelic façade.",
        year: "2009",
        age: "18+",
        time: "2h 2m",
        director: "Dhruv",
        cast: "Vera Farmiga, Peter",
        writer: "Dhruv",
        genre: "Scary, Sunspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-PUrZFOhYRUwASiCY9s0coJXL2q0mVxu_AscCNFc7cvLhZEmGjfBIbmrZUw1F3Vdadj8SPCErBk2mL6_6HEeQQdU3.webp?r=bcd",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZzvortJi7zi8mB5yeCvrUTauO2nOApp3mrcyVa3bqgpR-1I-F8NMvZLC4WKy_QVic2lEITKx0-Fb1JwySIAHn4L-kDDyeDO6zM.webp?r=7db",
        des: "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter.",
        year: "2019",
        age: "16+",
        time: "1h 46m",
        director: "Farah Khan",
        cast: "Makenna Grace, Madison",
        writer: "Farah Khan",
        genre: "Horror, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaTiON2HfU1M7RRfZJbg_oHGM4BOtTS96PoOA0yPhPhRrdU6RjALsZ-cTDyisn_n9JJDswnEETGiZDpxsSj8i7AnTQ6.webp?r=0aa",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTF0EyCziy07CIXm3wH-sGNe27UMspCChIBXF1A8nsTFQL7MJcd7YcEYPE26bDgK_lfZQJxJL6phHjtk5zH8ke5mekS1pOr6Qbc.webp?r=2a9",
        des: "Twenty-seven years after their terrifying run-in with Pennywise, the Losers Club get the dreaded call to return to Derry and finish what they started.",
        year: "2019",
        age: "18+",
        time: "2h 49m",
        director: "Hwang Dong-hyuk",
        cast: "Jessica, James, Bill",
        writer: "Hwang Dong-hyuk",
        genre: "Scary, Suspense",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHS8OjMDFh_sJjd3oiemLubfBiFHiRNQeOehpZoKyZ4557wq5_icfO1Z4hHhne-uo4FEMSv1owbR6V_UEI_AAQps_XQ0ur9-XvL0uQ3qzk_QuVY82PW-LSRKrihlA.jpg?r=a52",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSolwAH0rljfAuw9PXvLvbulLdqCMqXyx3oaiyYR-wp3qxPq2_2_9l0aVjzJCs3rF3sctJ9lIa4mkxiTp2qdzpiff8F2PEj9ZREH8ba3qODv_CB4aG3K2AEvMFE0l0Fpf-A1at8gN7erPEUbOTdNgkGzcRowhNHTwyHM5rn13_Se.webp?r=a49",
        des: "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
        year: "2019",
        age: "16+",
        time: "1h 30m",
        director: "Shipka",
        cast: "Kiernan Shipka, Christian Convery",
        writer: "Shipka",
        genre: "Omnious, Scary, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaUwQRDGBxQSBu-873Y6D8bqRELZT941nb0ONGez1ABXsjoI4dZ5eD4VEnh-PkGppz3gRpxw0sRWzn3aTk7npJvbib2.webp?r=e8d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbaqWHvrz7JndqbAtoQdoJiZ514HdAaGVlDPGbT7DuK7XaFXBj4ruWE4AnvHPpL6R7xU8F0lHAT41EOuibxajW86g2YXJkSnk4E.webp?r=872",
        des: "As a series of murders hit close to home, a video game designer with post-traumatic stress must confront her demons, or risk becoming their victim.",
        year: "2019",
        age: "18+",
        time: "1h 37m",
        director: "Luis Alfaro",
        cast: "Taapsee Pannu, Vinodhini",
        writer: "Luis Alfaro",
        genre: "Dark, Violent",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQl3tSqCiNKY4mAcjoJOeBufGSEfneTsviTeLkMRDEiSXKi5GE0K-SgScQqb9YnOvu7EttdyA835WKI5ef85-ebNn5Uq.webp?r=98d",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV0QJMY0cJ_q2h9XC3ViKWnmDpi0jdapdF55G7j9xtw3RcvXUL3rxpmJJg3YRMTC6oOR63ktCdg92tQlzDtib6dg3RMXDKDYINY.webp?r=259",
        des: "While the Lambert family struggles to overcome their son's recent battle with evil spirits, father Josh must confront his own horrifying childhood.",
        year: "2013",
        age: "13+",
        time: "1h 45m",
        director: "Yu Je-won",
        cast: "Patrick, Rose",
        writer: "Yu Je-won",
        genre: "Chilling, Omnious, Scary",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Worth The Wait") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "Movies") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
        des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
        year: "2018",
        age: "16+",
        time: "1h 52m",
        director: "Ruben Fleischer",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Ruben Fleischer",
        genre: "Sci-Fi, Exciting, Offbeat",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
        des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
        year: "2013",
        age: "13+",
        time: "2h 22m",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Sci-Fi, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
        des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
        year: "1999",
        age: "18+",
        time: "2h 16m",
        director: "Dhruv",
        cast: "Keanu Reeves, Laurance",
        writer: "Dhruv",
        genre: "Martial Arts, Sci-Fi",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
        des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
        year: "2011",
        age: "16+",
        time: "2h 21m",
        director: "Farah Khan",
        cast: "Ajay, Kajal Agarwal",
        writer: "Farah Khan",
        genre: "Emotional, Action",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
        des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        year: "2019",
        age: "13+",
        time: "2hr 11m",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Sci-FI, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
        des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
        year: "2008",
        age: "13+",
        time: "1h 52m",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkjkpGWgVDfc8O1toyqjGHpjEEUHSqSwqsuF18v-PRV3ljIyJB-_6VIJZXIgcR31zxfmivVinEuNP9gZbv1nJ2-D46s.webp?r=7c0",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABciXQB1jLoGS0YPROP9SyvtyRd2fFW1tU7SznBK8aUG1n-bWZcsOfjA8SVOkH4vp9_YMQTLiXM2rB8YQXU6CEaWSaRph_TXBnPo.webp?r=553",
        des: "What could have been a sad journey turns joyful for Rahul when he falls in love with a woman en route to submerging his grandfather's ashes.",
        year: "2013",
        age: "16+",
        time: "2hr 14m",
        director: "Rohit Shetty",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Rohit Shetty",
        genre: "Emotional, Exciting, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKH_O2XtvOG0xZmTuG3QPNH_E73Ntf6VB00vf0A5Heie4jgBKaVG8yFMgx9Oq8FmJpoZJXvlXaQc5jfx_1jy7azpkIA.webp?r=f82",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABctJNg15_VnQYu4diNpJI7Nvo9gXymAMLvjslEMtIsu3vgOQWPEZczY_chipxCCzG58q-yV6Gd9bzWKxYQ8XJHd34u59LBE98zc.webp?r=981",
        des: "Major Ram Prasad Sharma yearns to see project Mission Milaap come to fruition and usher in an era of peace between two warring countries. But the evil Raghavan will do anything to stop the peace process.",
        year: "2004",
        age: "16+",
        time: "2h 51m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Shushmita Sen",
        writer: "Farah Khan",
        genre: "Romantic, Emotional",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgOB0Tgko8FeTqPGcd_ukVDAM-XPBxdZu2Mmjo188bZOf7rMUENiaS9yskySjMCl2o80EmD7TT1nrdXWVhZezRpLs9O.webp?r=9a6",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU-wUVKoR0yE2OR8jRi0ZuWDbY5E1n-oMLmGxgZNxeaszyFAKtP_jGOedWPQrC-Y6hqKxwldcF4lELxFgXDgBof1YSsztaWmIBI.webp?r=ddf",
        des: "Bumbling spy Johnny English sharpens his skills at a Tibetan monastery and returns to service to protect the Chinese premier from an assassin.",
        year: "2013",
        age: "11+",
        time: "1h 41m",
        director: "Penn Badgley",
        cast: "Rowan Atkinson, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Action, Goofy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeSSlFkFxFhDfNYdVZ4doQJPGLF1HhvqxYlNIQqfj_NsK65gT1pbRRYePpD6KgYGS10hVWv0N79KwHQgcYyb_2MB6bkU.webp?r=516",
        video: "",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0",
        des: "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
        year: "2017",
        age: "13+",
        time: "1hr 59m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  } else if (list_header === "TV Shows") {
    cw = [
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
        des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
        year: "2014",
        age: "13+",
        time: "2h 21m",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone",
        writer: "Roberto Orci",
        genre: "Suspenseful, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
        des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
        year: "2021",
        age: "18+",
        time: "2 Seasons",
        director: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Chalotra",
        writer: "Lauren Schmidt Hissrich",
        genre: "Fantasy TV Shows, TV Shows Based on Books",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
        des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
        year: "2021",
        age: "16+",
        time: "4 seasons",
        director: "Dhruv",
        cast: "Mithila Palkar, Dhruv Sehgal",
        writer: "Dhruv",
        genre: "Romantic TV Dramas, Romantic TV Comedies",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
        des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
        year: "2007",
        age: "16+",
        time: "2h 48m",
        director: "Farah Khan",
        cast: "Shah Rukh Khan, Deepika Padukone",
        writer: "Farah Khan",
        genre: "Emotional, Romantic, Comedy",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
        des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        year: "2021",
        age: "18+",
        time: "1 Season",
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo",
        writer: "Hwang Dong-hyuk",
        genre: "Thriller, Drama",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
        des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Nonso",
        cast: "Nonso Anozie, Christian Convery",
        writer: "Nonso",
        genre: "Quirky, Heart Felt",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLVErP129jGeUFtzk002EQ0tPWougJ2SGYuw4GNbO0CJLNr8S6YM9YLOUDrtpZJRYsT0VCNkxx5X5a4RAzBNgc67Nk5A0s6tF6vWOPvxBrxXLLxOPn-2EKLnDf_ruoHo3-KSZFGSbbDbDZKXkXyd5cZfVnOD4Q.jpg?r=3da",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUinbWLJxbFfOIUyuYHefVKIyXsr5rqvPs074oTI0FOaUk-WKlnj0VEnwTaLnunl3GMtyx-Q4E2v-Nls4s4xOHztUJp9BxbKHXhZv9EcMI_mYJ9KTK6ilgDClHOb5iWO0mdtJI-eCw17-HEzpD5Lvndwc_fF1OIj0LGPTm57Aa-0.webp?r=2fa",
        des: "It's the end of an era for the showrunners and actors behind Money Heist, who share secrets about filming while saying goodbye to the beloved series.",
        year: "2021",
        age: "16+",
        time: "2 Seasons",
        director: "Luis Alfaro",
        cast: "Professor, Tokyo, Helsinki, Nairobi, Denver",
        writer: "Luis Alfaro",
        genre: "Emotional, Exciting",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWjOTYhOvCQCcOd1CYlauJYz21htLjSD7eS_xnnkZEqKlgy4TCluO-NOYj78pLuPS3Puk7qcRz5kOoeo0qMKOejVluAFzwAQ6b-c3Es2dA-0fIKMkmQNBjYPkSbw3A.jpg?r=68e",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABalT4UWp7RLdT8KR3SharQBQH0V0AQDgf2XPDA3aF24T8tIlOVH67hAmw06LCth02IG_5xjzFpEkOWHaPMoecftBbE_rLsh9arJxWLyp1By635NyoE24onNMS6jLxLmCWLdh8O6pzOp_8Iz3enYLYrCYBPSiDzp5dFD_KWCTXOJW.webp?r=33d",
        des: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
        year: "2021",
        age: "16+",
        time: "1 Season",
        director: "Yu Je-won",
        cast: "Shin Min-a, Kim-seon ho",
        writer: "Yu Je-won",
        genre: "Charming, Intimate, Romantic",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsqIXnewGXPTk1nYprVyBNCrWO5OJiFHJPLMgw1s570IjiCnaRntSf9wPHm_u5aGBbxnrwu2uQNzrmBKSfFQR9REx_OpZn9_A1g9EKkNbVzwC88-epfJkt8DhPUvQ.jpg?r=d0c",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYgmrUK-TdG3HNYAuqFtMSn4Yr_uqpv-Mbkiz72Ji1PZi-2SsERsUZN_Kv1y_luXWkYYf0M992N-rvycYFE11SoaJ5C1FcWdpQbsjzzYs4BoMS0YrenZHMIeQgEJgJe5zYglE41A3J78snvUX7qJhAe9A463Ko9w3peBYMHo0aXD.webp?r=ae9",
        des: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        year: "2021",
        age: "18+",
        time: "3 Seasons",
        director: "Penn Badgley",
        cast: "Penn Badgley, Victoria Pedretti",
        writer: "Penn Badgley",
        genre: "Dark, Suspenseful",
      },
      {
        pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt8WUtmS7pjZ8GDHqWQKuerb_aO9oqPwlKCibQky_MT-HaMniWIhcSr2LRQmEwAgcgu81-nm7OVspF6tYj7dloG5yIWQx2v705aZjWYHE4P67AVTq-ZnWDeUSrd1w.jpg?r=136",
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title_pic:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSRtxd1-rCOpAgRiLuMvnx8mBvu4hXC-gjfC1_v45spBKKTQSUWhY9ep7AmPF-z-6ZdIFzOG_turpi0LdnfVINdWE3bJnSFX0KkodIDTqddpjcr10gPpj97KFZize_BQPmGLcHL-t3P_eT13hbDZgd6MRIsJctVaFCVTagu5z7N4.webp?r=1b2",
        des: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        year: "2021",
        age: "13+",
        time: "1hr 57m",
        director: "Rawson Marshall Thurber",
        cast: "Dwayne, Ryan, Gal Gaddot",
        writer: "Rawson Marshall Thurber",
        genre: "Exciting",
      },
    ];
  }

  const more_like = [
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
      des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
      year: "2014",
      age: "13+",
      time: "2h 21m",
      director: "Marc Webb",
      cast: "Andrew Garfield, Emma Stone",
      writer: "Roberto Orci",
      genre: "Suspenseful, Exciting",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
      des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
      year: "2021",
      age: "18+",
      time: "2 Seasons",
      director: "Lauren Schmidt Hissrich",
      cast: "Henry Cavill, Anya Chalotra",
      writer: "Lauren Schmidt Hissrich",
      genre: "Fantasy TV Shows, TV Shows Based on Books",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
      des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
      year: "2021",
      age: "16+",
      time: "4 seasons",
      director: "Dhruv",
      cast: "Mithila Palkar, Dhruv Sehgal",
      writer: "Dhruv",
      genre: "Romantic TV Dramas, Romantic TV Comedies",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
      des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
      year: "2007",
      age: "16+",
      time: "2h 48m",
      director: "Farah Khan",
      cast: "Shah Rukh Khan, Deepika Padukone",
      writer: "Farah Khan",
      genre: "Emotional, Romantic, Comedy",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
      des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
      year: "2021",
      age: "18+",
      time: "1 Season",
      director: "Hwang Dong-hyuk",
      cast: "Lee Jung-jae, Park Hae-soo",
      writer: "Hwang Dong-hyuk",
      genre: "Thriller, Drama",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
      des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
      year: "2021",
      age: "16+",
      time: "1 Season",
      director: "Nonso",
      cast: "Nonso Anozie, Christian Convery",
      writer: "Nonso",
      genre: "Quirky, Heart Felt",
    },
  ];
  return (
    <>
      <div className="list">
        <span className="listTitle">{list_header}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          {window.innerWidth <= 768 ? (
            <>
              <motion.div className="main_div">
                <div className="center_div">
                  {cw.map((item, index) => (
                    <Suspense fallback={<div></div>}>
                      <LazyLoad
                        offset={50}
                        height={200}
                        once={true}
                        scroll={true}
                        // overflow={true}
                      >
                        <ListItem
                          index={index}
                          setSelectedId={setSelectedId}
                          info={item}
                        />
                      </LazyLoad>
                    </Suspense>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <div className="container" ref={listRef}>
                {cw.map((item, index) => (
                  <Suspense fallback={<div></div>}>
                    <LazyLoad
                      offset={50}
                      height={200}
                      once={true}
                      scroll={true}
                      // overflow={true}
                    >
                      <ListItem
                        index={index}
                        setSelectedId={setSelectedId}
                        info={item}
                      />
                    </LazyLoad>
                  </Suspense>
                ))}
                {/* <ListItem index={0} setSelectedId={setSelectedId} /> */}
                {/* <ListItem index={1} setSelectedId={setSelectedId} />
            <ListItem index={2} setSelectedId={setSelectedId} />
            <ListItem index={3} setSelectedId={setSelectedId} />
            <ListItem index={4} setSelectedId={setSelectedId} />
            <ListItem index={5} setSelectedId={setSelectedId} />
            <ListItem index={6} setSelectedId={setSelectedId} />
            <ListItem index={7} setSelectedId={setSelectedId} />
            <ListItem index={8} setSelectedId={setSelectedId} />
            <ListItem index={9} setSelectedId={setSelectedId} /> */}
              </div>
            </>
          )}

          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
            style={{ display: !isMovedRight && "none" }}
          />
        </div>
      </div>

      {window.innerWidth <= 768 ? (
        <>
          <AnimatePresence exitBeforeEnter>
            {selectedId && (
              <>
                <motion.div
                  className="blur_bg"
                  onClick={() => {
                    setSelectedId(null);
                    setStartVideo(false);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
                <motion.div
                  className="more_card_main"
                  initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  exit={{ y: "100vh" }}
                >
                  <motion.div className="more_card">
                    <motion.div
                      className="more_card_img"
                      // initial={{ x: "100vw" }}
                      // animate={{ x: 0 }}
                      // transition={{
                      //   duration: 1.2,
                      //   type: "spring",
                      //   stiffness: 80,
                      // }}
                    >
                      <img src={cw[selectedId].pic} alt="" />
                    </motion.div>
                    <motion.div
                      className="more_card_info"
                      initial={{ x: "100vw" }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 40,
                      }}
                    >
                      <h4 className="more_card_info_title">
                        Spiderman: Homecoming
                      </h4>
                      <div className="more_card_info_other">
                        <p className="more_card_info_year">
                          {cw[selectedId].year}
                        </p>
                        <p className="more_card_info_age">
                          {cw[selectedId].age}
                        </p>
                        <p className="more_card_info_time">
                          {cw[selectedId].time}
                        </p>
                      </div>
                      <p className="more_card_info_des">{cw[selectedId].des}</p>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="more_card_info_play_div"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 40,
                    }}
                  >
                    <Link
                      to={"/watch/" + selectedId}
                      className="more_card_info_play_btn"
                    >
                      <PlayArrow className="more_card_info_play_icon " />
                      Play
                    </Link>

                    <Link
                      to={"/details/" + selectedId}
                      className="more_card_info_play_btn"
                    >
                      <InfoOutlined className="more_card_info_play_icon" />
                      Details
                    </Link>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            {selectedId && (
              <>
                <motion.div
                  className="blur_bg"
                  onClick={() => {
                    setSelectedId(null);
                    setStartVideo(false);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
                <motion.div
                  className="more_modal"
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  exit={{ y: "-100vh" }}
                  // layoutId={selectedId}
                >
                  {startVideo ? (
                    <>
                      <video
                        src={cw[selectedId].video}
                        autoPlay={true}
                        loop
                        style={{
                          width: "55vw",
                          height: "28vw",
                          objectFit: "cover",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <motion.img
                        src={cw[selectedId].pic}
                        alt=""
                        className="more_modal_img"
                      />
                    </>
                  )}

                  <motion.img
                    src={cw[selectedId].title_pic}
                    alt=""
                    className="more_title_image"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    exit={{ y: 100, opacity: 0 }}
                  />

                  <motion.div
                    className="more_modal_icons"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    exit={{ y: 100, opacity: 0 }}
                  >
                    <Link to={"/watch/" + selectedId}>
                      <PlayArrow className="more_modal_icon list_item_play_icon" />
                    </Link>
                    <Add className="more_modal_icon" />
                    <ThumbUpAltOutlined className="more_modal_icon" />
                    <ThumbDownOutlined className="more_modal_icon" />
                    {/* <FiMoreHorizontal className="icon" /> */}
                  </motion.div>

                  <motion.div className="more_modal_cross">
                    <FaTimesCircle
                      className="more_modal_cross_icon"
                      onClick={() => {
                        setSelectedId(null);
                        setStartVideo(false);
                      }}
                    />
                  </motion.div>

                  <motion.div className="more_modal_info">
                    <motion.div
                      className="more_modal_info_left"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      exit={{ x: -100, opacity: 0 }}
                    >
                      <motion.div className="more_modal_itemInfoTop">
                        <motion.span>{cw[selectedId].year}</motion.span>
                        <motion.span className="more_modal_limit">
                          +16
                        </motion.span>
                        <motion.span>{cw[selectedId].time}</motion.span>
                      </motion.div>
                      <motion.div className="more_modal_iteminfo_des">
                        {cw[selectedId].des}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="more_modal_info_right"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      exit={{ x: 100, opacity: 0 }}
                    >
                      <motion.div className="more_modal_info_right_director">
                        <motion.p>
                          <motion.span>Director:</motion.span>{" "}
                          {cw[selectedId].director}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_cast">
                        <motion.p>
                          <motion.span>Cast:</motion.span> {cw[selectedId].cast}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_writer">
                        <motion.p>
                          <motion.span>Writer:</motion.span>{" "}
                          {cw[selectedId].writer}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_genres">
                        <motion.p>
                          <motion.span>Genres:</motion.span>{" "}
                          {cw[selectedId].genre}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <div className="more_like_div">
                    <motion.p
                      className="more_like_text"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      More Like This
                    </motion.p>
                    <motion.div
                      className="more_like_card_div"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {more_like.map((item, index) => (
                        <motion.div
                          className="more_like_card"
                          onClick={() => watch_movie()}
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 160,
                          }}
                        >
                          <div className="more_like_img_div">
                            <img
                              src={item.pic}
                              alt=""
                              className="more_like_img"
                            />
                            <Link to={"/watch/" + selectedId}>
                              <PlayArrow className="more_like_play_btn list_item_play_icon" />
                            </Link>
                          </div>
                          <div className="more_like_info">
                            <div className="more_like_info_top">
                              <div>
                                <span>{item.year}</span>
                                <span className="more_like_limit">
                                  {item.age}
                                </span>
                                <span>{item.time}</span>
                              </div>
                              <Add className="more_like_add_icon" />
                            </div>
                            <div className="more_like_info_bottom">
                              {item.des}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
