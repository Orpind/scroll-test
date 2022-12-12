import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cls from "classnames";
import { isDesktop } from "react-device-detect";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h3>Header</h3>
      </header>
      <aside className="aside">
        <h3>Aside</h3>
      </aside>
      <main className={cls("main", { "main--desktop": isDesktop })}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dolore tempore obcaecati, quasi quos pariatur magni saepe, voluptate
          corrupti harum earum asperiores aspernatur ut nam consequatur
          reprehenderit! Tempore quibusdam neque, doloribus maiores fugit
          aperiam ullam molestiae placeat, voluptate eos vel magni nostrum natus
          sint molestias eius deleniti et? Fuga fugiat reiciendis atque ut
          laborum nisi aliquam totam consequuntur odio! Eum recusandae officiis
          assumenda atque vero, eveniet soluta placeat, tempore facilis quia
          nobis sunt delectus animi! Alias modi recusandae rem? Alias qui
          beatae, facere amet mollitia illum, eius temporibus, est quas saepe
          repellat. Nesciunt, reiciendis? Neque adipisci sequi praesentium
          magnam sit consequatur eum, quisquam, omnis, facilis doloribus
          distinctio architecto delectus illum consequuntur voluptatibus quaerat
          atque facere molestiae? Necessitatibus atque quod ab inventore minima
          ea laborum beatae corporis maxime sit praesentium rerum cumque
          pariatur voluptas voluptate deserunt labore rem architecto quae ipsa
          modi officiis, corrupti fugiat harum. Beatae maiores laboriosam dolor
          impedit ipsam asperiores perferendis et labore corporis nostrum. Ut
          corrupti itaque dolor esse in doloremque sed alias, tempora culpa
          pariatur suscipit deserunt, laudantium nam veritatis? Nesciunt ipsa
          harum quos alias enim molestiae modi delectus provident vel,
          cupiditate neque labore doloribus pariatur aspernatur ducimus. Impedit
          nisi, sint velit recusandae officiis pariatur, illo quae quia est
          natus aperiam explicabo nulla enim repellat culpa! Eveniet soluta unde
          rem consectetur error. Omnis repudiandae rerum vitae unde ratione
          beatae commodi ut delectus, odit nostrum fuga deserunt saepe optio
          tempore numquam iste quam earum sit molestiae dicta magnam accusantium
          a iusto impedit! Pariatur culpa voluptate, consectetur voluptatem
          debitis nesciunt earum et consequuntur consequatur? Odio voluptas
          delectus repellat hic dolorem ipsa, animi harum. Est inventore, quae
          laudantium omnis, quas facilis iste illo provident dolorum voluptatem
          id eius dolores impedit aspernatur quia consequatur aliquid.
          Consequuntur, mollitia sint? Beatae earum, nostrum eligendi incidunt
          repudiandae, libero nisi eum numquam similique cumque praesentium,
          dolores reiciendis aspernatur dicta nulla. Id assumenda ipsum corporis
          velit, sapiente error eius distinctio nisi temporibus porro tempora
          esse reiciendis natus aspernatur. Praesentium ratione, totam
          laudantium harum nulla fugiat doloribus autem pariatur vitae?
          Provident praesentium enim consequuntur dolorem odit, voluptas placeat
          nam sint doloribus quia! Est maiores ipsa assumenda earum dignissimos
          obcaecati asperiores at non! Blanditiis architecto asperiores ratione
          illum fuga necessitatibus, unde dolore praesentium earum est quia
          ducimus assumenda similique optio quis! Atque recusandae accusantium
          repudiandae possimus facilis? Quam modi voluptate, minus voluptatem
          accusamus nihil illum, saepe esse neque fuga earum sapiente quibusdam
          nostrum! Minima ullam nihil perspiciatis modi atque illum numquam nam
          neque eius soluta eveniet, et voluptate illo, praesentium dicta ipsum
          distinctio magnam fuga. Accusantium quisquam inventore porro velit
          cupiditate minus quia quasi provident dolor laboriosam illum eveniet
          natus, culpa dignissimos ex alias laudantium. Dicta natus debitis,
          illo, architecto facilis cupiditate minima necessitatibus quisquam
          error autem laborum exercitationem! Fugit molestias et natus
          temporibus dolore, impedit perspiciatis similique quaerat placeat
          alias obcaecati minus, magnam itaque ut veniam cumque. Inventore
          explicabo cupiditate illo rem natus autem doloremque fugit ullam cum
          at libero, officia perferendis deserunt magnam tempora quidem dolorum
          veniam voluptates. Exercitationem quibusdam excepturi sed itaque
          officiis provident.
        </p>
      </main>
    </div>
  );
}

export default App;
