import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";
import "./information.css";
export default function page() {
  return (
    <div className="term-of-use-section">
      <QvipleNavbar />
      <div className="term-hero">
        <div className="container-term">
          <h1 className="h1-term">Information Security Policy</h1>
        </div>
      </div>
      <div className="container-main">
        <div className="bg-container">
          <p className="p-bg">
            Jeton Bank Limited, an international bank existing under the
            Commonwealth of Dominica, and having its registered Head Office, at
            1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica,
            licensed as a bank institution under the Offshore Banking Act (the
            “Law”), fully authorized to provide services to clients worldwide,
            except for Commonwealth of Dominica citizens and residents, under
            the prudential supervision of the Financial Services Unit ). A copy
            of the Public Register of FSU of licensed Offshore Banks can be seen
            at{" "}
          </p>
          <h3 className="h3-bg">1. General</h3>
          <p className="p-bg">
            1.1. Please read the details set out below carefully before using
            this website (the “Site”). By accessing this Site, you agree to be
            bound by the following terms and conditions and disclaimers (the
            “Terms”).
          </p>
          <p className="p-bg">
            1.2. Before using this Site, you should read the Terms carefully, as
            well as our Privacy Notice (which includes our Cookies Policy).
          </p>
          <p className="p-bg">
            1.3. References to ‘you’ and ‘your’ are references to you and the
            person(s) accessing the Site in respect of your Account(s).
          </p>
          <p className="p-bg">
            1.4. References to ‘Bank’, ‘we’, ‘us’ and ‘our’ are references to
            Jeton Bank Limited, 1st Floor, 43 Great George Street, Roseau,
            Commonwealth of Dominica, its successors, assigns and transferees
            (and including where applicable its Affiliates).
          </p>
          <p className="p-bg">
            1.5. All our products and services are subject to the terms and
            conditions (and disclaimers) of the applicable agreement governing
            their use which, to the extent of any inconsistency, shall prevail
            over these Terms. These Terms are themselves supplemental to the
            Account Agreement entered into between you and the Bank.
          </p>
          <p className="p-bg">
            1.6. In the event of a conflict between these Terms and the Account
            Agreement, these Terms shall only prevail in respect of your use of
            the Site, and the Account Agreement shall prevail in all other
            matters.
          </p>
          <p className="p-bg">
            1.7 Defined terms used but not defined herein shall have the same
            meaning as in the Account Agreement.
          </p>
          <p className="p-bg">
            1.8. These Terms are to be read by you together with any terms,
            conditions and disclaimers provided in the pages of the Site which,
            to the extent of any inconsistency, shall also prevail over these
            Terms. The Terms, information, material and content provided in the
            pages of the Site may be changed at any time without notice by
            updating this posting. You agree to review the Terms regularly and
            your continued access to or use of the Site will mean that you agree
            to any changes.
          </p>
          <h3 className="h3-bg">2. Users of This Site</h3>
          <p className="p-bg">
            2.1. This Site is owned, operated, managed and issued by the Bank,
            which is licensed to conduct banking business by the Financial
            Services Unit of the Commonwealth of Dominica. The Site is primarily
            intended for those who access it from outside the Eastern Caribbean
            Currency Union. Because of this, we cannot guarantee that the Site
            or the information thereon complies with law or regulation of other
            countries, or is appropriate for use, in other places.
          </p>
          <p className="p-bg">
            2.2. You are wholly responsible for the use of the Site by any
            person using your computer and you must ensure that any such person
            complies with these Terms. The information provided on this Site is
            not intended for distribution to, or use by, any person in any
            jurisdiction where such distribution or use would be contrary to law
            or regulation. This Site should not be considered as communicating
            any invitation or inducement to engage in banking or investment
            activity or any offer to buy or sell any securities or other
            instruments. The Bank reserves the right to adjust fees at anytime.
            The Bank reserves the right to amend, withdraw or not release any
            product or services at its sole discretion.
          </p>
          <h3 className="h3-bg">3. Country Guidelines</h3>
          <p className="p-bg">
            3.1. Not all products, services and investments described on this
            site are available in all jurisdictions and some are available on a
            limited basis only, due to local regulatory and legal requirements.
            The material on the pages of this Site is not intended for use by
            persons located in or a resident in jurisdictions which restrict the
            distribution of this material by us. Persons accessing these pages
            are required to inform themselves about and observe any relevant
            restrictions.
          </p>
          <p className="p-bg">
            3.2. This Site does not constitute an invitation to buy or the
            solicitation of an offer to sell products, services, investments or
            securities in any jurisdiction to any person to whom it is unlawful
            to make such an offer or solicitation in such jurisdiction.
          </p>
        </div>
      </div>
      <div className="w-full px-[12%]">
        <div className="flex flex-col items-center justify-center text-center bg-[#4888fb] rounded-2xl h-[360px] mt-24 px-6">
          <h2 className="text-white font-semibold text-[3rem] leading-[56px] max-w-[650px] mb-10">
            Jetonbank is an entirely new kind of bank.
          </h2>
          <p className="text-white text-xl leading-8 max-w-[450px]">
            We're all-digital, mission driven, and designed for the way you
            live.
          </p>
        </div>
      </div>
    </div>
  );
}
