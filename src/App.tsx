import { Button, Checkbox, Radio, SocialButton, Tabs } from "./components";

const tabData = [
  {
    id: "tab1",
    title: "Tab 1",
    content:
      "Content for Tab 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ut, mollitia deserunt deleniti distinctio saepe, aperiam laborum cupiditate adipisci laudantium fuga aspernatur eaque! Quo ea enim soluta ratione sed autem.",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content:
      "Content for Tab 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ut, mollitia deserunt deleniti distinctio saepe, aperiam laborum cupiditate adipisci laudantium fuga aspernatur eaque! Quo ea enim soluta ratione sed autem.",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content:
      "Content for Tab 3: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ut, mollitia deserunt deleniti distinctio saepe, aperiam laborum cupiditate adipisci laudantium fuga aspernatur eaque! Quo ea enim soluta ratione sed autem.",
  },
];

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
      <div className="mb-4">
        <h1 className="text-3xl font-medium mb-4">Social Button</h1>
        <div className="flex justify-center">
          <SocialButton />
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-3xl font-medium mb-4">Tab</h1>
        <div className="flex justify-center">
          <div className="border-2 rounded-md w-1/2">
            <Tabs>
              <Tabs.TabTitle
                tabsTitle={tabData.map(({ id, title }) => ({ id, title }))}
              ></Tabs.TabTitle>
              <Tabs.TabPanel
                tabsContent={tabData.map(({ id, content }) => ({
                  id,
                  content: <p>{content}</p>,
                }))}
              ></Tabs.TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
