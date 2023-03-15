import Image from "next/image";

type Props = {};

const testimonials = [
  {
    key: "fanny",
    user: {
      name: "Fanny",
      occupancy: "Developer at Google",
      image: "/images/fanny.jpg",
      stars: 5,
      content:
        "I was not really into code but after they teach me how to train my logic then I was really fall in love with code",
    },
  },
  {
    key: "angga",
    user: {
      name: "Angga",
      occupancy: "CEO at BWA Corp",
      image: "/images/angga.jpg",
      stars: 5,
      content:
        "Code is really important if we want to build a company and strike to the win",
    },
  },
  {
    key: "jully",
    user: {
      name: "Jully",
      occupancy: "QA at Facebook",
      image: "/images/beatrice.jpg",
      stars: 5,
      content:
        "My background is design and art but I do really love how to make my design working in the development phase",
    },
  },
];

function Footer({}: Props) {
  return (
    <section className="bg-[#F7F7FB]">
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col justify-center items-center mb-4">
          <h3 className="text-green uppercase font-semibold mb-2">
            success students
          </h3>
          <h2 className="text-navy font-semibold text-[30px] mb-10">
            We Really Love Laracamp
          </h2>
        </div>

        <div className="flex justify-center flex-wrap -mx-5 mb-12">
          {testimonials.map((item) => {
            const stars = [];
            for (let index = 0; index < item.user.stars; index++) {
              stars.push(
                <li className="" key={`${item.key}-${index}`}>
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7636 1.80517C14.1528 0.607465 15.8472 0.607462 16.2364 1.80517L18.7494 9.53942C18.9234 10.075 19.4226 10.4377 19.9858 10.4377H28.118C29.3774 10.4377 29.901 12.0492 28.8822 12.7894L22.303 17.5694C21.8474 17.9005 21.6567 18.4873 21.8308 19.0229L24.3438 26.7571C24.7329 27.9548 23.3621 28.9508 22.3433 28.2106L15.7641 23.4306C15.3085 23.0995 14.6915 23.0995 14.2359 23.4306L7.65673 28.2106C6.63791 28.9508 5.26708 27.9548 5.65624 26.7571L8.16925 19.0229C8.34328 18.4873 8.15263 17.9005 7.697 17.5694L1.11785 12.7894C0.0990243 12.0492 0.622631 10.4377 1.88197 10.4377H10.0142C10.5774 10.4377 11.0766 10.075 11.2506 9.53942L13.7636 1.80517Z"
                      className="fill-yellow-star"
                    />
                  </svg>
                </li>
              );
            }
            return (
              <div className="px-4 w-full xl:w-3/12 pb-4" key={item.key}>
                <div className="bg-white rounded-xl p-5 flex flex-col h-full relative pb-24">
                  <ul className="flex gap-x-2 mb-5">{stars}</ul>
                  <p className="text-grey">{item.user.content}</p>
                  <div className="absolute w-full bottom-4 flex gap-x-3">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden">
                      <Image
                        src={item.user.image}
                        layout="fill"
                        className="object-cover"
                        alt={item.key}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h6 className="text-navy font-medium text-lg">
                        {item.user.name}
                      </h6>
                      <span className="text-grey">{item.user.occupancy}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="text-center text-grey pb-12 text-base">
        &copy; Copyright 2023 Laracamp All Rights Reserved.
      </footer>
    </section>
  );
}

export default Footer;
