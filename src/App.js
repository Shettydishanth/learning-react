import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
  
<Navbar title="TEXTUTILS" aboutText ="About TextUtils"/>

<div className="container">
<TextForm heading="enter text to analyze"/>
</div>
  </>
  );
}

export default App;
