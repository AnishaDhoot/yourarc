import { HeaderFeedback } from "../components/header";

export default function FeedbackPage() {
    return (
        <div className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/feedbackback.png')" }}>
            <HeaderFeedback />

            <div className="bg-[#F7C7D9] h-[75%] w-[60%] mx-auto mt-8 rounded-xl flex flex-col items-center p-6">
                <h1 className="text-black font-[Kameron] text-5xl text-center p-4 pt-6">Your feedback is valuable!</h1>

                <div className="bg-[#FEF9F1] w-[80%] mt-4 rounded-lg p-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="bg-[#FEF9F1] w-full text-2xl p-2 outline-none text-black" 
                    />
                </div>

                <div className="bg-[#FEF9F1] w-[80%] mt-4 rounded-lg p-4 h-[52%]">
                    <textarea 
                        placeholder="Feedback" 
                        className="bg-[#FEF9F1] w-full h-[80%] text-2xl p-2 outline-none text-black resize-none" 
                    />
                </div>

                <button className="bg-[#6E3FA7] p-2 px-6 rounded-md mt-4 text-[#FEF9F1] text-xl font-[Kameron] hover:bg-[#47267A] transition duration-200 ease-in-out">
    Submit
</button>

            </div>
        </div>
    );
}
