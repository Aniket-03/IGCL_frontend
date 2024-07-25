"use client";
import Image from "next/image";
import Navbar from "./components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Accordion } from "flowbite-react";
import Footer from "./components/common/footer";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "./services.module.css";

export default function Home() {
  var herosettings = {
    dots: false,
    arrows: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var clientssettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  useEffect(() => {
    initFlowbite(); // Call initCarousels() when component mounts
  }, []);
  return (
    <main className="">
      <Navbar />
      {/* hero section */}
      <div className="-mt-44">
        <Slider {...herosettings}>
          <section className="bg-center h-screen bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-cover bg-gray-100 bg-blend-multiply">
            <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              <div className="flex w-fit labour mr-auto">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                  LABOUR
                </h1>
                {/* <img
                  className="heroLabourImage rounded-sm ml-4"
                  src="/images/hero_labourNew.jpg"
                  alt="labour"
                /> */}
              </div>
              <div className="w-fit law">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                  LAW
                </h1>
              </div>
              <div className="flex w-fit compliance mr-auto">
                <div className="heroCompliance">
                  <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                    COMPLIANCES
                  </h1>
                </div>
                {/* <img
                  className="heroLabourImage rounded-sm ml-4"
                  src="/images/hero_labourNew.jpg"
                  alt="labour"
                /> */}
              </div>
              <div className="mt-auto mt-4 mr-auto ml-4">
                <div>
                  <p className="text-white heroDesc text-left">
                    We appreciate your trust greatly!
                  </p>
                </div>
                <div className="w-fit heroMoreInfo mt-4">
                  <a
                    href="#"
                    className=" inline-flex justify-center hover:text-gray-900  py-3 px-5  text-base font-medium text-center text-white  border border-white hover:bg-gray-400 focus:ring-4 focus:ring-gray-400"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-center h-screen bg-no-repeat bg-[url('/images/hero_labourNew.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              <div className="flex w-fit labour mr-auto">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                  LABOUR
                </h1>
              </div>
              <div className="w-fit law">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                  LAW
                </h1>
              </div>
              <div className="flex w-fit compliance mr-auto">
                <div className="heroCompliance">
                  <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                    COMPLIANCES
                  </h1>
                </div>
              </div>
              <div className="mt-auto mt-4 mr-auto ml-4">
                <div>
                  <p className="text-gray-300 heroDesc text-left">
                    We appreciate your trust greatly!
                  </p>
                </div>
                <div className="w-fit heroMoreInfo mt-4">
                  <a
                    href="#"
                    className=" inline-flex justify-center hover:text-gray-900  py-3 px-5  text-base font-medium text-center text-white  border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>

      {/* what we do */}
      <div className="py-8 mt-12 whatWeDoMain px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            <div className="mx-1 mt-24">
              <div>
                <img
                  className="h-36 md:h-96 rounded-lg w-full"
                  src="/images/whatWeDo1.png"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <img
                  className="h-36 md:h-96 rounded-lg w-full"
                  src="/images/whatWeDo2.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-1">
              <div>
                <img
                  className="h-36 md:h-96 rounded-lg w-full"
                  src="/images/whatWeDo3.png"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <img
                  className="h-36 md:h-96 rounded-lg w-full"
                  src="/images/whatWeDo4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <section className=" dark:bg-gray-900">
              <div className="py-8 whatWeDoRIght mx-auto max-w-screen-xl text-left lg:py-16 md:px-28">
                <h1 className="mb-4 text-4xl text-gray-900 font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">
                  We Provide the Best Facilities for Your Business
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  IGCL India provides outstanding and unsurpassed service that,
                  together, delivers premium values to our customers. Since
                  then, IGCL INDIA has been diversified into multiple business
                  domains hence words fall short to describe the enthusiasm and
                  working profile of our corporation.
                </p>
                <p className="mb-8 mt-4 text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  At IGCL India, we believe in treating people the way they want
                  to be treated, with friendliness, calmness, and respect. Our
                  success is not only due to the quality of our work, It’s due
                  to our attitude, our approach, and the way we treat our
                  clients.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
                  <a
                    href="#"
                    className="py-3 px-5  text-sm font-medium text-blue-600 focus:outline-none  border border-blue-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                  >
                    Get to know us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-t border-gray-200 px-5 py-16 md:py-24 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                SERVICES
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-600">
                Offering a range of services tailored to meet your needs.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className={styles.BoxContainer}>
            <div className={styles.card}>
                    <img
                        src="/images/image1.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3>01-</h3>
                            <h3 className={styles.textDesp}>Minimum Wage</h3>
                            <p className={styles.textSecret}>Ensuring payment of at least the minimum wage as prescribed by law for all employees.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/images/image2.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3>02-</h3>
                            <h3 className={styles.textDesp}>Working Hours</h3>
                            <p className={styles.textSecret}>Adhering to regulations on maximum working hours per day and per week, including provisions for overtime pay.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/images/image3.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <div><h3>03-</h3></div>
                            <div><h3 className={styles.textDesp}>Employee Contracts</h3></div>
                            <p className={styles.textSecret}>Providing written contracts outlining terms of employment, including benefits and termination conditions.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/images/image4.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3>04-</h3>
                            <h3 className={styles.textDesp}>Health and Safety</h3>
                            <p className={styles.textSecret}>Maintaining a safe working environment, including equipment, and procedures to prevent accidents</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-t border-b border-gray-200 px-5 py-16 md:py-24 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                FAQ's
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-600">
                Find answers to commonly asked questions.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="py-24 px-24 faqs mx-auto flex flex-col md:flex-row gap-12">
              <div className="flex flex-col text-left basis-1/2">
                <p className="inline-block font-semibold text-gray-800 mb-4">
                  QUESTIONS & ANSWERS
                </p>
                <p className="sm:text-4xl text-3xl text-gray-800 font-bold text-base-content">
                  Have any questions?
                </p>
                <p className="sm:text-4xl text-3xl text-gray-800 font-bold text-base-content">
                  Find answers here
                </p>
                <p className="inline-block text-gray-800 mt-4 text-primary mb-4">
                  Whether you're curious about our services, need assistance, or
                  have a specific question, our FAQ section is here to help.
                  Browse through our most frequently asked questions and find
                  the information you need quickly and easily.
                </p>
              </div>
              <ul className="basis-1/2">
                <Accordion
                  collapseAll
                  className="border-none border-b border-gray-800"
                >
                  <Accordion.Panel className=" border border-b border-gray-800">
                    <section className=" border-b border-gray-800">
                      <Accordion.Title
                        className="border-none  text-gray-800 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-gray-800 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none  text-gray-800 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-gray-800 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none  text-gray-800 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-gray-800 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                </Accordion>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                What people are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Authentic testimonials from clients who trust us.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 ">
              <div className="px-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
     
            <section className={`${styles.forthSection}`}>
                <div className={`${styles.forthSectionInner}`}>
                    <div className={`${styles.forthBoxImg}`}>
                        <img 
                            className=" mt-5"
                            src="images/speech-bubble.png"
                            width="130px"
                            height="130px"
                        />
                    </div>
                    <div className={`${styles.forthBoxMain}`}>
                        <div className={`${styles.forthBoxText}`}>
                            <h1>We always love </h1>
                            <h1>to hear from you</h1>
                        </div>
                        <form className={`${styles.forthBoxForm}`}>
                            <div className={`${styles.forthBoxInput}`}>
                                <input
                                    placeholder="Your First Name"
                                    className="border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white mr-2 placeholder-gray-300 hover:placeholder-white py-3" />
                                <input
                                    placeholder="Your Email Address"
                                    className={`${styles.forthBoxInput2} py-3 border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
                            </div>
                            <textarea
                            rows="4"
                                placeholder="Ask your question"
                                className="border-b bg-transparent resize-none text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white py-3"
                            />

                        </form>
                    </div>
                    <div className={`${styles.forthBoxButton}`}>
                        <button className={`${styles.forthButton}`}>Submit</button>
                    </div>

                </div>
            </section>
          

      {/* Clients */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                CLIENTS
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 ">
              <div className="px-3 ">
                <Slider {...clientssettings}>
                  <div className="image-container">
                    <img
                      src="/images/clientBW1.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW2.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW3.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW4.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW5.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC5.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW6.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC6.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW7.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC7.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC8.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC8.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW9.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC9.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW10.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC10.png" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientBW11.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC11.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW12.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC12.jpg" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientBW13.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC13.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW1.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW2.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW3.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW4.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW14.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC14.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW15.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC15.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW16.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC16.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW17.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC17.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW18.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC18.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW19.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC19.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
