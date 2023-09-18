import React from "react";

export default function Testing(){
    return (
        <form method="POST" class="form">
            <div class="bg-container">
                {/* <h1 class="title">{{ test.title }}</h1> */}
            </div>
            {/* {% for question in test.questions %}
                <div class="bg-container">
                    <h3>{{ question.text }}</h3>
                    {% for option in question.options %}
                        <label>
                        <input type="checkbox" name="{{ option.id }}" id="option.id" value="{{ option.text }}">
                        <span>{{ option.text }}</span>
                        </label>
                    {% endfor %}
                </div>
            {% endfor %} */}

            <div class="bg-container">
                <button type="submit" class="btn">Аяқтау</button>
                {/* <span>Баллы: {{ score }}</span> */}
            </div>
        </form>
    );
}