import GETApi from "./EnterApi"
import PutApi from "./PutAPI";
import UpdateApi from "./UpdateAPI";
import DeleteApi from "./DeleteAPI";

function App() {
  return (

    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">NirusMan(Postman)</h1>

      <GETApi />
      <PutApi />
      <UpdateApi />
      <DeleteApi />
    </div>
  );
}

export default App;