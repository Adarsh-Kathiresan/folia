import { Suspense, lazy, useState } from "react";

const showcaseItems = [
  {
    name: "Calculator",
    import: () => import("../components/leaf/Calculator"),
  },
  // { name: 'TodoList', import: () => import('./demos/TodoList') },
  // { name: 'CanvasDraw', import: () => import('./demos/CanvasDraw') },
];

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ActiveComponent =
    activeIndex !== null ? lazy(showcaseItems[activeIndex].import) : null;

  return (
    <div>
      <h1>Showcase</h1>
      <ul>
        {showcaseItems.map((item, i) => (
          <li key={i} onClick={() => setActiveIndex(i)}>
            {item.name}
          </li>
        ))}
      </ul>

      {ActiveComponent && (
        <Suspense fallback={<div>Loading demo...</div>}>
          <ActiveComponent />
        </Suspense>
      )}
    </div>
  );
}
