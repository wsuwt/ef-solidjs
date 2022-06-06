import { createSignal, onMount, For } from 'solid-js';

import '@refinitiv-ui/elements/icon';
import '@refinitiv-ui/elements/button';
import '@refinitiv-ui/elements/icon/themes/halo/light';
import '@refinitiv-ui/elements/button/themes/halo/light';

import '@refinitiv-ui/halo-theme/light/imports/native-elements';

const getIconURL = (name) => `https://cdn.refinitiv.com/public/libs/elf/assets/elf-theme-halo/resources/icons/${name}.svg`

function App() {
  const [info, setInfo] = createSignal([]);
  const [icons, setIcons] = createSignal([]);
  const [icons2, setIcons2] = createSignal([]);
  const [icons3, setIcons3] = createSignal([]);
  const [icons4, setIcons4] = createSignal([]);

  onMount(async() => {
    const res = await fetch(`https://cdn.refinitiv.com/public/libs/elf/info.json`);
    const json = await res.json();
    setInfo(json.halo.icon)
  })

  const fetchIcons = async (number) => {
    switch (number) {
      case 1:
        setIcons(info);
        break;
      case 2:
        setIcons2(info);
        break;
      case 3:
        setIcons3(info);
        break;
      case 4:
        setIcons4(info);
        break;
      default:
        setIcons(info);
        setIcons2(info);
        setIcons3(info);
        setIcons4(info);
        break;
    }
  };

  return (
    <main>
      <ef-icon icon="home"></ef-icon>
      <ef-icon icon="home"></ef-icon>
      <ef-icon icon="home"></ef-icon>
      <ef-icon icon="home"></ef-icon>
      <ef-button onClick={fetchIcons}>Load all</ef-button>
      <br />
      <ef-button onClick={() => fetchIcons(1)}>Load icons</ef-button>
      <ef-button onClick={() => fetchIcons(2)}>Load icons 2</ef-button>
      <ef-button onClick={() => fetchIcons(3)}>Load icons 3</ef-button>
      <ef-button onClick={() => fetchIcons(4)}>Load icons 4</ef-button>
      <br />
      <For each={icons()} fallback={<p>Loading...</p>}>
        {(icon) => <ef-icon src={getIconURL(icon.name)} alt={icon.name}></ef-icon>}
      </For>
      <For each={icons2()} fallback={<p>Loading...</p>}>
        {(icon) => <ef-icon src={getIconURL(icon.name)} alt={icon.name}></ef-icon>}
      </For>
      <For each={icons3()} fallback={<p>Loading...</p>}>
        {(icon) => <ef-icon src={getIconURL(icon.name)} alt={icon.name}></ef-icon>}
      </For>
      <For each={icons4()} fallback={<p>Loading...</p>}>
        {(icon) => <ef-icon src={getIconURL(icon.name)} alt={icon.name}></ef-icon>}
      </For>
    </main>
  );
}

export default App;
