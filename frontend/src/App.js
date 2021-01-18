import './App.css';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';

function App() {

    return (
        <div>
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default App;
