import React from "react";

export default function CreateTest(){
    return (
      <section className=" grid grid-cols-4 gap-6">
          <sidbar className="flex flex-col items-start col-start-1 col-end-2 gap-2 sticky">
              <button className="border w-full text-start py-1 px-10 hover:translate-x-2" type="button" onclick="addOption(4)">Жалғыз сұрақты</button>
              <button className="border w-full text-start py-1 px-10"  type="button" onclick="addOption(8)">Көп сұрақты</button>
              <button className="border w-full text-start py-1 px-10" type="button" onclick="addOption(2)">Ақиқат/Жалған</button>
              <button className="border w-full text-start py-1 px-10" type="button" onclick="">Ретін табу</button>
          </sidbar>
          <div class="col-start-2 col-end-5 h-screen border border-white rounded-lg">
            <h1>Добавление вопросов</h1>
            <form method="POST">
              <input type="text" name="test-title" className="test--title" placeholder="Введите тему теста"/>
              <div id="questions-container"></div>
              <button class="btn" type="submit">Сақтау</button>
            </form>
          </div>
    </section> 
    );
}