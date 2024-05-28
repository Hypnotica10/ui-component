import { Button, Checkbox, Radio } from "./components";

function App() {
  return (
    <div className="py-12 px-5">
      <div className="mb-4">
        <h1 className="text-3xl font-medium mb-4">Button</h1>
        <div className="flex justify-center">
          <Button type="button">Click me!</Button>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-3xl font-medium mb-4">Checkbox</h1>
        <div className="flex justify-center">
          <Checkbox name="test" id="test1" text="test1" />
          <Checkbox name="test" id="test2" text="test2" />
          <Checkbox name="test" id="test3" text="test3" />
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-3xl font-medium mb-4">Radio</h1>
        <div className="flex justify-center">
          <Radio name="gender" id="male" text="male" />
          <Radio name="gender" id="female" text="female" />
        </div>
      </div>
    </div>
  );
}

export default App;
