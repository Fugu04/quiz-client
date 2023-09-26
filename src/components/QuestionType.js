import React, { useState } from "react";

export default function QuestionType(){
  const [count, setCount] = useState(0);
  function oneAnswer () {
    setCount(count + 1);
    console.log(count);

    }
    return (  
          <sidbar className="flex flex-col items-start col-start-1 col-end-2 gap-2 sticky">
              <button className="border w-full text-start py-1 px-10 hover:translate-x-2" type="button" onClick={oneAnswer} >Жалғыз сұрақты</button>
              <button className="border w-full text-start py-1 px-10" onClick={oneAnswer}>Көп сұрақты</button>
              <button className="border w-full text-start py-1 px-10" type="button" onclick="addOption(2)">Ақиқат/Жалған</button>
              <button className="border w-full text-start py-1 px-10" type="button" onclick="">Ретін табу</button>
              <button class="btn" onClick={oneAnswer}>{count}</button>
          </sidbar>

    );
}