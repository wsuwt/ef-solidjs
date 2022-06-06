import { createSignal, onMount, For } from 'solid-js';

import '@refinitiv-ui/elements/icon';
import '@refinitiv-ui/elements/icon/themes/halo/light';
import '@refinitiv-ui/halo-theme/light/imports/native-elements';

function App() {
  const [icons, setIcons] = createSignal([]);

  onMount(async() => {
    const res = await fetch(`https://cdn.refinitiv.com/public/libs/elf/info.json`);
    const json = await res.json();
    setIcons(json.halo.icon)
  })

  return (
    <main>
      <For each={icons()} fallback={<p>Loading...</p>}>
        {(icon) => <ef-icon icon={icon.name} alt={icon.name}></ef-icon>}
      </For>
    </main>
  );
}

export default App;
