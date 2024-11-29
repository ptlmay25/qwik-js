import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <Child />
    </>
  );
});

const Child = component$(() => {
  return (
    <>
      <div class="w-full flex flex-col h-screen justify-start items-center bg-emerald-500">
        <p class="text-center text-6xl text-red-500">Hello from Qiwk App</p>
      </div>
    </>
  );
});
