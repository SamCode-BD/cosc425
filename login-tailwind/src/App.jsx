import Form from "./components/Form"
import logo from './assets/sammy_logo.svg';

function App() {
  return (
    <div className="flex w-full h-screen">
        <div className="hidden relative lg:w-1/5 lg:flex h-full items-center justify-center">
          <div className="w-full h-1/2 absolute bottom-0 bg-maroon "/>
          <div className="w-full h-1/2 absolute top-0 bg-gold">
            <div className="flex justify-center items-center h-screen">
              <img src={logo} alt="Logo" width="200" height="200" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:w-3/5">
          <Form/>
        </div>
        <div className="hidden relative lg:w-1/5 lg:flex h-full items-center justify-center">
          <div className="w-full h-1/2 absolute bottom-0 bg-maroon "/>
          <div className="w-full h-1/2 absolute top-0 bg-gold">
            <div className="flex justify-center items-center h-screen">
              <img src={logo} alt="Logo" width="200" height="200" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
