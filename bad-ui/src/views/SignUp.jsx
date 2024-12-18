import { useState, useEffect } from "react";

function SignUp() {
  const [email, setEmail] = useState({ isFocused: false, value: "" });
  const [password, setPassword] = useState({ isFocused: false, value: "" });
  const [agreed, setAgreed] = useState(false);
  const [ta, setTa] = useState(false);
  const [anger, setAnger] = useState(false);

  // TIMER LOGIC
  const [time, setTime] = useState(1200);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    // Cleanup timer when time reaches 0 or component unmounts
    if (time === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true); // Activate the timer
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const angerButton = () => {
    startTimer(); // Properly start the timer
    setAnger(false); // Set `anger` back to false
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="size-96 border-black border p-5">
        <div className="relative h-14 border-blue-400 rounded-md border p-1 mb-5">
          <p
            className={`absolute left-10 px-2 bg-white text-2xl transition-all ${
              email.isFocused || email.value !== ""
                ? "-top-3 text-base translate-y-0"
                : "transform top-1/2 -translate-y-1/2"
            }`}
          >
            Email
          </p>
          <input
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
            onFocus={() => setEmail({ ...email, isFocused: true })}
            onBlur={() =>
              setEmail({
                ...email,
                isFocused: email.value === "" ? false : true,
              })
            }
            type="email"
            className="h-full w-full outline-none text-xl"
          />
        </div>
        <div className="relative h-14 border-blue-400 rounded-md border p-1 mb-5">
          <p
            className={`absolute left-10 px-2 bg-white text-2xl transition-all ${
              password.isFocused || password.value !== ""
                ? "-top-3 text-base translate-y-0"
                : "transform top-1/2 -translate-y-1/2"
            }`}
          >
            Password
          </p>
          <input
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            onFocus={() => setPassword({ ...password, isFocused: true })}
            onBlur={() =>
              setPassword({
                ...password,
                isFocused: password.value === "" ? false : true,
              })
            }
            type="password"
            className="h-full w-full outline-none text-xl"
          />
        </div>
        <button className="w-full h-14 bg-blue-400 rounded-md mb-5">
          Sign Up
        </button>
        <div className="flex items-center gap-4">
          <div
            onClick={() => setAgreed(true)}
            className="size-3 border border-zinc-500 rounded-sm cursor-pointer"
          ></div>
          <p>
            i agree to{" "}
            <span
              onClick={() => setTa(true)}
              className="underline text-blue-900 cursor-pointer"
            >
              Terms & Condition
            </span>
          </p>
        </div>
      </div>
      <div
        className={`absolute  size-60 border-black border p-3 backdrop-blur-md flex flex-col justify-between items-center text-xl transition-all ${
          agreed ? "scale-100 top-auto" : "-top-20 scale-0"
        }`}
      >
        <p>
          Heeeyyyyyy Brrrraaahhhhhh, You&apos;ve got to read the Terms &
          Agreement before i let you in maaannnnn
        </p>
        <div className="flex gap-4">
          <p className="text-3xl underline">Deal?</p>
          <button
            onClick={() => setAgreed(false)}
            className="w-32 h-10 bg-blue-400 rounded-md"
          >
            Yeah!
          </button>
        </div>
      </div>
      <div
        className={`${
          ta ? "block" : "hidden"
        } absolute w-9/12 h-[90vh] overflow-scroll border-black border p-3 backdrop-blur-md`}
      >
        <p className="mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          delectus incidunt ab soluta nihil at sint libero saepe, magnam
          provident quasi sapiente. Assumenda minima distinctio sint ad in rerum
          dolorum et nostrum repellendus earum quaerat beatae sed illo, rem
          perferendis facilis iusto consectetur corporis reprehenderit. Neque
          iusto, corrupti ducimus labore reiciendis, rerum amet ipsum tempora
          eius laborum eveniet illo consequatur dolor harum architecto itaque
          sit. Nostrum, doloribus ratione modi saepe earum delectus soluta quia
          ex dicta quam. Praesentium hic voluptatum deserunt illo minus et
          numquam facilis vitae explicabo neque aperiam reiciendis delectus
          architecto eos sapiente distinctio tempora fuga tenetur, repudiandae
          modi? Repellat, dignissimos mollitia praesentium dolor beatae harum
          sit aliquam nulla numquam facilis nihil velit, at rem odit
          voluptatibus laborum eveniet? Labore enim veniam iure recusandae quam
          saepe aspernatur perferendis ipsum! Obcaecati ipsa magnam consectetur
          repellendus possimus voluptate harum temporibus non nostrum at ipsum
          ducimus, dolorum fuga eaque vel veritatis sint necessitatibus placeat?
          Ducimus sapiente ipsum accusantium maxime animi vitae. Voluptate quod
          vel harum a, rem nam quisquam non voluptatem tenetur quos saepe at ab
          unde laboriosam laudantium maiores quidem nulla inventore. Dicta
          blanditiis debitis possimus obcaecati aperiam ab quidem deleniti
          quisquam doloremque aspernatur a molestias, veritatis error tenetur!
          Accusamus cupiditate ipsum laboriosam laudantium reiciendis. Adipisci
          officia dicta a eligendi doloribus corporis, obcaecati voluptate quasi
          consequuntur sed eius iure quod facere velit nihil quas expedita dolor
          voluptatum accusamus cum magni commodi iste asperiores! Non obcaecati
          praesentium ex, nisi totam incidunt commodi ratione odio illum autem
          quidem consequatur ea eligendi quam quia sed voluptates tempore esse
          tempora velit numquam in dolore. Cupiditate maiores accusantium unde
          quaerat ad modi corporis voluptatem eligendi ipsam, sequi veritatis
          perferendis maxime rem delectus commodi est laudantium magni magnam
          illum asperiores ratione reprehenderit fugit dolorum! Enim quae
          molestiae facilis neque perferendis praesentium reiciendis velit id
          rerum amet.
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setAnger(true)}
              className="size-3 border border-zinc-500 rounded-sm cursor-pointer"
            ></div>
            <p onClick={() => setAnger(true)}>
              i read & accept the Terms & Conditions
            </p>
          </div>
          <p className="text-3xl font-bold text-zinc-600">{formatTime(time)}</p>
        </div>
      </div>
      <div
        className={`${
          anger ? "block" : "hidden"
        } absolute bottom-1/2 translate-y-1/2 right-1/2 transform translate-x-1/2 size-80 border-black border p-3 bg-white flex flex-col justify-between items-center text-xl transition-all text-black`}
      >
        <p>
          You&apos;ve got be daaammmmnnnnn kidding me. Ain&apos;t no way you
          finished that in less than 20secs. Well, you&apos;ve got to read it
          and you have 20mins to do that and summarize it in the textbox below.
          Yeaahhhh, T for Thanks.
        </p>
        <button onClick={angerButton} className="w-full h-10 bg-blue-400">
          I will Read it
        </button>
      </div>
    </div>
  );
}

export default SignUp;
