import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
  
<Navbar title="TEXTUTILS" aboutText ="About TextUtils"/>
<div className="container">
<TextForm heading="Enter text to Analyze below"/>
</div>
  </>
  );
}

export default App;
