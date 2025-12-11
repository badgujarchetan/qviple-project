"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/Navbar/Navbar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PrivacyPage() {
  const [active, setActive] = useState(null);

  const toggle = (index) => setActive(active === index ? null : index);

  return (
    <div className=" -mt-[1rem] min-h-screen text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 sm:px-20 py-28 text-center overflow-hidden">
        {/* Soft Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-purple-400/20 to-transparent blur-3xl opacity-50 pointer-events-none"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[42px] md:text-[70px] font-bold tracking-tight leading-none"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-6 text-[18px] md:text-[20px] text-gray-600 leading-relaxed"
        >
          Qviple (“we,” “our,” or “us”) is committed to protecting your privacy.
          This Privacy Policy explains how your personal information is
          collected, used, and disclosed by Qviple
        </motion.p>

        <p className="text-gray-400 mt-4 text-sm">
          Last Updated • 5 Aug, 2022 | 12:00 am
        </p>
      </section>

      {/* CONTENT WRAPPER */}
      <main className="max-w-6xl mx-auto backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-8 sm:p-16 border border-gray-200/50 mt-[2rem] mb-[5rem] bg-white/70">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-blue-600 tracking-wider uppercase">
            our standard
          </p>
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">
            Built on Trust, Transparency & Security
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            We comply with GDPR, ISO, and global privacy regulations to ensure
            your data remains protected.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-5">
          {policySections.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggle(index)}
                transition={{ type: "spring", stiffness: 110, damping: 15 }}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 backdrop-blur-xl ${
                  isOpen
                    ? "bg-white shadow-xl border-blue-500/40"
                    : "bg-white/60 hover:bg-white border-gray-200"
                }`}
              >
                {/* Header */}
                <motion.div
                  layout
                  className="flex justify-between items-center"
                >
                  <motion.h3
                    layout
                    className={`text-[19px] font-medium ${
                      isOpen ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.div
                    layout
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${
                        isOpen ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.div>

                {/* Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <motion.p
                        layout
                        className="mt-4 text-gray-600 leading-relaxed pl-4 border-l-4 border-blue-500/30"
                      >
                        {item.content}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold">Have a Privacy Question?</h3>
          <p className="text-gray-600 mt-2">
            Our dedicated privacy support team is here to help anytime.
          </p>

          <a
            href="mailto:connect@qviple.com"
            className="mt-6 inline-block px-10 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Contact Privacy Team
          </a>
        </motion.div>
      </main>
    </div>
  );
}

const policySections = [
  {
    title: "About",
    content: `Qviple (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Qviple.

This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, Qviple. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service. This Privacy Policy was created withTermify.`,
  },
  {
    title: "Definitions and key terms",
    content: `To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, are strictly defined as:`,
  },
  {
    title: "1.  Cookie",
    content: `small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.`,
  },
  {
    title: "2.  Company",
    content: `when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Mithkal Minds Private Limited, H.N.1860, Udyog Bhavan, Sinnar, Nashik-422103 that is responsible for your information under this Terms & Conditions.`,
  },
  {
    title: "3.  Country",
    content: `where Qviple or the owners/founders of Qviple are based, in this case is India.`,
  },
  {
    title: "4.  Device",
    content: `any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Qviple and use the services.`,
  },
  {
    title: "5.  Service",
    content: `refers to the service provided by Qviple as described in the relative terms (if available) and on this platform.`,
  },
  {
    title: "6.  Third-party service",
    content: `refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.`,
  },
  {
    title: "7.  Website",
    content: `Qviple's site, which can be accessed via this URL: https://www.qviple.com`,
  },
  {
    title: "8.  You",
    content: `a person or entity that is registered with Qviple to use the Services.`,
  },
  {
    title: "9.  Customer",
    content: `refers to the company, organization or person that signs up to use the Qviple Service to manage the relationships with your consumers or service users.`,
  },
  {
    title: "10.  IP Address",
    content: `Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.`,
  },
  {
    title: "11.  Personnel",
    content: `refers to those individuals who are employed by Qviple or are under contract to perform a service on behalf of one of the parties`,
  },
  {
    title: "12.  Personal Data",
    content: `any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.`,
  },
  {
    title: "What Information Do We Collect?",
    content: `We collect information from you when you visit our app, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.

Name / Username
Phone Numbers
Email Addresses
Mailing Addresses
Job Titles
Billing Addresses
Age
Password
We also collect information from mobile devices for a better user experience, although these features are completely optional:

Location (GPS): Location data helps to create an accurate representation of your interests, and this can be used to bring more targeted and relevant ads to potential customers.
Phonebook (Contacts list): Your contacts list allows the app to be much more easy to use by the user, since accessing your contacts from the app makes you save tons of time.
Camera (Pictures): Granting camera permission allows the user to upload any picture straight from the app, you can safely deny camera permissions for this app.
Photo Gallery (Pictures): Granting photo gallery access allows the user to upload any picture from their photo gallery, you can safely deny photo gallery access for this app.`,
  },
  {
    title: "How Do We Use The Information We Collect?",
    content: `Any of the information we collect from you may be used in one of the following ways: To personalize your experience (your information helps us to better respond to your individual needs)
To improve our app (we continually strive to improve our app offerings based on the information and feedback we receive from you)
To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)
To process transactions
To administer a contest, promotion, survey or other site feature
To send periodic emails`,
  },
  {
    title: "When does Qviple use end user information from third parties?",
    content: `Qviple will collect End User Data necessary to provide the Qviple services to our customers.

End users may voluntarily provide us with information they have made available on social media websites. If you provide us with any such information, we may collect publicly available information from the social media websites you have indicated. You can control how much of your information social media websites make public by visiting these websites and changing your privacy settings.`,
  },
  {
    title: "Do we share the information we collect with third parties?",
    content: `We may share the information that we collect, both personal and non-personal, with third parties such as advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. We may also share it with our current and future affiliated companies and business partners, and if we are involved in a merger, asset sale or other business reorganization, we may also share or transfer your personal and non-personal information to our successors-in-interest.

We may engage trusted third party service providers to perform functions and provide services to us, such as hosting and maintaining our servers and the app, database storage and management, e-mail management, storage marketing, credit card processing, customer service and fulfilling orders for products and services you may purchase through the app. We will likely share your personal information, and possibly some non-personal information, with these third parties to enable them to perform these services for us and for you.

We may share portions of our log file data, including IP addresses, for analytics purposes with third parties such as web analytics partners, application developers, and ad networks. If your IP address is shared, it may be used to estimate general location and other technographics such as connection speed, whether you have visited the app in a shared location, and type of the device used to visit the app. They may aggregate information about our advertising and what you see on the app and then provide auditing, research and reporting for us and our advertisers. We may also disclose personal and non-personal information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate in order to respond to claims, legal process (including subpoenas), to protect our rights and interests or those of a third party, the safety of the public or any person, to prevent or stop any illegal, unethical, or legally actionable activity, or to otherwise comply with applicable court orders, laws, rules and regulations.`,
  },
  {
    title:
      "Where and when is information collected from customers and end users?",
    content: `Qviple will collect personal information that you submit to us. We may also receive personal information about you from third parties as described above.`,
  },
  {
    title: "How Do We Use Your Email Address?",
    content: `By submitting your email address on this app, you agree to receive emails from us. You can cancel your participation in any of these email lists at any time by clicking on the opt-out link or other unsubscribe option that is included in the respective email. We only send emails to people who have authorized us to contact them, either directly, or through a third party. We do not send unsolicited commercial emails, because we hate spam as much as you do. By submitting your email address, you also agree to allow us to use your email address for customer audience targeting on sites like Facebook, where we display custom advertising to specific people who have opted-in to receive communications from us. Email addresses submitted only through the order processing page will be used for the sole purpose of sending you information and updates pertaining to your order. If, however, you have provided the same email to us through another method, we may use it for any of the purposes stated in this Policy. Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.`,
  },
  {
    title: "How Long Do We Keep Your Information?",
    content: `We keep your information only so long as we need it to provide Qviple to you and fulfill the purposes described in this policy. This is also the case for anyone that we share your information with and who carries out services on our behalf. When we no longer need to use your information and there is no need for us to keep it to comply with our legal or regulatory obligations, we'll either remove it from our systems or depersonalize it so that we can't identify you.`,
  },
  {
    title: "How Do We Protect Your Information?",
    content: `We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential. After a transaction, your private information (credit cards, social security numbers, financials, etc.) is never kept on file. We cannot, however, ensure or warrant the absolute security of any information you transmit to Qviple or guarantee that your information on the Service may not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, technical, or managerial safeguards.`,
  },
  {
    title: "Could my information be transferred to other countries?",
    content: `Qviple is incorporated in India. Information collected via our website, through direct interactions with you, or from use of our help services may be transferred from time to time to our offices or personnel, or to third parties, located throughout the world, and may be viewed and hosted anywhere in the world, including countries that may not have laws of general applicability regulating the use and transfer of such data. To the fullest extent allowed by applicable law, by using any of the above, you voluntarily consent to the trans-border transfer and hosting of such information.`,
  },
  {
    title: "Is the information collected through the Qviple Service secure?",
    content: `We take precautions to protect the security of your information. We have physical, electronic, and managerial procedures to help safeguard, prevent unauthorized access, maintain data security, and correctly use your information. However, neither people nor security systems are foolproof, including encryption systems. In addition, people can commit intentional crimes, make mistakes or fail to follow policies. Therefore, while we use reasonable efforts to protect your personal information, we cannot guarantee its absolute security. If applicable law imposes any non-disclaimable duty to protect your personal information, you agree that intentional misconduct will be the standards used to measure our compliance with that duty.`,
  },
  {
    title: "Can I update or correct my information?",
    content: `The rights you have to request updates or corrections to the information Qviple collects depend on your relationship with Qviple. Personnel may update or correct their information as detailed in our internal company employment policies.

Customers have the right to request the restriction of certain uses and disclosures of personally identifiable information as follows. You can contact us in order to (1) update or correct your personally identifiable information, (2) change your preferences with respect to communications and other information you receive from us, or (3) delete the personally identifiable information maintained about you on our systems (subject to the following paragraph), by cancelling your account. Such updates, corrections, changes and deletions will have no effect on other information that we maintain, or information that we have provided to third parties in accordance with this Privacy Policy prior to such update, correction, change or deletion. To protect your privacy and security, we may take reasonable steps (such as requesting a unique password) to verify your identity before granting you profile access or making corrections. You are responsible for maintaining the secrecy of your unique password and account information at all times.

You should be aware that it is not technologically possible to remove each and every record of the information you have provided to us from our system. The need to back up our systems to protect information from inadvertent loss means that a copy of your information may exist in a non-erasable form that will be difficult or impossible for us to locate. Promptly after receiving your request, all personal information stored in databases we actively use, and other readily searchable media will be updated, corrected, changed or deleted, as appropriate, as soon as and to the extent reasonably and technically practicable.

If you are an end user and wish to update, delete, or receive any information we have about you, you may do so by contacting the organization of which you are a customer.`,
  },
  {
    title: "Personnel",
    content: `If you are a Qviple worker or applicant, we collect information you voluntarily provide to us. We use the information collected for Human Resources purposes in order to administer benefits to workers and screen applicants.

You may contact us in order to (1) update or correct your information, (2) change your preferences with respect to communications and other information you receive from us, or (3) receive a record of the information we have relating to you. Such updates, corrections, changes and deletions will have no effect on other information that we maintain, or information that we have provided to third parties in accordance with this Privacy Policy prior to such update, correction, change or deletion.`,
  },
  {
    title: "Sale of Business",
    content: `We reserve the right to transfer information to a third party in the event of a sale, merger or other transfer of all or substantially all of the assets of Qviple or any of its Corporate Affiliates (as defined herein), or that portion of Qviple or any of its Corporate Affiliates to which the Service relates, or in the event that we discontinue our business or file a petition or have filed against us a petition in bankruptcy, reorganization or similar proceeding, provided that the third party agrees to adhere to the terms of this Privacy Policy.`,
  },
  {
    title: "Affiliates",
    content: `We may disclose information (including personal information) about you to our Corporate Affiliates. For purposes of this Privacy Policy, "Corporate Affiliate" means any person or entity which directly or indirectly controls, is controlled by or is under common control with Qviple, whether by ownership or otherwise. Any information relating to you that we provide to our Corporate Affiliates will be treated by those Corporate Affiliates in accordance with the terms of this Privacy Policy.`,
  },
  {
    title: "Governing Law",
    content: `This Privacy Policy is governed by the laws of India without regard to its conflict of laws provision. You consent to the exclusive jurisdiction of the courts in connection with any action or dispute arising between the parties under or in connection with this Privacy Policy except for those individuals who may have rights to make claims under Privacy Shield, or the Swiss-US framework.

The laws of India, excluding its conflicts of law rules, shall govern this Agreement and your use of the app. Your use of the app may also be subject to other local, state, national, or international laws.

By using Qviple or contacting us directly, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, you should not engage with our website, or use our services. Continued use of the website, direct engagement with us, or following the posting of changes to this Privacy Policy that do not significantly affect the use or disclosure of your personal information will mean that you accept those changes.`,
  },
  {
    title: "Your Consent",
    content: `We've updated our Privacy Policy to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our app, registering an account, or making a purchase, you hereby consent to our Privacy Policy and agree to its terms.`,
  },
  {
    title: "Links to Other Websites",
    content: `This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by Qviple. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website's own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.`,
  },
  {
    title: "Advertising",
    content: `This app may contain third party advertisements and links to third party sites. Qviple does not make any representation as to the accuracy or suitability of any of the information contained in those advertisements or sites and does not accept any responsibility or liability for the conduct or content of those advertisements and sites and the offerings made by the third parties.

Advertising keeps Qviple and many of the websites and services you use free of charge. We work hard to make sure that ads are safe, unobtrusive, and as relevant as possible.

Third party advertisements and links to other sites where goods or services are advertised are not endorsements or recommendations by Qviple of the third party sites, goods or services. Qviple takes no responsibility for the content of any of the ads, promises made, or the quality/reliability of the products or services offered in all advertisements.`,
  },
  {
    title: "Advertising",
    content: `This app may contain third party advertisements and links to third party sites. Qviple does not make any representation as to the accuracy or suitability of any of the information contained in those advertisements or sites and does not accept any responsibility or liability for the conduct or content of those advertisements and sites and the offerings made by the third parties.

Advertising keeps Qviple and many of the websites and services you use free of charge. We work hard to make sure that ads are safe, unobtrusive, and as relevant as possible.

Third party advertisements and links to other sites where goods or services are advertised are not endorsements or recommendations by Qviple of the third party sites, goods or services. Qviple takes no responsibility for the content of any of the ads, promises made, or the quality/reliability of the products or services offered in all advertisements.`,
  },
  {
    title: "Advertising",
    content: `This app may contain third party advertisements and links to third party sites. Qviple does not make any representation as to the accuracy or suitability of any of the information contained in those advertisements or sites and does not accept any responsibility or liability for the conduct or content of those advertisements and sites and the offerings made by the third parties.

Advertising keeps Qviple and many of the websites and services you use free of charge. We work hard to make sure that ads are safe, unobtrusive, and as relevant as possible.

Third party advertisements and links to other sites where goods or services are advertised are not endorsements or recommendations by Qviple of the third party sites, goods or services. Qviple takes no responsibility for the content of any of the ads, promises made, or the quality/reliability of the products or services offered in all advertisements.`,
  },
  {
    title: "Cookies for Advertising",
    content: `These cookies collect information over time about your online activity on the app and other online services to make online advertisements more relevant and effective to you. This is known as interest-based advertising. They also perform functions like preventing the same ad from continuously reappearing and ensuring that ads are properly displayed for advertisers. Without cookies, it's really hard for an advertiser to reach its audience, or to know how many ads were shown and how many clicks they received.`,
  },
  {
    title: "Cookies",
    content: `Qviple uses "Cookies" to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our app but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the app as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.`,
  },
  {
    title: "Blocking and disabling cookies and similar technologies",
    content: `Wherever you're located you may also set your browser to block cookies and similar technologies, but this action may block our essential cookies and prevent our website from functioning properly, and you may not be able to fully utilize all of its features and services. You should also be aware that you may also lose some saved information (e.g. saved login details, site preferences) if you block cookies on your browser. Different browsers make different controls available to you. Disabling a cookie or category of cookie does not delete the cookie from your browser, you will need to do this yourself from within your browser, you should visit your browser's help menu for more information.`,
  },
  {
    title: "Remarketing Services",
    content: `We use remarketing services. What Is Remarketing? In digital marketing, remarketing (or retargeting) is the practice of serving ads across the internet to people who have already visited your website. It allows your company to seem like they're “following” people around the internet by serving ads on the websites and platforms they use most.`,
  },
  {
    title: "Payment Details",
    content: `In respect to any credit card or other payment processing details you have provided us, we commit that this confidential information will be stored in the most secure manner possible.`,
  },
  {
    title: "Kid's Privacy",
    content: `We collect information from kids under the age of 13 just to better our services. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data without your permission, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.`,
  },
  {
    title: "Changes To Our Privacy Policy",
    content: `We may change our Service and policies, and we may need to make changes to this Privacy Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Privacy Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Privacy Policy. If you do not want to agree to this or any updated Privacy Policy, you can delete your account.`,
  },
  {
    title: "Third-Party Services",
    content: `We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services ("Third- Party Services").

You acknowledge and agree that Qviple shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. Qviple does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.

Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions.

Tracking Technologies`,
  },
  {
    title: "Google Maps API:-",
    content: `Google Maps API is a robust tool that can be used to create a custom map, a searchable map, check-in functions, display live data synching with location, plan routes, or create a mashup just to name a few.

Google Maps API may collect information from You and from Your Device for security purposes.

Google Maps API collects information that is held in accordance with its Privacy Policy`,
  },
  {
    title: "Cookies:-",
    content: `We use Cookies to enhance the performance and functionality of our $platform but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the $platform as we would not be able to remember that you had logged in previously.`,
  },
  {
    title: "Local Storage:-",
    content: `Local Storage sometimes known as DOM storage, provides web apps with methods and protocols for storing client-side data. Web storage supports persistent data storage, similar to cookies but with a greatly enhanced capacity and no information stored in the HTTP request header.`,
  },
  {
    title: "Sessions:-",
    content: `$elnombre uses "Sessions" to identify the areas of our website that you have visited. A Session is a small piece of data stored on your computer or mobile device by your web browser.`,
  },
  {
    title: "Child Safety Standards:-",
    content: `Our app strictly adheres to safety standards against Child Sexual Abuse Material (CSAM) in compliance with legal frameworks such as the POCSO Act and the IT Act (Sec 67B). We employ robust content moderation, AI-based detection, and reporting mechanisms to prevent the creation, sharing, or circulation of CSAM. All user-generated content is monitored, and violations are promptly reported to relevant authorities. We are committed to maintaining a safe digital environment, especially for children, and work continuously to uphold the highest standards of online safety and protection. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

We do not sell the Personal Information of our users

For more information about these rights, please contact us.`,
  },
  {
    title: "Contact Us",
    content: `Don't hesitate to contact us if you have any questions. Via Email:[connect@qviple.com]`,
  },
];
