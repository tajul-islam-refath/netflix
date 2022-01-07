import React from "react";
import "./privacy.scss";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <div className="privacy">
        <Link to="/browse" className="privacy_back">
          <GrFormPrevious className="privacy_prev_icon" />
          <p>Back to home</p>
        </Link>

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
      </div>
    </>
  );
};

export default Privacy;
