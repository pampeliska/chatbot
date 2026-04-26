import ChatBot from './components/ChatBot';

function App() {
   // const [message, setMessage] = useState('');

   // useEffect(() => {
   //    fetch('/api/test')
   //       .then((response) => response.json())
   //       .then((data) => setMessage(data.message));
   // }, []);

   return (
      <div className="p-4">
         <ChatBot />
      </div>
   );
}

export default App;
