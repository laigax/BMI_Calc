import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Calculator.css";
import Label from "../Components/Label";
import SliderInput from "../Components/SliderInput";
import Button from "../Components/Button";

function Calculator() {
  const [nameValue, setNameValue] = useState("");
  const [weightValue, setWeightValue] = useState(50);
  const [heightValue, setHeightValue] = useState(50);
  const [selectedAge, setSelectedAge] = useState(15);
  const [BMI, setBMI] = useState(null);
  const [BMIWeight, setBMIWeight] = useState(null);
  const [BMIStatement, setBMIStatement] = useState("Your BMI is considered...");
  const [BMIColor, setBMIColor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const searchImg = useRef(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [autofocus, setAutofocus] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [weightImg, setWeightImg] = useState(
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMndna2hnZnk2bHlueXhraXBqNXU2bTd0MGQ5ejBpOGY3MzA1bHMxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YhxdbIJZHVHMDmyHJp/giphy.gif"
  );
  const [imgValue, setImgValue] = useState(
    "https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps="
  );
  const [weightExpression, setWeightExpression] = useState(
    "Once we've calculated your BMI, a message and image will show, depending on if you've taken care of your body or you've just been pure lazy and fat!"
  );
  const animalFacts = [
    {
      name: "Elephant",
      weight: 4000,
      height: 280,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/An_elephant_in_Kruger_National_Park.jpg",
    },
    {
      name: "Hippo",
      weight: 3100,
      height: 150,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/800px-Portrait_Hippopotamus_in_the_water.jpg  ",
    },
    {
      name: "Rhino",
      weight: 2300,
      height: 180,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/White_Rhino_at_Working_with_Wildlife.jpg/800px-White_Rhino_at_Working_with_Wildlife.jpg",
    },
    {
      name: "Lion",
      weight: 190,
      height: 120,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
    },
    {
      name: "Tiger",
      weight: 200,
      height: 95,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/640px-P.t.altaica_Tomak_Male.jpg",
    },
    {
      name: "Lebron James",
      weight: 113,
      height: 206,
      imgSrc:
        "https://images.gmanews.tv/webpics/2024/02/2024-02-14T043045Z_190783303_MT1USATODAY22515327_RTRMADP_3_NBA-DETROIT-PISTONS-AT-LOS-ANGELES-LAKERS_2024_02_14_14_18_23.jpeg",
    },
    {
      name: "Noah Lyles",
      weight: 70,
      height: 177,
      imgSrc:
        "https://cdn.britannica.com/15/257915-050-B3391057/Noah-Lyles-gold-medal-win-Mens-Relay-World-Athletics-Championships-Budapest-2023.jpg",
    },
    {
      name: "Lamine Yamal",
      weight: 72,
      height: 180,
      imgSrc:
        "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-10/GettyImages-2181233719.jpg?itok=LHUzJFHB",
    },
  ];
  const weightExpressions = [
    {
      weight: "underweight",
      message:
        "Your BMI says you’re a featherweight champion! While it’s cool to keep things light, a few extra calories might help you level up. Think of it as upgrading from ‘fun size’ to ‘full size’—your body will thank you!",
      image: "https://media.tenor.com/3sk-x_sl5OwAAAAM/jurd.gif",
      color: "#ffaf38",
    },
    {
      image:
        "https://media.tenor.com/Ib-P17EMCnIAAAAM/push-ups-ricky-berwick.gif",
    },
    {
      image: "https://media.tenor.com/IqvHh21HvEsAAAAM/boy.gif",
    },
    {
      weight: "normal",
      message:
        "You’re right in the sweet spot—Goldilocks would be proud! Your BMI says everything is balanced, so keep doing what you’re doing. Just remember, life’s about maintaining the groove, not just finding it!",
      image:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJqcWJpM2N4dHB0dnozdW9jN2d4ZHc4Z3R2d3Vrd2IxYTVjbnF0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Ai5dIk8xvBm0/giphy.gif",
      color: "#53d368",
    },
    {
      image: "https://media.tenor.com/OG4si60HQc4AAAAM/unban.gif",
    },
    {
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWl1enJ5djJmYWxuZWp1emY5ODVvZmJrcDJqaDZoa3Y0ejF4cjk0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIhNQOjGa39Ze/giphy.gif",
    },
    {
      weight: "overweight",
      message:
        "You’re carrying a bit of bonus baggage—think of it as extra potential energy! Your BMI suggests it’s time to trim down the perks. A little extra movement and a few less snacks, and you’ll be back on track!",
      image:
        "https://i.pinimg.com/originals/bd/14/8d/bd148d65e19636197128524934cf12af.gif",
      color: "#ffaf38",
    },
    {
      image: "https://media.tenor.com/Srpb8i2OTkAAAAAM/fat-cry.gif",
    },
    {
      image:
        "https://media.tenor.com/2qYlIb47Hk0AAAAM/thelastmanonearth-funny.gif",
    },
    {
      weight: "obese",
      message:
        "Your BMI is giving you a nudge—okay, maybe a push—to prioritize health. It’s like your body’s saying, ‘Hey, we’ve got a lot going on here; let’s lighten the load!’ Small steps now can lead to big changes down the road.",
      image: "https://media.tenor.com/DjBsFDlQEPAAAAAM/fat-chicken-nuggets.gif",
      color: "#f36b6b",
    },
    {
      image: "https://media.tenor.com/zV82AvnKMxYAAAAM/will-smith.gif",
    },
    {
      image: "https://i.imgur.com/CQQf2tF.gif",
    },
    {
      weight: "very obese",
      message:
        "Your BMI is sending a serious memo: health is calling, and it’s urgent! It’s time to take charge, because you deserve to feel amazing inside and out. Start small, stay consistent, and remember, every big journey begins with a single step!",
      image:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExazFlano1YXZsdG1manozOTczMGtoZXh3cGo2eHEwdzY4d3N2dDF1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B3bTtJdFIlynK/giphy.gif",
      color: "#f36b6b",
    },
    {
      image: "https://www.gotagteam.com/KTM_Days/images/Destiny.gif",
    },
    {
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWl0dW0xYXFod2k2aTJpdzBrcDVlYzkyMDY2eG85ZGduMDBiNTRtYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hmoQR9qoEStUI/giphy.gif",
    },
  ];
  const bmiCategories = [
    {
      min: 0,
      max: 16,
      color: "#f36b6b",
    },
    {
      min: 16,
      max: 17,
      color: "#f36b6b",
    },
    {
      min: 17,
      max: 18.5,
      color: "#f36b6b",
    },
    {
      min: 18.5,
      max: 20,
      color: "#53d368",
    },
    {
      min: 20,
      max: 21.5,
      color: "#53d368",
    },
    {
      min: 21.5,
      max: 23,
      color: "#53d368",
    },
    {
      min: 23,
      max: 24.5,
      color: "#53d368",
    },
    {
      min: 24.5,
      max: 25,
      color: "#53d368",
    },
    {
      min: 25,
      max: 26,
      color: "#ffaf38",
    },
    {
      min: 26,
      max: 27,
      color: "#ffaf38",
    },
    {
      min: 27,
      max: 28,
      color: "#ffaf38",
    },
    {
      min: 28,
      max: 29.9,
      color: "#ffaf38",
    },
    {
      min: 30,
      max: 32,
      color: "#f36b6b",
    },
    {
      min: 32,
      max: 34,
      color: "#f36b6b",
    },
    {
      min: 34,
      max: 36,
      color: "#f36b6b",
    },
    {
      min: 36,
      max: 38,
      color: "#f36b6b",
    },
    {
      min: 38,
      max: 40,
      color: "#f36b6b",
    },
    {
      min: 40,
      max: 100,
      color: "#f36b6b",
    },
  ];

  const profileImgSearch = () => {
    searchImg.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgValue(reader.result); // Update the image source
      };
      reader.readAsDataURL(file);
    }
  };

  const updateName = (e) => {
    setNameValue(e.target.value);
  };

  const handleSlideChange = (swiper) => {
    setSelectedAge(swiper.activeIndex + 1);
  };

  function updateHeight(e) {
    setHeightValue(e.target.value);
  }

  const updateWeight = (e) => {
    const updatedWeightValue = e.target.value;
    setWeightValue(updatedWeightValue);
  };

  const handleBMIData = (e) => {
    const CalculatedBMI = (weightValue / (heightValue * heightValue)) * 10000;
    const randomNumUnderweight = Math.floor(Math.random() * 3);
    const randomNumNormal = Math.floor(Math.random() * 3) + 3;
    const randomNumOverweight = Math.floor(Math.random() * 3) + 6;
    const randomNumObese = Math.floor(Math.random() * 3) + 9;
    const randomNumVeryObese = Math.floor(Math.random() * 3) + 12;
    const randomAnimal =
      animalFacts[Math.floor(Math.random() * animalFacts.length)];
    
    if (CalculatedBMI >= 0 && CalculatedBMI < 18.5) {
      setBMIStatement(
        "Your BMI is considered underweight (" + CalculatedBMI.toFixed(1) + ")"
      );
      setBMI(CalculatedBMI.toFixed(1));
      setWeightExpression(weightExpressions[0].message);
      setWeightImg(weightExpressions[randomNumUnderweight].image);
      setBMIWeight(weightExpressions[0].weight);
      setBMIColor(weightExpressions[0].color);
    } else if (CalculatedBMI >= 18.5 && CalculatedBMI < 25) {
      setBMIStatement(
        "Your BMI is considered normal (" + CalculatedBMI.toFixed(1) + ")"
      );
      setBMI(CalculatedBMI.toFixed(1));
      setWeightExpression(weightExpressions[3].message);
      setWeightImg(weightExpressions[randomNumNormal].image);
      setBMIWeight(weightExpressions[1].weight);
      setBMIColor(weightExpressions[1].color);
    } else if (CalculatedBMI >= 25 && CalculatedBMI < 29.9) {
      setBMIStatement(
        "Your BMI is considered overweight (" + CalculatedBMI.toFixed(1) + ")"
      );
      setBMI(CalculatedBMI.toFixed(1));
      setWeightExpression(weightExpressions[6].message);
      setWeightImg(weightExpressions[randomNumOverweight].image);
      setBMIWeight(weightExpressions[2].weight);
      setBMIColor(weightExpressions[2].color);
    } else if (CalculatedBMI >= 29.9 && CalculatedBMI < 40) {
      setBMIStatement(
        "Your BMI is considered obese (" + CalculatedBMI.toFixed(1) + ")"
      );
      setBMI(CalculatedBMI.toFixed(1));
      setWeightExpression(weightExpressions[9].message);
      setWeightImg(weightExpressions[randomNumObese].image);
      setBMIWeight(weightExpressions[3].weight);
      setBMIColor(weightExpressions[3].color);
    } else if (CalculatedBMI >= 40 && CalculatedBMI < 1000) {
      setBMIStatement(
        "Your BMI is considered very obese (" + CalculatedBMI.toFixed(1) + ")"
      );
      setBMI(CalculatedBMI.toFixed(1));
      setWeightExpression(weightExpressions[12].message);
      setWeightImg(weightExpressions[randomNumVeryObese].image);
      setBMIWeight(weightExpressions[4].weight);
      setBMIColor(weightExpressions[4].color);
    }

    setSelectedAnimal(randomAnimal);
    setModalOpen(true);
    
    if (!nameValue.trim()) {
      alert("Fill in all required areas");
      setModalOpen(false);
      setWeightExpression(
        "Once we've calculated your BMI, a message and image will show, depending on if you've taken care of your body or you've just been pure lazy and fat!"
      );
      setWeightImg(
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMndna2hnZnk2bHlueXhraXBqNXU2bTd0MGQ5ejBpOGY3MzA1bHMxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YhxdbIJZHVHMDmyHJp/giphy.gif"
      );
      setBMI(null);
      setBMIStatement("Your BMI is considered...");
    }


  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateHeight = (isActive) => {
    if (screenWidth >= 320 && screenWidth <= 500) {
      return isActive ? "70px" : "45px";
    }
    if (screenWidth >= 501 && screenWidth <= 700) {
      return isActive ? "80px" : "55px";
    }
    if (screenWidth >= 701 && screenWidth <= 900) {
      return isActive ? "90px" : "60px";
    }
    if (screenWidth >= 901 && screenWidth <= 1100) {
      return isActive ? "80px" : "50px";
    }
    if (screenWidth >= 1101 && screenWidth <= 1350) {
      return isActive ? "90px" : "55px";
    }
    if (screenWidth >= 1351 && screenWidth <= 1700) {
      return isActive ? "105px" : "60px";
    }
    return isActive ? "140px" : "105px"; // Large screens
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main">
      <div className="calculator">
        <div className="calculator__content">
          <div className="profile">
            <div className="profile__img-container">
              <img
                onClick={profileImgSearch}
                className="person__img"
                src={imgValue}
                alt={imgValue}
              />
              <input
                type="file"
                accept="image/*"
                ref={searchImg}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <input
              className="profile__input profile__input--name"
              value={nameValue}
              onChange={updateName}
              type="text"
              placeholder="Enter name..."
              maxLength={17}
              required
              autoFocus={autofocus}
            />
            <div className="profile__input-container">
              <label className="profile__input-gender-label">
                <input
                  className="profile__input--gender"
                  type="radio"
                  name="group"
                  value="Male"
                  checked={true}
                />
                Male
              </label>
              <label className="profile__input-gender-label">
                <input
                  className="profile__input--gender"
                  type="radio"
                  name="group"
                  value="Female"
                />
                Female
              </label>
            </div>
          </div>
          <div className="calculator__info">
            <Label name="Age" />
            <div className="calculator__info-container calculator__info-container--age">
              <Swiper
                slidesPerView={7}
                centeredSlides={true}
                spaceBetween={3}
                onSlideChange={handleSlideChange}
                initialSlide={selectedAge - 1} // Set initial slide
                style={{
                  width: "90%",
                  height: "90px",
                  margin: "auto",
                  cursor: "grab",
                }}
              >
                {[...Array(100).keys()].map((age) => (
                  <SwiperSlide key={age}>
                    <p className="calculator__age-slide">{age + 1}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>{" "}
            <Label name="Height (cm)" />
            <div className="calculator__info-container calculator__info-container--height">
              <div className="calculator__data">
                <SliderInput
                  min={50}
                  max={250}
                  value={heightValue}
                  onChange={updateHeight}
                />
                <input
                  type="number"
                  min={50}
                  max={250}
                  className="calculator__data-value "
                  value={heightValue}
                  onChange={updateHeight}
                />
              </div>
            </div>
            <Label name="Weight (kg)" />
            <div className="calculator__info-container calculator__info-container--weight">
              <div className="calculator__data">
                <SliderInput
                  min={50}
                  max={250}
                  value={weightValue}
                  onChange={updateWeight}
                />
                <input
                  type="number"
                  min={50}
                  max={250}
                  className="calculator__data-value "
                  value={weightValue}
                  onChange={updateWeight}
                />
              </div>
            </div>
            <Button onClick={handleBMIData} value="Calculate" />
          </div>
        </div>
      </div>
      <div className="gauge-chart">
        <div className="gauge-chart__content">
          <h1 className="bmi">{BMIStatement}</h1>
          <div className="bmi__content">
            <div className="scale__content">
              {bmiCategories.map((category, index) => {
                const isActive = BMI >= category.min && BMI < category.max;
                const isBelowLowest = index === 0 && BMI < category.min;
                const isAboveHighest =
                  index === bmiCategories.length - 1 && BMI >= category.max;
                return (
                  <div
                    key={index}
                    className="scale"
                    style={{
                      height: calculateHeight(
                        isActive || isBelowLowest || isAboveHighest
                      ),
                      backgroundColor: category.color,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="weight-expression">
            <div className="weight-expression__content">
              <p className="expression">{weightExpression}</p>
              <div className="expression-img__content">
                <img
                  style={{
                    objectFit:
                      weightImg ===
                      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMndna2hnZnk2bHlueXhraXBqNXU2bTd0MGQ5ejBpOGY3MzA1bHMxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YhxdbIJZHVHMDmyHJp/giphy.gif"
                        ? "contain"
                        : "cover  ",
                  }}
                  className="expression-img"
                  src={weightImg}
                  alt={weightImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && selectedAnimal && (
        <div>
          <div onClick={closeModal} className="overlay"></div>
          <div className="animal-modal">
            <div className="animal-modal__content">
              <div className="animal-stats__info-container">
                <div className="animal-stats__content">
                  <div className="stats__content">
                    <p className="animal-stats__name">{selectedAnimal.name}</p>
                    <li className="animal-stats__height animal-stats__data-value">
                      Height:{" "}
                      <span class="animal-stat">{selectedAnimal.height}cm</span>
                    </li>
                    <li className="animal-stats__weight animal-stats__data-value">
                      Weight:{" "}
                      <span class="animal-stat">{selectedAnimal.weight}kg</span>
                    </li>
                  </div>
                  <div className="stats__content">
                    <p className="animal-stats__user-name">{nameValue}</p>
                    <li className="animal-user-height animal-stats__data-value">
                      Height:{" "}
                      <span class="user-stat">
                        {heightValue}cm (
                        {heightValue > selectedAnimal.height
                          ? "You're taller 👍"
                          : "You're a midget 🤏"}
                        )
                      </span>
                    </li>
                    <li className="animal-stats__user-weight animal-stats__data-value">
                      Weight:{" "}
                      <span class="user-stat">
                        {weightValue}kg (
                        {weightValue > selectedAnimal.weight
                          ? "You're fatter 😂"
                          : "You're lighter 😅"}
                        )
                      </span>
                    </li>
                  </div>
                </div>
                <div className="animal-stats__img-container">
                  <img
                    className="animal-stats__img"
                    src={selectedAnimal.imgSrc}
                    alt={selectedAnimal.imgSrc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
