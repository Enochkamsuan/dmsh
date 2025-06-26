import React from "react";
import about from "../assets/images/about.jpg";

const About = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 py-5 md:py-16 lg-py-20">
      <div className="text-5xl text-blue-950 font-Manrope text-center font-bold">
        About Us
      </div>
      <div className="text-slate-500 font-Manrope mt-10">
        We are the believers of H3 (Human, Health & Help), powered by
        transformative exponential technology to deliver quality accessible
        health care services without border seamlessly and remotely to everyone.
      </div>
      <div className="mt-5">
        <img src={about} alt="about" className="w-full h-80 object-contain" />
      </div>
      <div className="text-5xl text-blue-950 font-Manrope font-bold underline">
        Our Story
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        Humanity is emerging and evolving constantly with new possibilities. The
        dawn of newer era in the delivery of health care services is an
        affirmative for universal access to quality health care by every
        individual.
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        We are the torch bearer to herald the new era of access to quality
        universal health care services powered by an exponential transformative
        technology.
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        If you are too sick to go to the hospital, we come to you with full
        services which hospital can provide everywhere. You cannot go to
        hospital? We bring to you, the hospital wherever you are.
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        If you are the health care service providers, you can expand the horizon
        of your services to humanity from the comfort of your service delivery
        point seamlessly everywhere to everybody using the exponential health
        care technology.
      </div>
      <div className="text-5xl text-blue-950 font-Manrope font-bold underline mt-7">
        Our Mission
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        Our mission is to transform the current healthcare system delivery into
        one that is both seamless and proactive, driven by digitalisation of
        health-data-enabling to boost seamless health care delivery and treat
        illnesses earlier than ever before.
      </div>
      <div className="text-5xl text-blue-950 font-Manrope font-bold underline mt-7">
        Our Team
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        At Divine Mercy Health Care Service, we are the believers for the
        transformation of humanity. We have developed an exponentially blended
        health care service provider model, powered by emerging technology.
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        Divine Mercy Health Care Services is supported by well experienced
        health care professionals at the center and specialist of vary health
        care expertise from various parts of the State, Country and the world
        such as Physician, Medicine, Specialist, Gynaecologist, Radiologist,
        Gastroenterology, Dentist, Ophthalmologist, Dermatologist, General
        Practitioner, Nurse Practitioner, and a group health care coordinators
        and coaches.
      </div>
      <div className="text-slate-500 font-Manrope mt-5">
        These teams are trained to the highest standards in accordance with
        Indian Public Health Standard (IPHS) and the Equipments being used at
        Divine Mercy Health Care Services is approved by the Food and Drug
        Administration (FDA), a US federal agency under the Department of Health
        and Human Services and Ministry of Health and Family Welfare, Government
        of India.
      </div>
    </div>
  );
};

export default About;
