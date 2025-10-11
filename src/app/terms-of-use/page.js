"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/Navbar/Navbar";

import "./terms-of-use.css";

export default function PrivacyPage() {
  const title = "Terms of use";

  return (
    <>
      <Navbar />
      <div className="conted_privacy_page">
        <header className="privacy-section">
          <div className="privacy-bg"></div>

          <div className="privacy-container">
            <div className="privacy-left">
              <h1 className="privacy-title">
                {title.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{ animationDelay: `${i * 0.05}s` }}
                    className="fade-in-up"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>

            <div className="privacy-right fade-in-right">
              <p>
                Please read our Terms of Use carefully before using Qviple. By
                accessing or using our website, services, or application, you
                agree to be bound by these terms. These Terms of Use govern your
                relationship with Qviple and outline your rights,
                responsibilities, and limitations while using our platform.
                <strong>Qviple</strong>.
              </p>
            </div>
          </div>
        </header>

        <main className="privacy-content">
          <div className="privacy-wrapper">
            <header className="privacy-header">
              <h1>Qviple Terms Of Use</h1>
              <p>
                Qviple provides access to our website, services, and
                applications (collectively, the “Service”) subject to the
                following Terms of Use. By accessing or using Qviple, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms. These Terms outline the rules,
                obligations, and limitations that apply to all users of our
                platform. If you do not agree with these Terms, please refrain
                from using our Service. We also encourage you to review our{" "}
                <Link
                  className="text-red-500 font-semibold "
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your personal
                information.
              </p>
            </header>

            <section className="policy-sections">
              <details open>
                <summary>
                  <h2>General Terms</h2>
                </summary>
                <p>
                  By accessing and placing an order with Qviple, you confirm
                  that you are in agreement with and bound by the terms of
                  service contained in the Terms & Conditions outlined below.
                  <strong>
                    These terms apply to the entire website and any email or
                    other type of communication between you and Qviple.{" "}
                  </strong>{" "}
                  Under no circumstances shall Qviple team be liable for any
                  direct, indirect, special, incidental or consequential
                  damages, including, but not limited to, loss of data or
                  profit, arising out of the use, or the inability to use, the
                  materials on this site, even if Qviple team or an authorized
                  representative has been advised of the possibility of such
                  damages. If your use of materials from this site results in
                  the need for servicing, repair or correction of equipment or
                  data, you assume any costs thereof. Qviple will not be
                  responsible for any outcome that may occur during the course
                  of usage of our resources. We reserve the rights to change
                  prices and revise the resources usage policy in any moment.
                  <strong>
                    {" "}
                    This Terms & Conditions was created withTermify.
                  </strong>
                </p>
              </details>
              <details open>
                <summary>
                  <h2>License</h2>
                </summary>
                <p>
                  Qviple grants you a revocable,
                  <strong>non-exclusive, non-transferable,</strong> limited
                  license to download, install and use the app strictly in
                  accordance with the terms of this Agreement. These Terms &
                  Conditions are a contract between you and Qviple (referred to
                  in these Terms & Conditions as "Qviple", "us", "we" or "our"),
                  the provider of the Qviple website and the services accessible
                  from the Qviple website (which are collectively referred to in
                  these Terms & Conditions as the "Qviple Service").
                  <strong>
                    {" "}
                    You are agreeing to be bound by these Terms & Conditions. If
                    you do not agree to these Terms & Conditions, please do not
                    use the Qviple Service.
                  </strong>{" "}
                  In these Terms & Conditions, "you" refers both to you as an
                  individual and to the entity you represent. If you violate any
                  of these Terms & Conditions,
                  <strong>
                    {" "}
                    we reserve the right to cancel your account or block access
                    to your account without notice.
                  </strong>
                </p>
              </details>

              <details >
                <summary>
                  <h2>Restrictions</h2>
                </summary>
                <p>You agree not to, and you will not permit others to:</p>
                <ul>
                  <li>
                    <strong>License </strong>
                    <p>
                      sell, rent, lease, assign, distribute, transmit, host,
                      outsource, disclose or otherwise commercially exploit the
                      app or make the platform available to any third party.
                    </p>
                  </li>
                  <li>
                    <strong>Modify </strong>
                    <p>
                      {" "}
                      make derivative works of, disassemble, decrypt, reverse
                      compile or reverse engineer any part of the app.
                    </p>
                  </li>
                  <li>
                    <strong>Remove </strong>
                    <p>
                      alter or obscure any proprietary notice (including any
                      notice of copyright or trademark) of Qviple or its
                      affiliates, partners, suppliers or the licensors of the
                      app.
                    </p>
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <h2>Payment Refund Policy</h2>
                </summary>

                <ul>
                  <li>
                    One Should get refund within 48 hours of transactions done.
                  </li>
                  <li>Only non-institute payments can be refunded</li>
                  <li>
                    For institute related payments enquire with institute. [What
                    are institute related payments: Payments made to institute
                    such as ID Card fees, admission fees or any fees directly
                    paid to institute]
                  </li>
                  <li>
                    Non - Institute Payments include Application fees, Purchase
                    of E-content, subscription fees.
                  </li>
                  <li>
                    <strong>For Refund:</strong> We only process payments to
                    institutions accounts, and institutions process the refunds
                    to students, and we do not make refunds.
                  </li>
                </ul>
              </details>
              <details>
                <summary>
                  <h2>Return and Refund Policy</h2>
                </summary>
                <p>
                  Thanks for shopping at Qviple. We appreciate the fact that you
                  like to buy the stuff we build. We also want to make sure you
                  have a rewarding experience while{" "}
                  <strong>
                    {" "}
                    you're exploring, evaluating, and purchasing our products.
                    As with any shopping{" "}
                  </strong>
                  experience, there are terms and conditions that apply to
                  transactions at Qviple. We'll be as brief as our attorneys
                  will allow. The main thing to remember is that by placing an
                  order or making a purchase at Qviple, you agree to the terms
                  along with Qviple's Privacy Policy. If, for any reason, You
                  are not completely satisfied with any good or service that we
                  provide, don't hesitate to contact us and we will discuss any
                  of the issues you are going through with our product.
                </p>
              </details>

              <details>
                <summary>
                  <h2>Your Suggestions</h2>
                </summary>
                <p>
                  Any feedback, comments, ideas, improvements or suggestions
                  (collectively, "Suggestions") provided by you to Qviple with
                  respect to the app shall remain the sole and exclusive
                  property of Qviple.
                  <strong>
                    {" "}
                    Qviple shall be free to use, copy, modify, publish, or
                    redistribute the Suggestions for any purpose and in any way
                    without any credit or any compensation to you.
                  </strong>
                </p>
              </details>

              <details>
                <summary>
                  <h2>Your Consent</h2>
                </summary>
                <p>
                  We've updated our Terms & Conditions to provide you with
                  complete transparency into what is being set when you visit
                  our site and how it's being used. By{" "}
                  <strong>using our app</strong> , registering an account, or
                  making a purchase, you hereby consent to our Terms &
                  Conditions.
                </p>
              </details>

              <details open>
                <summary>
                  <h2>Your commitment</h2>
                </summary>
                <p>
                  In return for our commitment to providing services, we require
                  you to be committed to the following:
                </p>
              </details>
              <details>
                <summary>
                  <h2>Who can use Qviple?</h2>
                </summary>
                <p>
                  We want our service to be as free and comprehensive as
                  possible but we also want it to be safe, protected and law
                  abiding. So, we need you to follow some restrictions to be
                  part of the Qviple community.
                </p>
                <p>
                  <strong>
                    You must be at least 13 years old to use Qviple
                    Independently
                  </strong>
                  , or at least the legal age applicable in your country.If you
                  are 13 years old or below then your parents should operate
                  your account on your behalf or you can on your parents's
                  permission. You should not be prohibited from receiving any
                  part of our Services under applicable laws or be involved in
                  payment related services if you are on the list of denied
                  parties to which you apply. Your account violated the law or
                  any of our policies so we must not have previously disabled
                  it.
                  <strong>You must not be convicted as a sex offender.</strong>
                </p>
              </details>

              <details>
                <summary>
                  <h2>How can you not use Qviple</h2>
                </summary>
                <p>
                  We need to do our part to provide a safe and free service to
                  the wider community. You cannot impersonate or misrepresent
                  others. You are not required to disclose your identity on
                  Qviple but you are required to provide us with accurate and
                  up-to-date information (including registration information),
                  which may include providing your personal data. Also, you
                  cannot impersonate another person or something that you are
                  not, and you cannot create an account for them unless you have
                  the express permission of another person.
                </p>
                <ul>
                  <li>
                    <p>
                      You may not do anything illegal, misleading or deceptive
                      or for illegal or unauthorized purposes.
                    </p>
                  </li>
                  <li>
                    <p>
                      You especially: Qviple community guidelines, music as well
                      as between the guidelines, or conditions or in violation
                      of our policies, and (or cannot support or encourage)
                      others to violate.
                    </p>
                  </li>
                  <li>
                    <p>
                      If you post branded content, you must comply with related
                      branded compliance policies of your country or that
                      company which require you to use our branded content tool.
                    </p>
                  </li>
                  <li>
                    <p>
                      There is nothing you can do to interfere with the purpose
                      of the service or to disrupt its operation.
                    </p>
                  </li>
                  <li>
                    <p>
                      This includes the misuse of any reporting, dispute or
                      appeal channel, such as fraudulent or baseless reports or
                      appeals.
                    </p>
                  </li>
                  <li>
                    <p>
                      You may not attempt to create or access accounts or
                      collect information in an unauthorized manner. This
                      includes creating accounts or collecting information by
                      automated methods without our explicit permission. We may
                      not sell, license or purchase or license any account or
                      data we receive from our Services. <br></br>
                      This includes attempting to buy, sell or transfer any
                      aspects of your account (including username); Requesting,
                      compiling, or using other users' login credentials or
                      badges; Or requesting or compiling Qviple usernames,
                      passwords, or inappropriate access tokens.
                    </p>
                  </li>
                  <li>
                    <p>
                      You may not post anyone else's confidential or
                      confidential information without permission or act in a
                      way that infringes anyone else's rights, including
                      intellectual property rights (e.g. copyright infringement,
                      trademark infringement, forgery or unlawful reproduction).
                    </p>
                  </li>
                  <li>
                    <p>
                      You may use the rights of someone else under the
                      applicable laws, with the exception or limitation of
                      copyright and related rights. Represents the ownership of
                      all content you post or share, or the acquisition of all
                      necessary rights to it including how to report any content
                      that you think infringes your intellectual property
                      rights.
                    </p>
                  </li>
                  <li>
                    <p>
                      You may not modify, translate, create or reverse our
                      products or their components.
                    </p>
                  </li>
                  <li>
                    <p>
                      You may not use a domain name or URL in your username
                      without our prior written consent.
                    </p>
                  </li>
                </ul>
              </details>

              <details open>
                <summary>
                  <h2>Definitions and Key Terms</h2>
                </summary>
                <p>
                  To help explain things as clearly as possible in this Terms &
                  Conditions, every time any of these terms are referenced, are
                  strictly defined as:
                </p>
                <ul>
                  <li>
                    <strong>Cookie :</strong>
                    <p>
                      {" "}
                      small amount of data generated by a website and saved by
                      your web browser. It is used to identify your browser,
                      provide analytics, remember information about you such as
                      your language preference or login information.{" "}
                    </p>
                  </li>
                  <li>
                    <strong>Company:</strong>{" "}
                    <p>
                      {" "}
                      when this policy mentions “Company,” “we,” “us,” or “our,”
                      it refers to Mithkal Minds Private Limited, H.N.1860,
                      Udyog Bhavan, Sinnar, Nashik-422103 that is responsible
                      for your information under this Terms & Conditions.
                    </p>
                  </li>
                  <li>
                    <strong>Country:</strong>{" "}
                    <p>
                      where Qviple or the owners/founders of Qviple are based,
                      in this case is IN{" "}
                    </p>
                  </li>
                  <li>
                    <strong>Device:</strong>{" "}
                    <p>
                      {" "}
                      any internet connected device such as a phone, tablet,
                      computer or any other device that can be used to visit
                      Qviple and use the services.
                    </p>
                  </li>
                  <li>
                    <strong>Service:</strong>{" "}
                    <p>
                      {" "}
                      refers to the service provided by Qviple as described in
                      the relative terms (if available) and on this platform.
                    </p>
                  </li>
                  <li>
                    <strong>Third-party service:</strong>{" "}
                    <p>
                      {" "}
                      refers to advertisers, contest sponsors, promotional and
                      marketing partners, and others who provide our content or
                      whose products or services we think may interest you.
                    </p>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <p>
                      {" "}
                      Qviple's site, which can be accessed via this URL:
                      <Link href={"https://qviple.com/"}>Qviple.com</Link>
                    </p>
                  </li>
                  <li>
                    <strong>You:</strong>{" "}
                    <p>
                      {" "}
                      a person or entity that is registered with Qviple to use
                      the Services.
                    </p>
                  </li>
                </ul>
              </details>

              <details>
                <summary>
                  <h2>The permissions you give us</h2>
                </summary>
                <p>
                  As part of your agreement, you also give us the permissions we
                  need to provide the services. We do not claim ownership of
                  your content, but you grant us permission to use it. There are
                  no changes to your rights to your content. We do not claim
                  ownership of your content that you post on or through the
                  Service, and you are free to share your content with anyone
                  and whenever you want. However, we need some legal permissions
                  from you to provide the service (known as a "license").
                  <br></br>
                  When you share, post, or upload content (such as photos or
                  videos) covered by or in connection with our Services, you are
                  hereby hosting, using, distributing, modifying, running, and
                  copying your Content. Not having a monopoly on performing,
                  publicly presenting or displaying, translating and creating
                  derivative content using your content (consistent with your
                  privacy and application settings), Grants royalty-free,
                  transferable, sub-licensed, worldwide licenses. This license
                  will expire when your content is deleted from our systems. You
                  can delete the content individually or at once by deleting
                  your account.
                  <br></br>
                  Permission to use your username, profile picture and
                  information about your relationship and actions taken from the
                  accounts, advertisements and sponsored content. Your username,
                  profile picture, and information about your actions (such as
                  liking) or relationships (such as following), accounts, ads,
                  offers, and other sponsored content that you follow or engage
                  in front of or related to, which is displayed on products. You
                  allow us to show you without any compensation. For example, we
                  might show that you liked a sponsored post created by a brand
                  that paid us to display their ads on Qviple. In the case of
                  actions on other content and follow-up on other accounts,
                  actions on sponsored content and follow-up on sponsored
                  accounts, this can only be seen by people who are allowed to
                  view or follow that content. We also respect your ad settings.
                  You agree that we may download and install updates to the
                  Service on your device.
                </p>
              </details>

              <details>
                <summary>
                  <h2>Additional rights we reserve</h2>
                </summary>
                <p>
                  If you choose a username or identical identifier for your
                  account, we may change it if we deem it appropriate or
                  necessary (for example, if it infringes one person's
                  intellectual property or impersonates another user). If you
                  use content that we have and include in our Services (for
                  example, the content, images, designs, videos or sounds that
                  you add to the content you create or share and we provide) But
                  not yours) reserves all rights. You may use our intellectual
                  property and trademarks or similar symbols only as expressly
                  permitted by our brand guidelines or with our prior written
                  permission. You must obtain written permission from us or
                  under the Open Source License to modify, derive, or otherwise
                  delete, or otherwise attempt to extract source code.
                </p>
              </details>

              <details open>
                <summary>
                  <h2>Deleting content and disabling account</h2>
                </summary>
                <p>
                  We may remove any content or information that you share on the
                  Service, in violation of these Terms of Use, our policies or
                  if we are permitted to do so by law or if necessary. To
                  protect our community or services, or if you create risk or
                  legal contact for us, or these Terms of Use or our policies.
                  In case of infringement, or if you repeatedly infringe the
                  intellectual property rights of others or if we are permitted
                  or required by law to do so, we will provide you with the
                  entire Service or any part thereof (including disabling or
                  disabling access to your Products and Company Products). Can
                  immediately refuse or stop. We may do so if we deem it
                  necessary to stop or change the Service, remove or block any
                  content or information shared on our Services, or stop
                  providing some or all of the Services in order to avoid or
                  reduce the adverse effects of laws or regulations on us. When
                  you request to delete content, the deletion process starts
                  automatically within 30 days after your request. Deleting
                  content can take up to 90 days after the deletion process
                  begins. Once the deletion process is turned on for such
                  content, the content may not be visible to other users, but
                  remains subject to these Terms of Use and our data policy.
                  Once the content is deleted, it may take up to 90 days for us
                  to back it up and remove it from the emergency recovery
                  systems.
                </p>
                <ul>
                  <li>
                    <p>
                      When your content has been used by others under this
                      license and they have not deleted it (in that case this
                      license will continue to apply until that content is
                      deleted); Or
                    </p>
                  </li>
                  <li>
                    <p>
                      Due to the technical limitations of our system, it may not
                      be possible to delete within 90 days, in which case, we
                      will technically complete the deletion process as soon as
                      possible; Or
                    </p>
                  </li>
                  <li>
                    <p>When deleting restricts our ability to:</p>
                  </li>
                  <li>
                    <p>
                      Investigating or identifying illegal activities and
                      violations of our terms and policies (e.g., identifying or
                      investigating the misuse of our products or systems);
                    </p>
                  </li>
                  <li>
                    <p>
                      <li>
                        <p>
                          Protecting the safety and security of our products,
                          systems and users;
                        </p>
                      </li>
                    </p>
                  </li>
                  <li>
                    <p>
                      Complying with legal obligations, such as preserving
                      evidence; Or
                    </p>
                  </li>
                  <li>
                    <p>
                      Comply with the request of a judicial or administrative
                      authority, law enforcement or government agency
                    </p>
                  </li>
                  <li>
                    <p>
                      In that case, the content will be retained as long as
                      necessary for the purpose for which it was retained (the
                      exact duration will vary from case to case).
                    </p>
                  </li>
                  <li>
                    <p>
                      If you disable your account or we disable it, these terms
                      as an agreement between you and us are terminated, but
                      this section and the following "Your Agreement and What
                      Happens If We Disagree" section terminates, even if your
                      account is terminated, disabled or deleted Will apply.
                    </p>
                  </li>
                </ul>
              </details>

              <details >
                <summary>
                  <h2>Links to Other Websites</h2>
                </summary>
                <p>
                  This Terms & Conditions applies only to the Services. The
                  Services may contain links to other websites not operated or
                  controlled by Qviple. We are not responsible for the content,
                  accuracy or opinions expressed in such websites, and such
                  websites are not investigated, monitored or checked for
                  accuracy or completeness by us. Please remember that when you
                  use a link to go from the Services to another website, our
                  Terms & Conditions are no longer in effect. Your browsing and
                  interaction on any other website, including those that have a
                  link on our platform, is subject to that website's own rules
                  and policies. Such third parties may use their own cookies or
                  other methods to collect information about you.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Cookies</h2>
                </summary>
                <p>
                  Qviple uses "Cookies" to identify the areas of our website
                  that you have visited. A Cookie is a small piece of data
                  stored on your computer or mobile device by your web browser.
                  We use Cookies to enhance the performance and functionality of
                  our app but are non-essential to their use. However, without
                  these cookies, certain functionality like videos may become
                  unavailable or you would be required to enter your login
                  details every time you visit the app as we would not be able
                  to remember that you had logged in previously. Most web
                  browsers can be set to disable the use of Cookies. However, if
                  you disable Cookies, you may not be able to access
                  functionality on our website correctly or at all. We never
                  place Personally Identifiable Information in Cookies.
                </p>
              </details>

              <details >
                <summary>
                  <h2>Changes To Our Terms & Conditions</h2>
                </summary>
                <p>
                  You acknowledge and agree that Qviple may stop (permanently or
                  temporarily) providing the Service (or any features within the
                  Service) to you or to users generally at Qviple's sole
                  discretion, without prior notice to you. You may stop using
                  the Service at any time. You do not need to specifically
                  inform Qviple when you stop using the Service. You acknowledge
                  and agree that if Qviple disables access to your account, you
                  may be prevented from accessing the Service, your account
                  details or any files or other materials which is contained in
                  your account. If we decide to change our Terms & Conditions,
                  we will post those changes on this page, and/or update the
                  Terms & Conditions modification date below. place Personally
                  Identifiable Information in Cookies.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Modifications to Our app</h2>
                </summary>
                <p>
                  Qviple reserves the right to modify, suspend or discontinue,
                  temporarily or permanently, the app or any service to which it
                  connects, with or without notice and without liability to you.
                </p>
              </details>
              <details open>
                <summary>
                  <h2>Updates to Our app</h2>
                </summary>
                <p>
                  Qviple may from time to time provide enhancements or
                  improvements to the features/ functionality of the app, which
                  may include patches, bug fixes, updates, upgrades and other
                  modifications ("Updates"). Updates may modify or delete
                  certain features and/or functionalities of the app. You agree
                  that Qviple has no obligation to (i) provide any Updates, or
                  (ii) continue to provide or enable any particular features
                  and/or functionalities of the app to you. You further agree
                  that all Updates will be (i) deemed to constitute an integral
                  part of the app, and (ii) subject to the terms and conditions
                  of this Agreement.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Third-Party Services</h2>
                </summary>
                <p>
                  We may display, include or make available third-party content
                  (including data, information, applications and other products
                  services) or provide links to third-party websites or services
                  ("Third- Party Services"). You acknowledge and agree that
                  Qviple shall not be responsible for any Third-Party Services,
                  including their accuracy, completeness, timeliness, validity,
                  copyright compliance, legality, decency, quality or any other
                  aspect thereof. Qviple does not assume and shall not have any
                  liability or responsibility to you or any other person or
                  entity for any Third-Party Services. Third-Party Services and
                  links thereto are provided solely as a convenience to you and
                  you access and use them entirely at your own risk and subject
                  to such third parties' terms and conditions.
                </p>
              </details>

              <details >
                <summary>
                  <h2>Term and Termination</h2>
                </summary>
                <p>
                  This Agreement shall remain in effect until terminated by you
                  or Qviple. Qviple may, in its sole discretion, at any time and
                  for any or no reason, suspend or terminate this Agreement with
                  or without prior notice. This Agreement will terminate
                  immediately, without prior notice from Qviple, in the event
                  that you fail to comply with any provision of this Agreement.
                  You may also terminate this Agreement by deleting the app and
                  all copies thereof from your computer. Upon termination of
                  this Agreement, you shall cease all use of the app and delete
                  all copies of the app from your computer. Termination of this
                  Agreement will not limit any of Qviple's rights or remedies at
                  law or in equity in case of breach by you (during the term of
                  this Agreement) of any of your obligations under the present
                  Agreement.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Copyright Infringement Notice</h2>
                </summary>
                <p>
                  If you are a copyright owner or such owner's agent and believe
                  any material on our app constitutes an infringement on your
                  copyright, please contact us setting forth the following
                  information: (a) a physical or electronic signature of the
                  copyright owner or a person authorized to act on his behalf;
                  (b) identification of the material that is claimed to be
                  infringing; (c) your contact information, including your
                  address, telephone number, and an email; (d) a statement by
                  you that you have a good faith belief that use of the material
                  is not authorized by the copyright owners; and (e) the a
                  statement that the information in the notification is
                  accurate, and, under penalty of perjury you are authorized to
                  act on behalf of the owner.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Indemnification</h2>
                </summary>
                <p>
                  You agree to indemnify and hold Qviple and its parents,
                  subsidiaries, affiliates, officers, employees, agents,
                  partners and licensors (if any) harmless from any claim or
                  demand, including reasonable attorneys' fees, due to or
                  arising out of your: (a) use of the app; (b) violation of this
                  Agreement or any law or regulation; or (c) violation of any
                  right of a third party.
                </p>
              </details>
              <details >
                <summary>
                  <h2>No Warranties</h2>
                </summary>
                <p>
                  The app is provided to you "AS IS" and "AS AVAILABLE" and with
                  all faults and defects without warranty of any kind. To the
                  maximum extent permitted under applicable law, Qviple, on its
                  own behalf and on behalf of its affiliates and its and their
                  respective licensors and service providers, expressly
                  disclaims all warranties, whether express, implied, statutory
                  or otherwise, with respect to the app, including all implied
                  warranties of merchantability, fitness for a particular
                  purpose, title and non-infringement, and warranties that may
                  arise out of course of dealing, course of performance, usage
                  or trade practice. Without limitation to the foregoing, Qviple
                  provides no warranty or undertaking, and makes no
                  representation of any kind that the app will meet your
                  requirements, achieve any intended results, be compatible or
                  work with any other software, , systems or services, operate
                  without interruption, meet any performance or reliability
                  standards or be error free or that any errors or defects can
                  or will be corrected. Without limiting the foregoing, neither
                  Qviple nor any Qviple's provider makes any representation or
                  warranty of any kind, express or implied: (i) as to the
                  operation or availability of the app, or the information,
                  content, and materials or products included thereon; (ii) that
                  the app will be uninterrupted or error-free; (iii) as to the
                  accuracy, reliability, or currency of any information or
                  content provided through the app; or (iv) that the app, its
                  servers, the content, or e-mails sent from or on behalf of
                  Qviple are free of viruses, scripts, trojan horses, worms,
                  malware, timebombs or other harmful components. Some
                  jurisdictions do not allow the exclusion of or limitations on
                  implied warranties or the limitations on the applicable
                  statutory rights of a consumer, so some or all of the above
                  exclusions and limitations may not apply to you.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Severability</h2>
                </summary>
                <p>
                  If any provision of this Agreement is held to be unenforceable
                  or invalid, such provision will be changed and interpreted to
                  accomplish the objectives of such provision to the greatest
                  extent possible under applicable law and the remaining
                  provisions will continue in full force and effect. This
                  Agreement, together with the Privacy Policy and any other
                  legal notices published by Qviple on the Services, shall
                  constitute the entire agreement between you and Qviple
                  concerning the Services. If any provision of this Agreement is
                  deemed invalid by a court of competent jurisdiction, the
                  invalidity of such provision shall not affect the validity of
                  the remaining provisions of this Agreement, which shall remain
                  in full force and effect. No waiver of any term of this
                  Agreement shall be deemed a further or continuing waiver of
                  such term or any other term, and Qviple's failure to assert
                  any right or provision under this Agreement shall not
                  constitute a waiver of such right or provision. YOU AND Qviple
                  AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO
                  THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE
                  OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS
                  PERMANENTLY BARRED.
                </p>
              </details>
              <details open>
                <summary>
                  <h2>Waiver</h2>
                </summary>
                <p>
                  Except as provided herein, the failure to exercise a right or
                  to require performance of an obligation under this Agreement
                  shall not effect a party's ability to exercise such right or
                  require such performance at any time thereafter nor shall be
                  the waiver of a breach constitute waiver of any subsequent
                  breach. o failure to exercise, and no delay in exercising, on
                  the part of either party, any right or any power under this
                  Agreement shall operate as a waiver of that right or power.
                  Nor shall any single or partial exercise of any right or power
                  under this Agreement preclude further exercise of that or any
                  other right granted herein. In the event of a conflict between
                  this Agreement and any applicable purchase or other terms, the
                  terms of this Agreement shall govern.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Amendments to this Agreement</h2>
                </summary>
                <p>
                  Qviple reserves the right, at its sole discretion, to modify
                  or replace this Agreement at any time. If a revision is
                  material we will provide at least 30 days' notice prior to any
                  new terms taking effect. What constitutes a material change
                  will be determined at our sole discretion. By continuing to
                  access or use our app after any revisions become effective,
                  you agree to be bound by the revised terms. If you do not
                  agree to the new terms, you are no longer authorized to use
                  Qviple.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Entire Agreement</h2>
                </summary>
                <p>
                  The Agreement constitutes the entire agreement between you and
                  Qviple regarding your use of the app and supersedes all prior
                  and contemporaneous written or oral agreements between you and
                  Qviple. You may be subject to additional terms and conditions
                  that apply when you use or purchase other Qviple's services,
                  which Qviple will provide to you at the time of such use or
                  purchase.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Updates to Our Termst</h2>
                </summary>
                <p>
                  We may change our Service and policies, and we may need to
                  make changes to these Terms so that they accurately reflect
                  our Service and policies. Unless otherwise required by law, we
                  will notify you (for example, through our Service) before we
                  make changes to these Terms and give you an opportunity to
                  review them before they go into effect. Then, if you continue
                  to use the Service, you will be bound by the updated Terms. If
                  you do not want to agree to these or any updated Terms, you
                  can delete your account.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Intellectual Property</h2>
                </summary>
                <p>
                  The app and its entire contents, features and functionality
                  (including but not limited to all information, software, text,
                  displays, images, video and audio, and the design, selection
                  and arrangement thereof), are owned by Qviple, its licensors
                  or other providers of such material and are protected by IN
                  and international copyright, trademark, patent, trade secret
                  and other intellectual property or proprietary rights laws.
                  The material may not be copied, modified, reproduced,
                  downloaded or distributed in any way, in whole or in part,
                  without the express prior written permission of Qviple, unless
                  and except as is expressly provided in these Terms &
                  Conditions. Any unauthorized use of the material is
                  prohibited.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Agreement to Arbitrate</h2>
                </summary>
                <p>
                  This section applies to any dispute EXCEPT IT DOESN'T INCLUDE
                  A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE
                  RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR
                  Qviple's INTELLECTUAL PROPERTY RIGHTS. The term “dispute”
                  means any dispute, action, or other controversy between you
                  and Qviple concerning the Services or this agreement, whether
                  in contract, warranty, tort, statute, regulation, ordinance,
                  or any other legal or equitable basis. “Dispute” will be given
                  the broadest possible meaning allowable under law.
                </p>
              </details>
              <details open>
                <summary>
                  <h2>Notice of Dispute</h2>
                </summary>
                <p>
                  In the event of a dispute, you or Qviple must give the other a
                  Notice of Dispute, which is a written statement that sets
                  forth the name, address, and contact information of the party
                  giving it, the facts giving rise to the dispute, and the
                  relief requested. You must send any Notice of Dispute via
                  email to:[email&#160;protected] Qviple will send any Notice of
                  Dispute to you by mail to your address if we have it, or
                  otherwise to your email address. You and Qviple will attempt
                  to resolve any dispute through informal negotiation within
                  sixty (60) days from the date the Notice of Dispute is sent.
                  After sixty (60) days, you or Qviple may commence arbitration.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Binding Arbitration</h2>
                </summary>
                <p>
                  If you and Qviple don't resolve any dispute by informal
                  negotiation, any other effort to resolve the dispute will be
                  conducted exclusively by binding arbitration as described in
                  this section. You are giving up the right to litigate (or
                  participate in as a party or class member) all disputes in
                  court before a judge or jury. The dispute shall be settled by
                  binding arbitration in accordance with the commercial
                  arbitration rules of the American Arbitration Association.
                  Either party may seek any interim or preliminary injunctive
                  relief from any court of competent jurisdiction, as necessary
                  to protect the party's rights or property pending the
                  completion of arbitration. Any and all legal, accounting, and
                  other costs, fees, and expenses incurred by the prevailing
                  party shall be borne by the non-prevailing party.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Submissions and Privacy</h2>
                </summary>
                <p>
                  In the event that you submit or post any ideas, creative
                  suggestions, designs, photographs, information,
                  advertisements, data or proposals, including ideas for new or
                  improved products, services, features, technologies or
                  promotions, you expressly agree that such submissions will
                  automatically be treated as non-confidential and
                  non-proprietary and will become the sole property of Qviple
                  without any compensation or credit to you whatsoever. Qviple
                  and its affiliates shall have no obligations with respect to
                  such submissions or posts and may use the ideas contained in
                  such submissions or posts for any purposes in any medium in
                  perpetuity, including, but not limited to, developing,
                  manufacturing, and marketing products and services using such
                  ideas.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Promotions</h2>
                </summary>
                <p>
                  Qviple may, from time to time, include contests, promotions,
                  sweepstakes, or other activities (“Promotions”) that require
                  you to submit material or information concerning yourself.
                  Please note that all Promotions may be governed by separate
                  rules that may contain certain eligibility requirements, such
                  as restrictions as to age and geographic location. You are
                  responsible to read all Promotions rules to determine whether
                  or not you are eligible to participate. If you enter any
                  Promotion, you agree to abide by and to comply with all
                  Promotions Rules. Additional terms and conditions may apply to
                  purchases of goods or services on or through the Services,
                  which terms and conditions are made a part of this Agreement
                  by this reference.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Typographical Errors</h2>
                </summary>
                <p>
                  In the event a product and/or service is listed at an
                  incorrect price or with incorrect information due to
                  typographical error, we shall have the right to refuse or
                  cancel any orders placed for the product and/or service listed
                  at the incorrect price. We shall have the right to refuse or
                  cancel any such order whether or not the order has been
                  confirmed and your credit card charged. If your credit card
                  has already been charged for the purchase and your order is
                  canceled, we shall immediately issue a credit to your credit
                  card account or other payment account in the amount of the
                  charge.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Miscellaneous</h2>
                </summary>
                <p>
                  If for any reason a court of competent jurisdiction finds any
                  provision or portion of these Terms & Conditions to be
                  unenforceable, the remainder of these Terms & Conditions will
                  continue in full force and effect. Any waiver of any provision
                  of these Terms & Conditions will be effective only if in
                  writing and signed by an authorized representative of Qviple.
                  Qviple will be entitled to injunctive or other equitable
                  relief (without the obligations of posting any bond or surety)
                  in the event of any breach or anticipatory breach by you.
                  Qviple operates and controls the Qviple Service from its
                  offices in IN. The Service is not intended for distribution to
                  or use by any person or entity in any jurisdiction or country
                  where such distribution or use would be contrary to law or
                  regulation. Accordingly, those persons who choose to access
                  the Qviple Service from other locations do so on their own
                  initiative and are solely responsible for compliance with
                  local laws, if and to the extent local laws are applicable.
                  These Terms & Conditions (which include and incorporate the
                  Qviple Privacy Policy) contains the entire understanding, and
                  supersedes all prior understandings, between you and Qviple
                  concerning its subject matter, and cannot be changed or
                  modified by you. The section headings used in this Agreement
                  are for convenience only and will not be given any legal
                  import.
                </p>
              </details>
              <details >
                <summary>
                  <h2>Disclaimer</h2>
                </summary>
                <p>
                  Qviple is not responsible for any content, code or any other
                  imprecision. Qviple does not provide warranties or guarantees.
                  In no event shall Qviple be liable for any special, direct,
                  indirect, consequential, or incidental damages or any damages
                  whatsoever, whether in an action of contract, negligence or
                  other tort, arising out of or in connection with the use of
                  the Service or the contents of the Service. The Company
                  reserves the right to make additions, deletions, or
                  modifications to the contents on the Service at any time
                  without prior notice. The Qviple Service and its contents are
                  provided "as is" and "as available" without any warranty or
                  representations of any kind, whether express or implied.
                  Qviple is a distributor and not a publisher of the content
                  supplied by third parties; as such, Qviple exercises no
                  editorial control over such content and makes no warranty or
                  representation as to the accuracy, reliability or currency of
                  any information, content, service or merchandise provided
                  through or accessible via the Qviple Service. Without limiting
                  the foregoing, Qviple specifically disclaims all warranties
                  and representations in any content transmitted on or in
                  connection with the Qviple Service or on sites that may appear
                  as links on the Qviple Service, or in the products provided as
                  a part of, or otherwise in connection with, the Qviple
                  Service, including without limitation any warranties of
                  merchantability, fitness for a particular purpose or
                  non-infringement of third party rights. No oral advice or
                  written information given by Qviple or any of its affiliates,
                  employees, officers, directors, agents, or the like will
                  create a warranty. Price and availability information is
                  subject to change without notice. Without limiting the
                  foregoing, Qviple does not warrant that the Qviple Service
                  will be uninterrupted, uncorrupted, timely, or error-free.
                </p>
              </details>
              <details open>
                <summary>
                  <h2>Contact Us</h2>
                </summary>
                <p>Don't hesitate to contact us if you have any questions</p>
                <p>Email - [connect@qviple.com]</p>
                <p>
                  Operational Address - H.N. 1860 Zhapwadi Shirvartal, Sinnar,
                  Dist. Nashik, Maharashtra, India 422006
                </p>
                <p>Contact Number - +91 7276147751</p>
              </details>
            </section>

            {/* <hr className="section-divider" /> */}
{/* 
            <footer className="privacy-footer">
              <h2>Changes to This Policy & Contact</h2>

              <div className="policy-updates">
                <h3>Policy Updates</h3>
                <p>
                  We may periodically update our Privacy Policy. Updates will be
                  communicated via email or through the app.
                </p>
              </div>

              <div className="contact-us">
                <h3>Contact Us</h3>
                <p>
                  If you have questions, reach out at :{" "}
                  <a href="mailto:connect@qviple.com" className="privacy-link">
                    <strong>connect@qviple.com</strong>
                  </a>
                </p>
              </div>
            </footer> */}
          </div>
        </main>
      </div>
    </>
  );
}
