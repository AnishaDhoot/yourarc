"use client";
import { useState } from "react";

const questions = [
    {
      question: "What is the capital of Bangladesh?",
      options: ["Chittagong", "Dhaka", "Khulna", "Sylhet"],
      answer: "Dhaka",
    },
    {
      question: "Which country is home to the Sundarbans, the world's largest mangrove forest?",
      options: ["India", "Bangladesh", "Sri Lanka", "Myanmar"],
      answer: "Bangladesh",
    },
    {
      question: "Which beach in Bangladesh is considered the world's longest natural sea beach?",
      options: ["Saint Martin's Island", "Cox’s Bazar", "Patenga Beach", "Kuakata"],
      answer: "Cox’s Bazar",
    },
    {
      question: "Which country is the second-largest exporter of ready-made garments after China?",
      options: ["India", "Bangladesh", "Pakistan", "Vietnam"],
      answer: "Bangladesh",
    },
    {
      question: "The Royal Bengal Tiger is found in which forest shared by India and Bangladesh?",
      options: ["Western Ghats", "Sundarbans", "Kaziranga", "Jim Corbett"],
      answer: "Sundarbans",
    },
    {
      question: "What is the capital of Sri Lanka?",
      options: ["Colombo", "Kandy", "Galle", "Sri Jayawardenepura Kotte"],
      answer: "Sri Jayawardenepura Kotte",
    },
    {
      question: "Which ancient rock fortress in Sri Lanka is a UNESCO World Heritage Site?",
      options: ["Galle Fort", "Sigiriya", "Adam's Peak", "Dambulla Temple"],
      answer: "Sigiriya",
    },
    {
      question: "Where is the Temple of the Tooth located in Sri Lanka?",
      options: ["Colombo", "Anuradhapura", "Kandy", "Polonnaruwa"],
      answer: "Kandy",
    },
    {
      question: "Which Sri Lankan national park is known for its leopards?",
      options: ["Horton Plains", "Yala National Park", "Wilpattu", "Minneriya"],
      answer: "Yala National Park",
    },
    {
      question: "Who was the world's first female Prime Minister?",
      options: ["Indira Gandhi", "Golda Meir", "Sirimavo Bandaranaike", "Margaret Thatcher"],
      answer: "Sirimavo Bandaranaike",
    },
    {
      question: "What is the capital of Nepal?",
      options: ["Pokhara", "Kathmandu", "Lalitpur", "Bhaktapur"],
      answer: "Kathmandu",
    },
    {
      question: "Mount Everest is located in which country?",
      options: ["India", "Nepal", "China", "Bhutan"],
      answer: "Nepal",
    },
    {
      question: "Lumbini, the birthplace of Lord Buddha, is situated in which country?",
      options: ["India", "Nepal", "Sri Lanka", "Bangladesh"],
      answer: "Nepal",
    },
    {
      question: "Which lake is the largest in Nepal?",
      options: ["Phewa", "Rara", "Gosaikunda", "Tilicho"],
      answer: "Rara",
    },
    {
      question: "Who is regarded as the founder of modern Nepal?",
      options: ["King Tribhuwan", "B. P. Koirala", "Prithvi Narayan Shah", "King Mahendra"],
      answer: "Prithvi Narayan Shah",
    },
    {
      question: "What is the capital of Bhutan?",
      options: ["Paro", "Thimphu", "Punakha", "Phuentsholing"],
      answer: "Thimphu",
    },
    {
      question: "Which monastery in Bhutan is perched on a cliffside?",
      options: ["Punakha Dzong", "Gangtey Monastery", "Tiger’s Nest", "Tashichho Dzong"],
      answer: "Tiger’s Nest",
    },
    {
      question: "Bhutan uses what index to measure progress?",
      options: ["GDP", "HDI", "GNH", "Freedom Index"],
      answer: "GNH",
    },
    {
      question: "Which mountain pass in Bhutan has 108 memorial chortens?",
      options: ["Chele La", "Dochula", "Pele La", "Thrumshing La"],
      answer: "Dochula",
    },
    {
      question: "Who is the current King of Bhutan?",
      options: [
        "Jigme Dorji Wangchuck",
        "Jigme Singye Wangchuck",
        "Jigme Khesar Namgyel Wangchuck",
        "Jigme Palden Dorji"
      ],
      answer: "Jigme Khesar Namgyel Wangchuck",
    },
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
      answer: "Islamabad",
    },
    {
      question: "Which ancient city is part of Pakistan’s Indus Valley Civilization?",
      options: ["Taxila", "Mohenjo-daro", "Larkana", "Harappa"],
      answer: "Mohenjo-daro",
    },
    {
      question: "Which famous mountainous region lies in the north of Pakistan?",
      options: ["Himalayas", "Hindu Kush", "Karakoram", "Zagros"],
      answer: "Karakoram",
    },
    {
      question: "Which Pakistani city is known for its vibrant truck art?",
      options: ["Lahore", "Multan", "Karachi", "Rawalpindi"],
      answer: "Karachi",
    },
    {
      question: "The Badshahi Mosque is located in which city?",
      options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
      answer: "Lahore",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Bangalore"],
      answer: "Delhi",
    },
    {
      question: "Which Indian site is one of the New Seven Wonders of the World?",
      options: ["Qutub Minar", "Taj Mahal", "Gateway of India", "Red Fort"],
      answer: "Taj Mahal",
    },
    {
      question: "Which state in India is famous for its backwaters?",
      options: ["Tamil Nadu", "Goa", "Kerala", "Odisha"],
      answer: "Kerala",
    },
    {
      question: "Which Indian festival celebrates the victory of light over darkness?",
      options: ["Holi", "Eid", "Diwali", "Onam"],
      answer: "Diwali",
    },
    {
      question: "Which Indian city is known as the Pink City?",
      options: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
      answer: "Jaipur",
    },
    {
      question: "What is the capital of Afghanistan?",
      options: ["Kandahar", "Herat", "Kabul", "Mazar-i-Sharif"],
      answer: "Kabul",
    },
    {
      question: "Which ancient trade route passed through Afghanistan?",
      options: ["Silk Road", "Spice Route", "Tea Horse Road", "Amber Road"],
      answer: "Silk Road",
    },
    {
      question: "What is the historic minaret in Herat called?",
      options: ["Minaret of Jam", "Qutub Minar", "Babur Minaret", "Herat Tower"],
      answer: "Minaret of Jam",
    },
    {
      question: "Which mountain range covers much of Afghanistan?",
      options: ["Andes", "Zagros", "Hindu Kush", "Ural"],
      answer: "Hindu Kush",
    },
    {
      question: "Bamiyan is famous for what destroyed statues?",
      options: ["Buddhas", "Kings", "Saints", "Tigers"],
      answer: "Buddhas",
    },
    {
      question: "What is the capital of Maldives?",
      options: ["Male", "Hulhumale", "Addu City", "Gan"],
      answer: "Male",
    },
    {
      question: "Which industry is the largest contributor to the Maldives economy?",
      options: ["Agriculture", "Fishing", "Tourism", "Shipping"],
      answer: "Tourism",
    },
    {
      question: "What type of islands make up the Maldives?",
      options: ["Volcanic", "Coral atolls", "Continental", "Rocky"],
      answer: "Coral atolls",
    },
    {
      question: "Which environmental issue is Maldives most vulnerable to?",
      options: ["Deforestation", "Floods", "Sea level rise", "Wildfires"],
      answer: "Sea level rise",
    },
    {
      question: "The Maldives is made up of how many coral islands approximately?",
      options: ["500", "1200", "300", "1500"],
      answer: "1200",
    },
    {
      question: "What is the traditional dress of Maldivian men called?",
      options: ["Sarong", "Lungi", "Feyli", "Kurta"],
      answer: "Feyli",
    },
    {
      question: "Which language is spoken in the Maldives?",
      options: ["Dhivehi", "Hindi", "Tamil", "Urdu"],
      answer: "Dhivehi",
    },
    {
      question: "Which country in South Asia is considered carbon-neutral?",
      options: ["Nepal", "Bhutan", "Maldives", "India"],
      answer: "Bhutan",
    },
  ];
  

function QuizCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#2c333f] text-white shadow-lg rounded-2xl p-8 space-y-6 w-full max-w-4xl">
      {children}
    </div>
  );
}

function QuizButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-xl transition text-base font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function QuizInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="number"
      min="1"
      max={questions.length}
      value={value}
      onChange={onChange}
      className="bg-[#1f252e] border border-gray-600 text-white px-3 py-2 rounded-xl w-32"
    />
  );
}

export default function QuizPage() {
  const [numQuestions, setNumQuestions] = useState<number>(3);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<any[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const selectedQuestions = questions.slice(0, numQuestions);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (option: string) => {
    const correct = selectedQuestions[currentQuestionIndex].answer === option;
    if (correct) setScore((prev) => prev + 1);

    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = {
        question: selectedQuestions[currentQuestionIndex].question,
        selected: option,
        correctAnswer: selectedQuestions[currentQuestionIndex].answer,
        isCorrect: correct,
      };
      return updated;
    });

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < selectedQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  };

  const isAnswered = (index: number) => selectedAnswers[index] !== undefined;

  return (
    <div className="bg-[#0f1115] text-white min-h-screen flex flex-col items-center justify-center p-4">
      {!quizStarted ? (
        <QuizCard>
          <h1 className="text-3xl font-bold text-center">Start the Quiz</h1>
          <div className="flex gap-4 justify-center items-center">
            <QuizInput
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
            />
            <QuizButton onClick={startQuiz}>Start</QuizButton>
          </div>
        </QuizCard>
      ) : showResults ? (
        <QuizCard>
          <h2 className="text-2xl font-bold text-center">Results</h2>
          <p className="text-lg text-center">
            Score: {score} / {selectedQuestions.length}
          </p>
        <div className="space-y-4">
            {selectedAnswers.map((a, i) =>
                a ? (
                <div
                    key={i}
                    className="bg-[#1f252e] p-4 rounded-xl border border-gray-700"
                >
                    <p className="font-medium">Q: {a.question}</p>
                    <p className={a.isCorrect ? "text-green-400" : "text-red-400"}>
                    Your Answer: {a.selected}
                    </p>
                    {!a.isCorrect && (
                    <p className="text-blue-400">
                        Correct Answer: {a.correctAnswer}
                    </p>
                    )}
                </div>
                ) : null
            )}
        </div>

          <div className="flex justify-center">
            <QuizButton onClick={() => setQuizStarted(false)}>Try Again</QuizButton>
          </div>
        </QuizCard>
      ) : (
        <div className="flex flex-col gap-6 w-full items-center">
          {/* Question Nav Panel */}
          <div className="bg-[#1f252e] rounded-xl p-4 shadow-md w-full max-w-4xl">
            <h3 className="text-lg font-semibold mb-2">Questions</h3>
            <div className="flex flex-wrap gap-3">
              {selectedQuestions.map((_, index) => {
                const isCurrent = index === currentQuestionIndex;
                const answered = isAnswered(index);

                let bgColor = "bg-gray-700";
                if (answered) bgColor = "bg-green-600 hover:bg-green-700";
                if (isCurrent) bgColor = "bg-blue-600";

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${bgColor} text-white`}
                  >
                    Q{index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Display */}
          <QuizCard>
            <h2 className="text-2xl font-semibold mb-2">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="text-lg mb-4">
              {selectedQuestions[currentQuestionIndex].question}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {selectedQuestions[currentQuestionIndex].options.map((opt, idx) => (
                <QuizButton key={idx} onClick={() => handleAnswer(opt)}>
                  {opt}
                </QuizButton>
              ))}
            </div>
          </QuizCard>
        </div>
      )}
    </div>
  );
}
