
import './App.css';
import SideBar from './SideBar';
import ChannelBar from './ChannelBar';
import ContentContainer from './ContentContainer';
function App() {
  return (
    <div className="flex">
        <SideBar/>
        <ChannelBar/>
        <ContentContainer/>
    </div>
  );
}

export default App;
