"use client";
import React from "react";
import { Text, Img, Button, Heading, RatingBar, Slider, Input } from "../../components";
import Link from "next/link";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const data = [
  {
    icon: "img_thumbs_up.svg",
    heading: "Web Design Principles",
    paragraph:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    icon: "img_contrast.svg",
    heading: "User Interface - UI Design",
    paragraph:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    icon: "img_lock.svg",
    heading: "User Experience - UX Design",
    paragraph:
      "Understanding of user behavior and psychology to design seamless user experiences that meet user needs and goals.",
  },
  {
    icon: "img_calendar.svg",
    heading: "Responsive Web Design",
    paragraph:
      "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
  },
  {
    icon: "img_cursor.svg",
    heading: "Wireframing and Prototyping",
    paragraph:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
  {
    icon: "img_minimize.svg",
    heading: "Mobile-Friendly Optimization",
    paragraph:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
];
const data1 = [
  { numberText: "55+", completedProjec: "Completed Projects" },
  { numberText: "20+", completedProjec: "Happy Customers" },
  { numberText: "08+", completedProjec: "Years of Experience" },
];
const data2 = [
  {
    heading: "Customized Designs Tailored to Your Brand",
    paragraph:
      "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand&#39;s personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
  },
  {
    heading: "Creative Excellence that Captivates Visitors",
    paragraph:
      "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand&#39;s credibility and professionalism.",
  },
];
const data3 = [
  {
    heading: "User-Centric Approach for Optimal Experience",
    paragraph:
      "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
  },
  {
    heading: "Mobile-Friendly Designs for Broad Accessibilit",
    paragraph:
      "In today&#39;s mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
  },
  {
    heading: "Expertise in Cutting-Edge Technologies",
    paragraph:
      "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
  },
];
const data4 = [
  {
    paragraph:
      "Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.",
    name: "Sarah Thompson",
  },
  {
    paragraph:
      "I am thrilled with the website that Jeffery Cannon designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive. Jeffery&#39;s expertise in web design and user experience truly shines through in his work. He was responsive, professional, and delivered the project on time. I couldn&#39;t be happier with the outcome and highly recommend Jeffery to anyone in need of a top-notch web designer.",
    name: "Emily Roberts",
  },
  {
    paragraph:
      "I had the pleasure of collaborating with Jeffery Cannon on a web design project, and I am beyond impressed with the results. Jeffery&#39;s creativity and technical expertise transformed our website into a visually stunning and highly functional platform. His understanding of user experience design and attention to detail made a significant impact on our website&#39;s performance and user engagement. Jeffery&#39;s professionalism, timely delivery.",
    name: "Laura Adams",
  },
];

export default function HomePageLaptopPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* main layout section */}
      <div className="w-full bg-gray-200">
        <div>
          {/* navigation bar section */}
          <header className="flex items-center justify-center border-b border-solid border-gray-300_01 py-5">
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
              <Heading size="s" as="h6" className="self-end !text-deep_purple-A700">
                Jeffery Cannon.
              </Heading>
              <div className="flex items-center gap-[30px] sm:flex-col">
                <ul className="flex flex-wrap items-center gap-5">
                  <li>
                    <Link href="#" className="flex h-[45px] items-center justify-center rounded-md bg-gray-100 sm:px-5">
                      <Text size="xs" as="p" className="px-[22px] py-3 !text-blue_gray-900">
                        Home
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="cursor-pointer sm:px-5">
                      <Text
                        size="xs"
                        as="p"
                        className="px-[22px] py-3 !text-blue_gray-900 hover:rounded-md hover:bg-gray-100"
                      >
                        About Me
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="cursor-pointer sm:px-5">
                      <Text
                        size="xs"
                        as="p"
                        className="px-[22px] py-3 !text-blue_gray-900 hover:rounded-md hover:bg-gray-100"
                      >
                        Portfolio
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="cursor-pointer sm:px-5">
                      <Text
                        size="xs"
                        as="p"
                        className="px-[22px] py-3 !text-blue_gray-900 hover:rounded-md hover:bg-gray-100"
                      >
                        Contact Me
                      </Text>
                    </Link>
                  </li>
                </ul>
                <Button
                  size="lg"
                  shape="round"
                  leftIcon={<Img src="img_icon.svg" width={20} height={20} alt="Icon" className="h-[20px] w-[20px]" />}
                  className="min-w-[132px] gap-2 font-medium text-gray-50_01"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex w-[94%] flex-col gap-[100px] md:w-full md:gap-[75px] md:p-5 sm:gap-[50px]">
            {/* hero section */}
            <div className="flex items-center md:flex-col">
              <div className="flex flex-1 flex-col gap-[60px] md:self-stretch sm:gap-[30px]">
                <div className="flex flex-col items-start gap-[30px]">
                  <div className="flex w-[89%] flex-col items-start gap-5 md:w-full">
                    <Button
                      color="gray_100"
                      size="xl"
                      shape="round"
                      className="min-w-[172px] !rounded-[10px] font-medium"
                    >
                      Hello There 🤗
                    </Button>
                    <div className="flex flex-col gap-2.5 self-stretch">
                      <Heading size="xl" as="h1" className="leading-[150%] !text-gray-900">
                        Jeffery Cannon Welcome’s You!
                      </Heading>
                      <Text as="p" className="leading-[150%]">
                        I am a passionate and experienced web designer, dedicated to creating visually stunning and
                        highly functional websites. Explore my portfolio to see the power of effective design in action
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <Button
                      size="lg"
                      shape="round"
                      leftIcon={
                        <Img src="img_icon.svg" width={20} height={20} alt="Icon" className="h-[20px] w-[20px]" />
                      }
                      className="min-w-[132px] gap-2 font-medium text-gray-50_01"
                    >
                      Book a Call
                    </Button>
                    <Text size="xs" as="p" className="!text-gray-900">
                      View Portfolio -&gt;
                    </Text>
                  </div>
                </div>
                <div className="flex gap-6 rounded-bl-[12px] rounded-tl-[12px] bg-gray-100_01 p-6 md:flex-row sm:flex-col sm:p-5">
                  {data1.map((d, index) => (
                    <div key={"listnumbertext" + index} className="ml-4 flex flex-col items-start gap-[3px] sm:ml-0">
                      <Text size="lg" as="p" className="!text-blue_gray-900">
                        <span className="font-bold text-blue_gray-900">55</span>
                        <span className="font-bold text-deep_purple-A700">+</span>
                      </Text>
                      <Text size="xs" as="p">
                        {d.completedProjec}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[815px] w-[44%] rounded-bl-[30px] bg-[url(/images/img_container.png)] bg-cover bg-no-repeat md:w-full">
                <Img
                  src="img_image.png"
                  width={442}
                  height={735}
                  alt="image_one"
                  className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[735px] w-[73%] object-cover"
                />
                <Img
                  src="img_abstract_design.png"
                  width={247}
                  height={257}
                  alt="abstractdesign"
                  className="absolute left-[0.00px] top-[0.00px] m-auto h-[257px] w-[41%] object-cover"
                />
                <Img
                  src="img_abstract_design_gray_200.png"
                  width={242}
                  height={287}
                  alt="abstractdesign"
                  className="absolute bottom-[0.62px] right-[0.00px] m-auto h-[287px] w-[40%] object-cover"
                />
              </div>
            </div>

            {/* skills section */}
            <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="flex flex-col items-center gap-1.5">
                <Heading size="lg" as="h2" className="text-center">
                  Creative Skills
                </Heading>
                <Text as="p" className="text-center">
                  As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to
                  life
                </Text>
              </div>
              <div className="grid grid-cols-3 justify-center gap-5 md:grid-cols-2 sm:grid-cols-1">
                {data.map((d, index) => (
                  <div
                    key={"card" + index}
                    className="flex w-full flex-col items-center gap-6 rounded-[12px] bg-gray-100_01 p-10 sm:p-5"
                  >
                    <Button size="2xl" shape="round" className="w-[54px]">
                      <Img src={d.icon} width={54} height={54} />
                    </Button>
                    <div className="flex flex-col items-center gap-[5px] self-stretch">
                      <Heading as="h3" className="text-center">
                        {d.heading}
                      </Heading>
                      <Text as="p" className="text-center leading-[150%]">
                        {d.paragraph}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* benefits section */}
            <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="flex flex-col items-center gap-1.5">
                <Heading size="lg" as="h1" className="text-center">
                  Benefits
                </Heading>
                <Text as="p" className="text-center">
                  By choosing my web design service, you&#39;ll enjoy the following benefits
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 md:flex-col">
                  {data2.map((d, index) => (
                    <div
                      key={"card1" + index}
                      className="flex w-full flex-col items-start gap-[21px] rounded-lg bg-gray-100_01 p-10 sm:p-5"
                    >
                      <Heading as="h5" className="mt-1">
                        {d.heading}
                      </Heading>
                      <Text as="p" className="mb-6 leading-[150%]">
                        {d.paragraph}
                      </Text>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 md:flex-col">
                  {data3.map((d, index) => (
                    <div
                      key={"card2" + index}
                      className="flex w-full flex-col gap-6 rounded-lg bg-gray-100_01 p-10 sm:p-5"
                    >
                      <Heading as="h5" className="leading-[150%]">
                        {d.heading}
                      </Heading>
                      <Text as="p" className="leading-[150%]">
                        {d.paragraph}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* portfolio section */}
            <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="flex flex-col items-center gap-0.5 px-[7px] pt-[7px]">
                <Heading size="lg" as="h1" className="text-center">
                  My Works
                </Heading>
                <Text as="p" className="text-center">
                  Here&#39;s what some of my satisfied clients have to say about my work
                </Text>
              </div>
              <div className="flex flex-col items-center gap-10">
                <div className="flex gap-5 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start justify-center gap-[22px] rounded-[10px] bg-gray-100_01 p-10 sm:p-5">
                    <Heading size="xs" as="h6" className="mt-[3px]">
                      Z - Aura Perfume Website Design
                    </Heading>
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="relative h-[257px] md:h-auto">
                        <Img
                          src="img_image_257x333.png"
                          width={333}
                          height={257}
                          alt="image"
                          className="h-[257px] w-full rounded-lg object-cover"
                        />
                        <Button
                          color="gray_100_01"
                          size="xs"
                          shape="round"
                          className="absolute bottom-[10.00px] right-[10.00px] m-auto w-[36px] !rounded-md border border-solid border-gray-300"
                        >
                          <Img src="img_arrow_left.svg" width={36} height={36} />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-px pl-[260px] md:flex-row md:pl-5">
                        {[...Array(2)].map((d, index) => (
                          <Img
                            key={"subcontainer" + index}
                            src="img_image_54x72.png"
                            width={72}
                            height={54}
                            alt="subImage"
                            className="h-[54px] flex-1 rounded object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-[22px] rounded-[10px] bg-gray-100_01 p-10 sm:p-5">
                    <Heading size="xs" as="h6" className="mt-[3px]">
                      Forhelp Charity Website Design
                    </Heading>
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="relative h-[257px] md:h-auto">
                        <Img
                          src="img_image_1.png"
                          width={333}
                          height={257}
                          alt="image_one"
                          className="h-[257px] w-full rounded-lg object-cover"
                        />
                        <Button
                          color="gray_100_01"
                          size="xs"
                          shape="round"
                          className="absolute bottom-[10.00px] right-[10.33px] m-auto w-[36px] !rounded-md border border-solid border-gray-300"
                        >
                          <Img src="img_arrow_left.svg" width={36} height={36} />
                        </Button>
                      </div>
                      <div className="flex gap-3.5">
                        <Img
                          src="img_image_2.png"
                          width={72}
                          height={54}
                          alt="image_three"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_3.png"
                          width={72}
                          height={54}
                          alt="image_five"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_3.png"
                          width={72}
                          height={54}
                          alt="image_seven"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_3.png"
                          width={72}
                          height={54}
                          alt="image_nine"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-[22px] rounded-[10px] bg-gray-100_01 p-10 sm:p-5">
                    <Heading size="xs" as="h6" className="mt-[3px]">
                      Skill Bridge Website Design
                    </Heading>
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="relative h-[257px] md:h-auto">
                        <Img
                          src="img_image_4.png"
                          width={333}
                          height={257}
                          alt="image_one"
                          className="h-[257px] w-full rounded-lg object-cover"
                        />
                        <Button
                          color="gray_100_01"
                          size="xs"
                          shape="round"
                          className="absolute bottom-[10.00px] right-[9.67px] m-auto w-[36px] !rounded-md border border-solid border-gray-300"
                        >
                          <Img src="img_arrow_left.svg" width={36} height={36} />
                        </Button>
                      </div>
                      <div className="flex gap-3.5">
                        <Img
                          src="img_image_5.png"
                          width={72}
                          height={54}
                          alt="image_three"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_6.png"
                          width={72}
                          height={54}
                          alt="image_five"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_6.png"
                          width={72}
                          height={54}
                          alt="image_seven"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                        <Img
                          src="img_image_6.png"
                          width={72}
                          height={54}
                          alt="image_nine"
                          className="h-[54px] w-[23%] rounded object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button size="lg" shape="round" className="min-w-[165px] !rounded-md font-medium text-gray-50_01">
                  View All Projects -&gt;
                </Button>
              </div>
            </div>

            {/* testimonials section */}
            <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="flex flex-col items-center gap-0.5 px-[7px] pt-[7px]">
                <Heading size="lg" as="h1" className="text-center">
                  What My Clients say About Me
                </Heading>
                <Text as="p" className="text-center">
                  Here&#39;s what some of my satisfied clients have to say about my work
                </Text>
              </div>
              <div className="flex flex-col gap-[30px]">
                <Input
                  shape="square"
                  name="subcontainer"
                  placeholder={`37 Total Reviews`}
                  suffix={
                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[50%] border border-gray-300_01 bg-gray-50">
                      <Img
                        src="img_arrowleft_blue_gray_900.svg"
                        width={6}
                        height={13}
                        alt="arrow_left"
                        className="h-[13px] w-[6px]"
                      />
                    </div>
                  }
                  className="sm:pr-5"
                />
                <div className="w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-auto flex gap-5 md:flex-col">
                          {data4.map((d, index) => (
                            <div
                              key={"reviewcard" + index}
                              className="flex w-full flex-col items-start gap-6 rounded-[10px] bg-gray-100_01 p-10 sm:p-5"
                            >
                              <div className="flex items-center justify-between gap-5 self-stretch">
                                <div className="flex flex-col items-start">
                                  <Text as="p" className="!font-medium !text-blue_gray-900">
                                    {d.name}
                                  </Text>
                                  <Text size="xs" as="p" className="!font-normal !text-gray-700">
                                    produce-ui.com
                                  </Text>
                                </div>
                                <div className="flex gap-2">
                                  <Button color="gray_300" variant="outline" shape="round" className="w-[44px]">
                                    <Img src="img_link.svg" width={44} height={44} />
                                  </Button>
                                  <Button color="gray_300" variant="outline" shape="round" className="w-[44px]">
                                    <Img src="img_facebook.svg" width={44} height={44} />
                                  </Button>
                                  <Button color="gray_300" variant="outline" shape="round" className="w-[44px]">
                                    <Img src="img_trash.svg" width={44} height={44} />
                                  </Button>
                                </div>
                              </div>
                              <RatingBar
                                value={5}
                                isEditable={true}
                                color="#5600ff"
                                activeColor="#5600ff"
                                size={20}
                                className="flex justify-between rounded-[1px]"
                              />
                              <Text as="p" className="mb-6 leading-[150%]">
                                {d.paragraph}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>

            {/* faq section */}
            <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="flex flex-col items-center gap-0.5 px-[7px] pt-[7px]">
                <Heading size="lg" as="h1" className="text-center">
                  Frequently Asked Questions
                </Heading>
                <Text as="p" className="text-center">
                  Here are answers to some common questions
                </Text>
              </div>
              <div className="flex items-start gap-[30px] md:flex-col">
                <div className="flex-1 rounded-[10px] bg-gray-100_01 p-10 md:self-stretch sm:p-5">
                  <Accordion preExpanded={[0]} className="flex flex-col gap-6">
                    {[...Array(5)].map((_, i) => (
                      <AccordionItem uuid={i} key={`expandablelistt${i}`}>
                        <div className="flex flex-1 rounded-lg bg-gray-200 p-6 sm:p-5">
                          <div className="w-[89%] md:w-full">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {(props) => (
                                    <>
                                      <div className="flex items-start justify-between gap-5 self-end sm:flex-col">
                                        <Text size="md" as="p" className="mt-0.5 !text-blue_gray-900">
                                          Can you work with clients remotely?
                                        </Text>
                                        {props?.expanded ? (
                                          <Button
                                            color="gray_300_01"
                                            size="xs"
                                            variant="outline"
                                            shape="round"
                                            className="w-[36px] !rounded-md"
                                          >
                                            <Img src="img_close.svg" width={36} height={36} />
                                          </Button>
                                        ) : (
                                          <Button
                                            color="gray_300_01"
                                            size="xs"
                                            variant="outline"
                                            shape="round"
                                            className="mr-1 w-[36px] !rounded-md sm:mr-0"
                                          >
                                            <Img src="img_plus.svg" width={36} height={36} />
                                          </Button>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="relative mt-[-1px]">
                                <Text as="p" className="leading-[150%]">
                                  Absolutely! I have experience working with clients from all around the world. Through
                                  effective communication channels such as email, video calls, and project management
                                  tools, I ensure seamless collaboration regardless of geographical location.
                                </Text>
                              </div>
                            </AccordionItemPanel>
                          </div>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div className="flex w-[33%] flex-col items-start gap-6 rounded-[10px] bg-gray-100_01 p-10 md:w-full sm:p-5">
                  <Button size="2xl" shape="round" className="w-[54px] !rounded-md">
                    <Img src="img_signal.svg" width={54} height={54} />
                  </Button>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <Heading size="s" as="h6">
                      Still have any Questions ?
                    </Heading>
                    <Text as="p" className="leading-[150%]">
                      Let&#39;s collaborate to create an exceptional website that sets you apart from the competition.
                      Contact me today to discuss your web design needs and bring your digital vision to life!
                    </Text>
                  </div>
                  <Button size="lg" shape="round" className="min-w-[118px] !rounded-md font-medium text-gray-50_01">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* footer section */}
          <footer className="mt-[100px] flex items-end justify-center border-t border-solid border-gray-300_01 p-[18px]">
            <div className="mt-[21px] flex w-[91%] flex-col items-center gap-[21px] md:w-full">
              <div className="mx-auto flex w-full max-w-[1276px] items-center justify-between gap-5 md:flex-col md:p-5">
                <Heading size="s" as="h6" className="mb-[5px] self-end !text-deep_purple-A700">
                  Jeffery Cannon.
                </Heading>
                <ul className="flex w-[27%] flex-wrap justify-between gap-5 md:w-full">
                  <li>
                    <Link href="#">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        Home
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        About Me
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        Portfolio
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        Contact Me
                      </Text>
                    </Link>
                  </li>
                </ul>
                <div className="flex gap-3.5">
                  <Button size="sm" shape="round" className="w-[40px] !rounded-md">
                    <Img src="img_link_gray_50_01.svg" width={40} height={40} />
                  </Button>
                  <Button size="sm" shape="round" className="w-[40px] !rounded-md">
                    <Img src="img_trash_gray_50_01.svg" width={40} height={40} />
                  </Button>
                  <Button size="sm" shape="round" className="w-[40px] !rounded-md">
                    <Img src="img_globe.svg" width={40} height={40} />
                  </Button>
                </div>
              </div>
              <div className="flex gap-6 rounded-lg border border-solid border-gray-300_01 p-[22px] md:flex-col sm:p-5">
                <div className="flex gap-[5px]">
                  <Img
                    src="img_icon_deep_purple_a700.svg"
                    width={20}
                    height={20}
                    alt="icon_one"
                    className="h-[20px] w-[20px] self-start"
                  />
                  <Text as="p" className="self-end !font-medium">
                    jefferycannon@gmail.com
                  </Text>
                </div>
                <div className="h-[24px] w-px bg-gray-300_01 md:h-px md:w-[24px]" />
                <div className="flex items-center gap-1.5">
                  <Img
                    src="img_icon_deep_purple_a700_20x20.svg"
                    width={20}
                    height={20}
                    alt="icon_three"
                    className="h-[20px] w-[20px]"
                  />
                  <Text as="p" className="!font-medium">
                    +91 91813 23 2309
                  </Text>
                </div>
                <div className="h-[24px] w-px bg-gray-300_01 md:h-px md:w-[24px]" />
                <div className="flex items-center gap-1.5">
                  <Img src="img_icon_20x20.svg" width={20} height={20} alt="icon_five" className="h-[20px] w-[20px]" />
                  <Text as="p" className="!font-medium">
                    Somewhere in the World
                  </Text>
                </div>
              </div>
              <Text size="xs" as="p" className="text-center !font-normal !text-gray-600">
                Copyright © 2023 Jeffery Cannon. All rights reserved.
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
