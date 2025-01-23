import React, { useEffect, useState } from "react";
import { menuCards, navData } from "../data/navData";
import { motion, AnimatePresence } from "motion/react";
import SocialIcon from "./SocialIcon";
import MenuCard from "./MenuCard";

const StartSvg = React.memo(() => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3235 24L8.57349 15.75L0.323486 12L8.57349 8.25L12.3235 0L16.0735 8.25L24.3235 12L16.0735 15.75L12.3235 24Z"
        fill="white"
      />
    </svg>
  );
});

const MenuSvg = React.memo(() => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 12C0.533333 12 0.354167 11.9292 0.2125 11.7875C0.0708334 11.6458 0 11.4667 0 11.25C0 11.0333 0.0708334 10.8542 0.2125 10.7125C0.354167 10.5708 0.533333 10.5 0.75 10.5H17.25C17.4667 10.5 17.6458 10.5708 17.7875 10.7125C17.9292 10.8542 18 11.0333 18 11.25C18 11.4667 17.9292 11.6458 17.7875 11.7875C17.6458 11.9292 17.4667 12 17.25 12H0.75ZM0.75 6.75C0.533333 6.75 0.354167 6.67917 0.2125 6.5375C0.0708334 6.39583 0 6.21667 0 6C0 5.78333 0.0708334 5.60417 0.2125 5.4625C0.354167 5.32083 0.533333 5.25 0.75 5.25H17.25C17.4667 5.25 17.6458 5.32083 17.7875 5.4625C17.9292 5.60417 18 5.78333 18 6C18 6.21667 17.9292 6.39583 17.7875 6.5375C17.6458 6.67917 17.4667 6.75 17.25 6.75H0.75ZM0.75 1.5C0.533333 1.5 0.354167 1.42917 0.2125 1.2875C0.0708334 1.14583 0 0.966667 0 0.75C0 0.533333 0.0708334 0.354167 0.2125 0.2125C0.354167 0.0708334 0.533333 0 0.75 0H17.25C17.4667 0 17.6458 0.0708334 17.7875 0.2125C17.9292 0.354167 18 0.533333 18 0.75C18 0.966667 17.9292 1.14583 17.7875 1.2875C17.6458 1.42917 17.4667 1.5 17.25 1.5H0.75Z"
        fill="#353542"
      />
    </svg>
  );
});

const FbSvg = React.memo(() => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1255 9.56277C18.1255 4.55632 14.0692 0.5 9.06277 0.5C4.05632 0.5 0 4.55632 0 9.56277C0 14.0861 3.31412 17.8355 7.64671 18.5159V12.1826H5.34448V9.56277H7.64671V7.56604C7.64671 5.29486 8.99882 4.04033 11.0697 4.04033C12.0615 4.04033 13.0986 4.2172 13.0986 4.2172V6.44635H11.9555C10.83 6.44635 10.4788 7.14506 10.4788 7.86167V9.56277H12.9923L12.5903 12.1826H10.4788V18.5159C14.8114 17.8355 18.1255 14.0861 18.1255 9.56277Z"
        fill="#D87023"
      />
    </svg>
  );
});

const XSvg = React.memo(() => {
  return (
    <svg
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0697 4.5482C18.0824 4.72586 18.0824 4.90355 18.0824 5.08121C18.0824 10.5 13.958 16.7436 6.41995 16.7436C4.0976 16.7436 1.94026 16.071 0.125534 14.9036C0.455495 14.9416 0.772722 14.9543 1.11538 14.9543C3.03159 14.9543 4.79557 14.3071 6.20421 13.203C4.40217 13.165 2.89202 11.9848 2.37171 10.3604C2.62553 10.3984 2.87932 10.4238 3.14585 10.4238C3.51385 10.4238 3.8819 10.373 4.22452 10.2843C2.34635 9.90351 0.937683 8.25379 0.937683 6.26141V6.21066C1.48335 6.51523 2.11792 6.70559 2.79046 6.73094C1.68639 5.99488 0.963073 4.73855 0.963073 3.31723C0.963073 2.55582 1.16608 1.85785 1.52143 1.24871C3.53921 3.73602 6.57221 5.36035 9.97319 5.53805C9.90975 5.23348 9.87167 4.91625 9.87167 4.59898C9.87167 2.34008 11.6991 0.5 13.9707 0.5C15.1508 0.5 16.2168 0.994922 16.9656 1.79441C17.8919 1.61676 18.7803 1.2741 19.5671 0.80457C19.2625 1.75637 18.6153 2.55586 17.7651 3.06344C18.5899 2.97465 19.3894 2.74617 20.1255 2.42895C19.5672 3.24109 18.8692 3.96441 18.0697 4.5482Z"
        fill="#D87023"
      />
    </svg>
  );
});
const ISvg = React.memo(() => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.88229 4.76465C6.39792 4.76465 4.39401 6.76855 4.39401 9.25293C4.39401 11.7373 6.39792 13.7412 8.88229 13.7412C11.3667 13.7412 13.3706 11.7373 13.3706 9.25293C13.3706 6.76855 11.3667 4.76465 8.88229 4.76465ZM8.88229 12.1709C7.27682 12.1709 5.96432 10.8623 5.96432 9.25293C5.96432 7.64355 7.27292 6.33496 8.88229 6.33496C10.4917 6.33496 11.8003 7.64355 11.8003 9.25293C11.8003 10.8623 10.4878 12.1709 8.88229 12.1709ZM14.601 4.58105C14.601 5.16309 14.1323 5.62793 13.5542 5.62793C12.9721 5.62793 12.5073 5.15918 12.5073 4.58105C12.5073 4.00293 12.976 3.53418 13.5542 3.53418C14.1323 3.53418 14.601 4.00293 14.601 4.58105ZM17.5737 5.64355C17.5073 4.24121 17.187 2.99902 16.1596 1.97559C15.1362 0.952148 13.894 0.631836 12.4917 0.561523C11.0464 0.479492 6.71432 0.479492 5.26901 0.561523C3.87058 0.62793 2.62839 0.948242 1.60104 1.97168C0.5737 2.99512 0.257294 4.2373 0.186981 5.63965C0.10495 7.08496 0.10495 11.417 0.186981 12.8623C0.253387 14.2646 0.5737 15.5068 1.60104 16.5303C2.62839 17.5537 3.86667 17.874 5.26901 17.9443C6.71432 18.0264 11.0464 18.0264 12.4917 17.9443C13.894 17.8779 15.1362 17.5576 16.1596 16.5303C17.1831 15.5068 17.5034 14.2646 17.5737 12.8623C17.6557 11.417 17.6557 7.08887 17.5737 5.64355ZM15.7065 14.4131C15.4018 15.1787 14.812 15.7686 14.0425 16.0771C12.8901 16.5342 10.1557 16.4287 8.88229 16.4287C7.60886 16.4287 4.87057 16.5303 3.72214 16.0771C2.95651 15.7725 2.36667 15.1826 2.05808 14.4131C1.60104 13.2607 1.70651 10.5264 1.70651 9.25293C1.70651 7.97949 1.60495 5.24121 2.05808 4.09277C2.36276 3.32715 2.95261 2.7373 3.72214 2.42871C4.87448 1.97168 7.60886 2.07715 8.88229 2.07715C10.1557 2.07715 12.894 1.97559 14.0425 2.42871C14.8081 2.7334 15.3979 3.32324 15.7065 4.09277C16.1635 5.24512 16.0581 7.97949 16.0581 9.25293C16.0581 10.5264 16.1635 13.2646 15.7065 14.4131Z"
        fill="#D87023"
      />
    </svg>
  );
});

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("Asap!");
  const [svgVisible, setSvgVisible] = useState(true);
  const texts = ["Asap!", "kia Kia!", "Now!"];
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setSvgVisible(false);
      setTimeout(() => {
        setDisplayText((prev) => {
          const currentIndex = texts.indexOf(prev);
          return texts[(currentIndex + 1) % texts.length];
        });
        setSvgVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(menuCards.length / cardsToShow)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [menuCards.length]);

  const displayedCards = menuCards.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <motion.div className="flex flex-col sm:flex-row flex-wrap container mx-auto p-4">
      <div className="w-[238px] flex-none mt-[10px] hidden sm:block">
        <nav className="flex flex-col gap-3 ">
          <img src="/Logo.png" alt="logo" className="h-[56px] w-[68px]" />
          {navData.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="py-2 flex items-center gap-5 text-[18px] font-[500] leading-[17px] cursor-pointer"
            >
              <div
                className={`h-[32px] w-[3px] ${
                  window.location.pathname === item.path
                    ? "bg-[#D87023]"
                    : "bg-transparent"
                }`}
              ></div>
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 items-center my-5 ">
            <SocialIcon icon={<FbSvg />} />
            <SocialIcon icon={<XSvg />} />
            <SocialIcon icon={<ISvg />} />
          </div>
        </nav>
      </div>
      <nav className="sm:hidden flex items-center justify-between w-full">
        <img src="/Logo.png" alt="logo" className="h-[56px] w-[68px]" />
        <div className="flex items-center gap-4 ">
          <button className="bg-[#D87023] text-white rounded-[32px] px-10 py-5 border-[2px] border-white font-[700] text-[12px] leading-[18px]">
            JOIN WAITLIST
          </button>
          <MenuSvg />
        </div>
      </nav>
      <div
        className="flex-1 bg-[#0E0E0E] rounded-[24px] mt-[10px] flex items-center justify-center min-h-screen relative p-2 overflow-hidden"
        style={{
          backgroundImage: "url('/bgHero.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-[10rem]">
          <motion.span
            className="text-[#FFFFFF] text-[15px] font-[400] leading-[24px] flex items-center mx-auto gap-5"
            style={{ maxWidth: "90vw" }}
            animate={{ x: ["-100px", "200px", "-100px"] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <StartSvg />
            Join the chow africa waitlist
            <StartSvg />
          </motion.span>
          <h4 className="text-white font-[500] text-[2.5rem] sm:text-[5.6rem] text-center sm:text-start ">
            Find chow,{" "}
            <motion.span className="relative text-[#009F79]">
              <motion.span
                key={displayText}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="transition-all"
                style={{ fontFamily: "Courgette" }}
              >
                {displayText}
              </motion.span>
              <motion.span
                className="absolute left-0 bottom-0"
                initial={{ width: 0 }}
                animate={
                  svgVisible
                    ? { width: "100%", scaleX: 1 }
                    : { width: 0, scaleX: 0 }
                }
                transition={{ duration: 1 }}
              >
                <motion.svg
                  initial={{ scaleX: 0 }}
                  animate={svgVisible ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1 }}
                  width="100%"
                  height="12"
                  viewBox="0 0 268 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.00003C91.3333 4.83337 270.5 -0.999968 264.5 9.00003"
                    stroke="#D87023"
                    strokeWidth="6"
                  />
                </motion.svg>
              </motion.span>
            </motion.span>
          </h4>
          <motion.div
            animate={isInputFocused ? {} : { x: ["-100px", "200px", "-100px"] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <p className="text-center max-w-[543px] text-[#FFFFFF] text-[1.25rem] font-[400] leading-[30px] my-5">
              The patient dog eats left overs. Be the first to know when we
              launch. Join our Waitlist 😎
            </p>
            <span className="flex flex-col sm:flex-row items-center gap-3 mb-[19rem]">
              <input
                type="email"
                placeholder="Enter your rmail"
                className="rounded-[12px] p-3 text-[1rem] w-[327px] outline-none"
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
              <button className="bg-[#009F79] text-white border-[2px] border-white rounded-[56px] py-3 px-10">
                JOIN WAITLIST
              </button>
            </span>
          </motion.div>
        </div>

        <img
          src="/ellpse.png"
          alt="logo"
          className="h-[368px] w-[368px] absolute left-0 bottom-0 hidden sm:block"
        />
        <div className="absolute bottom-[30px] left-0 flex gap-8">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              animate={{ x: ["-200px", "200px", "-200px"] }}
              transition={{ duration: 10 }}
              className="flex gap-8"
            >
              {displayedCards.map((card, index) => (
                <MenuCard
                  key={index}
                  title={card.title}
                  image={card.image}
                  category={card.category}
                  likes={card.likes}
                  price={card.price}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <img
          src="/span.png"
          alt="logo"
          className="h-[409px] w-[253px] absolute right-[10%] bottom-0 hidden sm:block"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
