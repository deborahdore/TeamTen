let eventsIndex = 0;
let mock = [
    {
        title: "Monitor pollution levels",
        content: "As the pollution levels in our city are highly increasing, our health is at danger. The civilians would like to see a heatmap of air quality arround the city at a given time.",
        task: "Carry an air-quality sensor on your mean of transport",
        volunteers: 23,
        available: 30,
    },
    {
        title: "Cleaning week",
        content: "Because we all want a cleaner and pollution-free city, we will organize the 'Cleaning Week'. If you are eager to help your city, you can be a volunteer and manage your own team.",
        task: "Manage and motivate you team of volunteers",
        volunteers: 245,
        available: 400,
    },
]

const initialize = () => {
    $("#problems-back-button").click(function () {
        window.location.href = "register_volunteer.html";
    });

    $("#input-src").keyup((event) => {
        let toggleMonitor = $("#togglecollapse0");
        let toggleCleaning = $("#togglecollapse1");

        if (toggleMonitor.text().toLowerCase().includes(event.target.value)) {
            toggleCleaning.hide();
        } else if (toggleCleaning.text().toLowerCase().includes(event.target.value)) {
            toggleMonitor.hide();
        } else {
            toggleCleaning.hide();
            toggleMonitor.hide();
        }

        if (event.target.value === "") {
            toggleCleaning.show();
            toggleMonitor.show();
        }
    });

    mock.forEach((element) => {
        let card = createEventCard(element.title, element.content, element.task, element.volunteers, element.available);
        let btn = createVolunteerBtn(card, eventsIndex);
        card.append(btn);

        let toggle = createCollapsableToggle(element.title, `collapse${eventsIndex}`);

        $("#event-list").append(toggle);
        $("#event-list").append(card);

        eventsIndex++;
    })
}

const createCollapsableToggle = (title, collapsableId) => {
    let toggle = `<button id=toggle${collapsableId} class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#${collapsableId}" aria-expanded="false">
    ${title}
  </button>`

    return toggle;
}

const createCollapsableElem = () => {
    let coll = `<div class="collapse" id="collapse${eventsIndex}"></div>`

    return coll;
}

const createVolunteerBtn = (card, index) => {
    let btn = $(`<button type="button" class="btn btn-primary" id=${index}>volunteer</button>`)
    btn.click((event) => {
        let label = $(btn).text();
        if (label === "volunteer") {
            mock[event.target.id].volunteers++;
            $(btn).text("cancel");
        } else {
            mock[event.target.id].volunteers--;
            $(btn).text("volunteer");
        }

        card.find("label").text(mock[event.target.id].volunteers)
    });

    return btn;
}

const createEventCard = (title, content, task, volunteers, available) => {
    let card = $(`<div class="collapse" id="collapse${eventsIndex}">\
    <div class="card" id=${eventsIndex}>\
            <div class="card-body">
                <p>${content}</p>
                <p>What you have to do?</p>
                <p>${task}</p>
            </div>\
        <div class="card-footer">
            status:
            <label>${volunteers}</label> / ${available} volunteers
        </div>\
    </div>\
    </div>`)
    return card;
}

$(document).ready(initialize);
