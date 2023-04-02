import logo from "./logo.svg";
import "./App.scss";
import Card from "./Components/Card";

function App() {
	const Data = [
		{
		  id: 1,
		  title: "duplicate using map like api 1",
		 
		},
		{
		  id: 2,
		  title: "duplicate using map like api 2",
		
		},
		{
		  id: 3,
		  title: "duplicate using map like api 3",
		 
		},
		{
		  id: 4,
		  title: "duplicate using map like api 4",
		
		},
		
	  ];
  return (
    <div class="container">
      <div class="card__wrap--outer">
	

        <Card Title="duplicate using props 1" />
        <Card Title="duplicate using props 2" />
        <Card Title="duplicate using props 3" />
        <Card Title="duplicate using props 4" />


{/* duplicate using arary data like api */}
		{Data.map((Data) => (
                       <Card Title={Data.title} />

              ))}
        
       
      </div>
    </div>
  );
}

export default App;
