import './App.css'
import ControlField from './components/ControlField/ControlField'
import FormAction from './components/FormAction/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlField></ControlField> */}
      <UnControlledField></UnControlledField>

    </>
  )
}

export default App
